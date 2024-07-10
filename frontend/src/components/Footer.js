const Footer = (props) => {
    return (
        <footer><div>
            <img src="./media/Group 55 (1).png"></img>
            <div className="levelup">
                <h2>Level Up Your Game<br />Master Your Destiny</h2>
                <nav className="follow">
                    <a class="txt-foo">Terms</a>
                    <a className="txt-foo">Privacy</a>
                    <a className="txt-foo">Help</a>
                    <a className="txt-foo">Accessibility</a>
                    <a className="txt-foo">Contact</a>
                </nav>
            </div>
            <div className="follow col-d">
                <h2>Follow Us:</h2>
                <img src="./media/Group 80.svg" className="img-footer"></img>
                <img src="./media/Vector-1.svg" className="img-footer"></img>
                <img src="./media/Vector.svg" className="img-footer"></img>
                <img src="./media/Vector-2.svg" className="img-footer"></img>
            </div>
        </div>

        </footer>
    )
}

export default Footer;