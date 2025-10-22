import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Home", path: "/" },
  { text: "Blogs", path: "/Blogs" },
  { text: "Projects", path: "/projects" },
  { text: "Skills", path: "/skills" },
  { text: "Contact", path: "/contact" },
];

export default function ToggleMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", top: 10, left: 10,color:"inherit" }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} >
        <List sx={{ width:250}} >
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => setOpen(false)}>
              <ListItemText
                primary={
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography  fontSize="1.5rem" >
                      {item.text}
                    </Typography>
                  </Link>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
