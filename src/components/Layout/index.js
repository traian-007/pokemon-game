import s from './style.module.css';

const Layout = ({ title, urlBg, colorBg, colorTitle, children }) => {
    const styleRoot = urlBg ? { backgroundImage: `url(${urlBg})` } : { background: colorBg }

    return (
        <section style={styleRoot} className={s.root}>

            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {<h3 style={{ color: colorTitle }}>{title}</h3>}
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
