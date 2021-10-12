import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import Headers from '../../components/header'
import TaskItem from '../../components/taskItem';
import InputForm from './../../components/form/inputForm';

export default function TaskScreen() {

    const [arrayList, setArrayList] = useState([])
    
    const validateTask = (id) =>{
        setArrayList(
            arrayList.map(item=>{
                if(item.id === id){
                    item.isCompleted=!item.isCompleted
                }
                return item
            })
        )
    }

    

    const removeTask = async (id) =>{
        console.log(id)
        setArrayList(arrayList.filter(item=>item.id !== id))
    }

    const renderItem = ({item}) => {
         return(<TaskItem validateTask={validateTask} removeTask={removeTask}  task={item}/>)
    }

    const addTask = (title)=>{
        if(title==="")return

        setArrayList([...arrayList,{id:arrayList.length + 1,title:title, isCompleted:false}])
    }

    return (
        <>
            
            <FlatList
                ListHeaderComponent={
                    <>
                        <Headers/>
                        <InputForm  setArrayList={addTask}/>
                    </>
                }
                data={arrayList}
                renderItem={renderItem}
                keyExtractor={(item) =>item.id}
            />
        </>
    )
}
