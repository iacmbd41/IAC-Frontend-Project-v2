import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import ProductList from './productList';
import StdProductList from './stdproductList';
import OferProductList from './oferproductList';
import CateProductList from './catewiseproduct';
import Button from '@mui/material/Button';
import Slider from '../layout/slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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

export default function CatelistTab() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div sx={{ width: '100%' }}>
      <Container>
        <Row>
          <Col sm={7}>
            <Box><Slider/></Box>
          </Col>
          <Col sm={1} style={{borderRight:'3px solid #ddd'}}></Col>
          <Col sm={4}>
            <Box> 
              <h5 style={{backgroundColor:'#ddd',padding:'6px',border:'1px solid #green',borderRadius:'4px'}}>Your Desire Product</h5>
              <Tabs 
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            > 
            <Tab label="POPULAR" {...a11yProps(0)} />
            <Tab label="STANDARD" {...a11yProps(1)} />
            <Tab label="OFFER" {...a11yProps(2)} />
            <Tab label="DISCOUNT %" {...a11yProps(3)} />
            </Tabs>
          </Box>
          </Col>
        </Row>
      </Container>
     
      <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:'rgb(21 191 176)',borderRadius:'5px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Popular" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(0)} />
          <Tab label="Standrad" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(1)} />
          <Tab label="Offer" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(2)} />
          <Tab label="Discount %" style={{color:'#fff',fontWeight:'600'}} {...a11yProps(3)} />
          <Link style={{color:'#ffc107',fontWeight:'600',fontSize:25,marginLeft:'Auto',paddingRight:30}} class="nav-link" to='/addTocard/'>  
              <Badge badgeContent={0} color="secondary"><FaShoppingCart/></Badge>
          </Link>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Button variant="outlined">Popular</Button>
        <CateProductList/>
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
      <br/><br/>
    </div>
  );
}