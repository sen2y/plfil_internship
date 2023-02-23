import { Button } from "@material-ui/core"
import styled from "styled-components"

const SecondChart = ({ ...props }) => {
    return (
        <>
            {props.itemList.list.map((item, index) => (
                <div key={"SecondChart" + index}>
                    <Text2>{item.text}</Text2>

                    <CreateBoxOuter
                        scrollbar={item.scrollbar} heightIn={item.heightIn} widthIn={item.widthIn}
                        color={item.bColor}>

                        <CreateBox height={item.height} width={item.width} >
                            {item.content}
                        </CreateBox>

                    </CreateBoxOuter>
                </div>

            ))}
        </>
    )
}

const Text2 = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: bold;
    `
const CreateBoxOuter = styled.div`
    width: ${props => props.widthIn};
    height: ${props => props.heightIn};
    background-color: ${props => props.color};
    overflow-x: ${props => props.scrollbar ? 'scroll' : 'none'};
    margin-top: 20px;
    margin-bottom:50px;

`
const CreateBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};

    `



export default SecondChart;


{/* <>
{props.itemList.list.map((item, index) => (
    <div key={"SecondChart" + index}>
        <FloatOuter><Text2>{item.text}</Text2></FloatOuter>

        <CreateBoxOuter
            scrollbar={item.scrollbar} heightIn={item.heightIn} widthIn={item.widthIn}
            color={item.bColor}>
            <CreateBox height={item.height} width={item.width} >
                {item.content}
            </CreateBox>
        </CreateBoxOuter>
    </div>

))}
</> */}
{/* {item.dateFormatButton && <>
    {item.ageGenderButton && <>
                        <Button onClick={() => { props.setChoice(item.choice1) }}>배우 연령대 5살 단위</Button>
                        <Button onClick={() => { props.setChoice(item.choice2) }}>3살 단위</Button>
                        <Button onClick={() => { props.setChoice(item.choice3) }}>10살 단위</Button>
                    </>}
                        <Button onClick={() => { props.setEnterWidth('100%'); props.setEnterHeight('700px'); props.setChoice(item.choice1) }}>Month</Button>
                        <Button onClick={() => { props.setEnterWidth('270rem'); props.setEnterHeight('700px'); props.setChoice(item.choice2) }}>Week</Button>
                        <Button onClick={() => { props.setEnterWidth('2000rem'); props.setEnterHeight('700px'); props.setChoice(item.choice3) }}>Date</Button>
                    </>}
                    {item.dateFormatButtonAcc && <>
                        <Button onClick={() => { props.setEnterWidthAcc('100%'); props.setEnterHeightAcc('700px'); props.setChoice(item.choice1) }}>Month</Button>
                        <Button onClick={() => { props.setEnterWidthAcc('270rem'); props.setEnterHeightAcc('700px'); props.setChoice(item.choice2) }}>Week</Button>
                        <Button onClick={() => { props.setEnterWidthAcc('2000rem'); props.setEnterHeightAcc('700px'); props.setChoice(item.choice3) }}>Date</Button>
                    </>}
                    {item.dateFormatButtonNew && <>
                        <Button onClick={() => { props.setEnterWidthNew('100%'); props.setEnterHeightNew('700px'); props.setChoice(item.choice1) }}>Month</Button>
                        <Button onClick={() => { props.setEnterWidthNew('270rem'); props.setEnterHeightNew('700px'); props.setChoice(item.choice2) }}>Week</Button>
                        <Button onClick={() => { props.setEnterWidthNew('2000rem'); props.setEnterHeightNew('700px'); props.setChoice(item.choice3) }}>Date</Button>
                    </>}
                    {item.couponButton && <>
                        <Button onClick={() => { props.setEnterWidthCoupon('100%'); props.setEnterHeightCoupon('700px'); props.setChoice(item.choice1) }}>Month</Button>
                        <Button onClick={() => { props.setEnterWidthCoupon('270rem'); props.setEnterHeightCoupon('700px'); props.setChoice(item.choice2) }}>Week</Button>
                        <Button onClick={() => { props.setEnterWidthCoupon('2000rem'); props.setEnterHeightCoupon('700px'); props.setChoice(item.choice3) }}>Date</Button>
                    </>}
                    <button onClick={() => console.log(item)}>아이템</button> */}