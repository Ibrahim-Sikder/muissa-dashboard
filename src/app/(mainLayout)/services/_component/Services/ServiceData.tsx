import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useGetAllServicesQuery } from '@/redux/api/serviceApi';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import ForwardIcon from '@mui/icons-material/Forward';

const renderElement = (element, index) => {
    if (typeof element === 'string') {
        return element;
    }

    switch (element.type) {
        case 'h1':
            return (
                <h1 key={index} className="text-3xl font-bold mb-4">
                    {element.props.children}
                </h1>
            );
        case 'h2':
            return (
                <h2 key={index} className="text-2xl font-bold mb-3">
                    {element.props.children}
                </h2>
            );
        case 'h3':
            return (
                <h3 key={index} className="text-xl font-bold mb-2">
                    {element.props.children}
                </h3>
            );
        case 'p':
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        case 'ul':
            return (
                <ul key={index} className="pl-3 ">
                    {React.Children.map(element.props.children, (child, childIndex) =>
                        renderElement(child, childIndex)
                    )}
                </ul>
            );
        case 'ol':
            return (
                <ol key={index} className="pl-3">
                    {React.Children.map(element.props.children, (child, childIndex) =>
                        renderElement(child, childIndex)
                    )}
                </ol>
            );
        case 'li':
            return (
                <li key={index} className="mb-1">
                    <div className="flex items-center">
                        <ForwardIcon className="mr-2" />
                        {element.props.children}
                    </div>
                </li>
            );
        case 'div':
            if (element.props.className === 'ql-align-center') {
                return (
                    <div key={index} className="text-center mb-2">
                        {element.props.children}
                    </div>
                );
            } else if (element.props.className === 'ql-align-right') {
                return (
                    <div key={index} className="text-right mb-2">
                        {element.props.children}
                    </div>
                );
            } else if (element.props.className === 'ql-align-left') {
                return (
                    <div key={index} className="text-left mb-2">
                        {element.props.children}
                    </div>
                );
            }
            return (
                <div key={index} className="mb-2">
                    {element.props.children}
                </div>
            );
        default:
            return element;
    }
};

const renderContent = (content) => {
    const parsedContent = ReactHtmlParser(content);
    return parsedContent.map((element, index) => renderElement(element, index));
};

const tabStyles = {
    border: "none",
    textAlign: "left",
    pl: 2,
    "& .MuiTab-wrapper": {
        justifyContent: "flex-start",
    },

    "&.Mui-selected": {
        borderLeft: "2px solid #002140",
        borderRight: "none",
        borderTop: "none",
        borderBottom: "none",
        color: "#fff",
        background: "#1591A3",
        textAlign: 'left',

    },
};
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
    console.log(serviceData);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    if (!serviceData) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ minWidth: '200px', border: 'none', }}
                TabIndicatorProps={{ style: { display: 'none' } }}
            >
                {serviceData?.services.map((service, index) => (
                    <Tab
                        key={service.id}
                        label={service.category}
                        {...a11yProps(index)}
                        sx={tabStyles}
                    />
                ))}
            </Tabs>

            {serviceData?.services?.map((service, index: number) => (
                <CustomTabPanel key={service.id} value={value} index={index}>
                    <div className=''>
                        <div className="w-full h-96 aspect-video relative">
                            <Image
                                src={service.service_image}
                                alt='services'
                                width={500}
                                height={475}
                                className="rounded-t-lg h-full w-full object-cover absolute"
                            />
                        </div>
                        
                    </div>
                    <h4 className='mt-10'>{service.title}</h4>
                    <p className='my-3'>{service.short_description}</p>
                    <div>{renderContent(service?.description)}</div>
                </CustomTabPanel>
            ))}
        </Box>
    );
}
