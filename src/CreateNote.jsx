import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {
        setNote((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({ title: '', content: '' });
    }

    return (
        <>
            <div className="main_note" onDoubleClick={() => setExpand(false)}>
                <form>
                    {expand ? <input type='text' placeholder="Title" autoComplete="off" name='title' value={note.title} onChange={InputEvent} /> : null}
                    <textarea placeholder="Write a note ..." name='content' value={note.content} onChange={InputEvent} onClick={() => setExpand(true)} />
                    {expand ? <Button variant="contained" onClick={addEvent}><AddIcon className="plus_sign" /></Button> : null}
                </form>
            </div>
        </>
    );
}

export default CreateNote;