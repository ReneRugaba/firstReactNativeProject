
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actionsTypes';


export function addTask(title){
    return {
        type: ADD_TASK,
        payload:{
            title
        }
    }
}



export const toggleTask = (id)=> ({
    type:TOGGLE_TASK,
    payload:{
        id
    }
})



export const deleteTask = (id)=>({
    type:DELETE_TASK,
    payload:{
        id
    }
})
