import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileHeaderMember = (props) => {

    const { userName, userRole, userImage, currentStatus, registeredDate, handleClickProfile, handleClickMessage, handleClose } = props;
    const day = new Date(registeredDate).getDate();
    const month = new Date(registeredDate).getMonth() + 1;
    const year = new Date(registeredDate).getFullYear();

    return (
        <div class="card profile_card_top">

            <div class="card-body_top_member">
                <div className='fr_pm'>
                    <img className="profile_pm_large" src={userImage} alt="profile_img" />
                    <div>
                        <div>
                            <button class="btn btn-primary pm-c" onClick={handleClickProfile}><FontAwesomeIcon icon={faUser} /></button>
                            <button class="btn btn-primary pm-c" onClick={handleClickMessage}><FontAwesomeIcon icon={faEnvelope} /></button>
                        </div>
                        <h5 class="card-user-name-pm-x"><b>{userName}</b></h5>
                        <p class="card-sub-title-pm">{userRole}</p>

                    </div>

                </div>
                <div className='fl_pm'>
                    <h5 class="card-user-name-pm-x">{currentStatus}</h5>
                    <p class="card-sub-title-pm">Current Status</p>
                </div>
                <div className='fl_pm'>
                    <h5 class="card-user-name-pm-x">{day + " / " + month + " / " + year}</h5>
                    <p class="card-sub-title-pm">Registred Date</p>
                </div>
                <div>
                    <button type="button" class="btn-close fr_item" aria-label="Close" onClick={handleClose}></button>
                </div>
            </div>


        </div>
    )
}

export default ProfileHeaderMember
