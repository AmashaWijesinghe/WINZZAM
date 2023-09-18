import { FaRegSquareCheck } from "react-icons/fa6";

const PerformanceCard = (props) => {

    const { userName, userImage } = props;

    return (
        <div class="card performance_card">
            <div class="card-body">
                <img className="profile_pm" src={userImage} alt="profile_img" />
                <div>
                    
                    <h5 class="sub-title-pm">{userName}</h5>
                    <p className="text no-margin"><span className="FaRegSquareCheck"><FaRegSquareCheck /></span> <span className="space_pm"></span>12/100</p>
                    <div>
                        <p className='sub-title-pm_x'>85%</p>
                        <div class="progress_a" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-75"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PerformanceCard