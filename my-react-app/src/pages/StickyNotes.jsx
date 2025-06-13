import React, { useState, useEffect } from 'react';
import notesData from '../data/noteData';

const StickyNotes = () => {

    const [notes, setNotes] = useState(() =>
        Object.values(notesData).map((note, index) => (
            {
                ...note,
                x: 100 + index * 5,
                y: 100 + index * 50,
            })
        )
    );

    const [draggingId, setDraggingId] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e, note) => {
        setDraggingId(note.id);

        const offsetX = e.clientX - note.x;
        const offsetY = e.clientY - note.y;

    }

    const handleMouseMove = (e, note) => {
        if (draggingId === null) return;

        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;

        // update position of the dragged note

        setNotes((prevNotes) =>
            prevNotes.map((note) => note.id === draggingId ? { ...note, x: newX, y: newY } : note))
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [draggingId, offset]);

    const handleMouseUp = () => {
        setDraggingId(null);
    }

    return (
        <>
            {notes.map((note) => (
                <div key={note.id}
                    onMouseDown={(e) => handleMouseDown(e, note)}
                    onMouseMove={(e) => handleMouseMove(e, note)}
                    onMouseUp={(e) => handleMouseUp(e, note)}



                    className='absolute bg-yellow-200 shadow-lg p-4 rounded-md cursor-move select-none w-72'
                    style={{
                        left: note.x,
                        top: note.y,
                        zIndex: draggingId == note.id ? 1000 : 1,
                    }}

                >📌{note.note}</div >
            ))}
        </>

    )
}

export default StickyNotes