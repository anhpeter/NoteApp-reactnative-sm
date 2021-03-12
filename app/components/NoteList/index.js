import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Note from '../Note';

export default function NoteList({notes, deleteNote, editNote}) {
    notes = notes.sort((a, b)=>{
        return b.created - a.created;
    });

    const emptyNotification = <Text style={{textAlign: 'center'}}>You do not have any note!</Text>;
    return (
        <React.Fragment>
            {
                notes.length > 0
                    ?
                    <FlatList
                        style={styles.list}
                        data={notes}
                        renderItem={({item}) => {
                            return <Note  item={item}
                                deleteNote={deleteNote}
                                editNote={editNote}
                            ></Note>;
                        }}
                    />
                    :
                    emptyNotification
            }
        </React.Fragment>
    );
}


const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});
