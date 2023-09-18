import React, { useEffect, useState } from "react";
// import Dashboard from "./Dashboard";
// import ProfileCompletion from "./ProfileCompletion";
import LoadingSpinner from "./components/loadspinner";
import ClassFilteringPage from "./pages/student/ClassFilteringPage"
import StudentMyClassPage from "./pages/student/MyClass"
import TutorProfileCompletion from "./pages/tutor/ProfileCompletion"
import TutorProfilePending from "./pages/tutor/ProfilePending"
import TutorDashboard from "./pages/tutor/Dashboard"
import ExamCreatorDashboard from "./pages/examCreator/ec_dashboard"


const AuthCheck = ({ token ,userRole , profileCompletion , setUserRole , setProfileCompletion }) => {
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    // Make a request to the backend to fetch user role and profile completion state
    // Replace '/api/userInfo' with the actual endpoint to fetch user info
    fetch("/api/users/userInfo", {
      method: "GET",
      headers: {
        token: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response contains userRole and profileCompletion properties
       
        setUserRole(data.userRole);
        setProfileCompletion(data.isProfileComplete);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (userRole === "Tuition Master") {
    // Render components specific to Tuition Master
        if (profileCompletion==2) {
            return <TutorDashboard/>;
      } else if(profileCompletion==1){
            return <TutorProfilePending/>
      }else {
        console.log("Profile not Completed Tuition Master")
        return <TutorProfileCompletion token={token}/>;
      }
  } else if (userRole === "Student") {
    // Render components specific to Student
        return <ClassFilteringPage token={token}/>;

  } else if (userRole === "Panel Member") {
    // Render components specific to Panel Member
    if (profileCompletion) {
        console.log("Profile Completed Panel member")
    //   return <Dashboard />;
    } else {
        console.log("Profile not Completed Panel member")
    //   return <ProfileCompletion />;
    }
  } else if (userRole === "Exam Creator") {
    // Render components specific to Exam Creator
    if (profileCompletion==0) {
        return <ExamCreatorDashboard/>;
    //   return <Dashboard />;
    } else {
        console.log("Profile not Completed Exam Creator")
    //   return <ProfileCompletion />;
    }
  } else {
    // Handle other roles or unknown roles here
    return <div>Unknown user role</div>;
  }
};

export default AuthCheck;
