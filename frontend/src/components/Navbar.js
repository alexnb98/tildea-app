import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Hidden,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link as MuiLink
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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

const Navbar = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false
    });

    const toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, open });
    };
    return (
        <nav className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar>
                        <Hidden smUp>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="Menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" className={classes.title}>
                            Tildea
                        </Typography>
                        <MuiLink
                            color="textSecondary"
                            component={Link}
                            to="/dashboard"
                        >
                            Dashboard
                        </MuiLink>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer open={state.open} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;
