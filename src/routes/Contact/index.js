import { useHistory } from "react-router-dom"
import s from "./style.module.css"
const ContactPage = () => {
    const history = useHistory()
    const handleClickus = () => {
        // onChangePage && onChangePage('app')
        history.push("/")

    }
    return (
        <>
            <div className={s.container}>
                <div className={s.wrap}>
                    This will be the ContactPage
                </div>
                <button onClick={handleClickus}>HomePage</button>
            </div>
        </>

    )
}
export default ContactPage;