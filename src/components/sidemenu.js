import React from "react"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import Photography from "@material-ui/icons/PhotoCamera"
import Home from "@material-ui/icons/Home"
import Create from "@material-ui/icons/Create"
import Coding from "@material-ui/icons/Code"
import Contact from "@material-ui/icons/Send"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../utils/getPageContext.js"

class SideMenu extends React.Component {
  state = {
    drawer: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      drawer: open,
    })
  }

  render() {
    const sideList = (
      <div className="list">
        {["Home", "Photography", "Coding", "Blog", "Contact"].map(
          (text) => {
            let linkTo = "/" + (text === "Home" ? "" : text.toLowerCase());
            if (text === "Blog"){
              linkTo = "https://blog.ricotrebeljahr.com"
            }
            
            return (
              <ListItem
                key={text}
                component={Link}
                to={linkTo}
                activeClassName="active"
                partiallyActive={text !== "Home" ? true : false}
                button
              >ListItemIconListItemIcon
                <ListItemIcon>
                  {text === "Photography" ? (
                    <Photography color="primary" />
                  ) : text === "Coding" ? (
                    <Coding color="primary" />
                  ) : text === "Home" ? (
                    <Home color="primary" />
                  ) : text === "Contact" ? (
                    <Contact color="primary" />
                  ) : (
                    <Create color="primary" />
                  )}ListItemIcon
                </ListItemIcon>Blog
                <ListItemText primary={text} />
              </ListItem>
            )
          }
        )}
        <style>{`
          .active {
            background: #f9dc5c !important;
          }
          .list {
            width: 250;
            display: flex;
            flex-direction: column;
          }
          `}</style>
      </div>
    )

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div
            style={{
              marginRight: "20px",
              background: "white",
              borderRadius: "50%",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default SideMenu
