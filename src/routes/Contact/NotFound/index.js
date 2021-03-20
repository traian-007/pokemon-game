import { useHistory } from "react-router-dom"
import s from "./style.module.css"
const NotFoundPage = () => {
    const history = useHistory()
    const handleClickus = () => {
        // onChangePage && onChangePage('app')
        history.push("/")

    }
    return (
        <>
            <div className={s.container}>
                <div className={s.wrap}>
                    404 Not Found Page
                </div>
                <button onClick={handleClickus}>HomePage</button>
            </div>
        </>

    )
}
export default NotFoundPage;