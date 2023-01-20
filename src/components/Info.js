function Info(){
    return(
        <div>
            <img className="photo" src="sujitha_1.JPG" alt="sujitha" lazy="true" />
            <section className="section-info">
                <h2 className="name" >Sujitha</h2>
                <p className="stack">Fullstack Developer</p>
                <small><a href="src#">know more</a></small>
                <div className="contact">
                    <a
                        href="https://github.com/sujitha92"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sujitha-sundar-29404578"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>LinkedIn</span>
                    </a>
                </div>
            </section>
        </div>

    )
}
export default Info;