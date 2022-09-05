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

export const AppointmentSelectorDisplay = (props) => {
  const appointmentTime = useSelector(
    (state) => state.schedule.appointmentTime
  );

  const teacherData = props;
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
        width: 500,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormControl
        sx={{
          m: 1,
          minWidth: 80,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Typography variant="p">{teacherName}:</Typography>
        <InputLabel id="appointment-scheduler">Time</InputLabel>
        <Select
          labelId="appointment-time-selector"
          id="appointment-time-selector"
          value={appointmentTime}
          onChange={(event) => dispatch(handleChange(event.target.value))}
          autoWidth
          label="Time"
          sx={{ bgcolor: '#dbeaf9' }}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {availabilityOptions}
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
  );
};
