import React from "react";
import {Link} from "react-router-dom";
import {
    Container,
    AppBar,
    Toolbar,
    Link as MuiLink
    // Box,
    // Hidden,
    // IconButton,
    // Drawer,
    // List,
    // ListItem,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Navbar = () => {
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     open: false
    // });

    // const toggleDrawer = open => event => {
    //     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
    //         return;
    //     }

    //     setState({...state, open});
    // };
    return (
        <nav className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar>
                        {/* <Hidden smUp>
                            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden> */}
                        <MuiLink
                            underline="none"
                            color="inherit"
                            variant="h6"
                            className={classes.title}
                            component={Link}
                            to="/"
                        >
                            Tildea
                        </MuiLink>
                        <MuiLink variant="subtitle1" color="inherit" component={Link} to="/ejercicios">
                            Ejercicios
                        </MuiLink>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <Drawer open={state.open} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button>
                            <Box mx={5}>
                                <MuiLink variant="h5" color="textPrimary" component={Link} to="/ejercicios">
                                    Ejercicios
                                </MuiLink>
                            </Box>
                        </ListItem>
                    </List>
                </div>
            </Drawer> */}
        </nav>
    );
};

export default Navbar;
