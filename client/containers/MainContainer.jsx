import React from 'react';
import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
} from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import { submit, handleChange } from '../reducers/scheduleReducers';

export const MainContainer = (props) => {
  const studentName = useSelector((state) => state.schedule.studentName);
  const appointmentTime = useSelector(
    (state) => state.schedule.appointmentTime
  );
  const teacherData = useSelector((state) => state.schedule.teacherData[0]);
  const { name, availability } = teacherData;
  const teacherName = name;
  const dispatch = useDispatch();

  const availabilityOptions = [];
  availability.forEach((time, i) => {
    availabilityOptions.push(
      <MenuItem key={`Time Option ${i}`} value={time}>
        {' '}
        {time}{' '}
      </MenuItem>
    );
  });

  return (
    <Box
      sx={{
        width: 1000,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 3,
      }}
    >
      <Typography variant="h5" component="h2">
        Please schedule your appointments with {studentName}'s teachers. They
        look forward to meeting with you!
      </Typography>
      <Box
        sx={{
          width: 500,
          height: 300,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 150,
            display: 'flex',
            alignSelf: 'center',
          }}
        >
          <Typography variant="p">{teacherName}:</Typography>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="appointment-scheduler">Time</InputLabel>
            <Select
              labelId="appointment-time-selector"
              id="appointment-time-selector"
              value={appointmentTime}
              onChange={(event) => dispatch(handleChange(event.target.value))}
              autoWidth
              label="Time"
            >
              <MenuItem value="None">None</MenuItem>
              {availabilityOptions}
              {/* <MenuItem value="6:00PM - 6:10PM">6:00PM - 6:10PM</MenuItem>
              <MenuItem value="6:10PM - 6:20PM">6:10PM - 6:20PM</MenuItem>
              <MenuItem value="6:20PM - 6:30PM">6:20PM - 6:30PM</MenuItem>
              <MenuItem value="6:30PM - 6:40PM">6:30PM - 6:40PM</MenuItem>
              <MenuItem value="6:40PM - 6:50PM">6:40PM - 6:50PM</MenuItem>
              <MenuItem value="6:50PM - 7:00PM">6:50PM - 7:00PM</MenuItem> */}
            </Select>
            <Button
              type="submit"
              variant="contained"
              onClick={(studentName, teacherName, appointmentTime) => {
                const payload = { studentName, teacherName, appointmentTime };
                dispatch(submit(payload));
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
