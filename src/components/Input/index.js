import s from './style.module.css';

const Input = ({ name, value, onChange, type, label }) => {
    return (
        <div className={s.root}>
            <input
                type={type}
                className={s.input}
                onChange={onChange}
                name={name}
                value={value}
                required
            />
            <span className={s.highlight}></span>
            <span className={s.bar}></span>
            <label className={s.label} >{label}</label>
        </div>
    )
}

export default Input;