import React, { useState, useEffect } from 'react'
import { FlatList, Image, Pressable, Text, View, StyleSheet, Button } from 'react-native'
import Headers from '../../components/header'
import InfosTask from '../../components/infosTask';
import TaskItem from '../../components/taskItem';
import InputForm from './../../components/form/inputForm';

export default function TaskScreen() {

    const [arrayList, setArrayList] = useState([])
    const [isVisible,setIsVisible] = useState(false)
    const [taskCompted,setTaskCompted] = useState(0)
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

    const changeFormStatus = () => {
        setIsVisible(!isVisible)
    }

    const removeTask = async (id) =>{
        setArrayList(arrayList.filter(item=>item.id !== id))
    }

    const renderItem = ({item}) => {
         return(<TaskItem validateTask={validateTask} removeTask={removeTask}  task={item}/>)
    }

    const addTask = (title)=>{
        if(title==="")return

        setArrayList([...arrayList,{id:arrayList.length + 1,title:title, isCompleted:false}])
    }

  
        // console.log(arrayList.filter((item)=>item.isCompleted===true))


    return (
        <>
            
            <FlatList
                ListHeaderComponent={
                    <>
                        <Headers/>
                        {isVisible && <InputForm  setArrayList={addTask}/>}
                        <InfosTask task={arrayList} taskCompleted={taskCompted}/>
                    </>
                }
                data={arrayList}
                renderItem={renderItem}
                keyExtractor={(item) =>item.id}
                contentContainerStyle={{flexGrow:1,}}
            />
            <Pressable style={styles.positionButton} onPress={changeFormStatus}>
               <Image
                source={isVisible ? 
                    require("../../../assets/icons/remove.png") : 
                    require("../../../assets/icons/add.png")}
               />
                
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    positionButton:{
        position:"absolute",
        right:20,
        padding:15,
        backgroundColor:"orange",
        bottom:20,
        borderRadius:50,
    }
})