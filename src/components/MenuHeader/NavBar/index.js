import s from "./style.module.css";
import cn from 'classnames';


const NavBar = ({ isActive, onChangeMenu }) => {
    const handleClick = () => {
        onChangeMenu(isActive)
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand} onClick={handleClick} >
                    LOGO
                </p>
                <a href="/#" className={cn(s.menuButton, { [s.active]: isActive })} onClick={handleClick}>
                    <span />
                </a>
            </div>
        </nav>
    )
}
export default NavBar;