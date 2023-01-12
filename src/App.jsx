import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
    const [notesList, setNotesList] = useState([]);

    const addNote = (note) => {
        setNotesList((prevList) => {
            return [...prevList, note];
        })
    };

    const onDelete = (id) => {
        setNotesList((prevItems) => {
            return prevItems.filter((val, index) => {
                return index !== id;
            });
        });
    };

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {notesList.map((val, index) => {
                return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
            })}
            <Footer />
        </>
    );
}

export default App;
