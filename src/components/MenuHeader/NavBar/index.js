import s from "./style.module.css";
import cn from 'classnames';

// import { ReactComponent as LogoSVG } from '../../../assets/logo.svg'
import { ReactComponent as LoginSVG } from '../../../assets/login.svg'


const NavBar = ({ isActive, bgActive = false, onChangeMenu, onClickLogin }) => {

    return (
        <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <div className={s.brand} onClick={onChangeMenu} >
                    {/* <LogoSVG /> */}
                    Logo
                </div>
                <div className={s.loginAndMenu} onClick={onClickLogin}>
                    <div className={s.loginWrap}>
                        <LoginSVG />
                    </div>
                    <div className={cn(s.menuButton, { [s.active]: isActive })} onClick={onChangeMenu} >
                        <span />
                    </div>
                </div>

            </div>
        </nav>
    )
}
export default NavBar;