import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const RecentTasks = (props) => {

    const { tasks } = props;
    const probabilityEach = 0;

    let currentTasks = tasks ? tasks[tasks.length - 1].users.length : '0';
    let finishedTasks = currentTasks === '0' ? '0' : '2';
    tasks && tasks.map(task => {
        let startDate = new Date(task.exam.scheduledDates[0].date);
        let deadline = new Date(task.deadline);
        let finishedDate = new Date(task.completedOn);

        let differenceInMilliseconds = finishedDate - deadline;
        let totalTime = deadline - startDate;
        probabilityEach += (differenceInMilliseconds / totalTime) * 100 ;    

    });

    let probability = tasks ? probability/tasks.length : 0;

    return (

        <div className="middle_pm">
            <div>
                <h5 class="card-user-name-pm">Recent Tasks</h5>
                <table class="table table-hover">
                    <thead>
                        <tr class="row-grid">
                            <th scope="col" class="tbl-col-pm">#</th>
                            <th scope="col" class="tbl-col-pm">Paper</th>
                            <th scope="col" class="tbl-col-pm">Progress</th>
                            <th scope="col" class="tbl-col-pm"></th>
                            <th scope="col" class="tbl-col-pm">Deadline</th>
                        </tr>
                    </thead>
                    {/* <div class="tbody-container-pm"> */}
                    <tbody class="tbody-container-pm">
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">1</th>
                            <td class="tbl-row-pm">July - Paper 4 -Essaay</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm"><b>31/07/2023</b></td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">July - Paper 2 - Essay</td>
                            <td class="tbl-row-pm">
                                Completed
                            </td>
                            <td class="tbl-row-pm"><FontAwesomeIcon icon={faCircleCheck} /></td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>
                        <tr class="row-grid">
                            <th scope="row" class="tbl-row-pm">2</th>
                            <td class="tbl-row-pm">Jacob</td>
                            <td class="tbl-row-pm">
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar w-75"></div>
                                </div>
                            </td>
                            <td class="tbl-row-pm">75%</td>
                            <td class="tbl-row-pm">31/07/2023</td>
                        </tr>

                    </tbody>
                    {/* </div> */}

                </table>
            </div>
            <div>
                <div class="performance_card_pm">

                    <div className='month_summ'>
                        <h5 class="card-user-name-pm-a">{finishedTasks}/{currentTasks}</h5>
                        <p class="card-sub-title-pm-b">Ongoing Tasks</p>
                    </div>

                </div>
                <div class="performance_card_pm">

                    <div className='month_summ'>
                        <h5 class="card-user-name-pm-a">{probability}%</h5>
                        <p class="card-sub-title-pm-b">Probability of Meeting Deadlines</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default RecentTasks