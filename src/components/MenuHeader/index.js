import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from "react";

const MenuHeader = () => {
    const [isActive, setPage] = useState(false);
    const handleChangeMenu = (isActive) => {
        setPage(!isActive)
    };

    switch (isActive) {
        case true:
            return (<><Menu onChangeMenu={handleChangeMenu} isActive={isActive} />
                <NavBar onChangeMenu={handleChangeMenu} isActive={isActive} /></>)
        case false:
            return <NavBar onChangeMenu={handleChangeMenu} isActive={isActive} />
        default:
            return <NavBar onChangeMenu={handleChangeMenu} isActive={isActive} />
    }

}


export default MenuHeader;
