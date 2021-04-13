// import { useHistory } from "react-router-dom";
import Menu from './Menu';
import NavBar from './NavBar';
import Modal from '../Modal'
import LoginForm from '../LoginForm'
import { useState } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications'

const loginSignupUser = async ({ email, password, type }) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        })
    }
    switch (type) {
        case 'signup':
            return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A', requestOptions).then(res => res.json());
        case 'login':
            return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A', requestOptions).then(res => res.json());
        default:
            return 'I cannot login user'
    }
}

const MenuHeader = ({ bgActive }) => {
    const [isActive, setActive] = useState(false);
    const [isOpenModal, setOpenModal] = useState(true);

    const handleChangeMenu = (a, b) => {
        setActive(prevState => !prevState)
        a = null;
        b = null
    };
    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    }
    const handleSubmitLoginForm = async (props) => {
        const response = await loginSignupUser(props)

        // const requestOptions = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email,
        //         password,
        //         returnSecureToken: true
        //     })
        // }

        // const loginIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A'
        // const signIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A'
        // if(type === 'login')
        // const response = await fetch(isLogin ? signIn : loginIn, requestOptions).then(res => res.json())

        if (response.hasOwnProperty('error')) {
            NotificationManager.error(response.error.message, 'Wrong!')
        } else {
            localStorage.setItem('idToken', response.idToken)
            NotificationManager.success('Success message')
            handleClickLogin()
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
                <LoginForm
                    onSubmit={handleSubmitLoginForm}
                    onClosed={handleClickLogin}
                    isResetField={!isOpenModal}
                />
            </Modal>
        </>

    )

}


export default MenuHeader;
