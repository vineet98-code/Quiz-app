import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home() {
    return (
        <>
            <Header />
            <div className="container ">
                <h1> Welcome to the Quiz Trivia!</h1>
                <Router>
                    <Link to="/app">
                        <div className="goto-btn">Goto Quizzes</div>
                    </Link>
                </Router>
                
            </div>
        </>
    )
}

export default Home;