import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = ({setUser,setToken}) => {

    const navigate = useNavigate()

    const errorText = (texto) => {
        let error = document.createElement('span')
        error.classList.add('error')
        error.innerText = texto
        return error
    }

    const login = async (email,password) => {
        const url = "http://localhost:8080/login"
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
        fetch(url,aux)
        .then(res => res.json())
        .then(data => {
            setToken(data.token)
            fetch(`http://localhost:8080/users/searchEmail/${email}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                navigate("/home")
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error Logging In',
                    text: error
                })
            })
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error Logging In',
                text: error
            })
        })
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