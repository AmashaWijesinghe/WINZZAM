import "./Notifications.css";

const Notifications = () => {

    return (
        <div >
            <button class="btn btn-primary pm-a">View All</button>
            <h5 class="card-user-name-am-y">Recent Notofications</h5>
            <div class="exam_cards_container_cm">
                <ExamCard 
                examType = "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
                remainingTime = '2 days ago'
               
                />
                <ExamCard 
                examType = "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
                remainingTime = '2 days ago'
              
                />
                <ExamCard 
                examType = "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
                remainingTime = '3 days ago'
                
                />
                <ExamCard 
                examType = "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
                remainingTime = '3 days ago'
                
                />
            </div>
        </div>
    )
}

const ExamCard = (props) => {

    const { examType,  remainingTime } = props;

    return (
        
        <div class="exam_summ_cm">
                <div>
            <div class="event_card_body_cm">
                <div class="event_sum">
                <p class="card-sub-title-pm-c">{examType}</p>
                <p class="card-sub-title-pm-e">{remainingTime}</p>
                <button class="btn btn-primary pm-x">View</button>
                </div>
                </div>
            </div> 
        </div>     
        
    )

}

export default Notifications;