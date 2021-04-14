import s from "./style.module.css";
import cn from 'classnames';

// import { ReactComponent as LogoSVG } from '../../../assets/logo.svg'
import { ReactComponent as LoginSVG } from '../../../assets/login.svg'
import { ReactComponent as UserSVG } from '../../../assets/user.svg'
import { useSelector } from "react-redux";
import { selectLocalID, selectUserLoading } from "../../../store/user";
import { Link } from "react-router-dom";


const NavBar = ({ isActive, bgActive = false, onChangeMenu, onClickLogin }) => {
    const isLoadingUser = useSelector(selectUserLoading);
    const localId = useSelector(selectLocalID);
    // console.log('isLoading', isLoadingUser);
    // console.log('localId', localId)

    return (
        <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <div className={s.brand} onClick={onChangeMenu} >
                    {/* <LogoSVG /> */}
                    Logo
                </div>
                <div className={s.loginAndMenu}>
                    {(!isLoadingUser && !localId) && (
                        <div className={s.loginWrap} onClick={onClickLogin}>
                            <LoginSVG />
                        </div>)}
                    {(!isLoadingUser && localId) && (
                        <Link className={s.loginWrap} to="./login">
                            <UserSVG />
                        </Link>
                    )}
                    <div className={cn(s.menuButton, { [s.active]: isActive })} onClick={onChangeMenu} >
                        <span />
                    </div>
                </div>

            </div>
        </nav>
    )
}
export default NavBar;