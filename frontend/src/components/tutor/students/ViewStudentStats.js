import React from 'react'

const ViewStudentStats = () => {
    return (
        <div className='background-bg-white shadow-usual h-fit rounded-lg w-full'>
            <h3 className='text-dark-blue text-base text-left mx-20px my-0 py-20px font-semibold'>Individual Performance</h3>

            <div class="relative m:rounded-lg mx-20px pb-20px grid grid-cols-2 gap-3">
                <div class="bg-primary-blue shadow overflow-hidden sm:rounded-lg h-[300px]">
                    <h3 className='text-dark-blue text-sm text-left mx-20px my-0 py-20px font-semibold'>MCQ</h3>
                </div>
                <div class="bg-primary-blue shadow overflow-hidden sm:rounded-lg h-[300px]">
                    <h3 className='text-dark-blue text-sm text-left mx-20px my-0 py-20px font-semibold'>Essay</h3>
                </div>
                <div class="bg-primary-blue shadow overflow-hidden sm:rounded-lg h-[300px]">
                    <h3 className='text-dark-blue text-sm text-left mx-20px my-0 py-20px font-semibold'>Total Marks</h3>
                </div>
            </div>
        </div>
    )
}

export default ViewStudentStats