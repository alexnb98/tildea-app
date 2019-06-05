// third party librarys
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {theme, globalStyles} from "./utils/theme";

// Components
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Tutorial from "./pages/Tutorial";
import SilabaTonica from "./games/SilabaTonica";
import SingleChoice from "./games/GameFunctionality";

const App = () => {
    globalStyles();
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/dashboard/" component={Dashboard} />
                    <Route path="/game1/:id" component={Game1} />
                    <Route path="/game2/:id" component={Game2} />
                    <Route path="/game3/:id" component={Game3} />
                    <Route path="/silaba-tonica/" component={SilabaTonica} />
                    <Route path="/agudas/" component={SingleChoice} />
                    <Route path="/tutorial/" component={Tutorial} />
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
