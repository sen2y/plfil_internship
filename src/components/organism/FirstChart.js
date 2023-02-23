import styled from "styled-components";
import { Box } from '@mui/material';

const FirstChart = ({ itemList }) => {
    // 주석
    return (
        <Box>
            <Text>{itemList.text}</Text>
            <Container2>
                {itemList.list0.map((item0, index) => (
                    <div key={"list" + index}>
                        <Container>

                            <Text2>{item0.text}</Text2>
                            <CreateBoxOuter
                                scrollbar={item0.scrollbar} heightIn={item0.heightIn} widthIn={item0.widthIn}
                                color={item0.bColor}>
                                <CreateBox height={item0.height} width={item0.width} >
                                    {item0.content}
                                </CreateBox>
                            </CreateBoxOuter>

                        </Container>
                    </div>
                ))}
            </Container2>
        </Box>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        `
const Container2 = styled.div`
    display: flex;
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
  margin-top: 50px;
  font-size: 25px;
  font-weight: bold;
`
const Text = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: bold;

`

export default FirstChart;
