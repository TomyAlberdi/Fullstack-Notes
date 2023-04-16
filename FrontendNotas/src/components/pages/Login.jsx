import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Login = ({setUser,setToken}) => {

    const navigate = useNavigate()

    const errorText = (texto) => {
        let error = document.createElement('span')
        error.classList.add('error')
        error.innerText = texto
        return error
    }

    const login = async (email,password) => {
        const url = "http://192.168.0.183:8080/login"
        const aux = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        try {
            const res = await fetch(url,aux)
            if (res.ok) {
                const data = await res.json()
                setToken(data.token)
                const getUser = await fetch(`http://192.168.0.183:8080/users/searchEmail/${email}`)
                if (getUser.ok) {
                    const userData = await getUser.json()
                    setUser(userData)
                    navigate("/Home")
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect Username or Password',
                })
            }
        } catch(error) {
            Swal.fire({
                icon: 'error',
                title: 'Error Logging In',
                text: error
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email
        const password = e.target.password
        document.querySelectorAll('.error').forEach(e => {
            e.remove()
        })
        document.querySelectorAll('input').forEach(e => {
            e.classList.remove("invalid")
        })
        const validate = () => {
            if (!email.value) {
                let error = errorText("Invalid email")
                email.after(error)
                email.classList.add("invalid")
                return false
            }
            if (!password.value) {
                let error = errorText("Invalid password")
                password.after(error)
                password.classList.add("invalid")
                return false
            }
            return true
        }
        if (validate()) {
            login(email.value,password.value)
        }
    }

    return (
        <section className="Login">
            <h1>Log in</h1>
            <form onSubmit={onSubmit}>
                <section>
                    <input name='email' placeholder='Email' />
                </section>
                <section>
                    <input name='password' type='password' placeholder='Password' />
                </section>
                <button>Log In</button>
            </form>
            <h3>Or <Link to={"/Register"}>Sign Up</Link></h3>
        </section>
    )
}

export default Login