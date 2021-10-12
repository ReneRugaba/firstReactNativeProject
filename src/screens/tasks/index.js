import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import Headers from '../../components/header'
import TaskItem from '../../components/taskItem';
import InputForm from './../../components/form/inputForm';

export default function TaskScreen() {

    const [arrayList, setArrayList] = useState([])

    const renderItem = ({item}) => {
         return(<TaskItem task={item}/>)
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
