import { Box, Tab, Tabs, } from '@mui/material';
import React from "react";

const TabSec = (props) => {

    const handleTabChange = (event, newTabIndex) => {
        props.setTabIndex(newTabIndex);

    };

    return (
        <>
            <Box>
                <Tabs value={props.tabIndex} onChange={handleTabChange}>
                    <Tab label="1. Actor Tab " />
                    <Tab label="2. User Tab " />
                    <Tab label="3. Order Tab " />
                    <Tab label="4. Coupon Tab " />
                    <Tab label="5. Application Tab" />
                    <Tab label="6. Career Tab" />
                </Tabs>
            </Box>
        </>
    )
}

export default TabSec;