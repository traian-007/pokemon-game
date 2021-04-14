import { useEffect, useState } from "react"
import s from './style.module.css';
// import FooterForm from "../FooterForm"
import Input from "../Input"

const LoginForm = ({ onSubmit, isResetField = false }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setLogin] = useState(true)

    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [isResetField])

    // const handleClick = () => {
    //     setLogin(prevState => !prevState)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit && onSubmit({
            type: isLogin ? 'login' : 'signup',
            email,
            password
        })
        setEmail('')
        setPassword('')
    }
    const setState = (val) => {
        val.target.name === "email" ? setEmail(val.target.value) : setPassword(val.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="email"
                label="Email"
                onChange={setState}
                type="text"
                value={email}
            />
            <Input
                label="Password"
                value={password}
                type="password"
                name="password"
                onChange={setState}
            />
            <div className={s.flex}>
                <button className={s.btn}>
                    {isLogin ? "Login " : "Signup"}
                </button>
                <div
                    className={s.link}
                    onClick={() => setLogin(!isLogin)}
                >
                    {isLogin ? "Register" : "Login"}
                </div>
            </div>
        </form>

    )
}
export default LoginForm;