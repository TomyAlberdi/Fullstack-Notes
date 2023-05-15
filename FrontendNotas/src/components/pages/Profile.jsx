import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({User}) => {
  return (
    <section className="Profile">
      <section className="profileInfo">
        <div className="div1">
          <section>
            {User.username.charAt(0).toUpperCase()}
          </section>
        </div>
        <div className="div2">
          {User.username}
        </div>
        <div className="div3">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className="div4">
          description
        </div>
        <Link className="div5">
          Edit Profile <i className="fa-solid fa-pen-to-square"></i>
        </Link>
      </section>
    </section>
  )
}

export default Profile