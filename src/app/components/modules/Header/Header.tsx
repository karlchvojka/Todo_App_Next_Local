"use client"
import { FunctionComponent, MouseEventHandler } from 'react';

// CSS Imports

// MUI Imports
import {
  AppBar,
  Button,
  Toolbar,
  Typography 
} from '@mui/material'

// Types
interface HeaderProps {
   handleClick?: MouseEventHandler;
}

const Header: FunctionComponent<HeaderProps> = ({ handleClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo App
        </Typography>
        <Button variant="outlined" onClick={handleClick}> 
          Add Todo
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header