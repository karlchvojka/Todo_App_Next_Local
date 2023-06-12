// Framework Imports
"use client"

// Component Imports
import TodoItem from '@/elements/TodoItem/TodoItem'

// CSS Imports

// MUI Imports
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography 
} from '@mui/material'

// Type Declarations
interface TodoItem {
  complete: boolean;
  completeDate?: string;
  desc?: string;
  deadline: string;
  id: number;
  title: string;
}

interface TodoListProps {
  listComplete: boolean;
  title: string;
  todos: TodoItem[];
}

const TodoList = ({ title, todos, listComplete } : TodoListProps) => {
  return (
    <Paper elevation={1} sx={{ p: 1 }}>
      <Typography
        gutterBottom
        variant='h2'
        sx={{fontSize: '24px'}}
      >
        {title}:
      </Typography>
      {
        todos.map(({ complete, completeDate, desc, deadline, id, title }) => {
          if (complete === listComplete) {
            return (
              <TodoItem
                complete={complete}
                completedDate={completeDate}
                deadline={deadline}
                desc={desc}
                id={id}
                key={id}
                title={title}
              />  
            )
          }
        })
      }
    </Paper>
  )
}

export default TodoList