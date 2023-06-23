import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import ProductList from '../component/productList';
import StdProductList from '../component/stdproductList';
import OferProductList from '../component/oferproductList';
import Button from '@mui/material/Button';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ListTabs() {
  const [data, setDataFromChild] = useState(0);
  const Onhandleobj = (acount) => {
    setDataFromChild(acount);
  };
 // console.log(data);
 
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:'rgb(21 191 176)',borderRadius:'5px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Popular" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(0)} />
          <Tab label="Standrad" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(1)} />
          <Tab label="Offer" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(2)} />
          <Tab label="Discount %" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(3)} />
          <Link style={{color:'#ffc107',fontWeight:'600',fontSize:25,marginLeft:'Auto',paddingRight:30}} class="nav-link" to='/addTocards/'>  
              <Badge badgeContent={data} color="secondary"><FaShoppingCart/></Badge>
          </Link>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Button variant="outlined">Popular</Button>
        <ProductList addCount = {Onhandleobj}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button variant="outlined">Standrad</Button>
        <StdProductList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Button variant="outlined">Offer</Button>
        <OferProductList/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Button variant="outlined">Discount</Button>
        <ProductList/>
      </TabPanel>
    </div>
  );
}