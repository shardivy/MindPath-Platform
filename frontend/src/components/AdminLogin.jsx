// import React, { useEffect } from "react";
// import {
//   Form,
//   Input,
//   Button,
//   Card,
//   Typography,
//   Row,
//   Col,
//   Divider,
//   ConfigProvider,
//   message,
// } from "antd";
// import {
//   MailOutlined,
//   LockOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import adminTheme from "../theme/adminTheme";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../adminSlices/authSlice";

// const { Title, Text } = Typography;

// // Pull brand colors directly from the theme so this page always stays in sync
// const { colorPrimary, colorInfo, colorBgLayout, colorTextSecondary } =
//   adminTheme.token;

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { loading, error, success, successMessage, complete_profile, user } = useSelector(
//     (state) => state.auth
//   );

//   /* ========= SUCCESS ========= */
//   useEffect(() => {
//     if (success && user) {
//       sessionStorage.removeItem("profileWarningShown");
//       message.success(successMessage);

//       // 🔑 ROLE-BASED REDIRECT (backend driven)
//       switch (user.role) {
//         case "admin":
//         case "superadmin":
//         case "employee":
//           navigate("/s-admin/dashboard");
//           break;

//         case "lead_counsellor":
//         case "counsellor":
//           navigate("/s-admin/counsellor-dashboard");
//           break;

//         case "ui_ux":
//           navigate("/s-admin/uiux-dashboard");
//           break;

//         case "basic_user":
//           navigate("/student/dashboard");
//           break;

//         case "student":
//           if (complete_profile) {
//             // 🔥 First go to program selection
//             navigate("/program-selection");
//           } else {
//             // incomplete profile
//             navigate("/student/student-profile");
//           }
//           break;

//         case "handholding":
//           navigate("/handholding/dashboard");
//           break;

//         default:
//           message.warning("No dashboard assigned for this role");
//       }
//     }
//   }, [success, successMessage, complete_profile, user, navigate]);

//   /* ========= ERROR ========= */
//   useEffect(() => {
//     if (error) {
//       message.error(error);
//     }
//   }, [error]);

//   /* ========= SUBMIT ========= */
//   const onFinish = (values, event) => {
//     if (event?.preventDefault) {
//       event.preventDefault(); // 🔥 STOP PAGE RELOAD
//     }

//     console.log("Login Payload:", values);
//     dispatch(loginUser(values));
//   };

//   return (
//     <ConfigProvider theme={adminTheme}>
//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: 16,
//           background: `linear-gradient(180deg, ${colorBgLayout} 0%, #EDEAE0 100%)`,
//         }}
//       >
//         <Card
//           bordered={false}
//           style={{
//             width: "100%",
//             maxWidth: 920,
//             borderRadius: 24,
//             overflow: "hidden",
//             background: `linear-gradient(135deg, ${colorPrimary}, ${colorInfo})`,
//             boxShadow: `0 30px 70px rgba(63, 92, 74, 0.35)`,
//           }}
//         >
//           <Row>
//             {/* ===== LEFT BRAND PANEL ===== */}

           
//             <Col
//               xs={0}
//               md={10}
//               style={{
//                 color: "#FFFFFF",
//                 padding: "70px 40px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//                 {/* <div
//                 style={{
//                   position: "absolute",
//                   right: 24,
//                   bottom: 28,
//                   fontSize: 64,
//                   animation: "soulspring-float 3.2s ease-in-out infinite",
//                   opacity: 0.9,
//                 }}
//               >
//                 🧘
//               </div> */}
//               <Title
//                 style={{
//                   color: "#FFFFFF",
//                   fontSize: 32,
//                   fontWeight: 700,
//                   marginBottom: 0,
//                 }}
//               >
//                 🌿 Welcome Back
//               </Title>

//               <Text
//                 style={{
//                   color: "#FFFFFF",
//                   fontSize: 17,
//                   fontStyle: "italic",
//                   marginTop: 16,
//                   lineHeight: 1.5,
//                   display: "block",
//                 }}
//               >
//                 "Your healing journey begins with understanding yourself."
//               </Text>

//               <Text
//                 style={{
//                   color: "rgba(255,255,255,0.85)",
//                   fontSize: 15,
//                   marginTop: 10,
//                   lineHeight: 1.6,
//                 }}
//               >
//                 Reconnect with clarity, purpose, and inner peace.
//               </Text>

//               <div style={{ marginTop: 36, paddingLeft: 4 }}>
//                 <Text style={{ color: "#D7E4D2", display: "block", marginBottom: 10, fontSize: 15 }}>
//                   ✓ Secure Sessions
//                 </Text>
//                 <Text style={{ color: "#D7E4D2", display: "block", marginBottom: 10, fontSize: 15 }}>
//                   ✓ Personalized Guidance
//                 </Text>
//                 <Text style={{ color: "#D7E4D2", display: "block", marginBottom: 10, fontSize: 15 }}>
//                   ✓ Wellness & Growth Tracking
//                 </Text>
//                 <Text style={{ color: "#D7E4D2", display: "block", fontSize: 15 }}>
//                   ✓ Expert Coaches & Therapists
//                 </Text>
//               </div>

//               {/* ===== FLOATING MEDITATION ANIMATION =====
//                   Swap this block for a real Lottie player when you have an
//                   animation file, e.g.:
//                   <Lottie animationData={meditationLottie} loop autoplay style={{ width: 120, height: 120 }} />
//                   Requires: npm install lottie-react
//               */}
             

//               <style>
//                 {`
//                   @keyframes soulspring-float {
//                     0%   { transform: translateY(0px); }
//                     50%  { transform: translateY(-14px); }
//                     100% { transform: translateY(0px); }
//                   }
//                 `}
//               </style>
//             </Col>

//             {/* ===== RIGHT FORM PANEL ===== */}
//             <Col
//               xs={24}
//               md={14}
//               style={{
//                 padding: "48px 36px",
//                 background: "rgba(255,255,255,0.95)",
//                 backdropFilter: "blur(10px)",
//                 borderRadius: "0 24px 24px 0",
//               }}
//             >
//               {/* LOGO */}
//               <div style={{ marginBottom: 20 }}>
//                 {/* <img
//                   src="/Abhinav-logo.jpg"
//                   alt="Career Counselling"
//                   style={{
//                     width: 150,
//                     height: "auto",
//                     objectFit: "contain",
//                     marginBottom: 6,
//                   }}
//                 /> */}

//                 <div
//                   style={{
//                     fontSize: 28,
//                     fontWeight: 700,
//                     color: colorPrimary,
//                   }}
//                 >
//                   TrueMindPath
//                 </div>
//               </div>

//               <Title level={3} style={{ marginBottom: 4 }}>
//                 Login
//               </Title>

//               <Text style={{ color: colorTextSecondary }}>
//                 Welcome back! Continue your journey toward growth and well-being.
//               </Text>

//               <Form
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={() => console.log("Validation Failed")}
//                 style={{ marginTop: 28 }}
//               >
//                 {/* EMAIL */}
//                 <Form.Item
//                   label="Email Address"
//                   name="email"
//                   rules={[
//                     { required: true, message: "Email is required" },
//                     { type: "email", message: "Enter a valid email" },
//                   ]}
//                 >
//                   <Input
//                     prefix={<MailOutlined />}
//                     size="large"
//                     placeholder="you@example.com"
//                     style={{ borderRadius: 12 }}
//                   />
//                 </Form.Item>

//                 {/* PASSWORD */}
//                 <Form.Item
//                   label="Password"
//                   name="password"
//                   hasFeedback
//                   rules={[
//                     { required: true, message: "Password is required" }
//                   ]}
//                 >
//                   <Input.Password
//                     prefix={<LockOutlined />}
//                     placeholder="••••••••"
//                     size="large"
//                     style={{ borderRadius: 12 }}
//                   />
//                 </Form.Item>

//                 {/* FORGOT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "flex-end",
//                     marginBottom: 20,
//                   }}
//                 >
//                   <Text
//                     style={{ cursor: "pointer", color: colorPrimary }}
//                     onClick={() => navigate("/forgotpassword")}
//                   >
//                     Forgot Password?
//                   </Text>
//                 </div>

//                 {/* SUBMIT */}
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   size="large"
//                   block
//                   loading={loading}
//                   style={{
//                     height: 55,
//                     borderRadius: 30,
//                     fontSize: 16,
//                     fontWeight: 600,
//                     // background: "#5F7A65",
//                     // borderColor: "#5F7A65",
//                   }}
//                 >
//                   Continue Journey →
//                 </Button>

//                 <Divider style={{ margin: "28px 0" }} />

//                 <Text style={{ textAlign: "center", display: "block" }}>
//                   Don’t have an account?{" "}
//                   <Text
//                     style={{
//                       cursor: "pointer",
//                       color: colorPrimary,
//                       textDecoration: "underline",
//                     }}
//                     onClick={() => navigate("/register")}
//                   >
//                     Register
//                   </Text>
//                 </Text>
//               </Form>
//             </Col>
//           </Row>
//         </Card>
//       </div>
//     </ConfigProvider>
//   );
// };

// export default AdminLogin;












import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Row,
  Col,
  Divider,
  ConfigProvider,
  message,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import adminTheme from "../theme/adminTheme";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../adminSlices/authSlice";

const { Title, Text } = Typography;

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success, successMessage, complete_profile, user } = useSelector(
    (state) => state.auth
  );

  /* ========= SUCCESS ========= */
  useEffect(() => {
    if (success && user) {
      sessionStorage.removeItem("profileWarningShown");
      message.success(successMessage);

      // 🔑 ROLE-BASED REDIRECT (backend driven)
      switch (user.role) {
        case "admin":
        case "superadmin":
        case "employee":
          navigate("/s-admin/dashboard");
          break;

        case "lead_counsellor":
        case "counsellor":
          navigate("/s-admin/counsellor-dashboard");
          break;

        case "ui_ux":
          navigate("/s-admin/uiux-dashboard");
          break;

        //  case "student":
        //   navigate("/student/student-profile");
        //   break;

        case "basic_user":
          navigate("/student/dashboard");
          break;

        // case "student":
        //   if (complete_profile) {
        //     navigate("/student/dashboard");
        //   } else {
        //     navigate("/student/student-profile");
        //   }
        //   break;

        case "student":
  if (complete_profile) {
    // 🔥 First go to program selection
    navigate("/program-selection");
  } else {
    // incomplete profile
    navigate("/student/student-profile");
  }
  break;

        case "handholding":
          navigate("/handholding/dashboard");
          break;


        default:
          message.warning("No dashboard assigned for this role");
      }
    }
  }, [success, successMessage, complete_profile, user, navigate]);

  /* ========= ERROR ========= */
  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  /* ========= SUBMIT ========= */
  const onFinish = (values, event) => {
    if (event?.preventDefault) {
      event.preventDefault(); // 🔥 STOP PAGE RELOAD
    }

    console.log("Login Payload:", values);
    dispatch(loginUser(values));
  };

  const validatePassword = (_, value) => {
    if (!value) return Promise.reject("Password is required");
    if (value.length < 8)
      return Promise.reject("Minimum 8 characters required");
    // if (!/[A-Z]/.test(value))
    //   return Promise.reject("At least one uppercase letter required");
    if (!/[a-z]/.test(value))
      return Promise.reject("At least one lowercase letter required");
    // if (!/\d/.test(value))
    //   return Promise.reject("At least one number required");
    // if (!/[@$!%*?&]/.test(value))
    //   return Promise.reject("At least one special character required");
    return Promise.resolve();
  };

  return (
    <ConfigProvider theme={adminTheme}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          background:
            "linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 100%)",
        }}
      >
        <Card
          bordered={false}
          style={{
            width: "100%",
            maxWidth: 920,
            borderRadius: 24,
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #1E40AF, #6b85db)",
            boxShadow:
              "0 30px 70px rgba(30, 64, 175, 0.35)",
          }}
        >
          <Row>
            {/* ===== LEFT BRAND PANEL ===== */}
            <Col
              xs={0}
              md={10}
              style={{
                color: "#FFFFFF",
                padding: "70px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Title
                style={{
                  color: "#FFFFFF",
                  fontSize: 34,
                  fontWeight: 700,
                }}
              >
                Welcome Back 👋
              </Title>

              <Text
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 16,
                  marginTop: 12,
                  lineHeight: 1.6,
                }}
              >
                Login to continue your learning, counselling, or management
                journey.
              </Text>

              <div style={{ marginTop: 40, paddingLeft: 10 }}>
                <Text style={{ color: "#E0E7FF", display: "block" }}>
                  ✔ Student Dashboard
                </Text>
                <Text style={{ color: "#E0E7FF", display: "block" }}>
                  ✔ Counsellor Panel
                </Text>
                <Text style={{ color: "#E0E7FF", display: "block" }}>
                  ✔ Admin Management
                </Text>
              </div>
            </Col>

            {/* ===== RIGHT FORM PANEL ===== */}
            <Col
              xs={24}
              md={14}
              style={{
                padding: "48px 36px",
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "0 24px 24px 0",
              }}
            >
              {/* LOGO */}
              <div style={{ marginBottom: 20 }}>
                {/* <img
                  src="/Abhinav-logo.jpg"
                  alt="Career Counselling"
                  style={{
                    width: 150,
                    height: "auto",
                    objectFit: "contain",
                    marginBottom: 6,
                  }}
                /> */}

                <div
                  style={{
                    fontSize: 28,   // bigger like Title
                    fontWeight: 700,
                    color: "#1E40AF",
                  }}
                >
               TrueMindPath
                </div>
              </div>

              <Title level={3} style={{ marginBottom: 4 }}>
                Login
              </Title>

              <Text type="colorTextSecondary">
                Enter your credentials to access your account
              </Text>

              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={() => console.log("Validation Failed")}
                style={{ marginTop: 28 }}
              >
                {/* EMAIL */}
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    size="large"
                    placeholder="you@example.com"
                    style={{ borderRadius: 12 }}
                  />
                </Form.Item>

                {/* PASSWORD */}
                <Form.Item
                  label="Password"
                  name="password"
                  hasFeedback
                  rules={[
                    { required: true, message: "Password is required" }
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="••••••••"
                    size="large"
                    style={{ borderRadius: 12 }}
                  />
                </Form.Item>

                {/* FORGOT */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 20,
                  }}
                >
                  <Text
                    type="primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/forgotpassword")}
                  >
                    Forgot Password?
                  </Text>
                </div>

                {/* SUBMIT */}
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={loading}
                  icon={<SafetyOutlined />}
                  style={{
                    height: 50,
                    borderRadius: 30,
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Login
                </Button>

                <Divider style={{ margin: "28px 0" }} />

                {/* <Text style={{ textAlign: "center", display: "block" }}>
                  Want to watch video?{" "}
                  <Text
                    type="primary"
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#1677ff",
                      fontWeight: "500",
                    }}
                    onClick={() => navigate("/welcome")}
                  >
                    Click here
                  </Text>
                </Text> */}

                <Text style={{ textAlign: "center", display: "block" }}>
                  Don’t have an student account?{" "}
                  <Text
                    type="primary"
                    style={{
                      cursor: "pointer",
                      color: "#1890ff",
                      textDecoration: "underline",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Text>
                </Text>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default AdminLogin;