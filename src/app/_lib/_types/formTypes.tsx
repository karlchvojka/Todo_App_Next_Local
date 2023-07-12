// Framework Imports
import { MouseEventHandler } from 'react'

export interface EditTaskDialogProps {
  handleClose?: MouseEventHandler;
  open: boolean;
  data: {
    complete: boolean;
    completedDate?: string;
    desc?: string;
    deadline: string;
    id: string;
    title: string;
  };
}

export interface AddTaskDialogProps {
  handleClose?: MouseEventHandler;
  open: boolean;
}