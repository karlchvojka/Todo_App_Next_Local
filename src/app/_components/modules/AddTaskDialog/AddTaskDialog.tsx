// NextJS Specific
"use client"

// Framework Imports
import { FunctionComponent, MouseEventHandler, useState } from 'react';

// Material UI Specific Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { DateTimeField } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

// Method Imports
import getLocalStorage from '@/hooks/getLocalStorage'
import pushLocalStorage from '@/hooks/pushLocalStorage'
import { getCurrentDate } from '@/utils/dateFormat'

import dayjs, { Dayjs } from 'dayjs'

// DayJS Settings
const timeZone = getCurrentDate()
dayjs.tz.setDefault(timeZone)

// Types Declarations
import { AddTaskDialogProps } from '@/types/formTypes'


const AddTaskDialog: FunctionComponent<AddTaskDialogProps> = ({ open, handleClose }) => {
  // State Declarations
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    deadline: ""
  })

  const [dateVal, setDateVal] = useState<Dayjs | null>(dayjs().tz(timeZone))

  // Method Declarations

  /**
   * Handles Text Field Changes
   * @param e Event of addding text to a field
   * @param fieldId Identifies which field is being changed
   */
  const handleTextOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldId: string) => {
    const newState = { ...formData, [fieldId]: e.target.value }
    setFormData( newState )
  }

  /**
   * Handles changes in the Date field
   * @param _newDate Dayjs date object
   */
  const handleDateChange = (target: Dayjs | null ) => {
    const currentDate = dayjs(target, timeZone)
    const newState = { ...formData, deadline: currentDate.local().format() }
    setFormData(newState)
  }

  /**
   * Handles Submitting the form
   * @param e Event object
   */
  const handleSubmit = (e: React.SyntheticEvent) => {
    let currentTodoList = getLocalStorage('todoList')
    const currentTodo = {
      complete: false,
      deadline: formData.deadline,
      desc: formData.desc,
      id: Math.random().toString(36).substring(1, 20),
      title: formData.title,
    }
    currentTodoList.push(currentTodo)
    pushLocalStorage('todoList', JSON.stringify(currentTodoList))
  }
  
  return (
    <Dialog fullWidth maxWidth="sm" open={ open } onClose={ handleClose }>
      <DialogTitle>Add a Todo:</DialogTitle>
      <DialogContent sx={{ width: 1 }}>
        <form id="add-todo-form" onSubmit={ handleSubmit }>
          <TextField
            autoFocus
            fullWidth
            id="title"
            label="Title"
            margin="dense"
            onChange={ (event) => handleTextOnChange(event, 'title') }
            type="text"
          />
          <TextField
            fullWidth
            id="desc"
            label="Description"
            margin="dense"
            maxRows={ 4 }
            multiline
            onChange={ (event) => handleTextOnChange(event, 'desc') }
          />
          <LocalizationProvider 
            dateAdapter={AdapterDayjs}
          >
            <DateTimeField
              label="Due Date"
              disablePast
              value={dateVal}
              onChange={ (newValue) => handleDateChange(newValue) }
              sx={{ mt: 1, width: 1 }}
            />
          </LocalizationProvider>
        </form>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', mx: 2, mb: 2 }}>
        <Button form="add-todo-form" type="submit" variant="outlined">Submit</Button>
        <Button onClick={handleClose} variant="outlined">Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTaskDialog