import s from "./style.module.css";
import cn from 'classnames';


const NavBar = ({ isActive, bgActive = false, onChangeMenu }) => {

    return (
        <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <p className={s.brand} onClick={onChangeMenu} >
                    LOGO
                </p>
                <div className={cn(s.menuButton, { [s.active]: isActive })} onClick={onChangeMenu}>
                    <span />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;