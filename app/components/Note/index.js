import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function jNote({item, deleteNote, editNote}) {
    const [isEditing, setEditing] = useState(false);
    const [value, setValue] = useState(item.content);

    const handleChangeText = (text)=>{
        setValue(text);
    };
    const handleSubmitEditing = ()=>{
        editNote({
            ...item,
            content: value,
        });
        setEditing(false);
    };
    const handleNoteLongPressed = ()=>{
        deleteNote(item);
    };
    const handleNotePressed = ()=>{
        setEditing(true);
    };
    const handleBlur = ()=>{
        setEditing(false);
    };

    return (
        <React.Fragment>
            {
                isEditing
                    ?
                    <View style={styles.input}>
                        <TextInput value={value}
                            onBlur={handleBlur}
                            autoFocus={true}
                            onChangeText={handleChangeText}
                            onSubmitEditing={handleSubmitEditing}></TextInput>
                    </View>
                    :
                    <TouchableWithoutFeedback onLongPress={handleNoteLongPressed}
                        onPress={handleNotePressed}>
                        <Text style={styles.item}>{item.content}</Text>
                    </TouchableWithoutFeedback>
            }
        </React.Fragment>
    );
}


const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        marginVertical: 5,
        color: '#fff',
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
    },
    input: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderColor: 'dodgerblue',
        borderWidth: 0.5,
        marginVertical: 5,
        borderRadius: 10,
    },
});
