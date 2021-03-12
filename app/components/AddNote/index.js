import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Color from '../../constants/Color';

export default function AddNote({addNote, setModalOpen}) {
    const [value, setValue] = useState('');
    const handleChangeText = (text)=>{
        setValue(text);
    };
    const handleCancel = ()=>{
        setModalOpen(false);
    };
    const handleSubmitEditing = ()=>{
        if (value.trim()!==''){
            addNote({
                content: value,
                created: Date.now(),

            });
            setValue('');
            setModalOpen(false);
        }else alert('Please type note before add');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputStyle}>
                <TextInput value={value}
                    onSubmitEditing={handleSubmitEditing}
                    onChangeText={handleChangeText}
                    placeholder="Type your note ..."></TextInput>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={handleCancel}>
                    <Text style={[styles.buttonText, {
                        color: Color.secondary,
                    }]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={handleSubmitEditing}>
                    <Text style={[styles.buttonText, {
                        color: Color.primary,
                    }]}>Add</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        minWidth: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
    },
    inputStyle: {
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
    }
});