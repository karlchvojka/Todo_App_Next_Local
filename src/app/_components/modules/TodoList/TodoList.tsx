// NextJS Specific
"use client"

// Component Imports
import TodoItem from '@/elements/TodoItem/TodoItem'

// Material UI Specific Imports
import {
  Paper,
  Typography 
} from '@mui/material'

// Type Declarations
interface TodoItem {
  complete: boolean;
  completeDate?: string;
  desc?: string;
  deadline: string;
  id: string;
  title: string;
}

interface TodoListProps {
  listComplete: boolean;
  title: string;
  todos: TodoItem[];
}

const TodoList = ({ listComplete, title, todos } : TodoListProps) => {
  return (
    <Paper elevation={1} sx={{ p: 1 }}>
      <Typography
        gutterBottom
        sx={{fontSize: '24px'}}
        variant='h2'
      >
        {title}:
      </Typography>
      {
        todos.map(({ complete, completeDate, desc, deadline, id, title }) => {
          if (complete === listComplete) {
            let data = {
              complete: complete,
              completedDate: completeDate,
              deadline: deadline,
              desc: desc,
              id: id,
              key: id,
              title: title
            }
            return (
              <TodoItem
                data={data}
                key={id}
              />  
            )
          }
        })
      }
    </Paper>
  )
}

export default TodoList