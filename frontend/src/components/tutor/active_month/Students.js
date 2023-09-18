import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Students = (props) => {

    const { studentsCount, viewExam, viewLoading } = props;

    return (
        <div class="students_container_am">
            <h5 class="card-user-name-am">Students</h5>
            {viewExam && (
                <>
                    <span class="text-x">{studentsCount} Students</span>
                    <div class="students_list_am">
                        <ul class="list-group list-group-flush">
                            {Array.from({ length: 15 }).map((_, index) =>
                                <StudentCard
                                    key={index}
                                    studentName="John Doe"
                                    studentPercentage="80%"
                                    studentImage="https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg"
                                    studentArrow={faArrowUp}
                                />
                            )}
                        </ul>
                    </div>
                </>
            )}

            {viewLoading && (
                <>
                    <span class="text-x">Select an Exam to view Students</span>
                    <div class="students_pl_list_am">
                        {Array.from({ length: 4 }).map((_, index) =>

                            <div class="d-flex align-items-center st-placeholder">
                                <span class="placeholder placeholder-wave rounded-circle bd-h-10 bd-w-10"></span>
                                <div class="ms-3 flex-grow-1">
                                    <span class="placeholder placeholder-wave placeholder-xs col-8"></span>
                                    <span class="placeholder placeholder-wave placeholder-xs col-4"></span>
                                </div>
                            </div>

                        )}
                    </div>
                </>
            )}


        </div>
    )

}

const StudentCard = (props) => {

    const { studentName, studentPercentage, studentImage, studentArrow } = props;

    return (
        <li class="list-group-item am">
            <div class="student_am">
                <img className="profile_pm_round" src={studentImage} alt="profile_img" />
                <div class="student_details_am">
                    <p class="text_normal">{studentName}</p>
                    <p class="text_normal fr">{studentPercentage}</p>
                    <FontAwesomeIcon icon={studentArrow} />
                </div>
            </div>
        </li>
    )
}

export default Students;