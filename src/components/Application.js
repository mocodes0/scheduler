import React, {useState, useEffect} from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment"
import {getAppointmentsForDay,}  from  "../helpers/selectors"

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers:{}
  });
  
  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {
    let promiseDays = axios.get(`/api/days`);
    let promiseAppointments = axios.get(`/api/appointments`);
    let promiseInterviewers = axios.get(`/api/interviewers`);


    Promise.all([
      promiseDays,
      promiseAppointments,
      promiseInterviewers
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[]);
    console.log("the interviewer data",state.interviewers)
    const filteredAppointments = getAppointmentsForDay(state, state.day);
    const appointmentList = filteredAppointments.map(appointment => {
  
    return <Appointment  time={appointment.time} key={appointment.id} {...appointment} />;

    })

  return (
    <main className="layout">
    <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
         
<DayList 
 days={state.days}
 day={state.day}
onChange={setDay} 
/>
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
    </section>
    <section className="schedule">{appointmentList}</section>
  </main>
  );
}
