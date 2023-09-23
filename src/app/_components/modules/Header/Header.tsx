// NextJS Specific
"use client"

// Framework Imports
import { MouseEventHandler } from 'react'

// Material UI Specific Imports
import {
  AppBar,
  Button,
  Toolbar,
  Typography 
} from '@mui/material'

// Types Declarations
interface HeaderProps {
   handleClick?: MouseEventHandler;
}

const Header = ({ handleClick }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo App
        </Typography>
        <Button variant="outlined" onClick={ handleClick }> 
          Add Todo
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header