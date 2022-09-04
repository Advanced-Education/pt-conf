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
          if (state.teacherData[i].indexOf(appointmentTime) !== -1) {
            const index = state.teacherData[i].indexOf(appointmentTime);
            state.teacherData[i] = [
              ...state.teacherData[i].slice(0, index),
              ...state.teacherData[i].slice(index + 1),
            ];
          } 
        }
      }

      axios
        .post('/update-teacher', { teacherName, appointmentTime, studentName })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export const { handleChange, submit } = scheduleSlice.actions;

export default scheduleSlice.reducer;
