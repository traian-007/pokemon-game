import { useEffect, useState } from "react"
// import FooterForm from "../FooterForm"
import Input from "../Input"

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setLogin] = useState(true)

    const handleClick = () => {
        setLogin(prevState => !prevState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit && onSubmit({
            email,
            password,
            isLogin
        })
        setEmail('')
        setPassword('')
    }
    const setState = (val) => {
        val.target.name === "email" ? setEmail(val.target.value) : setPassword(val.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    name="email"
                    label="Email"
                    onChange={setState}
                    type="text"
                    value={email}
                />
            </div>
            <div>
                <Input
                    label="Password"
                    value={password}
                    type="password"
                    name="password"
                    onChange={setState}
                />
            </div>

            <div style={{ display: 'flex' }}>
                <button>{isLogin ? "SIGNUP" : "SIGNIN"} </button>
                <p style={{ fontSize: "25px", margin: `20px 0 0 35%`, color: 'blue' }} onClick={handleClick} >{isLogin ? "Login ?" : "Register ?"}</p>
            </div>
        </form>

    )
}
export default LoginForm;