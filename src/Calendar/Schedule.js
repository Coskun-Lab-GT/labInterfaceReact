import React from 'react';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
class Schedule extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
          bool: false

        };
        this.componentDidMount = this.componentDidMount.bind(this);

        this.flag = true;
        this.calendarId = "coskunlab2020@gmail.com";
        this.publicKey = "AIzaSyA1YD4ToEnVXKpWjkoR6trkcolFkU9BvMI";
        this.dataManger = new DataManager({
          url:
            "https://www.googleapis.com/calendar/v3/calendars/" +
            this.calendarId +
            "/events?key=" +
            this.publicKey,
          adaptor: new WebApiAdaptor(),
          crossDomain: true
        });
      }

      componentDidMount(){
        
        
        var SCOPES = "https://www.googleapis.com/auth/calendar";
        let self = this;
        window.window.gapi.load("auth2",function(){
          window.window.gapi.auth2.init({

            client_id: "144532264238-umvg7klioo3mgkpjl3u7n0a35n33t6jl.apps.googleusercontent.com",
            scope: SCOPES,
          });
          var GoogleAuth=window.window.gapi.auth2.getAuthInstance();

          let signin=document.getElementById("signin");
        signin.addEventListener("click", ()=>{
        GoogleAuth.signIn().then(response=>{
          if(response.getBasicProfile().getEmail()!="coskunlab2020@gmail.com"){
            alert("Your google account is not of CoskunLabs. Try Again.");
            GoogleAuth.signOut()
          }


        });
        

        });
        GoogleAuth.isSignedIn.listen((signedin)=>{
          if(signedin){
            self.setState({ bool: true})
          }
          else{
            self.setState({bool:false})

          }
        
        });
        
        });

       
        
      }

     

      onDataBinding(e) {
        
        this.flag = false;
        var items = e.result.items;
        var scheduleData = [];
        if (items.length > 0) {
          for (var i = 0; i < items.length; i++) {
            var event = items[i];
            var when = event.start.dateTime;
            var start = event.start.dateTime;
            var end = event.end.dateTime;
            if (!when) {
              when = event.start.date;
              start = event.start.date;
              end = event.end.date;
            }
            scheduleData.push({
              Id: event.id,
              Subject: event.summary,
              Location:event.location,
              Description: event.description,
              StartTime: new Date(start),
              EndTime: new Date(end),
              IsAllDay: !event.start.dateTime
            });
          }
        }
        e.result = scheduleData;
      }
      onActionBegin(args) {
        if (args.requestType == "eventCreate") {
          args.cancel = true;
          var app = isNullOrUndefined(args.data[0]) ? args.data : args.data[0];
          var resource = {
            summary: app.Subject,
            location: app.Location,
            description:app.Description,
            start: {
              dateTime: app.StartTime
            },
            end: {
              dateTime: app.EndTime
            }
          };
          window.gapi.client.load("calendar", "v3", function() {
            var request = window.gapi.client.calendar.events.insert({
              calendarId: "coskunlab2020@gmail.com", // use your Google calendar’s calendar id. 
              resource: resource
            });
            request.execute(function() {
              var sch = document.querySelector(".e-schedule").ej2_instances[0];
              sch.refreshEvents();
            });
          });
        }
        if (args.requestType == "eventChange") {
          args.cancel = true;
          var app = isNullOrUndefined(args.data[0]) ? args.data : args.data[0];
          var resource = {
            id: app.Id,
            summary: app.Subject,
            location: app.Location,
            description: app.Description,
            start: {
              dateTime: app.StartTime
            },
            end: {
              dateTime: app.EndTime
            }
          };
          window.gapi.client.load("calendar", "v3", function() {
            var request = window.gapi.client.calendar.events.update({
              calendarId: "coskunlab2020@gmail.com",
              eventId: resource.id,
              resource: resource
            });
            request.execute(function() {
              var sch = document.querySelector(".e-schedule").ej2_instances[0];
              sch.refreshEvents();
            });
          });
        }
        if (args.requestType == "eventRemove") {
          args.cancel = true;
          var app = isNullOrUndefined(args.data[0]) ? args.data : args.data[0];
          var resource = {
            id: app.Id,
            summary: app.Subject,
            location: app.Location,
            description: app.Description,
            start: {
              dateTime: app.StartTime
            },
            end: {
              dateTime: app.EndTime
            }
          };
          window.gapi.client.load("calendar", "v3", function() {
            var request = window.gapi.client.calendar.events.delete({
              calendarId: "coskunlab2020@gmail.com",
              eventId: resource.id
            });
            request.execute(function() {
              var sch = document.querySelector(".e-schedule").ej2_instances[0];
              sch.refreshEvents();
            });
          });
        }
      }
      render() {
        return (
           
          <div className="schedule-control-section">
            <div className="col-lg-12 control-section">
              <div className="control-wrapper drag-sample-wrapper">             
                <div className="schedule-container">
                  <ScheduleComponent
                    readonly={this.state.bool==true ? false : true}
                    ref={schedule => (this.scheduleObj = schedule)}
                    width="100%"
                    height="650px"
                    eventSettings={{ dataSource: this.dataManger }}
                    dataBinding={this.onDataBinding.bind(this)}
                    actionBegin={this.onActionBegin.bind(this)}
                  >
                    <ViewsDirective>
                      <ViewDirective option="Day" />
                      <ViewDirective option="Week" />
                      <ViewDirective option="WorkWeek" />
                      <ViewDirective option="Month" />
                      <ViewDirective option="Agenda" />
                    </ViewsDirective>
                    <Inject
                      services={[
                        Day,
                        Week,
                        WorkWeek,
                        Month,
                        Agenda,
                        Resize,
                        DragAndDrop
                      ]}
                    />
                   
                  </ScheduleComponent>
                  <button id="signin">authorize and load</button>

                </div>
              </div>
            </div>
          </div>
        );
      }
}










export default Schedule;