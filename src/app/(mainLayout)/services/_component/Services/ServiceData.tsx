import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useGetAllServicesQuery } from '@/redux/api/serviceApi';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ServiceData() {
  const [value, setValue] = React.useState(0);
  const { data: serviceData } = useGetAllServicesQuery({});
  console.log(serviceData)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ minWidth: '200px', border: 'none' }} // Remove the border
        TabIndicatorProps={{ style: { display: 'none' } }} // Hide the tab indicator
      >
        {serviceData?.services.map((service, index) => (
          <Tab
            key={service.id}
            label={service.category}
            {...a11yProps(index)}
            sx={{
              border: 'none', // Remove the border from each tab
              backgroundColor: value === index ? 'red' : 'transparent', // Set active tab background to red
              color: value === index ? 'white' : 'inherit', // Set active tab text color to white
            }}
          />
        ))}
      </Tabs>
      {serviceData?.services?.map((service, index) => (
        <CustomTabPanel key={service.id} value={value} index={index}>
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
