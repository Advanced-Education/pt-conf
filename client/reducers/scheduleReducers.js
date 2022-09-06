import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  studentId: null,
  studentName: '',
  teacherData: [
    {
      name: '',
      availability: [
        '6:00PM - 6:10pm',
        '6:10PM - 6:20pm',
        '6:20PM - 6:30pm',
        '6:30PM - 6:40pm',
        '6:40PM - 6:50pm',
        '6:50PM - 7:00pm',
      ],
    },
  ],
  appointmentTime: 'None',
};

export const scheduleSlice = new createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.appointmentTime = action.payload;
    },

    submit: (state, action) => {
      const { teacherName, appointmentTime, studentName } = action.payload;
      for (let i = 0; i < state.teacherData.length; i++) {
        if (state.teacherData[i].name === teacherName) {
          // SA Do we want to keep this if statement to make sure the appointment is still there incase another user selected the same time?
          const currentTeacherData = state.teacherData[i];
          const availableAppointments = currentTeacherData.availability;
          if (availableAppointments.indexOf(appointmentTime) !== -1) {
            const index = availableAppointments.indexOf(appointmentTime);
            state.teacherData[i].availability = [
              ...state.teacherData[i].availability.slice(0, index),
              ...state.teacherData[i].availability.slice(index + 1),
            ];
          }
        }
      }
      if (appointmentTime !== 'None') {
        axios
          .post('/update-teacher', {
            teacherName,
            appointmentTime,
            studentName,
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    logout: (state, action) => {
      //SA not sure how to perform this action with clearing cookies etc
      state = initialState;
    },
    loginSuccess: (state, action) => {
      state.studentName = action.payload.studentName;
      state.teacherData = [{name: action.payload.teacherData[0], availability: [ 
        '6:00PM - 6:10pm',
        '6:10PM - 6:20pm',
        '6:20PM - 6:30pm',
        '6:30PM - 6:40pm',
        '6:40PM - 6:50pm',
        '6:50PM - 7:00pm',]}];
      console.log(state.teacherData);
    }
  },
});

export const { handleChange, submit, logout, loginSuccess } = scheduleSlice.actions;

export default scheduleSlice.reducer;
