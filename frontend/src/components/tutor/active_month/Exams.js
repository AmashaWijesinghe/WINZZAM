const Exams = (props) => {

    const {setViewExam, setViewLoading } = props;

    const handleViewButtonClick = () => {
        setViewExam(true);
        setViewLoading(false);
    }

    return (
        <div class="exams_container_am">
            <h5 class="card-user-name-am">Exams</h5>
            <div class="exam_cards_container_am">
                <ExamCard 
                examType = "MCQ"
                examNumber = "01"
                examAttendance = "75%"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                handleViewButtonClick = {handleViewButtonClick}
                />
                <ExamCard 
                examType = "Essay"
                examNumber = "02"
                examAttendance = "80%"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                handleViewButtonClick = {handleViewButtonClick}
                />
                <ExamCard 
                examType = "MCQ"
                examNumber = "03"
                examAttendance = "65%"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                handleViewButtonClick = {handleViewButtonClick}
                />
                <ExamCard 
                examType = "Essay"
                examNumber = "04"
                examAttendance = "70%"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                handleViewButtonClick = {handleViewButtonClick}
                />
            </div>
        </div>
    )
}

const ExamCard = (props) => {

    const { examType, examNumber, examAttendance, paperDate, paperTime, discussionDate, discussionTime, handleViewButtonClick } = props;

    return (
        <div class="exam_card_am">
            <div class="exam_summ_am">
                <div>
                    <p class="card-sub-title-pm-c">{examType}</p>
                    <h5 class="card-user-name-am-x">{examNumber}</h5>
                </div>
                <div class="esumm_right_am">
                    <div class="events_container_am">
                        <div>
                            <div class="event_card_body_am">
                                <div class="event_sum">
                                    <p class="card-sub-title-pm-d">{paperDate}</p>
                                    <p class="card-sub-title-pm-d">{paperTime}</p>
                                </div>
                            </div>
                            <div class="event_card_title_am">
                                <p class="card-sub-title-pm-e">Paper</p>
                            </div>
                        </div>
                        <div>
                            <div class="event_card_body_am">
                                <div class="event_sum">
                                    <p class="card-sub-title-pm-d">{discussionDate}</p>
                                    <p class="card-sub-title-pm-d">{discussionTime}</p>
                                </div>
                            </div>
                            <div class="event_card_title_am">
                                <p class="card-sub-title-pm-e">Discussion</p>
                            </div>
                        </div>
                    </div>
                    <div class="attendance_am">
                        <div class="progress-a" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar-a w-75"></div>
                        </div>
                        <p class="card-sub-title-pm-f">{examAttendance}</p>
                    </div>
                    <button class="btn btn-primary pm-a" onClick={handleViewButtonClick}>View</button>
                </div>


            </div>
        </div>
    )

}

export default Exams;