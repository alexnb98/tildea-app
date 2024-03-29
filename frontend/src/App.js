// third party librarys
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {theme, globalStyles} from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loadable from "react-loadable";
import {CircularProgress, Grid, Box, Typography} from "@material-ui/core";

// Components
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AllExercises from "./pages/AllExercises";
import GameFunctionality from "./games/GameFunctionality";
import curriculum from "./utils/curriculum";
import NotFound from './pages/NotFound'

function Loading({pastDelay, error}) {
    return (
        <Box my={15}>
            <Grid container justify="center" alignItems="center">
                {error ? <Typography align="center">{error}</Typography> : pastDelay ? <CircularProgress /> : null}
            </Grid>
        </Box>
    );
}

// Tutorials (Code-Splitting)
const SilabaTonica = Loadable({loader: () => import("./tutorials/SilabaTonica"), loading: Loading});
const Agudas = Loadable({loader: () => import("./tutorials/Agudas"), loading: Loading});
const Graves = Loadable({loader: () => import("./tutorials/Graves"), loading: Loading});
const Esdrujulas = Loadable({loader: () => import("./tutorials/Esdrujulas"), loading: Loading});
const Sobreesdrujulas = Loadable({loader: () => import("./tutorials/Sobreesdrujulas"), loading: Loading});
const TildeDiacritica = Loadable({loader: () => import("./tutorials/TildeDiacritica"), loading: Loading});
const Diptongos = Loadable({loader: () => import("./tutorials/Diptongos"), loading: Loading});
const Triptongos = Loadable({loader: () => import("./tutorials/Triptongos"), loading: Loading});
const Hiatos = Loadable({loader: () => import("./tutorials/Hiatos"), loading: Loading});

const App = () => {
    globalStyles();
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/ejercicios/" component={AllExercises} />
                    {/* tutorials */}
                    <Route path="/silaba-tonica/tutorial" component={SilabaTonica} />
                    <Route path="/agudas/tutorial" component={Agudas} />
                    <Route path="/graves/tutorial" component={Graves} />
                    <Route path="/esdrujulas/tutorial" component={Esdrujulas} />
                    <Route path="/sobreesdrujulas/tutorial" component={Sobreesdrujulas} />
                    <Route path="/tilde-diacritica/tutorial" component={TildeDiacritica} />
                    <Route path="/diptongos/tutorial" component={Diptongos} />
                    <Route path="/triptongos/tutorial" component={Triptongos} />
                    <Route path="/hiatos/tutorial" component={Hiatos} />
                    {/* exercises -> path = /agudas/1 */}
                    {curriculum.map((topic, index) => {
                        return <Route key={index} path={`/${topic.link}/:id`} component={GameFunctionality} />;
                    })}
                    <Route component={NotFound}/>
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
