import React, { useState, useContext } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../Util/ThemeContext";

const menuItems = [
  { text: "Home", path: "/" },
  { text: "Blogs", path: "/blogs" },
  { text: "Projects", path: "/projects" },
  { text: "Skills", path: "/skills" },
  { text: "Contact", path: "/contact" },
];

export default function ToggleMenu() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          top: 10,
          left: 10,
          color: "inherit",
      
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

   
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <List>
          
         
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => setOpen(false)}
                sx={{ textAlign: "center" }} 
               
              > 
             
                <ListItemText
                  primary={
                    <Link
                      to={item.path}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "1.2rem",
                      }}
                    >
                      {item.text} 
                         <Divider />
                    </Link>  
                 
                  }
                />
              </ListItem>
            ))}
          </List>

       
          <Box
            sx={{
              justifyContent:"center",
             display:"flex", flexDirection:"row",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <IconButton onClick={colorMode.toggleColorMode} color="inherit"  >
              {theme.palette.mode === "dark" ? (
                <Brightness7 fontSize="large" />
              ) : (
                <Brightness4 fontSize="large" />
              )}
            </IconButton>
            <Typography variant="body2" sx={{p:2}}>
              {theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
            </Typography>
          </Box>

        </Box>
      </Drawer>
    </>
  );
}
