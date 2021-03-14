import './style.css';

const Layout = ({title, urlBg, colorBg, children})=>{
    const bgImg = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: (`${colorBg}`) ? `${colorBg}` : null

    };
    return(
        <section className="root">
            <div className="wrapper"
                 style={bgImg}>
                <article>
                    <div className="title">
                        <h3>{title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;