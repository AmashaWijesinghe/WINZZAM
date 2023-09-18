//import { Link, useLocation } from 'react-router-dom'

const UserCard = (props) => {

  const { userRole, userName, userImage, handleClick } = props;

  return (
    <div class="card profile_card">
      <div class="card-body">
        <img className="profile_pm" src={userImage} alt="profile_img" />
        <div>
          <p class="card-sub-title-pm">{userRole}</p>
          <h5 class="card-user-name-pm">{userName}</h5>
          <button class="btn btn-primary pm-a" onClick={handleClick}>View</button>
        </div>

      </div>
    </div>
  )
}

export default UserCard