import './style.css';

const Layout = ({title, descr, urlBg='', colorBg})=>{
console.log(urlBg); 
    const bgImg = {
        backgroundImage: (`${urlBg}}`) ? `url(${urlBg})` : null,
        backgroundColor: (`${colorBg}`) ? `${colorBg}` : null

    };
    return(
        <section class="root">
            <div class="wrapper"
                 style={bgImg}>
                <article>
                    <div class="title">
                        <h3>{title}</h3>
                        <span class="separator"></span>
                    </div>
                    <div class="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;