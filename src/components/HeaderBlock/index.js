import s from './style.module.css';
// import ReactLogo from '../../assets/ReactLogo.png'
// <img src={ReactLogo} alt="React Logo" />
import { ReactComponent as ReactLogo } from '../../assets/logo.svg'
const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? { backgroundImage: 'none' } : {}
    return (
        <div className={s.root} style={styleRoot}>
            <div className={s.container}>

                <ReactLogo />
                {title && <h1 className={s.header}>{title}</h1>}
                {descr && <p className={s.paragraph}>{descr}</p>}
            </div>
        </div>
    )


};

export default HeaderBlock;