import React from 'react'
import { useState } from 'react';

const NewTicketForm = (props) => {

    const { setShowTicketForm } = props;
    const [isChecked, setIsChecked] = useState(false);
    const handleCloseForm = () => {
        setShowTicketForm(false);
    }
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    const sender = '64df28039a67d3ec2c910b80';
    const [department, setDepartment] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ticket = { department, title, description, sender }
        const response = await fetch('/api/common/tickets', {
            method: 'POST',
            body: JSON.stringify(ticket),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setDepartment('')
            setDescription('')
            setError(null)
            setEmptyFields([])
            setShowTicketForm(false);
        }
    }

    return (
        <div id="authentication-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] max-h-full bg-secondary-blue bg-opacity-60">
            <div class="relative w-2/4  max-h-full">

                <div class="relative bg-white rounded-lg shadow ">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-dark-grey rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal" onClick={handleCloseForm}>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div class="px-6 py-6 ">
                        <h3 class="mb-4 text-xl font-semibold text-dark-blue">Open a New Ticket</h3>
                        <p>Please complete this form and one of our agents will reply to you as soon as possible</p>
                        <form class="space-y-6" onSubmit={handleSubmit}>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="mb-0">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        placeholder="Kamal@gmail.com"
                                        disabled />
                                </div>
                                <div class="mb-0">
                                    <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 ">Contact Number</label>
                                    <input
                                        type="text"
                                        id="contact"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        placeholder="+94 788236049"
                                        disabled />
                                </div>
                            </div>
                            <div class="mb-0 mt-0">
                                <label for="dept" class="block mb-2 text-sm font-medium text-gray-900 ">Department <span class="text-base text-red-700 font-semibold">*</span></label>
                                <select
                                    id="dept"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg block w-full py-2.5 px-2.5 mb-20px"
                                    onChange={(e) => setDepartment(e.target.value)}
                                    value={department} >
                                    <option value="">Select</option>
                                    <option value="0">Admin</option>
                                    <option value="1">Finance</option>
                                    <option value="2">Marketing</option>
                                    <option value="3">Panel Members</option>
                                    <option value="4">Exam Creators</option>
                                </select>
                            </div>
                            <div class="mb-0 mt-0">
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject<span class="text-base text-red-700 font-semibold">*</span></label>
                                <input
                                    type="text"
                                    id="subject"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    placeholder="Title for the inquiry"
                                    required />
                            </div>
                            <div class="mt-0">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Message<span class="text-base text-red-700 font-semibold">*</span></label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-20px"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    placeholder="Type here..."
                                    required></textarea>
                            </div>
                            <div class="mt-0">
                                <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Attachments</label>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " aria-describedby="file_input_help" id="file_input" type="file" multiple />
                                <p class="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG (MAX. 2Mb).</p>
                            </div>
                            <div class="flex items-start mb-6">
                                <div class="h-5 mt-0">
                                    <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50  mt-0" onChange={handleCheckboxChange} />
                                </div>
                                <label for="terms" class="ml-2 text-sm font-medium text-black">I have carefully read the instructions</label>
                            </div>
                            <p class="text-sm font-normal text-red-800 text-right mt-0 mb-2">{error}</p>
                            <div class="flex w-full items-center justify-end gap-3 mt-0">                                
                                <button type="button" class="text-white bg-primary-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center" onClick={handleCloseForm}>Discard</button>
                                <button type="submit" class="text-white bg-primary-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center disabled:opacity-40" disabled={!isChecked}>Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTicketForm