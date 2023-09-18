import React from 'react'
import Sidebar from '../../components/tutor/Sidebar'
import Topbar from '../../components/tutor/tickets/TopbarTickets'
import UpperContainer from '../../components/tutor/tickets/UpperContainer'
import BottomContainer from '../../components/tutor/tickets/BottomContainer'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Tickets = () => {

  const uid = '64df28039a67d3ec2c910b80';
  const [myTickets, setMyTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/common/tickets')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        // const filterResults = json.tickets.filter(ticket =>
        //   ticket.sender._id === uid        
        // );        

        setMyTickets(json.tickets)

      } catch (error) {
        console.error('There was a problem with the fetching tickets: ', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen grid grid-cols-[0.8fr_4.2fr]">
        <div >
          <Sidebar />
        </div>
        <div>
          <Topbar />

          <nav class="flex ml-0" aria-label="Breadcrumb">
            <ol class="inline-flex ml-10px pl-0">
              <li class="inline-flex items-center text-sm font-medium text-light-grey hover:text-dark-blue ">
                <Link to="/TutorDashboard" className='text-light-grey hover:text-dark-blue'>Dashboard</Link>
              </li>
              <li class="inline-flex items-center text-sm font-medium text-light-grey" aria-current="page">
                <div class="flex items-center">
                  <svg class="w-3 h-3 text-light-grey mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span>Tickets</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className='mx-10px my-10px h-max'>

            <UpperContainer />            

            <BottomContainer
              myTickets={myTickets}
            />

          </div>

        </div>
      </div>
    </>
  )
}

export default Tickets