import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";

const PAGES = ["Products", "Services", "AboutUs", "ContactUs","SignUp","Login"]

function DrawerComp() {
    const [openDrawer,setOpenDrawer] = useState(false)
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
        >
            <List>
                {PAGES.map((page,index)=>(
                    <ListItemButton onClick={()=>setOpenDrawer(false)} key={index} component={Link} to={`/${page.toLowerCase()}`} >
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))}
                
            </List>
        </Drawer>
        <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <ListIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp