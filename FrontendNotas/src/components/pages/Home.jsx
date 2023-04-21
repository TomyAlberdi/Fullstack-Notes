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
        1300: 4,
        1023: 3,
        765: 2,
    }
    
    return (
        <section className="Home">
            <section className="controlPanel">
                <h1>My Notes</h1>
                <div>
                    <span><i className="fa-solid fa-search"></i></span>
                    <span><i className="fa-solid fa-add"></i></span>
                </div>
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
                                    return <Note key={index} Data={e} Token={Token} setLoadingNotes={setLoadingNotes} />
                                })
                            }
                        </Masonry>
                }
            </section>
        </section>
    )
}

export default Home