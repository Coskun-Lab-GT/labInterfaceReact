import React from 'react'

function EZLabX() {
    return (
        <div className = "about">
            <div className = "landing">
                <div className = "landing-header" id = "landing-header">
                    <h1 className = "landing-title">EZLabX</h1>
                    <a href = "#ezlabx" className = "landing-button">Learn More</a>
                </div>
            </div>
            <div className = "ezlabx" id = "ezlabx">
                <h1 className = "about-header">About EZLabX</h1>
                <p className = "descriptions">EZLabX strives to facilitate day to day lab activities for both students and professors.
                They can easily check lab inventory, request new inventory items, and view upcoming events/deadlines.
                In addition, professors can readily approve order requests, monitor their lab equipment cameras, and view students' research progress.</p>
                
                <h4  className = "description-header">Order Requests</h4>
                <p className = "descriptions">Stocked inventory is a must in any lab.
                With the Quick Order form and General Order form, students can request to order existing or nonexisting items in the lab.
                All of these requests are sent to the professor where he/she can quickly approve them in an organized manner through a Slack message.
                Students are able to view the status of their requests from approval to delivery through the Order History table.</p>
                
                <h4 className = "description-header">Lab Cameras</h4>
                <p className = "descriptions">Many labs have sensitive gauges and thermometers that need to be checked frequently. With EZLabX's Levels page, 
                all of the lab's cameras can be placed on one convinent page for easy access to monitoring.</p>
                
                <h4  className = "description-header">Calendar</h4>
                <p className = "descriptions">From critical deadlines to lab socials, EZLabX's embeded Google Calendar allows anyone in the lab to view, schedule,
                and edit upcoming events. Overall, a lab calendar organizes day to day activites for a more efficient lab environment.</p>
                
                <h4  className = "description-header">Dashboards</h4>
                <p className = "descriptions">EZLabX's student dashboards allows students to report their progress on  past, present, and future lab work.
                The dashboards provide the perfect space for students to informally share their work with other members of the lab.</p>

            </div>
            <div className = "team">
                <h1 className = "about-header" id = "meet">Meet the Team</h1>
                <div className = "top">
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/ahmet-f-coskun-25488018/" target="_blank">
                            <img src = {require("./Ahmet.jpg")} alt = "Ahmet Coskun" className = "image"></img></a>
                        <h3>Ahmet Coskun</h3>
                        <p>Advisor</p>
                    </div>
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/saurabh-doodhwala/" target="_blank">
                            <img src = {require("./Saurabh.JPG")} alt = "Saurabh Doodhwala" className = "image"></img></a>
                        <h3>Saurabh Doodhwala</h3>
                        <p>Advisor</p>
                    </div>
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/shubhamsinghal7/" target="_blank">
                            <img src = {require("./Shubham.jpg")} alt = "Shubham Singhal" className = "image"></img></a>
                        <h3>Shubham Singhal</h3>
                        <p>Advisor</p>
                    </div>
                </div>
                <div className = "middle">
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/allisonfister521/" target="_blank">
                            <img src = {require("./Allison.jpg")} alt = "Allison Fister" className = "image"></img></a>
                        <h3>Allison Fister</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/aryender-singh-169aa5137/" target="_blank">
                            <img src = {require("./Aryender.jpg")} alt = "Aryender Singh" className = "image"></img></a>
                        <h3>Aryender Singh</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/ethan-xie/" target="_blank">
                            <img src = {require("./Ethan.jpg")} alt = "Ethan Xie" className = "image"></img></a>
                        <h3>Ethan Xie</h3>
                        <p>Developer</p>
                    </div>
                </div>
                <div className = "bottom">
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/josh-patel-bb5160194/" target="_blank">
                            <img src = {require("./Josh.jpg")} alt = "Josh Patel" className = "image"></img></a>
                        <h3>Josh Patel</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/patelkhusbu/" target="_blank">
                            <img src = {require("./Khusbu.jpg")} alt = "Khusbu Patel" className = "image"></img></a>
                        <h3>Khusbu Patel</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <a href = "https://www.linkedin.com/in/kira-pancha-7ab886190/" target="_blank">
                            <img src = {require("./Kira.jpg")} alt = "Kira Pancha" className = "image"></img></a>
                        <h3>Kira Pancha</h3>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EZLabX