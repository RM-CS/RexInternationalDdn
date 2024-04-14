import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardFour from '../../../components/card/CardFour';
import useMediaQuery from '@mui/material/useMediaQuery';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

export default function List() {
  const [value, setValue] = React.useState(0);
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='flex justify-center md:my-6'>
        <Box sx={{ width: '80%' }}>
          <Box sx={{ borderColor: 'divider' }}>
            {isMediumScreen ? (
              <Tabs value={value} onChange={handleChange} orientation="vertical" aria-label="basic tabs example">
                <Tab label="Kitchen Roll Dispenser" {...a11yProps(0)} />
                <Tab label="M- Fold Dispenser" {...a11yProps(1)} />
                <Tab label="Toilet Roll Dispenser" {...a11yProps(2)} />
                <Tab label="Modern style Dispenser" {...a11yProps(3)} />
                <Tab label="Face Tissue Dispenser" {...a11yProps(4)} />
                <Tab label="Foam And Soap Dispensers" {...a11yProps(5)} />
                <Tab label="Tissue paper supply" {...a11yProps(6)} />
                <Tab label="Paper Towel Dispenser" {...a11yProps(7)} />
              </Tabs>
            ) : (
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Kitchen Roll Dispenser" {...a11yProps(0)} />
                <Tab label="M- Fold Dispenser" {...a11yProps(1)} />
                <Tab label="Toilet Roll Dispenser" {...a11yProps(2)} />
                <Tab label="Modern style Dispenser" {...a11yProps(3)} />
                <Tab label="Face Tissue Dispenser" {...a11yProps(4)} />
                <Tab label="Foam And Soap Dispensers" {...a11yProps(5)} />
                <Tab label="Tissue paper supply" {...a11yProps(6)} />
                <Tab label="Paper Towel Dispenser" {...a11yProps(7)} />
              </Tabs>
            )}
          </Box>
          <CustomTabPanel value={value} index={0}>
            <CardFour />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <CardFour />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <CardFour />
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
}
