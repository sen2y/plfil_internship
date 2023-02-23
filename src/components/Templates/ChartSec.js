import { Box, Tab, Tabs, Typography } from '@mui/material';
import FirstChart from 'components/organism/FirstChart';
import styled from 'styled-components';


const ChartSec = ({ showTab, showChart, tabIndex, listIn }) => {
    const list = listIn[showTab].list[showChart]

    return (
        <Box sx={{ padding: 2 }}>
            {tabIndex === showTab && (

                <Container2>
                    <Text2>{list.text}</Text2>
                    <CreateBoxOuter
                        scrollbar={list.scrollbar} heightIn={list.heightIn} widthIn={list.widthIn}
                        color={list.bColor}>
                        <CreateBox height={list.height} width={list.width} >
                            {list.content}
                        </CreateBox>
                    </CreateBoxOuter>
                </Container2>
            )}

        </Box>
    )
}

const Container2 = styled.div`
    
        `
const CreateBoxOuter = styled.div`
    width: ${props => props.widthIn};
    height: ${props => props.heightIn};
    background-color: ${props => props.color};
    overflow-x: ${props => props.scrollbar ? 'scroll' : 'none'};
    margin-top: 20px;
    margin-bottom:20px;
`
const CreateBox = styled.div`
    width:   ${props => props.width};
    height: ${props => props.height};
    `

const Text2 = styled.div`
  
  font-size: 25px;
  font-weight: bold;
`


export default ChartSec;