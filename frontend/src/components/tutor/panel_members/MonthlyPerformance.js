import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const MonthlyPerformance = (props) => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();

    let thisMonth = monthNames[currentMonth];
    let previousMonths = monthNames.filter((month, index) => index < currentMonth);
    let upcomingMonths = monthNames.filter((month, index) => index > currentMonth);


    return (
        <div className="months_scroller_pm">
            <h5 class="card-user-name-pm">Months</h5>
            <div class="month_cards_container_pm">
                <div class="current_month_pm">
                    <div class="month_pm">
                        <div className='month_summ'>
                            <h5 class="card-user-name-pm-a">{thisMonth}</h5>
                            <p class="card-sub-title-pm-b"><FontAwesomeIcon icon={faList} /><span class="space_pm"></span>100 Papers</p>
                            <p class="card-sub-title-pm-b">Active Month</p>
                        </div>

                    </div>
                </div>
                <div class="other_months_pm">
                    <div class="scrollport_pm">

                        {previousMonths.map((month) => {

                            return (
                                <div class="month_pm">
                                    <div className='month_summ'>
                                        <h5 class="card-user-name-pm-a">{month}</h5>
                                        <p class="card-sub-title-pm-b"><FontAwesomeIcon icon={faList} /><span class="space_pm"></span>100 Papers</p>
                                    </div>
                                </div>
                            );

                        })}

                        {upcomingMonths.map((month) => {

                            return (
                                <div class="month_pm">
                                    <div className='month_summ'>
                                        <h5 class="card-user-name-pm-a">{month}</h5>
                                        <p class="card-sub-title-pm-b"><FontAwesomeIcon icon={faList} /><span class="space_pm"></span>N/A</p>
                                    </div>
                                </div>
                            );

                        })}



                    </div>
                </div>

            </div>
        </div>
    )
}

export default MonthlyPerformance;