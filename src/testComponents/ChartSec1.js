import { Box, Tab, Tabs, Typography } from '@mui/material';
import FirstChart from 'components/organism/FirstChart';
import styled from 'styled-components';


const ChartSec1 = ({ list, tabIndex }) => {

    return (
        <Box sx={{ padding: 2 }}>
            {list.map((itemList, index) => (

                <div key={'list' + index}>
                    {tabIndex === itemList.num && (
                        <FirstChart itemList={itemList} />
                    )}
                </div>

            ))}
        </Box>
    )
}


export default ChartSec1;