"use client"

// Framework Imports
import React, { MouseEvent, useState } from 'react'

// Component Imports
import AddTaskDialog from './components/modules/AddTaskDialog/AddTaskDialog'
import Header from './components/modules/Header/Header'

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
            <Paper elevation={1} sx={{ p: 1 }}>
              <h2>Current Todos:</h2>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
