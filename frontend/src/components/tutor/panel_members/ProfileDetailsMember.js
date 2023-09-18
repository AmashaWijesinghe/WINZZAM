const ProfileDetailsMember = (props) => {

    const { handleClickProfileBack, member } = props;
    return (
        <div className="middle_pm_x">
            <div>
                <button class="btn btn-primary pm-b" onClick={handleClickProfileBack}>Back</button>
            </div>
            <div>
                <h5 class="card-user-name-pm">Personal Details</h5>
                <div className="form_details_pm">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Age : {member.user.firstName}</li>
                    <li class="list-group-item">Contact Number : {member.user.phone}</li>
                    <li class="list-group-item">Subjects : {member.user.firstName}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">District : {member.user.firstName}</li>
                    <li class="list-group-item">Email Address : {member.user.email}</li>
                    <li class="list-group-item">Languages : {member.user.firstName}</li>
                </ul>
                </div>
                
                <h5 class="card-user-name-pm">Educational Qualifications</h5>
                <div className="form_details_pm">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">A/L Stream : {member.user.firstName}</li>
                    <li class="list-group-item">A/L Results : {member.user.firstName}</li>
                    <li class="list-group-item">Higher Education : {member.user.firstName}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">A/L Year : {member.user.firstName}</li>
                    <li class="list-group-item">Z-Score : {member.user.firstName}</li>
                    <li class="list-group-item">Previous Experience : {member.user.firstName}</li>
                </ul>
                </div>
                
                <h5 class="card-user-name-pm">Payment Details</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileDetailsMember;