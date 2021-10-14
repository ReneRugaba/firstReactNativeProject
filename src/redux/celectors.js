// celector


export const getTask = store => store.tasksList
export const getTaskCompleted = store => store.tasksList.filter(t=>t.isCompleted)