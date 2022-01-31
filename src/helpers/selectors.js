export function getAppointmentsForDay(state, day) {
  const filteredAppointments = state.days.filter((d) => d.name === day);

  let appointments = [];
  if (filteredAppointments.length) {
    appointments = filteredAppointments[0].appointments.map(
      (x) => state.appointments[x]
    );
  }
  return appointments;
} 
export function getInterview(state, interview) {
  if (interview) {
    const stateUpdated = {
      ...interview,
      interviewer: state.interviewers[interview.interviewer]
    };
    return stateUpdated;
  } else {
    return null;
  }
}
export function getInterviewersForDay(state, day) {
  if (!state.interviewers) return [];
  const filteredDay = state.days.filter(mappedDay => mappedDay.name === day)[0];

  if (!filteredDay) return [];

  if (!filteredDay.interviewers) return [];

  const result = Object.values(state.interviewers).filter(interviewer =>
    filteredDay.interviewers.includes(interviewer.id)
  );
  return result;
}
