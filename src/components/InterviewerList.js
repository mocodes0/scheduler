import React from 'react';
import "components/InterviewerList.scss"
import InterviewerListItem from './InterviewerListItem';
export default function InterviewerList(props) {
  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={(e) => props.onChange(interviewer.id)}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
} 



// export default function InterviewerList (props) {
//   // const onChange = (interviewer) => {
//   //   props.setInterviewer(interviewer)
//   // }
// return (
//   <section className="interviewers">
//   <h4 className="interviewers__header text--light">Interviewer</h4>
//   <ul className="interviewers__list">
//     {props.interviewers.map((interview) =>{
//       return (
//         <InterviewerListItem
//         id={interview.id}
//         name={interview.name}
//         avatar={interview.avatar}
//         setInterviewer={props.setInterviewer}
//         selected={interview.id === props.interviewer}
//         />
//         // this does not work if code breaks reference below
//       //   <InterviewerListItem 
//       //   key={interviewer.id}
//       //   name={interviewer.name}
//       //   avatar={interviewer.avatar}
//       //   selected={interviewer.id === value}
//       //   setInterviewer={() => onChange(interviewer.id)}    
//       // />
//       )
//     })}
//   </ul>
// </section>
// );
// }