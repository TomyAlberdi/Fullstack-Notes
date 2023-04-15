import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({User}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!User) {
            navigate("/")
        }
    },[])
    
    return (
        <section className="Home">
            <h2>Home</h2>
        </section>
    )
}

export default Home