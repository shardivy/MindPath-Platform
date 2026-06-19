// import React from "react";
// import { FileSearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import "./landing.css";

// const Default = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="law-page">
//       <div
//         className="law-wrapper"
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "calc(100vh - 64px)",
//         }}
//       >
//         <div
//           className="law-content-card"
//           style={{
//             maxWidth: 620,
//             width: "100%",
//             height: "auto",
//           }}
//         >
//           <div
//             className="law-scroll"
//             style={{
//               overflow: "hidden",
//               textAlign: "center",
//               padding: "60px 36px",
//             }}
//           >
//             <div
//               style={{
//                 width: 90,
//                 height: 90,
//                 margin: "0 auto 24px",
//                 borderRadius: "50%",
//                 background: "#eef2ff",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#1E40AF",
//                 fontSize: 42,
//               }}
//             >
//               <FileSearchOutlined />
//             </div>

//             <h1 className="law-title" style={{ marginBottom: 12 }}>
//               No Landing Page Available
//             </h1>

//             <p
//               className="law-tagline"
//               style={{
//                 marginBottom: 18,
//                 fontSize: 14,
//               }}
//             >
//               This service page has not been added yet.
//             </p>

//             <p
//               className="law-desc"
//               style={{
//                 maxWidth: 480,
//                 margin: "0 auto 28px",
//               }}
//             >
//               The landing page for this particular service is currently under
//               development. Please check again later or contact our team for more
//               information regarding this service.
//             </p>

//             <button
//               className="book-btn"
//               style={{
//                 maxWidth: 240,
//                 width: "100%",
//               }}
//               onClick={() => navigate(-1)}
//             >
//               <ArrowLeftOutlined className="btn-icon" />
//               Go Back
//             </button>

//             <div
//               className="footer-brand"
//               style={{
//                 justifyContent: "center",
//                 marginTop: 28,
//               }}
//             >
//               <strong>Abhinav Career Scope</strong> — Perfect Career Guide
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Default;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WhatsAppOutlined, UserAddOutlined } from "@ant-design/icons";
import "./landing.css";

const benefits = [
  {
    icon: "🧠",
    title: "Mental Health Assessments",
    desc: "Take self-assessment tests anytime and gain insights into your emotional wellbeing.",
  },
  {
    icon: "📊",
    title: "Detailed Results",
    desc: "Receive instant, easy-to-understand reports and assessment scores.",
  },
  {
    icon: "📚",
    title: "Blogs & Articles",
    desc: "Access expert-backed content focused on mental health awareness and growth.",
  },
  {
    icon: "🎥",
    title: "Video Resources",
    desc: "Watch informative videos designed to improve mental wellbeing and resilience.",
  },
  {
    icon: "💡",
    title: "Personalized Guidance",
    desc: "Get recommendations and next steps based on your assessment outcomes.",
  },
  {
    icon: "💬",
    title: "Feedback Support",
    desc: "Share feedback and receive assistance whenever needed.",
  },
];

