import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Profile = ({User}) => {

  return (
    <>
      {
        !User ? <Navigate to={"/"} />
        :
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
                {User.email}
              </div>
              <div className="div4">
                description
              </div>
              <Link to={"/EditProfile"} className="div5">
                Edit Profile <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </section>
          </section>
      }
    </>
  )
}

export default Profile