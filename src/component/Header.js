import { BrowserRouter as Router,
    Switch,
    Route, Link } from "react-router-dom";
import App from "../App";
import About from './About'
import Contact from "./Contact";
function Header() {
    return (
        <header>
            <div className="container">
                <Router>
                   <nav className="nav-list">
                        <Link to="/">
                            <div><span>Quiz</span><span className="yellow">Trivia</span>
                            </div>
                        </Link>
                        <div className="about">
                            <Link to="/app" className="link-hover">Quizzes</Link>
                            <Link to="/About" className="link-hover">About</Link>
                            <Link to="/Contact" className="link-hover">Contact</Link>
                        </div>
                    </nav>

                    <Switch>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </header>
    )
}

export default Header;