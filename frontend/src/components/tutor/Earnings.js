// import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import "./Topbar.css";


const Earnings = (props) => {

    const { earnings } = props;

    return (
        <header>
            <div className="container_topbar_am">
                <div className='fl_am'>
                    <div class="tb_icon_am"><FontAwesomeIcon icon={faUserGroup} /></div>
                    <div>
                        <h5 class="card-user-name-pm-x">{earnings}</h5>
                        <p class="card-sub-title-pm">Earnings</p>
                    </div>

                </div>
                <button class="btn btn-primary pm-a">View</button>

            </div>
        </header>
    )
}

export default Earnings