
const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
export default function reducer (state, action) {
  switch (action.type) {
    case SET_DAY:
      return { ...state, day: action.day }
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }
    case SET_INTERVIEW: {
      const { id, interview } = action;
      return {
        ...state,
        appointments: {
          ...state.appointments, 
          [id]: {
            ...state.appointments[action.id],
            interview: action.interview ? { ...interview } : null
        }
        }
      }
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export {
  SET_APPLICATION_DATA,
  SET_DAY,
  SET_INTERVIEW
}