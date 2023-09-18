import React from 'react'
import { useEffect, useState, useRef } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow' //date fns
import TicketView from './TicketView';

const BottomContainer = (props) => {

  const { myTickets } = props;

  const [selectedTab, setSelectedTab] = useState(0) // 0 for open, 1 for closed
  const [showTicketView, setShowTicketView] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const handleViewButtonClick = () => {
    setShowTicketView(!showTicketView);
  }

  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const text = textRef.current;
    text && setIsOverflowing(text.scrollWidth > text.clientWidth);
  }, []);

  const openTickets = myTickets.filter(ticket => ticket.status === 0);
  const closedTickets = myTickets.filter(ticket => ticket.status === 1);

  const [searchInputOpen, setSearchInputOpen] = useState('');
  const [searchInputClosed, setSearchInputClosed] = useState('');
  const [searchResultsOpen, setSearchResultsOpen] = useState([]);
  const [searchResultsClosed, setSearchResultsClosed] = useState([]);
  useEffect(() => {
    openTickets && setSearchResultsOpen(
      openTickets.filter((ticket) => {
        return ticket.title.toLowerCase().includes(searchInputOpen.toLowerCase()) || ticket.description.toLowerCase().includes(searchInputOpen.toLowerCase())
      })
    )
  }, [searchInputOpen, openTickets]);

  useEffect(() => {
    closedTickets && setSearchResultsClosed(
      closedTickets.filter((ticket) => {
        return ticket.title.toLowerCase().includes(searchInputClosed.toLowerCase()) || ticket.description.toLowerCase().includes(searchInputClosed.toLowerCase())
      })
    )
  }, [searchInputClosed, closedTickets]);

  const [filterBy, setFilterBy] = useState('None');
  const [monthButtonText, setMonthButtonText] = useState('Select Month');

  const [filteredTicketsMonth, setFilteredTicketsMonth] = useState([]);


  const [selectedDept, setSelectedDept] = useState(null); // 0 for admin, 1 for marketing, 2 for finance, 3 for panel members, 4 for exam creators

  return (
    <div className='bg-white shadow-usual h-auto rounded-lg w-full '>
      <h3 className='text-dark-blue text-base text-left mx-20px my-0 py-20px font-semibold'>Your Tickets</h3>

      <div class="mx-20px flex flex-col relative">

        <div class="mb-4 border-b border-light-grey w-fit absolute -top-[60px] right-0">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center pl-0" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li class={`${selectedTab === 0 ? "mr-2 text-left border-b-4 border-dark-blue" : "mr-2 text-left"}`} role="presentation">
              <button class={`${selectedTab === 0 ? "inline-block py-2 rounded-t-lg text-dark-blue focus:outline-none" : "inline-block py-2 border-b-2 border-transparent rounded-t-lg text-light-grey "}`} id="open" data-tabs-target="#open" type="button" role="tab" aria-controls="open" aria-selected={`${selectedTab === 0 ? "true" : "false"}`} onClick={() => { setSelectedTab(0); setFilterBy('None'); setMonthButtonText('Select Month'); }}>Open</button>
            </li>
            <li class={`${selectedTab === 1 ? "text-left border-b-4 border-dark-blue" : "text-left"}`} role="presentation">
              <button class={`${selectedTab === 1 ? "inline-block py-2 rounded-t-lg text-dark-blue focus:outline-none" : "inline-block py-2 border-b-2 border-transparent rounded-t-lg text-light-grey "}`} id="closed" data-tabs-target="#closed" type="button" role="tab" aria-controls="closed" aria-selected={`${selectedTab === 1 ? "true" : "false"}`} onClick={() => { setSelectedTab(1); setFilterBy('None'); setMonthButtonText('Select Month'); }}>Closed</button>
            </li>
          </ul>
        </div>

        <div class="grid z-0 relative" id="myTabContent">
          <div class={`${selectedTab === 0 ? "grid rounded-lg bg-white" : "hidden rounded-lg bg-gray-50  mb-4"}`} id="open" role="tabpanel" aria-labelledby="open">
            {filterBy === 'None' && (
              <>
                <form class="flex items-center mb-20px">
                  <div class="relative inline-flex w-full bg-light-light-blue border-none text-primary-blue text-sm rounded-lg">
                    <input type="text" id="simple-search" class="bg-light-light-blue border-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 m-0 focus:outline-none" placeholder="Search here..." value={searchInputOpen} onChange={event => setSearchInputOpen(event.target.value)} />
                  </div>
                  <button type="button" class="p-2.5 ml-2 text-sm font-medium text-white bg-primary-blue rounded-lg  ">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </form>
              </>
            )}


            <DropDown
              setFilterBy={setFilterBy}
              setFilteredTicketsMonth={setFilteredTicketsMonth}
              tickets={openTickets}
              monthButtonText={monthButtonText}
              setMonthButtonText={setMonthButtonText}
            />

            <div class="h-[450px] max-h-[450px] overflow-x-hidden overflow-y-auto pr-10px mb-20px">
              {filterBy === 'None' && openTickets && searchResultsOpen.map((ticket) => {
                return (
                  <>
                    <div class="bg-light-light-blue my-10px rounded-lg p-10px grid ">
                      <div>
                        <p class="text-dark-grey text-base mb-2">{ticket.title}</p>
                        <div class="inline-flex">
                          <p class="text-light-grey text-sm mb-0 max-h-20px overflow-hidden" ref={textRef} id="ticketDesc">{ticket.description}</p>
                          {isOverflowing && <span class="text-light-grey text-sm mb-0">....</span>}
                        </div>
                      </div>
                      <div class="h-fit inline-flex justify-between mt-2">
                        <p class="text-light-grey text-sm font-semibold">{formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}</p>
                        <button type="button" class="bg-primary-blue text-white rounded-md py-2 w-[80px] text-sm text-center" onClick={() => { setShowTicketView(!showTicketView); setSelectedTicket(ticket) }}>View</button>
                        {showTicketView && selectedTicket && (
                          <TicketView
                            setShowTicketView={setShowTicketView}
                            selectedTicket={selectedTicket}
                          />
                        )}
                      </div>
                    </div>


                  </>

                );
              })}

              {filterBy === 'Month' && openTickets && filteredTicketsMonth.map((ticket) => {
                return (
                  <>
                    <div class="bg-light-light-blue my-10px rounded-lg p-10px grid ">
                      <div>
                        <p class="text-dark-grey text-base mb-2">{ticket.title}</p>
                        <div class="inline-flex">
                          <p class="text-light-grey text-sm mb-0 max-h-20px overflow-hidden" ref={textRef} id="ticketDesc">{ticket.description}</p>
                          {isOverflowing && <span class="text-light-grey text-sm mb-0">....</span>}
                        </div>
                      </div>
                      <div class="h-fit inline-flex justify-between mt-2">
                        <p class="text-light-grey text-sm font-semibold">{formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}</p>
                        <button type="button" class="bg-primary-blue text-white rounded-md py-2 w-[80px] text-sm text-center" onClick={() => { setShowTicketView(!showTicketView); setSelectedTicket(ticket) }}>View</button>
                        {showTicketView && selectedTicket && (
                          <TicketView
                            setShowTicketView={setShowTicketView}
                            selectedTicket={selectedTicket}
                          />
                        )}
                      </div>
                    </div>


                  </>

                );
              })}
            </div>

          </div>

          {/* <div class={`${selectedTab === 1 ? "grid p-4 rounded-lg bg-gray-50 dark:bg-gray-800" : "hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"}`} id="closed" role="tabpanel" aria-labelledby="closed">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
          </div> */}

          <div class={`${selectedTab === 1 ? "grid rounded-lg bg-white" : "hidden rounded-lg bg-gray-50  mb-4"}`} id="closed" role="tabpanel" aria-labelledby="closed">
            {filterBy === 'None' && (
              <form class="flex items-center mb-20px">
                <div class="relative inline-flex w-full bg-light-light-blue border-none text-primary-blue text-sm rounded-lg">
                  <input type="text" id="simple-search" class="bg-light-light-blue border-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 m-0 focus:outline-none" placeholder="Search here..." value={searchInputClosed} onChange={event => setSearchInputClosed(event.target.value)} />
                </div>
                <button type="button" class="p-2.5 ml-2 text-sm font-medium text-white bg-primary-blue rounded-lg  ">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
            )}


            <DropDown
            />

            <div class="h-[450px] max-h-[450px] overflow-x-hidden overflow-y-auto pr-10px mb-20px">
              {filterBy === 'None' && closedTickets && searchResultsClosed.map((ticket) => {
                return (
                  <>
                    <div class="bg-light-light-blue my-10px rounded-lg p-10px grid ">
                      <div>
                        <p class="text-dark-grey text-base mb-2">{ticket.title}</p>
                        <div class="inline-flex">
                          <p class="text-light-grey text-sm mb-0 max-h-20px overflow-hidden" ref={textRef} id="ticketDesc">{ticket.description}</p>
                          {isOverflowing && <span class="text-light-grey text-sm mb-0">....</span>}
                        </div>
                      </div>
                      <div class="h-fit inline-flex justify-between mt-2">
                        <p class="text-light-grey text-sm font-semibold">{formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}</p>
                        <button type="button" class="bg-primary-blue text-white rounded-md py-2 w-[80px] text-sm text-center" onClick={handleViewButtonClick}>View</button>
                      </div>
                    </div>
                    {showTicketView && (
                      <TicketView
                        setShowTicketView={setShowTicketView}
                      />
                    )}
                  </>
                );
              })}
            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

const DropDown = (props) => {

  const { setFilterBy, monthButtonText, setMonthButtonText, setFilteredTicketsMonth, tickets } = props;
  const [dropdownMonthVisible, setDropdownMonthVisible] = useState(false);
  const [monthsArray] = useState(['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']);
  const handleMonthButtonClick = (selectedMonth) => {
    setMonthButtonText(monthsArray[selectedMonth]);
    setDropdownMonthVisible(false);
    setFilterBy('Month');

    tickets && setFilteredTicketsMonth(
      tickets.filter((ticket) => {
        const ticketMonth = new Date(ticket.createdAt).getMonth();
        return ticketMonth === selectedMonth;
      })
    )
  }

  return (
    <div class="inline-flex justify-start mb-10px">

      <div class="mr-4" onMouseEnter={() => setDropdownMonthVisible(true)} onMouseLeave={() => setDropdownMonthVisible(false)}>
        <button
          id="dropdownDelayButton"
          data-dropdown-toggle="dropdownDelay"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          class="text-dark-grey bg-gray-50 border border-gray-300 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center justify-between w-[180px] shadow-usual"
          type="button"
        >
          {monthButtonText}
          <svg class="w-2.5 h-2.5 ml-2.5 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        {dropdownMonthVisible && (
          <>
            <div id="dropdownDelay" class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                <li>
                  <button type="button" class="block px-4 py-2 bg-white text-light-grey  hover:text-dark-grey hover:bg-light-light-blue " onClick={() => { setMonthButtonText('ALL'); setDropdownMonthVisible(false); setFilterBy('None') }}>ALL</button>
                </li>
                <li>
                  <button type="button" class="block px-4 py-2 bg-white text-light-grey  hover:text-dark-grey " onClick={() => handleMonthButtonClick(7)}>AUG</button>
                </li>
                <li>
                  <button type="button" class="block px-4 py-2 bg-white text-light-grey  hover:text-dark-grey " onClick={() => handleMonthButtonClick(8)}>SEP</button>
                </li>
                <li>
                  <button type="button" class="block px-4 py-2 bg-white text-light-grey  hover:text-dark-grey " onClick={() => handleMonthButtonClick(9)}>OCT</button>
                </li>
                <li>
                  <button type="button" class="block px-4 py-2 bg-white text-light-grey  hover:text-dark-grey  " onClick={() => handleMonthButtonClick(10)}>NOV</button>
                </li>
              </ul>
            </div>
          </>
        )}

      </div>


    </div>
  );

}

export default BottomContainer