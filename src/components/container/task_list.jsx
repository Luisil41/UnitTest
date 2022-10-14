import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TasklistComponent = () => {

const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

const changeState = (id) => {
    console.log('TODO: Cambiar el estado de una tarea.')
}

  return (
    <div>
        <div>
            Your Tasks;
        </div>
        <TaskComponent task={defaultTask} />
    </div>
  )
}



export default TasklistComponent;

