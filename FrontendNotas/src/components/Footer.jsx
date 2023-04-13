import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <h2>Made with ❤️ in Argentina by <Link to={"https://tomas-alberdi.com"} target='_blank'>Tomás Alberdi</Link></h2>
        </footer>
    )
}

export default Footer