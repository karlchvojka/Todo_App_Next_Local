// Framework Imports
"use client"
import React, { MouseEvent, useState } from 'react'

// Component Imports
import AddTaskDialog from '@/modules/AddTaskDialog/AddTaskDialog'
import Header from '@/modules/Header/Header'
import TodoList from '@/modules/TodoList/TodoList'

// Material UI Imports
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import {
  Box,
  Link,
  Paper,
  Typography 
} from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const testTodos = [
  {
    complete: false,
    deadline: '2023-06-24',
    id: 1,
    title: 'First not complete',
  },
  {
    complete: false,
    deadline: '2023-06-25',
    desc: 'This is a short description',
    id: 3,
    title: 'Second not complete',
  },
  {
    complete: true,
    completeDate: '2023-06-12',
    deadline: '2023-06-27',
    id: 4,
    title: 'Second complete',
  },
  {
    complete: true,
    completeDate: '2023-06-11',
    deadline: '2023-06-24',
    desc: 'This is a short description',
    id: 2,
    title: 'First complete',
  },
]

export default function Home() {
  // State declarations
  const [formDialogOpen, setFormDialogOpen] = useState(false)

  // Module Declarations
  const handleClickOpen = (e: MouseEvent): void => {
    setFormDialogOpen(true);
  }

  const handleClose = () => {
    setFormDialogOpen(false);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Header handleClick={handleClickOpen} />
      <AddTaskDialog open={formDialogOpen} handleClose={handleClose} />
      <Box className='appWrap' sx={{ m: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <Paper elevation={1} sx={{ p: 1 }}>
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
          <Grid xs={12} sm={12} md={6}>
            <TodoList
              listComplete={false}
              title={'Current Todos'}
              todos={testTodos}
            />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <TodoList
              listComplete={true}
              title={'Completed Todos'}
              todos={testTodos}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
