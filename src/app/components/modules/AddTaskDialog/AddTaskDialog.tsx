"use client"

// Framework Imports
import { FunctionComponent, MouseEventHandler } from 'react';

// CSS Imports

// MUI Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

// Method Imports
import dayjs, { Dayjs } from 'dayjs'

// Types Declarations
interface AddTaskDialogProps {
  handleClose?: MouseEventHandler;
  open: boolean;
}
const AddTaskDialog: FunctionComponent<AddTaskDialogProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Add a Todo:</DialogTitle>
      <DialogContent sx={{ width: 1 }}>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
        />
        <TextField
          fullWidth
          id="desc"
          label="Description"
          margin="dense"
          multiline
          maxRows={4}
        />
        <LocalizationProvider 
          dateAdapter={AdapterDayjs}
        >
          <DateTimePicker
            label="Due Date"
            sx={{ mt: 1, width: 1 }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', mx: 2, mb: 2 }}>
        <Button variant="outlined">Submit</Button>
        <Button onClick={handleClose} variant="outlined">Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTaskDialog