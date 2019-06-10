// third party librarys
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {theme, globalStyles} from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

// Components
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import GameFunctionality from "./games/GameFunctionality";

const App = () => {
    globalStyles();
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/dashboard/" component={Dashboard} />
                    <Route path="/silaba-tonica/:id" component={GameFunctionality} />
                    <Route path="/agudas/:id" component={GameFunctionality} />
                    <Route path="/tilde-diacrica/:id" component={GameFunctionality} />
                    <Route path="/acento/:id" component={GameFunctionality} />
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
