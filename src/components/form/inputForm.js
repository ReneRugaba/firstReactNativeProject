import React, {useState} from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native';

const InputForm=({setArrayList})=> {
    const [text,setText] = useState("")

    const onChangeText =(valueInput)=>{
        setText(valueInput)
    }

    const onPresseButton = () =>{
        setArrayList(text)
        setText("")
    }
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Nouvelle tâche'
            />
            <Button
                title='Ajouter'
                onPress={onPresseButton}
                color="blue"
               
            />
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginBottom:20
    },
    input:{
        borderColor: "black",
        borderWidth: 1,
        width: "70%",
        height:40,
        borderRadius:10,
        paddingLeft:10
    },
   
})