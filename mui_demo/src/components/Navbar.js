// import React, { useState } from "react";
// import {AppBar,Button,Tab,Tabs,Toolbar,Typography,useMediaQuery,useTheme,} from "@mui/material";
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import DrawerComp from "../components/Drawer";
// import { Link } from "react-router-dom";


// const PAGES = ["Products", "Services", "AboutUs", "ContactUs"]
// const Navbar = () => {
//   const [value, setValue] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#063970" }}>
//         <Toolbar >
//           {/* <AddTaskIcon sx={{ transform: "scale(2)" }} component={Link} to="/"/> */}
//           <AddTaskIcon sx={{ fontSize: 40 }}  />


//           {isMatch ? ( 
//             <>
//               <Typography sx={{ fontSize: "rem", paddingLeft: "10%" }}>Shoppee</Typography>
//               <DrawerComp />
//             </>
//            ) : ( 
//             <>
//               <Tabs
//                 sx={{ marginLeft: "auto" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, newValue) => setValue(newValue)}>
//                 {PAGES.map((page, index) => (
//                   <Tab 
//                     key={index} 
//                     label={page} 
//                     component={Link} 
//                     to={`/${page.toLowerCase()}`} 
//                   />
//                 ))}
//               </Tabs>
              
//               <Button sx={{ marginLeft: "auto" }} variant="contained" component={Link} to="/login">Login</Button>
//               <Button sx={{ marginLeft: "10px" }} variant="contained" component={Link} to="/signup" >SignUp</Button>
//             </>
//           )} 
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import DrawerComp from "../components/Drawer";
import { Link } from "react-router-dom";

const PAGES = ["Products", "Services", "AboutUs", "ContactUs"];

const Navbar = () => {
  const [value, setValue] = useState(0); // Initialize with a valid index
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddTaskIcon sx={{ fontSize: 40 }} />

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "rem", paddingLeft: "10%" }}>Shoppee</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, newValue) => setValue(newValue)} // Update the state correctly
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                  />
                ))}
              </Tabs>

              <Button sx={{ marginLeft: "auto" }} variant="contained" component={Link} to="/login">Login</Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained" component={Link} to="/signup">SignUp</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
