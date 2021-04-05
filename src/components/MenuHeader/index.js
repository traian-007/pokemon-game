// import { useHistory } from "react-router-dom";
import Menu from './Menu';
import NavBar from './NavBar';
import Modal from '../Modal'
import LoginForm from '../LoginForm'
import { useState } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications'

const MenuHeader = ({ bgActive }) => {
    const [isActive, setActive] = useState(false);
    const [isOpenModal, setOpenModal] = useState(true);
    const [isValue, setValue] = useState(null)

    const handleChangeMenu = (a, b) => {
        setActive(prevState => !prevState)
        a = null;
        b = null
    };
    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    }
    const handleSubmitLoginForm = async ({ email, password, isLogin }) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        }

        const loginIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A'
        const signIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A'

        const response = await fetch(isLogin ? signIn : loginIn, requestOptions).then(res => res.json())

        if (response.hasOwnProperty('error')) {
            NotificationManager.error(response.error.message, 'Wrong!')
        } else {
            localStorage.setItem('idToken', response.idToken)
            NotificationManager.success('Success message')
        }
    }

    return (
        <>
            <Menu isActive={isActive} onChangeMenu={handleChangeMenu} />
            <NavBar
                onChangeMenu={handleChangeMenu}
                isActive={isActive} bgActive={bgActive}
                onClickLogin={handleClickLogin}
            />
            <Modal
                isOpen={isOpenModal}
                title='Log in ...'
                onCloseModal={handleClickLogin}
            >
                <LoginForm onSubmit={handleSubmitLoginForm} onClosed={handleClickLogin} />
            </Modal>
        </>

    )

}


export default MenuHeader;
