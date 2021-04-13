import cn from 'classnames';
import { useEffect, useRef } from 'react';
import s from './style.module.css';

const Modal = ({ title, children, onCloseModal, isOpen }) => {
    const modalEl = useRef()

    useEffect(() => {
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : true
    }, [isOpen])

    const handleCloseModal = (event) => {
        onCloseModal && onCloseModal(false)
        console.log()
    }
    const handleClickRoot = (event) => {
        if (!modalEl.current.contains(event.target)) {
            handleCloseModal()
        }
    }

    return (
        <div
            className={cn(s.root, { [s.open]: isOpen })}
            onClick={handleClickRoot}
        >
            <div
                ref={modalEl}
                className={s.modal}
            >
                <div className={s.head}>
                    {title}
                    <span
                        className={s.btnClose}
                        onClick={handleCloseModal}

                    ></span>
                </div>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;