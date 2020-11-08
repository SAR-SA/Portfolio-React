import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import Avatar from '../assets/Avatar.JPG';


function Nav() {
  return (
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <ReactBootstrap.Navbar.Brand href="#home">
      <img
        src= { Avatar }
        width="70"
        height="70"
        className="d-inline-block align-top"
        alt=""
      />
      </ReactBootstrap.Navbar.Brand>
    {/* <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="/about">About</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/projects">Projects</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/contact">Contact</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav> */}
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">Shawn A. Rather</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="/about">About</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/projects">Projects</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/contact">Contact</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">More deets</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </ReactBootstrap.Navbar>
  )
}

export default Nav;

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Link } from "react-router-dom";


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function SimpleTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//       <Link to="/about">About</Link>
//       <Link to="/projects">Projects</Link>
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//           <Tab label="About" {...a11yProps(0)} />
//           <Tab label="Projects" {...a11yProps(1)} />
//           <Tab label="Contact" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>

//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//   );
// }

