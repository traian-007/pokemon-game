// import { useHistory } from "react-router-dom";
import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from "react";

const MenuHeader = ({ bgActive }) => {
    const [isActive, setActive] = useState(false);
    // const history = useHistory()
    const handleChangeMenu = () => {
        setActive(prevState => !prevState)
    };

    return (
        <>
            <Menu isActive={isActive} onChangeMenu={handleChangeMenu} />
            <NavBar onChangeMenu={handleChangeMenu} isActive={isActive} bgActive={bgActive} />
        </>

    )

}


export default MenuHeader;
