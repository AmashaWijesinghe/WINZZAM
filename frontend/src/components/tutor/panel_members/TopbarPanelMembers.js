import { NavLink, useLocation } from 'react-router-dom'

const TopbarPanelMembers = (props) => {

  const { memberCount } = props;

  const location = useLocation();

  const isOnPanelMembersPage = location.pathname === "/tutor_panel";
  const isOnAddPanelMembersPage = location.pathname === "/tutor_add_panel";

  
  return (
    <header>
      <div className="container_topbar_pm">
        <h3 class="topbar_title">Panel Members</h3>
        <ul className="topbar_buttons">
          <li>
            <NavLink
              to="/tutor_panel"
              className={`btn ${isOnPanelMembersPage ? 'btn-primary' : 'btn-outline-primary'}`}>{memberCount} Panel Members</NavLink>
          </li>
          <li>
            <NavLink
              to="/tutor_add_panel"
              className={`btn ${isOnAddPanelMembersPage ? 'btn-primary' : 'btn-outline-primary'}`}>Add New Members</NavLink>
          </li>
        </ul>

      </div>
    </header>
  )
}

export default TopbarPanelMembers

