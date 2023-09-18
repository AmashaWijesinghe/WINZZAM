import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faKeyboard, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import CustomNavbar from './Navbar';
import WelcomeSection from './WelcomeSection';
import CardContainer from './CardContainer';
import EnterEmail from '../general/EnterEmail';
import VerifyOTP from '../general/VerifyOTP';


const LandingCopy = ({setIsLoggedin}) => {
  const tutionMasterIcon = <FontAwesomeIcon icon={faChalkboardTeacher} />;
  const typistIcon = <FontAwesomeIcon icon={faKeyboard} />;
  const studentIcon = <FontAwesomeIcon icon={faUserGraduate} />;

  const [isEntrance, setIsEntrance] = useState(false);
  const [isOTPverify,setisOTPverify] = useState(false);
  const [state, setState] = useState("");
  const [email,setemail] = useState("");

  const containerStyle = {
    padding: '0',
  };

  const themeColorSection = {
    width: '50%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('/Exam-Success.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
  };

  const whiteSection = {
    width: '50%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '50px',
    color: '#fff',
  };

  const logoCircleStyle = {
    width: '150px',
    height: '150px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const appDownloadTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  };

  const appButtonsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };


  const appButtonStyle = {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
  };

  const footerStyle = {
    textAlign: 'center',
  };


  return (
    <div style={containerStyle}>
      <CustomNavbar />
      {/* Conditional rendering based on state */}
      {isEntrance ? (
        <EnterEmail setisOTPverify = {setisOTPverify} setIsEntrance = {setIsEntrance} state = {state} setemail={setemail} email={email}/> // Show EnterEmail component when isEntrance is true
      ) : isOTPverify ? (
        // Show another component when isOTPverify is true (you can replace this with the desired component)
        <VerifyOTP setIsLoggedin =  {setIsLoggedin} state={state} email={email}/>
      ) : (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" style={themeColorSection}>
            <div className="overlay">
              <h1 style={appDownloadTextStyle}>Download the App</h1>
              <div style={appButtonsContainerStyle}>
                <a href="#" className="btn btn-primary" style={appButtonStyle}>
                  App Store
                </a>
                <a href="#" className="btn btn-primary" style={appButtonStyle}>
                  Play Store
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={whiteSection}>
            <div style={logoCircleStyle}>
              <img src="/logo.png" alt="Logo" style={{ width: '150px' }} />
            </div>
            <WelcomeSection />

            <div className="container-fluid">
              <div className="row">
                <CardContainer
                  setIsEntrance = {setIsEntrance}
                  setState = {setState}
                  icon={tutionMasterIcon}
                  title="Tuition Master"
                  description="Convert your current monthly paper class into an all-island class"
                />
                <CardContainer
                  setIsEntrance = {setIsEntrance}
                  setState = {setState}
                  icon={typistIcon}
                  title="Exam Creator"
                  description="Earn income with your subject knowledge plus typing skills."
                />
                <CardContainer
                  setIsEntrance = {setIsEntrance}
                  setState = {setState}
                  icon={studentIcon}
                  title="Panel Member"
                  description="Participate in paper marking and earn while you learn."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
};

export default LandingCopy;
