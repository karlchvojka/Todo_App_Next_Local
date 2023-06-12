// Framework Imports
"use client"

// CSS Imports

// MUI Imports
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography 
} from '@mui/material'

// Types
interface TodoItemProps {
  complete: boolean;
  completedDate?: string;
  desc?: string;
  deadline: string;
  id: number;
  title: string;
}

const TodoItem = ({ title, complete, completedDate, desc, deadline, id }: TodoItemProps) => {
  return (
    <Card
      key={id}
      variant='outlined'
      sx={{ p: 1, mb: 1 }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: '20px' }}
          variant='h3'
        >
          {title}
        </Typography>
        {
          complete ? (
            <>
              <Typography
                sx={{
                  color: '#A0A0A0',
                  display: 'flex',
                  fontSize: '12px',
                  fontStyle: 'italic',
                  justifyContent: 'space-between',
                  wordWrap: 'break-word'
                }}>
                <span>Deadline: {deadline}</span><span>Completed Date: {completedDate}</span>
              </Typography>
            </>
          ) : (
              <Typography sx={{
                color: '#A0A0A0',
                fontSize: '12px',
                fontStyle: 'italic',
                wordWrap: 'break-word'
              }}>
              Deadline: {deadline}    
            </Typography> 
          )
        }
        {
          desc ? (
            <>
              <Typography variant='h4' sx={{ fontSize: '18px', mt: 1 }}>
                Description:
              </Typography>
              <Typography sx={{ fontSize: '146x' }}>
              {desc}
              </Typography>
            </>
          ) : (
            null  
          )
        }
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', borderTop: '1px solid #646464' }}>
        <Button variant="outlined" sx={{ minWidth: 'auto' }}>Edit</Button>
        <Button variant="outlined" sx={{ minWidth: 'auto' }}><DeleteIcon /></Button>
      </CardActions>
    </Card>
  )
}

export default TodoItem