import React from 'react';
import "components/InterviewerList.scss"
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList (props) {
return (
  <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">
    {props.interviewers.map((interview) =>{
      return (
        <InterviewerListItem
        id={interview.id}
        name={interview.name}
        avatar={interview.avatar}
        setInterviewer={props.setInterviewer}
        selected={interview.id === props.interviewer}
        />
       
      )
    })}
  </ul>
</section>
);
}