const Default = () => {
  const navigate = useNavigate();

  const phone1 = "+91 8484905526";
  const phone2 = "+91 8484906643";

  const defaultPackageName = "MindPath – Mental Health & Wellbeing Platform";

  const [pageTitle] = useState(defaultPackageName);

  const contactMindPath = () => {
    const whatsappText =
      "Hello MindPath Team, I would like to know more about the Mental Health & Wellbeing Platform.";

    window.open(
      `https://wa.me/${phone1.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(whatsappText)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="law-page">
      <div className="law-wrapper">
        {/* Left Image */}
        <div className="law-image-card">
          <img
            src="/Mind-img.jpeg"
            alt="MindPath Mental Health Platform"
          />
        </div>

        {/* Right Content */}
        <div className="law-content-card">
          <div className="law-scroll">
            <h1 className="law-title">{pageTitle}</h1>

            <p className="law-tagline">
              Empowering Mental Wellness Through Technology
            </p>

            <p className="law-desc">
              <strong>MindPath</strong> is a digital mental-health platform that
              helps individuals better understand their emotional and
              psychological wellbeing through scientifically designed
              self-assessment tools.
              <br />
              <br />
              Users receive instant, easy-to-understand results and guidance,
              helping them identify areas of growth and take meaningful steps
              toward improved mental wellness.
              <br />
              <br />
              Along with assessments, MindPath provides access to blogs,
              articles, videos, and expert resources designed to support
              learning, self-reflection, and positive mental health practices.
            </p>

            <div className="sec-head">🧠 Why Choose MindPath?</div>

            <p className="law-desc">
              A simple, supportive, and accessible platform designed to help
              users learn, grow, and maintain a healthier mind.
            </p>

            <div className="benefit-grid">
              {benefits.map((b) => (
                <div className="b-card" key={b.title}>
                  <span className="b-icon">{b.icon}</span>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="sec-head">👤 User Features</div>

            <div className="benefit-grid">
              <div className="b-card">
                <h4>Assessments Anytime</h4>
                <p>
                  Take mental health assessments whenever you need insights.
                </p>
              </div>

              <div className="b-card">
                <h4>Detailed Reports</h4>
                <p>
                  View comprehensive scores and easy-to-understand results.
                </p>
              </div>

              <div className="b-card">
                <h4>Knowledge Hub</h4>
                <p>
                  Explore blogs, articles, and expert-backed mental health
                  resources.
                </p>
              </div>

              <div className="b-card">
                <h4>Video Learning</h4>
                <p>
                  Watch educational videos focused on emotional wellbeing.
                </p>
              </div>

              <div className="b-card">
                <h4>Personalized Guidance</h4>
                <p>
                  Receive recommendations tailored to assessment outcomes.
                </p>
              </div>

              <div className="b-card">
                <h4>Feedback System</h4>
                <p>
                  Share your experience and help us improve our platform.
                </p>
              </div>
            </div>

            <div className="sec-head">🩺 Counsellor Features</div>

            <div className="benefit-grid">
              <div className="b-card">
                <h4>Assessment Analysis</h4>
                <p>Review and analyze user assessment reports.</p>
              </div>

              <div className="b-card">
                <h4>Wellbeing Guidance</h4>
                <p>
                  Provide personalized steps for emotional and mental wellness.
                </p>
              </div>

              <div className="b-card">
                <h4>Progress Tracking</h4>
                <p>Monitor user development and wellbeing over time.</p>
              </div>

              <div className="b-card">
                <h4>Professional Recommendations</h4>
                <p>Share expert guidance and actionable suggestions.</p>
              </div>

              <div className="b-card">
                <h4>Insight Management</h4>
                <p>Manage and update mental health observations.</p>
              </div>

              <div className="b-card">
                <h4>Feedback Support</h4>
                <p>Provide feedback and support to platform users.</p>
              </div>
            </div>

            <div className="sec-head">⚙️ Admin Features</div>

            <div className="benefit-grid">
              <div className="b-card">
                <h4>Lead Management</h4>
                <p>View enquiries and convert leads into active clients.</p>
              </div>

              <div className="b-card">
                <h4>Assessment Management</h4>
                <p>Create, edit, and manage assessment modules.</p>
              </div>

              <div className="b-card">
                <h4>Report Management</h4>
                <p>Manage and monitor assessment reports.</p>
              </div>

              <div className="b-card">
                <h4>Collaboration Management</h4>
                <p>Coordinate counsellors and mental health analysts.</p>
              </div>

              <div className="b-card">
                <h4>Outreach Management</h4>
                <p>Handle awareness programs and community engagement.</p>
              </div>

              <div className="b-card">
                <h4>Blog Library & Training</h4>
                <p>
                  Manage educational content and analyst training initiatives.
                </p>
              </div>
            </div>

            <div className="sec-head">🌱 Our Mission</div>

            <div className="mentor-card">
              <div className="mentor-avatar">MP</div>

              <div className="mentor-info">
                <h4>Supporting Better Mental Health For Everyone</h4>

                <p>
                  MindPath is dedicated to making mental health support
                  accessible, understandable, and actionable. Through
                  assessments, educational resources, and expert guidance, we
                  help individuals take confident steps toward emotional
                  wellbeing.
                </p>

                <span className="award-pill">
                  🌟 Empower • Understand • Grow
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="law-footer">
            <div className="contact-section">
              <div className="contact-section-header">
                <p className="contact-eyebrow">
                  📞 Connect With MindPath Today
                </p>

                <p className="contact-copy">
                  Start your journey toward better mental wellbeing with
                  assessments, resources, and professional guidance.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">WhatsApp / Call</span>
                  <span className="contact-value">{phone1}</span>
                  <span className="contact-value">{phone2}</span>
                </div>

                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="btn-row">
              <button className="book-btn" onClick={contactMindPath}>
                <WhatsAppOutlined className="btn-icon" />
                Contact Us
              </button>

              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                <UserAddOutlined className="btn-icon" />
                Create Account
              </button>
            </div>

            <div className="footer-brand">
              🧠 <strong>MindPath</strong> — Your Path To Better Mental Health
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;