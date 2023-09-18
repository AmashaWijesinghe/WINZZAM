
import "./Exams.css";

const Exams = () => {

    return (
        <div >
            
            <div class="exam_cards_container_am">
                <ExamCard 
                examType = "MCQ"
                examNumber = "01"
                timeremaining = "One Day and 30 mins"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                />
                <ExamCard 
                examType = "Essay"
                examNumber = "02"
                timeremaining = "One Day and 30 mins"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                />
                <ExamCard 
                examType = "MCQ"
                examNumber = "03"
                paperDate = "Thursday - 12th"
                timeremaining = "One Day and 30 mins"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                />
                <ExamCard 
                examType = "Essay"
                examNumber = "04"
                timeremaining = "One Day and 30 mins"
                paperDate = "Thursday - 12th"
                paperTime = "14:00 - 16:00"
                discussionDate = "Saturday - 14th"
                discussionTime = "15:00 - 19:00"
                />
            </div>
        </div>
    )
}

const ExamCard = (props) => {

    const { examType, examNumber, timeremaining, paperDate, paperTime, discussionDate, discussionTime } = props;

    return (
        <div class="exam_card_am-t">
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
                                    <p class="card-sub-title-pm-d">{timeremaining}</p>
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
                                    <p class="card-sub-title-pm-d">{timeremaining}</p>
                                </div>
                            </div>
                            <div class="event_card_title_am">
                                <p class="card-sub-title-pm-e">Discussion</p>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    )

}

export default Exams;