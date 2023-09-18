import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ec_completeProfile.css";

import profile from '../../assets/profile.png'
import pp from '../../assets/sample.png';

const ec_completeProfile = () => {
    const customStyle = {
        fontFamily: 'var(--bs-body-font-family)', // Use JavaScript object syntax
      };
  return (
    <>
      <div className="image-clz my-5 px-5  bg-opacity-10 bg-light">
        <img src={pp} alt="" className="rounded-3 shadow-sm" />
      </div>
      <div className="eccprofile p-3 justify-content-start "style={customStyle}>
        <h1 className="text-info fw-large  ">Complete Your Profile</h1>
        
           

       
       
        <div className="form-info">

            <form method="post" className="form-contain">

                <div className="profile-pic d-flex flex-column mb-1">
                <span className="details-pic fw-bold">Profile picture</span>
                <input type="file" className="imgInput rounded-2 my-1" name="profilepic" id="upfile" placeholder="Upload a picture"/>
                </div>   
                <div className="full-nme d-flex flex-row justify-content-between mb-1">
                    <div className="input-bx d-grid pr-2">
                        <span className=" fw-bold">First Name</span>
                        <input type="text" name="First Name" className="details-first rounded-2 bg-body-secondary " required placeholder="Enter first Name"/>
                    </div>
                    <div className="input-bx d-grid pr-2">
                        <span className="details fw-bold">Last Name</span>
                        <input type="text" name="Last Name" className="rounded-2 bg-body-secondary" required placeholder="Enter last Name"/>
                    </div>
                </div>
                <div className="id-class d-flex flex-column ">
                    <div className="input-bx mb-1 d-flex flex-column justify-content-between">
                        <div className="gd">
                             <span className="details fw-bold ">Gender</span>
                        </div>
                        
                        <div className="gender-class-1 d-flex flex-row align-items-center ">
                            <div className="cl-1 d-inline-flex ">
                                
                                <input type="radio"  id="male" name="gender" value="male"/>
                                <label for="male" className="mx-1">Male</label>
                            </div>
                            <div className="cl-2 mx-5 d-inline-flex">
                                
                                <input type="radio" id="female" name="gender" value="female"/>
                                <label for="female" className="mx-1">Female</label>
                            </div>   
                       
                                
                        </div>
                                
                        
                        


                    </div>
                   
                </div>
                <div className="id-copy d-flex flex-column mb-1">
                        <span className="de tails-id fw-bold">ID copy</span>
                        <input type="file" className="imgInput rounded-2 bg-body-secondary" name="Id copy" id="upfile" placeholder="Upload idcopy"/>
                    </div>
                
                <div className="input-bx d-flex flex-column mb-1">
                        <span className="details fw-bold">Phone Number</span>
                        <input type="text" className="rounded-2 bg-body-secondary" name="Enter phone number" required placeholder="Enter phone number"/>
                    </div>
                
                
                {/* <div className="input-bx d-flex flex-column mb-1">
                        <span className="details fw-bold">Email</span>
                        <input type="text" className="rounded-2 bg-body-secondary" name="Enter email" required placeholder="Enter email"/>
                    </div> */}
               
                <div className="input-bx d-flex flex-column mb-1">
                        <span className="subjects fw-bold">Subjects</span>
                        <input type="text" className="rounded-2 bg-body-secondary" name="" required placeholder="Enter subjects you prefer as a typist"/>
                </div>
                
                <div className="previous d-flex flex-column mb-1">
                        <span className="de tails-id fw-bold">Previous experience</span>
                        <input type="file" className="imgInput" name="exp copy" id="upfile" placeholder="Upload previous experience"/>
                </div> 
                <div className="input-box-btn d-flex justify-content-end">
                <button type="button" class="btn btn-info text-light px-5 rounded-3 ">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default ec_completeProfile;