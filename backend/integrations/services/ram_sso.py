
import logging
import requests

from django.conf import settings

logger = logging.getLogger(__name__)


class RamError(Exception):
    def __init__(self, message, status_code=502):
        self.message = message
        self.status_code = status_code


def initiate_ram_sso(student):

    user = student.user

    # Get existing Django password hash
    if not user.has_usable_password():
        raise RamError(
            "Student does not have a usable password.",
            400
        )

    abc_password_hash = user.password

    api_url = (
        f"{settings.RAM_API_BASE_URL.rstrip('/')}/sso/initiate/"
    )

    payload = {
        "first_name": user.first_name,
        "last_name": user.last_name or "",
        "email": user.email,
        "mobile": getattr(user, "phone", "") or "",
        "grade_name": student.study_class,
        "email_verified": True,

        # Send encoded hash, not original password
        "password_hash": abc_password_hash,
    }

    headers = {
        "X-Organization-ID": settings.RAM_ORGANIZATION_ID,
        "X-Organization-Secret": settings.RAM_ORGANIZATION_SECRET,
        "Content-Type": "application/json",
    }

    try:
        response = requests.post(
            api_url,
            json=payload,
            headers=headers,
            timeout=15
        )

    except requests.exceptions.Timeout:
        logger.exception("RAM API timeout")
        raise RamError("RAM server connection timed out.")

    except requests.exceptions.ConnectionError:
        logger.exception("RAM connection error")
        raise RamError("Cannot connect to RAM server.")

    except requests.exceptions.RequestException:
        logger.exception("RAM request error")
        raise RamError("RAM API request failed.")

    try:
        body = response.json()
    except ValueError:
        raise RamError("RAM returned invalid JSON.")

    if not response.ok or not body.get("success"):
        raise RamError(
            body.get("message", "RAM SSO failed."),
            response.status_code
        )

    return body
