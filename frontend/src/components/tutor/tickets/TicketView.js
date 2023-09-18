
import React from 'react'
import { useState, useEffect } from 'react';

const TicketView = (props) => {

    const { setShowTicketView, selectedTicket } = props;
    const handleCloseView = () => {
        setShowTicketView(false);
    }

    const handleCloseTicket = async (e) => {
        e.preventDefault()
        const updatedStatus = {
            status: 1
        }
        const response = await fetch('api/common/tickets/' + selectedTicket?._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
        const json = await response.json()

        if (!response.ok) {
            console.log(json.error)
        } else {
            setShowTicketView(false);
            window.location.reload();
        }
    }

    const [department, setDepartment] = useState('')
    const [showReply, setShowReply] = useState(false)

    useEffect(() => {
        if (selectedTicket?.reply) {
            setShowReply(true)
        }
    }, [selectedTicket?.reply]);

    useEffect(() => {
        switch (selectedTicket?.department) {
            case 0:
                setDepartment('Admin')
                break;
            case 1:
                setDepartment('Marketing')
                break;
            case 2:
                setDepartment('Finance')
                break;
            case 3:
                setDepartment('Panel Members')
                break;
            case 4:
                setDepartment('Exam Creators')
                break;
            default:
                setDepartment('Other')
                break;
        }
    }, [selectedTicket?.department]);


    return (
        <div id="authentication-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] max-h-full bg-secondary-blue bg-opacity-5 shadow-none">
            <div class="relative w-2/4  max-h-full">

                <div class="relative bg-white rounded-lg">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-dark-grey rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal" onClick={handleCloseView}>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div class="px-6 py-6 ">
                        <h3 class="mb-4 text-xl font-medium text-dark-blue ">{selectedTicket?.title}</h3>

                        <form class="space-y-6" action="#">
                            <div class="grid grid-cols-2 gap-3">
                                <div class="mb-0 mt-0">
                                    <label for="status" class="block mb-2 text-sm font-medium text-gray-900 ">Ticket Status</label>
                                    <input
                                        type="text"
                                        id="status"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        placeholder={selectedTicket?.status === 0 ? 'Open' : 'Closed'}
                                        disabled
                                    />
                                </div>
                                <div class="mb-0 mt-0">
                                    <label for="department" class="block mb-2 text-sm font-medium text-gray-900 ">Department</label>
                                    <input
                                        type="text"
                                        id="department"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        placeholder={department}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div class="mt-0">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                    placeholder={selectedTicket?.description}
                                    disabled
                                />
                            </div>


                            <div class="mt-0">
                                {showReply && (
                                    <>
                                        <label for="reply" class="block mb-2 text-sm font-medium text-gray-900 ">Reply</label>
                                        <input
                                            type="text"
                                            id="reply"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                            placeholder={selectedTicket?.reply}
                                            disabled
                                        />
                                    </>
                                )}


                                {!showReply && (<div class="mt-0"><p class="text-base font-medium text-black ">Hold tight.. Our staff is still working on your request</p></div>)}

                            </div>

                            <div class="flex w-full items-center justify-end gap-3">
                                <button type="button" class="text-white bg-primary-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center" onClick={handleCloseTicket}>Close Ticket</button>
                                <button type="submit" class="text-white bg-primary-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center" onClick={handleCloseView}>Back</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketView