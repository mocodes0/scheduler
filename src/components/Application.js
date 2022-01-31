import React, {useState, useEffect} from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment"
import {getAppointmentsForDay, getInterview}  from  "../helpers/selectors"


export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers:{}
  });

  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {
    let daysUrl = axios.get(`/api/days`);
    let appointmentsUrl = axios.get(`/api/appointments`);
    let interviewerUrl = axios.get(`/api/interviewers`);


    Promise.all([
      daysUrl,
      appointmentsUrl,
      interviewerUrl
    ]).then((response) => {
      const [daysData, appointmentData, interviewerData] = response
      setState(prev => ({ ...prev, days: daysData.data, appointments: appointmentData.data, interviewers: interviewerData.data}));
    });
  },[]);
    console.log("the interviewer data",state.interviewers)
    const filteredAppointments = getAppointmentsForDay(state, state.day);
    const appointmentList = filteredAppointments.map(appointment => {
      const interview = getInterview(state, appointment.interview);
    return <Appointment    key={appointment.id}
    id={appointment.id}
    time={appointment.time}
    interview={interview} />;

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
