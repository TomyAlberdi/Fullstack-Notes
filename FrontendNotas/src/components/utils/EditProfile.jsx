import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const EditProfile = ({User,Token}) => {

  const onSubmit = e => {
    e.preventDefault()
  }

  return(
    <>
      {
        !User ? <Navigate to={"/"} />
        :
          <section className="Profile">
            <form className="profileForm" onSubmit={onSubmit}>
              <div className="div1">
                <section>
                  {User.username.charAt(0).toUpperCase()}
                </section>
              </div>
              <input className='div2' type="text" name="username" id="username" placeholder={User.username} />
              <input className='div3' type="text" name="email" id="email" placeholder={User.email} />
              <textarea className='div4' name="description" id="description" placeholder={User.description}></textarea>
              <section className="buttonOptions">
                <button type='submit' >
                  Save Changes <i className="fa-solid fa-check"></i>
                </button>
                <Link to={"/Profile"}>
                  Cancel <i className="fa-solid fa-xmark"></i>
                </Link>
              </section>
            </form>
          </section>
      }
    </>
  )
}

export default EditProfile