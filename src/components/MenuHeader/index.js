// import { useHistory } from "react-router-dom";
import Menu from './Menu';
import NavBar from './NavBar';
import Modal from '../Modal'
import LoginForm from '../LoginForm'
import { useState } from "react";
import { NotificationManager } from 'react-notifications'
import { useDispatch } from 'react-redux';
import { getUserUpdateAsync } from '../../store/user';

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
    const [isOpenModal, setOpenModal] = useState(false);
    const dispatch = useDispatch()

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
            if (props.type === 'signup') {
                const pokemonsStart = await fetch('https://reactmarathon-api.herokuapp.com/api/pokemons/starter').then(res => res.json());

                for (const item of pokemonsStart.data) {
                    await fetch(`https://pokemon-game-2ac29-default-rtdb.firebaseio.com/${response.localId}/pokemons.json?auth=${response.idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(item)
                    });
                }
            }
            localStorage.setItem('idToken', response.idToken)
            NotificationManager.success('Success message')
            dispatch(getUserUpdateAsync())
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
