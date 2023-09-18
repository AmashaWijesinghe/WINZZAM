import React from 'react'

const StudentDetails = (props) => {

    const { handleViewButtonClick } = props;
    return (
        <div className='background-bg-white shadow-usual h-fit rounded-lg mb-20px'>
            <h3 className='text-dark-blue text-base text-left mx-20px my-0 py-20px font-semibold'>Student Details</h3>

            <div class="relative m:rounded-lg mx-20px pb-20px">

                <ul class="w-full text-sm font-medium pl-0 mr-10px overflow-x-hidden overflow-y-auto max-h-[400px]">
                    <li class="w-full py-2 px-1 border-b font-light uppercase border-gray-200 rounded-t-lg grid grid-cols-17">
                        <span class='col-span-1 text-left text-light-grey'>#</span>
                        <span class='col-span-5 text-left text-light-grey'>Student</span>
                        <span class='col-span-3 text-left text-light-grey'>Joined Date</span>
                        <span class='col-span-3 text-left text-light-grey'>Payment Method</span>
                        <span class='col-span-3 text-left text-light-grey'>Payment Type</span>
                        <span class='col-span-2 text-left text-light-grey'>Grade</span>
                    </li>
                    {Array.from({ length: 15 }).map((_, index) =>
                        <li class='border-b border-gray-200 rounded-t-lg'>
                            <button class='w-full py-2 px-1 font-light grid grid-cols-17 hover:bg-light-light-blue' onClick={handleViewButtonClick}>
                                <span class='col-span-1 text-left text-dark-grey'>{index + 1}</span>
                                <div class='col-span-5 text-left text-dark-grey'>
                                    <div class="grid grid-cols-[0.8fr_4.2fr]">
                                        <img className="h-[45px] w-[45px] rounded-full" src='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg' alt="profile_img" />
                                        <div >
                                            <p class="text-left m-0 text-sm text-dark-grey">John Doe</p>
                                            <p class="text-left m-0 text-sm text-dark-grey">ABC National School</p>
                                        </div>
                                    </div>
                                </div>
                                <span class='col-span-3 text-left text-dark-grey'>12/01/2023</span>
                                <span class='col-span-3 text-left text-dark-grey'>Online</span>
                                <span class='col-span-3 text-left text-dark-grey'>Visa</span>
                                <span class='col-span-2 text-left text-dark-grey'>B</span>
                            </button>
                        </li>
                    )}

                </ul>

            </div>





        </div>
    )
}

export default StudentDetails