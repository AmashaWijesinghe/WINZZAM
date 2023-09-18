// import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import "./Topbar.css";


const Topbar = (props) => {

    const { monthName, registeredStudents, examsCount } = props;

    return (
        <header>
            <div className="container_topbar_am">
                <div className='fr_am'>
                    <h5 class="card-user-name-pm-x">{monthName}</h5>
                    <p class="card-sub-title-pm">Active Month</p>
                </div>
                <div className='fl_am'>
                    <div class="tb_icon_am"><FontAwesomeIcon icon={faUserGroup} /></div>
                    <div>
                        <h5 class="card-user-name-pm-x">{registeredStudents}</h5>
                        <p class="card-sub-title-pm">Registered Students</p>
                    </div>

                </div>
                <div className='fl_am'>
                    <div class="tb_icon_am"><FontAwesomeIcon icon={faRectangleList} /></div>
                    <div>
                        <h5 class="card-user-name-pm-x">{examsCount}</h5>
                        <p class="card-sub-title-pm">Exams</p>
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Topbar