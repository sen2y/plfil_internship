
import { PieChart } from 'components/PieChart';
import { TestChart } from 'components/TestChart';
import React from 'react'
import styled from "styled-components";
// dashboard 용 main과 관련없음
export default function Chart() {
    const gender = [{ man: 5207, woman: 5953 }]
    const age = [
        {
            "country": "AD",
            "hot dog": 169,
            "hot dogColor": "hsl(147, 70%, 50%)",
            "burger": 30,
            "burgerColor": "hsl(32, 70%, 50%)",
            "sandwich": 110,
            "sandwichColor": "hsl(3, 70%, 50%)",
            "kebab": 75,
            "kebabColor": "hsl(50, 70%, 50%)",
            "fries": 22,
            "friesColor": "hsl(331, 70%, 50%)",
            "donut": 81,
            "donutColor": "hsl(269, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 137,
            "hot dogColor": "hsl(3, 70%, 50%)",
            "burger": 151,
            "burgerColor": "hsl(328, 70%, 50%)",
            "sandwich": 177,
            "sandwichColor": "hsl(311, 70%, 50%)",
            "kebab": 200,
            "kebabColor": "hsl(117, 70%, 50%)",
            "fries": 130,
            "friesColor": "hsl(258, 70%, 50%)",
            "donut": 48,
            "donutColor": "hsl(353, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 184,
            "hot dogColor": "hsl(11, 70%, 50%)",
            "burger": 151,
            "burgerColor": "hsl(172, 70%, 50%)",
            "sandwich": 23,
            "sandwichColor": "hsl(31, 70%, 50%)",
            "kebab": 198,
            "kebabColor": "hsl(73, 70%, 50%)",
            "fries": 193,
            "friesColor": "hsl(287, 70%, 50%)",
            "donut": 126,
            "donutColor": "hsl(260, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 24,
            "hot dogColor": "hsl(239, 70%, 50%)",
            "burger": 174,
            "burgerColor": "hsl(200, 70%, 50%)",
            "sandwich": 151,
            "sandwichColor": "hsl(162, 70%, 50%)",
            "kebab": 98,
            "kebabColor": "hsl(264, 70%, 50%)",
            "fries": 190,
            "friesColor": "hsl(210, 70%, 50%)",
            "donut": 77,
            "donutColor": "hsl(138, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 111,
            "hot dogColor": "hsl(160, 70%, 50%)",
            "burger": 1,
            "burgerColor": "hsl(130, 70%, 50%)",
            "sandwich": 153,
            "sandwichColor": "hsl(266, 70%, 50%)",
            "kebab": 2,
            "kebabColor": "hsl(114, 70%, 50%)",
            "fries": 186,
            "friesColor": "hsl(22, 70%, 50%)",
            "donut": 88,
            "donutColor": "hsl(342, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 23,
            "hot dogColor": "hsl(333, 70%, 50%)",
            "burger": 135,
            "burgerColor": "hsl(331, 70%, 50%)",
            "sandwich": 127,
            "sandwichColor": "hsl(336, 70%, 50%)",
            "kebab": 154,
            "kebabColor": "hsl(176, 70%, 50%)",
            "fries": 8,
            "friesColor": "hsl(282, 70%, 50%)",
            "donut": 83,
            "donutColor": "hsl(263, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 57,
            "hot dogColor": "hsl(161, 70%, 50%)",
            "burger": 12,
            "burgerColor": "hsl(209, 70%, 50%)",
            "sandwich": 189,
            "sandwichColor": "hsl(87, 70%, 50%)",
            "kebab": 4,
            "kebabColor": "hsl(139, 70%, 50%)",
            "fries": 98,
            "friesColor": "hsl(5, 70%, 50%)",
            "donut": 99,
            "donutColor": "hsl(44, 70%, 50%)"
        }
    ]

    return (
        <Outer>
            <Charts>
                <ChartTitle>
                    남녀 배우 성비
                    <CreateBox >
                        <PieChart dataList={gender} legend={'gender'} />
                    </CreateBox>
                </ChartTitle>


            </Charts>
            <Charts2>
                <ChartTitle>
                    Sales Aalytics4

                    <CreateBox >

                    </CreateBox>
                </ChartTitle>


            </Charts2>
        </Outer>

    )
}

const Outer = styled.div`
    
    display: flex;
    justify-content: space-between;
`
const Charts = styled.div`
    flex: 1;
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 12px -1px #000000;
    box-shadow:  0px 0px 12px -1px #000000;

`
const Charts2 = styled.div`
    flex: 2;
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 12px -1px #000000;
    box-shadow:  0px 0px 12px -1px #000000;

`
const ChartTitle = styled.h3`
    margin-bottom : 30px;

`
const CreateBoxOuter = styled.div`
    width:450px ;
    height:400px ;
    background-color: pink;
    margin-top: 20px;
    margin-bottom:20px;
`
const CreateBox = styled.div`
    width:   1000px;
    height: 400px;
    `

