const HomePage = (props) => {
    return (
        <body>
            <section className="hero">
                <div className="content-hero">
                    <h1>Level Up Your <span>Skills</span>, Master Your <br /> Game, and Conquer New Realms <br /> of
                        Possibilities!</h1>
                    <p>Start Your Gaming Journey Today! Join Gaming Academy and Elevate Your Skills Beyond
                        Ordinary<br /><br /><span>– Achieve Gaming Excellence –</span>
                    </p>
                    <button class="btn-primary">Level up your skills</button>
                </div>
                <div>

                    <img src="./media/hero-valo.png" className="hero-pic"></img>
                </div>
            </section>

            <section className="about-us">
                <div>
                    <div>
                        <h2>About Gaming Academy</h2>
                        <p>Welcome to Gaming Academy, where passion for gaming meets professional coaching excellence. At Gaming Academy, we believe in unlocking the true potential of every gamer, transforming them from enthusiasts to skilled players who dominate the digital realms.</p>
                    </div>
                    <div>
                        <h2>Our Mission: Elevating Your Gaming Experience</h2>
                        <p>Our mission is to provide unparalleled gaming education through the expertise of our distinguished coaches. Gaming Academy] is not just a place to learn; it's an arena where aspiring gamers evolve into champions.
                        </p>
                    </div>
                    <div>
                        <h2>Why Choose Gaming Academy?</h2>
                        <p>Ex-Pro-Player Coaches: Our courses are led by former professional players who have excelled in renowned titles such as League of Legends, CS:GO, Valorant, FIFA, and more. Learn from the best as they share their insider knowledge, strategies, and tips that propelled them to the top of their game.
                            Tailored Coaching: We understand that every gamer is unique. Our coaching sessions are personalized to cater to your skill level, ensuring that you receive the guidance you need to thrive in your favorite games.
                            Cutting-Edge Techniques: Stay ahead of the curve with the latest gaming strategies and techniques. Our coaches are committed to keeping you informed about the ever-evolving gaming landscape.
                            Join Gaming Academy Today and Redefine Your Gaming Journey!</p>
                    </div>
                </div>
            </section>

            <section id="our-services">
                <div>
                    <h2>Our Services</h2>
                    <div className="div-btns">
                        <button id="btn-lol"> </button>
                        <button id="csgo"> </button>
                        <button id="fc24"> </button>
                        <button id="valo"> </button>
                    </div>

                    <div className="cards-contente">
                        <div className="card-colors card-fifa">
                            <img src="./media/imagen-card-fifa.jpg"></img>
                            <h3>FIFA Tactical Playmaker Workshop</h3>
                            <p>Enhance your role as the playmaker on the virtual pitch with our FIFA Tactical Playmaker Workshop. Guided
                                by ex-pro-FIFA midfield maestros, polish your passing precision, master strategic positioning, and
                                orchestrate plays that outsmart your opponents. Elevate your skills to become the strategic heartbeat of
                                your team.</p>
                        </div>
                        <div className="card-colors card-lol">
                            <img src="./media/imagen-card-lol.png"></img>
                            <h4>League of Legends Challenger Bootcamp</h4>
                            <a className="btn-secondary">Enroll</a>
                        </div>
                        <div className="card-colors card-valo">
                            <img src="./media/imagen-card-valo.png"></img>
                            <h4>Valorant Infiltration Tactics</h4>
                            <a className="btn-secondary">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="extra">
                <div>
                    <h2> <span>Level Up</span> Your Skills, <br /> Master Your Game, and <br /> Conquer New Realms of <br />
                        Possibilities!</h2>
                    <p>Start Your Gaming Journey Today! Join Gaming Academy <br />
                        and Elevate Your Skills Beyond Ordinary <br /><br />

                        – Achieve Gaming Excellence –</p>
                    <button>¡Participate!</button>
                </div>
                <img src="./media/lol-level-up.png"></img>
            </section>

            <section id="clients-says">
                <h2>What clients say about us</h2>
                <div className="cont-says">
                    <div className="say-1 card-colors">
                        <p>“Enrolling in Gaming Academy 's League of Legends Mastery Program was a game-changer for me. The coaches' insights, drawn from their experiences as pro-players, brought a whole new level of depth to my gameplay. I went from a casual player to confidently climbing the ranks. Truly an empowering journey!”</p>
                        <div>
                            <img src="./media/stats.png"></img>
                            <img src="./media/stats.png"></img>
                            <img src="./media/stats.png"></img>
                        </div>
                    </div>
                    <div>
                        <div className="card-colors">
                            <p>“The Tactical Training sessions at Gaming Academy completely transformed the way I approach CS:GO. Learning from ex-pro-players not only improved my aim and tactics but also gave me a deeper appreciation for the game's complexity. I've seen a significant boost in my rank, and the camaraderie among fellow participants is unmatched.”</p>
                            <p>Alex H. - Counter-Strike: Global Offensive Tactical Training Participant</p>
                        </div>
                        <div className="dos-cards">
                            <div className="card-colors"><p>“The Tactical Training sessions at Gaming Academy completely transformed the way I approach CS:GO. Learning from ex-pro-players not only improved my aim and tactics but also gave me a deeper appreciation for the game's complexity. I've seen a significant boost in my rank, and the camaraderie among fellow participants is unmatched.”</p>
                            <p>Alex H. - Counter-Strike: Global Offensive Tactical Training Participant</p></div>
                            
                            <div className="card-colors"><p>“The Tactical Training sessions at Gaming Academy completely transformed the way I approach CS:GO. Learning from ex-pro-players not only improved my aim and tactics but also gave me a deeper appreciation for the game's complexity. I've seen a significant boost in my rank, and the camaraderie among fellow participants is unmatched.”</p>
                            <p>Alex H. - Counter-Strike: Global Offensive Tactical Training Participant</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default HomePage;