// NextJS Specific
"use client"

// Framework Imports
import React, { useState } from 'react'

// Component Imports
import EditTaskDialog from '@/modules/EditTaskDialog/EditTaskDialog'

// Material UI Specific Imports
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography 
} from '@mui/material'

// Method Imports
import dayjs, { Dayjs } from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)
dayjs.updateLocale('en', { weekStart: 0 })
dayjs.locale('en')
dayjs.extend(utc)
dayjs.extend(timezone)
const timeZone = dayjs.tz.guess()
dayjs.tz.setDefault(timeZone)

// Hook Imports
import getLocalStorage from '@/hooks/getLocalStorage'
import pushLocalStorage from '@/hooks/pushLocalStorage'

// Types
interface TodoItemProps {
  data: {
    complete: boolean;
    completedDate?: string;
    desc?: string;
    deadline: string;
    id: string;
    title: string;
  }
}

const TodoItem = ({ data }: TodoItemProps) => {
  // State Declarations
  const [editDialog, setEditDialog] = useState(false)
  const [todoDate, setTodoDate] = useState(dayjs(data.deadline).tz(timeZone) )

  // Method Declarations

  /**
   * Event handler for the "Complete" button click event
   */
  const handleCompleteClick = () => {
    const currentTodos = getLocalStorage('todoList')
    let currentItem = data.complete ? { ...data, complete: false } : { ...data, complete: true }
    let newList = currentTodos.map((item: TodoItemProps["data"]) => (item.id === currentItem.id ? { ...item, ...currentItem }: item))
    pushLocalStorage('todoList', JSON.stringify(newList))
    window.location.reload()
  }

  /**
   * Event handler for the "close" button click event
   */
  const handleDialogClose = () => {
    setEditDialog(false);
  }

  /**
   * Event handler for the "edit" button click event
   */
  const handleDialogOpen = () => {
    setEditDialog(true)
  }

  /**
   * Handles the deleting of a todo
   * @param id ID String of the todo to be deleted
   */
  const handleDelete = (id: string) => {
    // Get current Todos
    const currentTodos = getLocalStorage('todoList')

    // Filter out the one we want to delete
    let filteredTodos = currentTodos.filter((item: { id: string; }) => item.id !== id)

    // Push the result to LocalStorage
    pushLocalStorage('todoList', JSON.stringify(filteredTodos))
    window.location.reload()
  }

  return (
    <Card
      key={data.id}
      variant='outlined'
      sx={{ p: 1, mb: 1 }}
    >
      <CardContent>
        <EditTaskDialog
          data={ data }
          handleClose={ handleDialogClose }
          open={editDialog}
        />
        <Typography
          sx={{ fontSize: '20px' }}
          variant='h3'
        >
          { data.title }
        </Typography>
        {
          data.complete ? (
            <Typography
              sx={{
                color: '#A0A0A0',
                display: 'flex',
                fontSize: '12px',
                fontStyle: 'italic',
                justifyContent: 'space-between',
                wordWrap: 'break-word'
              }}
            >
              <span>Deadline: { todoDate.local().format('MMMM D, YYYY h:mm A') }</span><span>Completed Date: { data.completedDate }</span>
            </Typography>
          ) : (
            <Typography sx={{
              color: '#A0A0A0',
              fontSize: '12px',
              fontStyle: 'italic',
              wordWrap: 'break-word'
              }}
            >
              Deadline: { todoDate.local().format('MMMM D, YYYY h:mm A') }    
            </Typography> 
          )
        }
        {
          data.desc ? (
            <>
              <Typography variant='h4' sx={{ fontSize: '18px', mt: 1 }}>
                Description:
              </Typography>
              <Typography sx={{ fontSize: '146x' }}>
              { data.desc }
              </Typography>
            </>
          ) : (
            null  
          )
        }
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', borderTop: '1px solid #646464' }}>
        <section>
          <Button variant="outlined" sx={{ minWidth: 'auto' }} onClick={ handleDialogOpen }>Edit</Button>
        </section>
        <section>
          <Button variant="outlined" sx={{ minWidth: 'auto', marginRight: 1 }} onClick={ handleCompleteClick }>{ data.complete ? <CloseIcon /> : <DoneIcon /> }</Button>
          <Button variant="outlined" sx={{ minWidth: 'auto' }} onClick={ () => handleDelete(data.id) }><DeleteIcon /></Button>
        </section>
      </CardActions>
    </Card>
  )
}

export default TodoItem