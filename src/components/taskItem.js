import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const TaskItem=({task})=> {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={require('../../assets/icons/circle.png')}
                />
                <Text style={{marginLeft:16, fontSize:18, color:"black"}}>{task.title}</Text>
            </View>
            <Image
                source={require('../../assets/icons/bin.png')}
            />
            
        </View>
    )
}
export default TaskItem

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom:10,
            marginHorizontal:35
            
        },
        subContainer:{
            flexDirection: "row",

        }
    }
)