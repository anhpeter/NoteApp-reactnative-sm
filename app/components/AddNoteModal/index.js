import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AddNote from '../AddNote';

export default function AddNoteModal({addNote, isModalOpen, setModalOpen}) {

    return (
        <Modal visible={isModalOpen}
            animationType="fade"
            transparent={true}>
            <View style={styles.container} >
                <AddNote addNote={addNote}
                    setModalOpen={setModalOpen}></AddNote>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: 20,
    },

});