import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlelogin = () => {
    navigate("/");
  };

  const handlesignup = () => {
    navigate("/signup");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
          My Navbar
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Button
            onClick={handlelogin}
            color="inherit"
            startIcon={<LoginIcon />}
            sx={{
              mx: 1,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            Login
          </Button>
          <Button
            onClick={handlesignup}
            color="inherit"
            startIcon={<PersonAddIcon />}
            sx={{
              mx: 1,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "rotate(90deg)" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handlelogin}
              color="inherit"
              startIcon={<LoginIcon />}
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handlesignup}
              color="inherit"
              startIcon={<PersonAddIcon />}
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Sign Up
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
