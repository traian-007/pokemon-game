import s from './style.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    console.log(urlBg)
    const styleRoot = urlBg ? { backgroundImage: `url(${urlBg})` } : { background: colorBg }

    return (
        <section style={styleRoot} className={s.root}>

            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {title && <h3>{title}</h3>}
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
