import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    
    return (
        <section className="Home">
            <h1>My Notes</h1>
            <section className="newNote">
                <h2>New note</h2>
            </section>
            <section className="notes">
                <h2>notes</h2>
            </section>
        </section>
    )
}

export default Home