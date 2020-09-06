const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Added',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'Committed',
      taskIds: ['task-3']
    },
    'column-3': {
      id: 'column-3',
      title: 'In Progress',
      taskIds: ['task-4']
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      taskIds: ['task-4']
    }
  }
}

export default initialData
