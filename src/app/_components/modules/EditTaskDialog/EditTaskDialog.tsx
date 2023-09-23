// NextJS Specific
"use client"

// Framework Imports
import { FunctionComponent, useState } from 'react'

// Library Imports
import dayjs, { Dayjs } from 'dayjs'

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

// Utility Imports
import getLocalStorage from '@/utils/getLocalStorage'
import pushLocalStorage from '@/utils/pushLocalStorage'
import { getCurrentDate } from '@/utils/dateFormat'

// DayJS Settings
const timeZone = getCurrentDate()

// Types Declarations
import { EditTaskDialogProps } from '@/types/formTypes'


const EditTaskDialog: FunctionComponent<EditTaskDialogProps> = ({ data, handleClose, open }) => {
  // State Declarations
  const [formData, setFormData] = useState({
    desc: data.desc,
    deadline: data.deadline,
    id: data.id,
    title: data.title
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
    setFormData(newState)
  }

  /**
   * Handles onChanges of the Date field
   * @param _newDate Dayjs date object
   */
  const handleDateChange = (target: Dayjs | null) => {
    const currentDate = dayjs(target, timeZone)
    const newState = { ...formData, deadline: currentDate.local().format() }
    setFormData(newState)
  }

  /**
   * Handles the Submit event
   * @param e Event object
   */
  const handleSubmit = (e: React.SyntheticEvent) => {
    const currentTodoList = getLocalStorage('todoList')
    const currentTodo = {
      complete: false,
      deadline: formData.deadline,
      desc: formData.desc,
      id: formData.id,
      title: formData.title,
    }
    let newList = currentTodoList.map((item: EditTaskDialogProps["data"]) => (item.id === currentTodo.id ? { ...item, ...currentTodo }: item))
    pushLocalStorage('todoList', JSON.stringify(newList))
  }
  return (
    <Dialog fullWidth maxWidth="sm" open={ open } onClose={ handleClose }>
      <DialogTitle>Edit a Todo:</DialogTitle>
      <DialogContent sx={{ width: 1 }}>
        <form id="edit-todo-form" onSubmit={ handleSubmit }>
          <TextField
            fullWidth
            id="title"
            label="Title"
            margin="dense"
            defaultValue={ data.title }
            onChange={ (event) => handleTextOnChange(event, 'title') }
            type="text"
          />
          <TextField
            fullWidth
            id="desc"
            label="Description"
            margin="dense"
            maxRows={ 4 }
            defaultValue={ data.desc }
            multiline
            onChange={ (event) => handleTextOnChange(event, 'desc') }
          />
          <LocalizationProvider 
            dateAdapter={AdapterDayjs}
          >
            <DateTimeField
              defaultValue={ dayjs(data.deadline) }
              label="Due Date"
              onChange={ (newValue) => handleDateChange(newValue) }
              sx={{ mt: 1, width: 1 }}
            />
          </LocalizationProvider>
        </form>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', mx: 2, mb: 2 }}>
        <Button form="edit-todo-form" type="submit" variant="outlined">Submit</Button>
        <Button onClick={ handleClose } variant="outlined">Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditTaskDialog