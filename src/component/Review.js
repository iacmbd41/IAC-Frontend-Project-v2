import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Samsung Galaxy M11 64GB',
    desc: 'A nice thing',
    price: '20000',
  },
  {
    name: 'Headphones Bose 35',
    desc: 'Another thing',
    price: '4000',
  },
  {
    name: 'IPAD-Mini 3',
    desc: 'Something else',
    price: '120000',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['Polashi', 'CSS', 'IAC'];
const payments = [
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: '0000-0000-1234' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding style={{border:'1px solid #ddd',padding:'5px'}}>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name}/>
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <hr/>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            tk 134000
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}