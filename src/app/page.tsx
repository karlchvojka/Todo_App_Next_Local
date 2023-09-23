// NextJS Specific
"use client"

// Framework Imports
import React, { useEffect, useState } from 'react'

// Component Imports
import AddTaskDialog from '@/modules/AddTaskDialog/AddTaskDialog'
import Header from '@/modules/Header/Header'
import TodoList from '@/modules/TodoList/TodoList'

// Hook Imports
import getLocalStorage from '@/hooks/getLocalStorage'

// Material UI Specific Imports
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Box,
  Link,
  Paper,
  Typography 
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

// Material UI Specific Declarations:

/**
 * Set theme to darkmode.
 */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

/**
 * The Home component
 */
export default function Home() {
  // State declarations
  const [formDialogOpen, setFormDialogOpen] = useState(false)
  const [todoList, setTodoList] = useState([])
  
  useEffect(() => {
    setTodoList(getLocalStorage('todoList'))
  }, [])
  
  // Module Declarations

  /**
   * Handles the click event for open button
   */
  const handleClickOpen = () => {
    setFormDialogOpen(true)
  }

  /**
   * Handles the click event for open button
   */
  const handleClose = () => {
    setFormDialogOpen(false)
  }

  return (
    <ThemeProvider theme={ darkTheme }>
      <Header handleClick={ handleClickOpen } />
      <AddTaskDialog 
        handleClose={ handleClose }
        open={ formDialogOpen } 
      />
      <Box className='appWrap' sx={{ m: 1 }}>
        <Grid container spacing={ 1 }>
          <Grid xs={ 12 }>
            <Paper elevation={ 1 } sx={{ p: 1 }}>
              <Typography
                align='center'
                gutterBottom
                sx={{
                  fontWeight: 700, 
                  textTransform: 'uppercase'
                }}
                variant='h2'
              >
                Todo App
              </Typography>
              <Typography
                align='center'
                gutterBottom
                variant='body1'
              >
                Thank you for trying out my Todo App.
              </Typography>
              <Typography
                align='center'
                gutterBottom
                variant='body1'
              >
                This Todo app was built to practice building an app with NextJS, TypeScript, TailWindCSS, and Material UI.
              </Typography>
              <Typography
                align='center'
                gutterBottom
                variant='body1'
              >
                This is NOT a Production App.
              </Typography>
              <Typography
                align='center'
                gutterBottom
                variant='body1'
              >
                - Karl Chvojka
              </Typography>
              <Typography
                align='center'
                gutterBottom
                variant='body1'
              >
                <Link href="https://github.com/karlchvojka" sx={{ m:1 }}>Github</Link>
                <Link href="https://www.linkedin.com/in/karlchvojka/">LinkedIn</Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid xs={ 12 } sm={ 12 } md={ 6 }>
            <TodoList
              listComplete={ false }
              title={ 'Current Todos' }
              todos={ todoList }
            />
          </Grid>
          <Grid xs={ 12 } sm={ 12 } md={ 6 }>
            <TodoList
              listComplete={ true }
              title={ 'Completed Todos' }
              todos={ todoList }
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
