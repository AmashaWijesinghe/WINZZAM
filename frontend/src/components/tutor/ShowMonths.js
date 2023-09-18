import React from 'react';
import './Topbar.css'

const ShowMonths = ({ selectedBatchYear, selectedMonthsType }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-indexed

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let filteredMonths = [];

    if (selectedMonthsType === 'previous') {
        if (selectedBatchYear === currentYear) {
            // Show months before the current month
            filteredMonths = months.slice(0, currentMonth);
        } else {
            filteredMonths = months;
        }
    } else if (selectedMonthsType === 'upcoming') {
        if (selectedBatchYear === currentYear) {
            // Show months after the current month
            filteredMonths = months.slice(currentMonth + 1);
        } else {
            filteredMonths = [];
        }
    }

    return (
        <div>

            <div className="">
                {filteredMonths.map((month, index) => (
                    <div key={index} className="event_card_body_em">
                        {month}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowMonths;
