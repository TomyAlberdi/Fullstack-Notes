import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Note from '../Note'
import Masonry from 'react-masonry-css'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Home = ({User,Token}) => {

    const navigate = useNavigate()

    const [Notes, setNotes] = useState()
    const [LoadingNotes, setLoadingNotes] = useState(true)

    useEffect(() => {
        if (!User) {
            navigate("/")
        } else {
            const aux = {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`
                }
            }
            fetch(`http://192.168.0.183:8080/notes/list/${User.id}`,aux)
            .then(res => res.json())
            .then(data => {
                setNotes(data)
                setLoadingNotes(false)
            })
        }
    },[LoadingNotes])

    const MasonryBreakpoints = {
        default: 6,
        1023: 3,
        765: 2,
    }

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
        <section className="Home">
            <h1>My Notes</h1>
            <section className="newNote">
                <form onSubmit={submitNote}>
                    <div className="newNoteInputs">
                        <input type="text" name="noteTitle" id="noteTitle" placeholder='Title' required />
                        <input type="text" name="noteText" id="noteText" placeholder='Add a note...' />
                    </div>
                    <button type="submit"><i className='fa-solid fa-plus'></i></button>
                </form>
            </section>
            <section className="notes">
                {
                    LoadingNotes ?
                        <h2>Loading Notes</h2>
                    :
                        <Masonry
                            breakpointCols={MasonryBreakpoints}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {
                                Notes.map((e,index) => {
                                    return <Note key={index} Data={e} />
                                })
                            }
                        </Masonry>
                }
            </section>
        </section>
    )
}

export default Home