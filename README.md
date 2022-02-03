# Interview Scheduler

 Scheduler is a React application made by Mohamed Bashir that allows users to book, cancel and edit interviews throughout the weekdays. We combine a concise API with a WebSocket server to build a realtime experience. Scheduler was built with an extensive unit, integration, and end-to-end testing using Jest, Storybook, and Cypress. Please make sure your database is up and running, as well as the server to ensure you have the proper experience. Enjoy!

## Screenshots

!["Appointments"](https://github.com/mocodes0/scheduler/blob/master/docs/Interview-%20HomePage.png)
!["Delete Appointments"](https://github.com/mocodes0/scheduler/blob/master/docs/EditAppointments.png)

## Key Features on the Scheduler App
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Technical Specifications
- React
- Webpack, Babel
- Axios, WebSockets
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library
- The Scheduler client application created using Create React App.   
- Express is the basis for the Scheduler API server application.


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
