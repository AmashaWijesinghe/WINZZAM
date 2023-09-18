import React from 'react'
import { useState, useRef, useEffect } from 'react';
import NewTicketForm from './NewTicketForm';

const UpperContainer = () => {

    const [isOverflowing, setIsOverflowing] = useState(false);
    const [showTicketForm, setShowTicketForm] = useState(false);

    const textRef = useRef();

    const handleNewTicket = () => {
        setShowTicketForm(true);
        console.log("clicked");
    }


    useEffect(() => {
        const text = textRef.current;
        if (text.scrollHeight > text.offsetHeight) {
            setIsOverflowing(true);
        }
    }, []);

    return (
        <div class="relative m:rounded-lg pb-20px grid grid-cols-2 gap-3">
            <div class="bg-white shadow-usual overflow-hidden sm:rounded-lg h-[300px]">
                <div class="w-full px-20px inline-flex items-center justify-between">
                    <h3 className='text-dark-blue text-base text-left  my-0 pt-20px pb-10px font-semibold'>Recent Updates</h3>
                    <button type="button" class="text-light-grey text-xs pt-[30px]"><u>View All</u></button>
                </div>

                <div class="max-h-[230px] overflow-x-hidden overflow-y-auto pr-10px mx-20px mb-20px mt-0">
                    {Array.from({ length: 15 }).map((_, index) =>
                        <div class="bg-light-light-blue my-10px rounded-lg p-10px grid ">
                            <div>
                                <div class="inline-flex">
                                    <p class="text-light-grey text-xs mb-0 max-h-3 overflow-hidden" ref={textRef} id="ticketDesc">Here goes the ticket discription ticket discription ticket discription ticket
                                        discription ticket discription discription ticket discription discription ticket discription discription ticket discription
                                        discription ticket discription discription ticket discription discription ticket discription v discription ticket discription
                                        discription ticket discription discription ticket discriptionvdiscription ticket discription discription ticket discription
                                        discription ticket discription</p>
                                    {isOverflowing && <span class="text-light-grey text-sm mb-0">....</span>}
                                </div>

                            </div>
                            <div class="h-fit inline-flex justify-between mt-0">
                                <p class="text-dark-grey text-xs mb-0 font-semibold">2 Days ago</p>
                                <button type="button" class="bg-primary-blue text-white rounded-xl py-1 w-[50px] text-xs text-center">View</button>
                            </div>

                        </div>

                    )}

                </div>
            </div>
            <div class="bg-white shadow-usual overflow-hidden sm:rounded-lg h-[300px]">
                <h3 className='text-dark-blue text-base text-left mx-20px my-0 py-20px font-semibold'>Instructions from Help Center</h3>
                <div class="mx-20px flex-col">
                    <div>
                        <p class="mb-2">Welcome to Help Center of <span class="font-medium">Winzzam</span></p>
                        <ul class="list-decimal text-xs text-slate-500">
                            <li>You can report any issue you are facing regarding the platform by creating a ticket</li>
                            <li>Click on the <span class="text-dark-blue">"Create New Ticket"</span> button to initiate the reporting process</li>
                            <li>Fill out the Form providing essential details & submit your ticket</li>
                            <li>Your open ticket will remain visible in the <span class="text-dark-blue">"Open Tickets"</span> tab until it is resolved</li>
                            <li>Staff members will review your ticket, respond with a reply, and take necessary actions</li>
                            <li>You can have further assistance by contacting the staff via telephone or email</li>
                        </ul>
                        <p class="mb-0"><span>Note:</span>
                            <i>Please do not create multiple tickets for the same issue.
                                Any tickets that seem to be fraudulent will be closed by the staff without any notice</i></p>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="bg-primary-blue text-white rounded-lg p-2.5 w-[100px] text-xs text-center" onClick={handleNewTicket}>New Ticket</button>
                        {showTicketForm && (
                            <NewTicketForm
                                setShowTicketForm={setShowTicketForm}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpperContainer
