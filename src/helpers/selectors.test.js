
// Right now we don't have getInterview selector function, so we'll need to implement it! This function will return an object that contains the interview data if it is passed an object that contains an interviewer.

export function getInterview(state,interview) {
  if (interview) {
    const stateUpdated = {...interview, interviewer:state.interviewers[interview.interviewer]}//not right?
    console.log("state.interviewer:---->",state.interviewers)
    console.log("interviewer:---->",interview)

    return stateUpdated
  } else {
    return null
  }
}
 

export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter( mappedDay => mappedDay.name === day);
  if (!filteredDays.length) { return []; }
  const appointmentArray = [];
  for (let item in filteredDays[0].appointments){
 
    appointmentArray.push(state.appointments[filteredDays[0].appointments[item]])
  }
return appointmentArray
}





export  function getInterviewersForDay(state, day) {
  if (!state.interviewers) return [];
  const filteredDay = state.days.filter( mappedDay => mappedDay.name === day)[0];

  if (!filteredDay) return [];

  if (!filteredDay.interviewers) return [];

  const result =  Object.values(state.interviewers).filter( interviewer => filteredDay.interviewers.includes(interviewer.id))
  console.log("result",result)
  return result;
}
//const appointmentArray = []
// const interviewerArray = []
// const stateInterviewersArray = []

// for (let appointmentArr of filteredDays) {
//   //console.log("Array of appointment ids --->>>",appointmentArr.appointments)
//   for (let appointmentId of appointmentArr.appointments){
//      //console.log("each appointment id",appointmentId)
     
//        //console.log("interview",state.appointments[appointmentId].interview)  
//        if (state.appointments[appointmentId].interview) {
//           interviewerArray.push(state.appointments[appointmentId].interview.interviewer)
//        }
//   //appointmentArray.push(appointmentId)
// }
// }
// //console.log("the interviwer Array",interviewerArray)
// for (let interviewerId of interviewerArray) {
// //console.log("interviewer",state.interviewers[interviewerId])
// for (let stateInterviewer in state.interviewers){
// //console.log("stateInterviewer ids",stateInterviewer)
// stateInterviewersArray.push(parseInt(stateInterviewer))
// }

// }
// //console.log("state interviewers",stateInterviewersArray)
// for (let interviewerID of interviewerArray) {
//   //console.log("-->",interviewerID)

// for (let item of interviewerArray){
//   if (stateInterviewersArray.includes(interviewerID)){
//  // console.log("skipsloop---", item)
//   stateInterviewersArray.splice( stateInterviewersArray.indexOf(item), 1 );
// }
// }  
// }
// //console.log("state interviewers after splice",stateInterviewersArray)
// const finalInterviewerArray = []
// for (let finalInterviewer of stateInterviewersArray){
//  finalInterviewerArray.push(state.interviewers[finalInterviewer])
// }
// //console.log("appointmentId",appointmentArray)
// // for ( let arrayItem in appointmentArray){
  
// //   console.log("state.interviewers at array item",state.interviewers[arrayItem][arrayItem])

// // }
// //console.log("state.interviewers",state.interviewers)
// console.log("the answer_____",finalInterviewerArray)
// return finalInterviewerArray
 //get unique appoint ids array that dont exist in state.interviewers and retur final array










//{
//   const appointmentArr = getAppointmentsForDay(state, day)
//   if (!appointmentArr.length) { return []; }
//   const interviewersArray = [];
//   console.log("mapped ---> ",appointmentArr)
  
//   for (let item of appointmentArr){
//  //console.log(item.interview)
//    if ( item.interview ) 
//    {interviewersArray.push(state.interviewers[item.interview.interviewer])}
//   }
  //console.log(interviewersArray,"interviewersArray")

// return interviewersArray}