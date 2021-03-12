import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddNote from '../../components/AddNote';
import AddNoteModal from '../../components/AddNoteModal';
import MyButton from '../../components/MyButton';
import NoteList from '../../components/NoteList';
import Color from '../../constants/Color';

const initialNotes = [
    {
        key: '1',
        content: 'Nop bao cao',
        created: Date.now(),
    },
    {
        key: '2',
        content: 'Pull up, chin up, running',
        created: Date.now(),
    },
];

export default function MainScreen() {
    const [notes, setNotes] = useState(initialNotes);
    const [isModalOpen, setModalOpen] = useState(false);

    const addNote = (item)=>{
        const randomId = Math.floor(Math.random()*10000);
        item.key = `${randomId}`;
        setNotes(notes.concat(item));
    };

    const deleteNote = (item)=>{
        const tempNotes = notes.slice(0);
        tempNotes.splice(tempNotes.findIndex((note)=> item.key === note.key ), 1);
        setNotes(tempNotes);
    };

    const editNote = (item)=>{
        if (item.content.trim() !==''){
            const tempNotes = notes.slice(0);
            tempNotes.splice(tempNotes.findIndex((note)=> item.key === note.key ), 1, item);
            setNotes(tempNotes);
        }else deleteNote(item);
    };

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingVertical: 20,
            }}>
                <TouchableOpacity onPress={()=>setModalOpen(true)} >
                    <Text style={styles.addButtonText} >Add Note</Text> 
                </TouchableOpacity>
            </View>
            <AddNoteModal isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                addNote={addNote}></AddNoteModal>
            <NoteList notes={notes}
                deleteNote={deleteNote}
                editNote={editNote}></NoteList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    addButtonText: {
        color: Color.primary,
        fontSize: 20,
    }
});