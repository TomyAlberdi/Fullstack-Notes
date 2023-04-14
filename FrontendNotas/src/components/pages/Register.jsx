import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

    const errorText = (texto) => {
        let error = document.createElement('span')
        error.classList.add('error')
        error.innerText = texto
        return error
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const username = e.target.username
        const email = e.target.email
        const password = e.target.password
        const passwordConfirm = e.target.passwordConfirm
        document.querySelectorAll('.error').forEach(e => {
            e.remove()
        })
        document.querySelectorAll('input').forEach(e => {
            e.classList.remove("invalid")
        })
        const validate = () => {
            if ((!username.value)||(/^\S{6,20}$/.test(username.value) === false)) {
                let error = errorText("The username should have between 6 and 20 characters")
                username.after(error)
                username.classList.add("invalid")
                return false
            }
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) === false) {
                let error = errorText("Invalid email")
                email.after(error)
                email.classList.add("invalid")
                return false
            }
            if (/^.{7,20}$/.test(password.value) === false) {
                let error = errorText("The password should have between 7 and 20 characters")
                password.after(error)
                password.classList.add("invalid")
                return false
            }
            if (passwordConfirm.value !== password.value) {
                passwordConfirm.classList.add("invalid")
                return false
            }
            return true
        }
        if (validate()) {
            console.log("yes")
        } else {
            console.log("no")
        }
    }

    return (
        <section className="Register">
            <h1>Create Account</h1>
            <form onSubmit={onSubmit}>
                <section>
                    <input name='username' placeholder='Username' />
                </section>
                <section>
                    <input name='email' placeholder='Email' />
                </section>
                <section>
                    <input name='password' placeholder='Password' />
                </section>
                <section>
                    <input name='passwordConfirm' placeholder='Confirm Password' />
                </section>
                <button>Create Account</button>
            </form>
            <h3>Already have an account? <Link to={"/Login"}>Log In</Link></h3>
        </section>
    )
}

export default Register