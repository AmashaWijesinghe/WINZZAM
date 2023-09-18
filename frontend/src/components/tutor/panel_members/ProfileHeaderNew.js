const ProfileHeaderNew = (props) => {

    const { userName, userRole, userImage, subject, handleClose } = props;

    return (
        <div class="card profile_card_top">
            <div class="card-body_top_new">
                <div className='fr_pm'>
                    <img className="profile_pm_large" src={userImage} alt="profile_img" />
                    <div>

                        <h5 class="card-user-name-pm-x"><b>{userName}</b></h5>
                        <p class="card-sub-title-pm">{userRole}</p>

                    </div>

                </div>
                <div className='fl_pm'>
                    <h5 class="card-user-name-pm-x">{subject}</h5>
                    <p class="card-sub-title-pm">Subject</p>
                    
                </div>
                <button type="button" class="btn-close fr_item" aria-label="Close" onClick={handleClose}></button>
                {/* <div className='fl_pm'>
                                <h5 class="card-user-name-pm-x">12/01/2023</h5>
                                <p class="card-sub-title-pm">Registred Date</p>
                            </div> */}

            </div>
        </div>
    )
}

export default ProfileHeaderNew
