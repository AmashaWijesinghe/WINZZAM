import Topbar from '../../components/tutor/panel_members/TopbarPanelMembers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserCard from '../../components/tutor/common/UserCard';
import ProfileHeaderNew from '../../components/tutor/panel_members/ProfileHeaderNew';
import ButtonTrayNew from '../../components/tutor/panel_members/ButtonTrayNew';
import ProfileDetailsNew from '../../components/tutor/panel_members/ProfileDetailsNew';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/tutor/Sidebar';
import { useState, useEffect } from 'react';
import { PanelMemberContextProvider } from '../../context/panelMemberContext';
import "../../components/tutor/panel_members/panel_members.css"

const AddPanelMembers = () => {

    
    const [showDetails, setShowDetails] = useState(false)
    const [selectedMember, setSelectedMember] = useState(null);
    const [availablePanel, setAvailablePanel] = useState([])
    const [myPanel, setMyPanel] = useState([])

    const handleClick = (panelMember) => () => {
        setSelectedMember(panelMember);
        setShowDetails(true)
    }

    const handleClose = () => {
        setShowDetails(false)
    }

    // useEffect(() => {
    //     const fetchPanelMembers = async () => {
    //         const response = await fetch('/api/panel_member')
    //         const json = await response.json()

    //         if (response.ok) {
    //             dispatch({ type: 'SET_PANEL_MEMBERS', payload: json.panelMembers })

    //             const filterResults = json.panelMembers.filter(panelMember =>
    //                 Array.isArray(panelMember.assignedTo) && panelMember.assignedTo.length === 0
    //             );

    //             const myPanel = json.panelMembers.filter(panelMember =>
    //                 Array.isArray(panelMember.assignedTo) && panelMember.assignedTo.length > 0
    //             );

    //             setAvailablePanel(filterResults)
    //             setMyPanel(myPanel)
    //         }
    //     }
    //     fetchPanelMembers()
    // }, [dispatch])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/panel_member')

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();

                const filterResults = json.panelMembers.filter(panelMember =>
                    Array.isArray(panelMember.assignedTo) && panelMember.bannedBy.length > 0
                );
                const myPanel = json.panelMembers.filter(panelMember =>
                    Array.isArray(panelMember.assignedTo)  && panelMember.bannedBy.length === 0
                );

                setMyPanel(myPanel)
                setAvailablePanel(filterResults)

            } catch (error) {
                console.error('There was a problem with the fetch operation: ', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <PanelMemberContextProvider>
                <div className="container_main">
                    <div class="container_sidebar">
                        <Sidebar />
                    </div>
                    <div>
                        <Topbar
                            memberCount={myPanel.length}
                        />
                        <nav class="nav_a" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/TutorDashboard">Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to="/tutor_panel">Panel Members</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Add Panel Members</li>
                            </ol>
                        </nav>
                        <div className="main_conatiner_pm">

                            <div className="left_side_pm">

                                <div class="container d-flex justify-content-center">
                                    <div class="card">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder='Search here...' />
                                            <div class="input-group-append"><button class="btn btn-primary search"><FontAwesomeIcon icon={faSearch} /></button></div>
                                        </div>
                                        <span class="text">{availablePanel.length} Panel Members Are Available</span>
                                        <div className='cards_list_pm'>
                                            {availablePanel && availablePanel.map((panelMember) => {

                                                return (
                                                    <UserCard
                                                        key={panelMember._id}
                                                        userRole='Panel Member'
                                                        userName={panelMember.user.firstName + ' ' + panelMember.user.lastName} 
                                                        userImage='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg'
                                                        handleClick={handleClick(panelMember)}
                                                    />
                                                );

                                            }
                                            )}


                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="right_side_pm">
                                {/* <button class="btn btn-primary pm-b">Back</button> */}

                                {showDetails && selectedMember && (
                                    <>
                                        <ProfileHeaderNew
                                            userName={selectedMember._id}
                                            userRole='Panel Member'
                                            userImage='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg'
                                            subject='Chemistry'
                                            handleClose={handleClose}
                                        />

                                        <ButtonTrayNew />

                                        <ProfileDetailsNew />

                                        <div className="months_scroller_pm">


                                        </div>

                                    </>
                                )}


                            </div>

                        </div>
                    </div>
                </div>
            </PanelMemberContextProvider>
        </>

    )
}

export default AddPanelMembers;