import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Singup"; // Corrected typo
import EmailVerify from "./pages/user/EmailVerify";
import AuthCheck from  "./AuthCheck";
import McqExam from "./pages/exam/main";

import Orders from "./pages/examCreator/ec_orders";
import Notification from "./pages/examCreator/ec_notifications";
import Payments from "./pages/examCreator/ec_payments";
import Setting from "./pages/examCreator/ec_settings";
import Typing from "./pages/examCreator/ec_typing";
import Ordertyping from "./pages/examCreator/ec_orderTyping";

function App() {
  const token = Cookies.get("token");
  const [userRole, setUserRole] = useState("");
  const [profileCompletion, setProfileCompletion] = useState(false);

  console.log(userRole);

  return (
    <Router>
      <Routes>
        {token ? (
          <>
            <Route
              path="/"
              element={
                <>
                  <AuthCheck
                    token={token}
                    userRole={userRole}
                    profileCompletion={profileCompletion}
                    setUserRole={setUserRole}
                    setProfileCompletion={setProfileCompletion}
                  />
                  
                </>
              }
            />
            <Route path="/ExamCreator/orderTyping/:id" element={<Ordertyping />} />
            {/* Add more conditional routes based on userRole and profileCompletion */}
            {userRole === "Student" && (
              <Route path="/mcqexam/:exam_id" element={<McqExam token={token}/> } />
            )}
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </>
        )}
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
