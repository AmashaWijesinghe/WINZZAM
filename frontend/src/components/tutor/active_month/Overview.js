import { useState } from "react";

const Overview = (props) => {

    const { viewExam, viewLoading } = props;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div class="overview_container_am">
            <h5 class="card-user-name-am">Overview</h5>
            {viewExam && (
                <>
                    <div class="placeholder_container_am">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item">
                                <button class={`${activeTab === 0 ? "nav-link active" : "nav-link"}`} id="pill-tab-0" data-bs-toggle="pill" href="#pill-tabpanel-0" role="tab" aria-controls="pill-tabpanel-0" aria-selected={`${activeTab === 0 ? "true" : "false"}`} onClick={() => setActiveTab(0)}>Tab 1</button>
                            </li>
                            <li class="nav-item">
                                <button class={`${activeTab === 1 ? "nav-link active" : "nav-link"}`} id="pill-tab-1" data-bs-toggle="pill" href="#pill-tabpanel-1" role="tab" aria-controls="pill-tabpanel-1" aria-selected={`${activeTab === 1 ? "true" : "false"}`} onClick={() => setActiveTab(1)}>Tab 2</button>
                            </li>
                            <li class="nav-item">
                                <button class={`${activeTab === 2 ? "nav-link active" : "nav-link"}`} id="pill-tab-2" data-bs-toggle="pill" href="#pill-tabpanel-2" role="tab" aria-controls="pill-tabpanel-2" aria-selected={`${activeTab === 2 ? "true" : "false"}`} onClick={() => setActiveTab(2)}>Tab 3</button>
                            </li>
                        </ul>
                        <div class="tab-content py-3 mt-2">
                            <div class={`${activeTab === 0 ? "tab-pane active" : "tab-pane"}`} id="pill-tabpanel-0" role="tabpanel" aria-labelledby="pill-tab-0">Tab 1 content</div>
                            <div class={`${activeTab === 1 ? "tab-pane active" : "tab-pane"}`} id="pill-tabpanel-1" role="tabpanel" aria-labelledby="pill-tab-1">Tab 2 content</div>
                            <div class={`${activeTab === 2 ? "tab-pane active" : "tab-pane"}`} id="pill-tabpanel-2" role="tabpanel" aria-labelledby="pill-tab-2">Tab 3 content</div>
                        </div>
                    </div>

                </>
            )}

            {viewLoading && (
                <>
                    <span class="text-x">Select an Exam to view Overview</span>
                    <div class="placeholder_container_am">
                        <span class="placeholder placeholder-wave col-12 rounded-0 bd-h-48"></span>
                        <div class="card-body">
                            <span class="placeholder placeholder-wave placeholder-xs col-12"></span>
                            <span class="placeholder placeholder-wave placeholder-xs col-9"></span>
                        </div>
                    </div>
                </>

            )}
        </div>
    )
}

export default Overview;