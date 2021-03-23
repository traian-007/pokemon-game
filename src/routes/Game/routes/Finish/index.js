import s from "./style.module.css"
import { useHistory } from "react-router-dom";
const FinishPage = () => {
    const history = useHistory()
    const handleClickus = () => {
        // onChangePage && onChangePage('app')
        history.push("/game")

    }

    return (
        <>
            <div className={s.container}>
                <div className={s.wrap}>
                    This will be the Finish Page
                </div>
                <button onClick={handleClickus}>HomePage</button>
            </div>
        </>

    )
}
export default FinishPage;