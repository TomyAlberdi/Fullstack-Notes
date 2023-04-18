import React, { useEffect, useRef, useState } from 'react'

const CreateNote = ({User,Token,setLoadingNotes}) => {

    const [Open, setOpen] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (
                    ref.current &&
                    !ref.current.contains(event.target) &&
                    !event.target.closest('.newNoteInputs')
                ) {
                    setOpen(false);
                }
            }
        
            document.addEventListener('mousedown', handleClickOutside);
        
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const submitNote = async (e) => {
        e.preventDefault()
        const title = e.target.noteTitle
        const text = e.target.noteText
        const url = "http://192.168.0.183:8080/notes/add"
        const aux = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            body: JSON.stringify({
                "title":title.value,
                "text":text.value,
                "user_id":User.id
            })
        }
        try {
            const res = await fetch(url,aux)
            if (res.ok) {
                setLoadingNotes(true)
                title.value = "",
                text.value = ""
                setOpen(false)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'An error occurred while adding a note.',
                    text: 'Please try again in a few minutes'
                })
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div ref={wrapperRef} className='refWrapper'>
            <section className="createNote" onClick={() => {setOpen(!Open)}}>
                <h4>Add Note</h4>
                <div className={"createNoteSection " + (Open ? "open" : "")} onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <form onSubmit={submitNote}>
                        <div className="newNoteInputs">
                            <input type="text" name="noteTitle" id="noteTitle" placeholder='Title' required />
                            <input type="text" name="noteText" id="noteText" placeholder='Add a note...' />
                        </div>
                        <button type="submit"><i className='fa-solid fa-plus'></i></button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default CreateNote