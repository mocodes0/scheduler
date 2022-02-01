import React from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointment/index";
import{ getAppointmentsForDay, getInterview, getInterviewersForDay }from "../helpers/selectors"
import useApplicationData from "hooks/useApplicationData"

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers:{}
  // });



  // const cancelInterview = (id) => {
  //   return axios.delete(`/api/appointments/${id}`)
  // }



  // function bookInterview(id, interview) {

  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   setState({...state,appointments });
  //   return axios.put(`/api/appointments/${id}`,  {
  //    interview:{ student:interview.student,
  //      interviewer: interview.interviewer}
  //   } )
  //   //take student, interviewer
  
  // } 
  // const setDay = day => setState({ ...state, day });
  
  
  // useEffect(() => {
  //   let promiseDays = axios.get(`/api/days`);
  //   let promiseAppointments = axios.get(`/api/appointments`);
  //   let promiseInterviewers = axios.get(`/api/interviewers`);


  //   Promise.all([
  //     promiseDays,
  //     promiseAppointments,
  //     promiseInterviewers
  //   ]).then((all) => {
  //     setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  //   });
  // },[]);
    console.log("the interviewer data",state.interviewers)
    const filteredAppointments = getAppointmentsForDay(state, state.day);
    const appointmentList = filteredAppointments.map(appointment => {
      console.log("appointment ", appointment)

      const interview = getInterview(state, appointment.interview);

      console.log("interview",interview)

      const interviewersList = getInterviewersForDay(state, state.day)
      console.log("interviewersList", interviewersList)
      return ( 
      <Appointment 
      interview={interview} 
      time={appointment.time} 
      key={appointment.id} {...appointment} 
      interviewers={interviewersList}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
      />);
    });
  
  
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
          <DayList days={state.days} day={state.day} setDay={setDay} />
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
// The schedule is made up of a list of <Appointment /> components. To create these, we need to iterate over the appointments array, passing the appropriate props down. Currently, each Appointment needs to have at minimum a props.time value. When the data contains an interview key, we pass it as a prop. This looping pattern should be more familiar to us since we have now built a few different types of lists.

// In the schedule <section> of our Application component, map over the appointments array to create a list in the schedule section.

// Just like in our stories earlier, due to the CSS, we'll need to add one last Appointment to the end of the list representing the last appointment for the day. We should also check the console to make sure each Appointment has a key.