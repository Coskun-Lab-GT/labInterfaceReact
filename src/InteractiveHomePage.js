import React, { useEffect, useState } from 'react'
import GoogleBtn from './GoogleBtn.js'
import Clock from './Clock.js'
import { Container, Row, Col } from 'coolgrid'
import GridLayout from 'react-grid-layout'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import {
  CustomPanel,
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator,
  Spacer,
  View
} from "nice-react-layout";
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import './InteractiveHomePage.css';
import labPic from './lab.jpg'

function InteractiveHomePage() {
  const [ day, setDay ] = useState(new Date().toLocaleString().split(',')[0]);
  const [ quote, setQuote ] = useState("");
  const [ morningEvents, setMorningEvents ] = useState([
      "8:00am: Meet in office",
      "9:30am: Breakfast with the President",
      "11:30am: EZLabX Meeting"
    ]);
  const [ afternoonEvents, setAfternoonEvents ] = useState([
    "12:00pm: Lunch Break",
    "1:30pm: Return Lab Equipment",
    "4:00pm: Afternoon Meeting"
  ]);
  const [ eveningEvents, setEveningEvents ] = useState([
    "5:00pm: Log off early",
    "6:30pm: Awards Dinner",
    "9:00pm: Application Deadline"
  ]);

  const middlePanelCSS = {
    paddingLeft:"20px",
    paddingRight:"20px",
    marginTop: "20px",
    marginBottom: "20px",
    border: "5px solid gray"
  };

  const topPanelCSS = {
    paddingLeft:"20px",
    paddingRight:"20px",
    border: "5px solid gray"
  };

  const bottomPanelCSS = {
    paddingLeft:"20px",
    paddingRight:"20px",
    marginBottom: "20px",
    border: "5px solid gray"
  };

  useEffect(() => {
    if (!quote) {
      fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(`${data.content} —${data.author}`);
      })
    }
  });
  return (
    <HorizontalLayout >
    <Panel customCss={{
        marginLeft: "20px",
        marginRight: "20px", }}
      >
      <VerticalLayout >
        <Panel fixed fixedHeight={200} customCss={topPanelCSS}>
                <h1>Welcome</h1>
                <p>Welcome to EZLabX, the interactive lab management platform developed by the Coskun Lab.</p>
        </Panel>
        <Panel fixed fixedHeight={350} customCss={middlePanelCSS}>
              <h2>Lab Members</h2><br/>
              <img
                src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
                alt="dog1"
                style={{height:100, width:100}}
              /> Lab Member 1 <br/>
              <img
                src="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg"
                alt="dog2"
                style={{height:100, width:100}}
              /> Lab Member 2 <br/>
              <img
                src="https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg"
                alt="dog3"
                style={{height:100, width:100}}
              /> Lab Member 3 <br/>
              <img
                src="https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"
                alt="dog4"
                style={{height:100, width:100}}
              /> Lab Member 4 <br/>
              <img
                src="https://media4.s-nbcnews.com/i/newscms/2019_23/2885811/190606-border-collie-mc-1318_5b1706791f4ae9ddb3029540a98f7e08.JPG"
                alt="dog5"
                style={{height:100, width:100}}
              /> Lab Member 5 <br/>
        </Panel>
        <Panel customCss={bottomPanelCSS}>
              <h2>Calendar</h2>
              <Calendar
                onClickDay={(value, event) => setDay(value.toString().split('00')[0])}
              />
        </Panel>
      </VerticalLayout>
  </Panel>
  <Panel fixed fixedWidth={700}>
    <VerticalLayout >
      <Panel fixed fixedHeight={300} customCss={topPanelCSS}>
        <h3 id = "lab">EZLabX</h3>
      </Panel>
      <Panel customCss={middlePanelCSS}>
        <h2>Upcoming Events on {day}</h2>
        <p>{morningEvents[Math.floor((Math.random() * 3))]}</p>
        <p>{afternoonEvents[Math.floor((Math.random() * 3))]}</p>
        <p>{eveningEvents[Math.floor((Math.random() * 3))]}</p>
      </Panel>
    </VerticalLayout>
  </Panel>
  <Panel
    customCss={{
        paddingLeft:"20px",
        paddingRight:"20px",
    }}
  >
        <VerticalLayout >
          <Panel fixed fixedHeight={160} customCss={topPanelCSS}>
              <Clock />
          </Panel>
          <Panel fixed fixedHeight={350} customCss={middlePanelCSS}>
              <h1>Motivational Quotes</h1>
              <p id='qotd'>{quote}</p>
          </Panel>
          <Panel
            customCss={bottomPanelCSS}>
                  <h1>Awards</h1>
          </Panel>
        </VerticalLayout>
      </Panel>
  </HorizontalLayout>
  )
}

export default InteractiveHomePage;
