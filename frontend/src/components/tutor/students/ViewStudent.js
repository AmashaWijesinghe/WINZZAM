import React from 'react'

const ViewStudent = (props) => {

    const { handleViewButtonClick, handleClose } = props;

    return (
        <div className='background-bg-white shadow-usual h-fit rounded-lg mb-20px'>
            <div class="flex justify-between">
                <h3 className='text-dark-blue text-base text-left mx-20px my-0 py-20px font-semibold'>Student Details</h3>

                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center  text-gray-400 hover:text-gray-500 hover:bg-gray-100 " onClick={handleClose}>

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

            </div>

            <div class="grid grid-cols-[1fr_4fr] gap-3 mx-20px pb-20px ">

                <div class="grid max-h-[350px] overflow-x-hidden overflow-y-auto">
                    {Array.from({ length: 15 }).map((_, index) =>

                        <button class='col-span-5 text-left text-dark-grey  mr-2 hover hover:bg-light-light-blue' onClick={handleViewButtonClick}>
                            <div class="grid grid-cols-[1.2fr_3.8fr] gap-3  py-10px border-b border-gray-200 ">
                                <img className="h-[45px] w-[45px] rounded-full" src='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg' alt="profile_img" />
                                <div >
                                    <p class="text-left m-0 text-sm text-dark-grey">John Doe</p>
                                    <p class="text-left m-0 text-xs text-light-grey">ABC National School</p>
                                </div>
                            </div>
                        </button>

                    )}
                </div>
                <div>
                    <div class="flex justify-start gap-3 ">
                        <img className="h-[45px] w-[45px] rounded-full" src='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg' alt="profile_img" />
                        <div >
                            <p class="text-left m-0 text-sm font-medium text-dark-grey">John Doe</p>
                            <p class="text-left m-0 text-xs font-medium text-light-grey">ABC National School</p>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>


            </div>




        </div>
    )
}

export default ViewStudent