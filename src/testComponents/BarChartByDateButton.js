import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { Button } from "@material-ui/core";
import { Fis } from 'aws-sdk';
import { create } from '@mui/material/styles/createTransitions';
import styled from "styled-components";
import { style } from '@mui/system';

export const BarChartByDateButton = ({ dataList, saveDateData, setSaveDateData }) => {
    // export const BarChartByDateButton = ({ dataList }) => {
    const [createYM2Months, setCreateYM2Months] = useState([{},]);
    const [createYM2Weeks, setCreateYM2Weeks] = useState([{},]);
    const [createYM2Dates, setCreateYM2Dates] = useState([{},]);
    const [createYM2, setCreateYM2] = useState(createYM2Months);


    useEffect(() => {
        countDate(dataList)
    }, [dataList]);

    // useEffect(() => {
    //     choiceBtn(choice);
    // }, [choice])

    const getWeek = (date) => {
        const currentDate = date.getDate()
        const firstDay = new Date(date.setDate(1)).getDay();
        const currentMonth = date.getMonth()
        const lastDay = new Date(date.getFullYear(), currentMonth + 1, 0) // 입력 월의 마지막 날
        const lastGetDay = lastDay.getDay() // 마지막 날 요일
        if (Math.ceil((currentDate + firstDay) / 7) === Math.ceil((lastDay.getDate() + firstDay) / 7)) { // 마지막주면
            if (lastGetDay === 6) { // 다음달 1일은 일요일부터 시작
                return Math.ceil((currentDate + firstDay) / 7);
            }
            else {// 막주와 다음달 첫째주가 이어진 경우 다음달 첫째주로 계산
                return 0;
            }
        }
        else {
            return Math.ceil((currentDate + firstDay) / 7);
        }
    }

    // 기존 주별 계산 함수, 실제 달력 주차와 동일
    // const getWeek = (date) => {
    //     const currentDate = date.getDate()
    //     const firstDay = new Date(date.setDate(1)).getDay();
    //     const plusDate = new Date(date.setDate(currentDate + 6)).getDay();
    //     if (Math.ceil(plusDate + firstDay) / 7 === Math.ceil((currentDate + firstDay)) / 7) {
    //         console.log(date)
    //         console.log(currentDate)
    //         console.log(Math.ceil((currentDate + firstDay) / 7))
    //         return Math.ceil((currentDate + firstDay) / 7);
    //     }
    //     else {
    //         console.log(date)
    //         console.log(currentDate)
    //         console.log(Math.ceil((plusDate + firstDay) / 7))
    //         return Math.ceil((plusDate + firstDay) / 7);
    //     }

    // }


    function countDate(list) {
        const createYears = {}; // ex -> {2021: 162, 2022: 185}
        const createYM2Month = []; // ex ->  [{Date:21-08, count: 12}, {Date:21-09, count: 5},,,]
        const createYM2Week = []; // ex ->  [{Date:21-08-1, count: 12}, {Date:21-09-2, count: 5},,,]
        const createYM2Date = []; // ex ->  [{Date:21-08-17, count: 12}, {Date:21-09-21, count: 5},,,]

        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            const createYear = actorProfile.createdAt.substr(0, 4); // ex: 2021
            let createIndex = actorProfile.createdAt.substr(2, 5); // ex: 21-06
            let createIndexY = actorProfile.createdAt.substr(2, 2); // ex: 21
            let createIndexM = actorProfile.createdAt.substr(5, 2); // ex: 06
            const createDate28 = actorProfile.createdAt.substr(2, 8); // ex: 21-06-22
            const createDate = actorProfile.createdAt.substr(0, 10); // ex: 2021-06-22
            const week = getWeek(new Date(createDate));
            let createIndexWeek;
            if (week !== 0) {
                createIndexWeek = createIndex + "-" + week
            }
            else {
                if (parseInt(createIndexM) !== 12) { // 1~11월
                    createIndexM = parseInt(createIndexM) + 1 // ex: 06 -> 07
                    if (createIndexM < 10) {
                        createIndexM = "0" + createIndexM
                    }
                    createIndex = createIndex.substr(0, 3) + createIndexM // ex: 21-06 -> 21-07
                }
                else { // 12월이면 내년으로 넘겨야함
                    createIndexY = parseInt(createIndexY) + 1 // 다음해로  
                    createIndexM = "01" // 1월
                    createIndex = createIndexY + "-" + createIndexM // ex: 21-12 -> 22-01
                }
                createIndexWeek = createIndex + "-1"
            }



            if (createYear in createYears) {
                let find = false; let find2 = false; let find3 = false;
                createYears[createYear]++;

                // month
                for (let k = 0; k < createYM2Month.length; k++) {

                    // 배열에 있는 Month,
                    if (createIndex === createYM2Month[k].Date) {
                        find = k; break;
                    }


                }
                if (find !== false) {
                    createYM2Month[find].count++;
                }
                else {
                    createYM2Month.push({ Date: createIndex, count: 1 }); // 배열 추가
                }


                // week
                for (let k = 0; k < createYM2Week.length; k++) {
                    // 배열에 있는 Week,
                    if (createIndexWeek === createYM2Week[k].Date) {
                        find2 = k; break;
                    }
                }

                if (find2 !== false) {
                    createYM2Week[find2].count++;
                }
                else {
                    createYM2Week.push({ Date: createIndexWeek, count: 1 }); // 배열 추가
                }


                // date
                for (let k = 0; k < createYM2Date.length; k++) {
                    // 배열에 있는 Date
                    if (createDate28 === createYM2Date[k].Date) {
                        find3 = k; break;
                    }

                }


                if (find3 !== false) {
                    createYM2Date[find3].count++;
                }
                else {
                    createYM2Date.push({ Date: createDate28, count: 1 }); // 배열 추가
                }
            }

            // 새로운 Month
            else { // 2021, 2022, 2023, ,, 처음 발견 시 실행
                createYears[createYear] = 1;
                createYM2Month.push({ Date: createIndex, count: 1 }); // 배열 추가
                createYM2Week.push({ Date: createIndexWeek, count: 1 }); // 배열 추가
                createYM2Date.push({ Date: createDate28, count: 1 }); // 배열 추가
            }

        }
        let result = createYM2Month.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // month 기준 sort
        let result2 = createYM2Week.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // week 기준 sort
        let result3 = createYM2Date.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // year 기준 sort

        setCreateYM2Months(result);
        setCreateYM2Weeks(result2);
        setCreateYM2Dates(result3);
        if (result.length !== 0) {
            const totalData = { Month: result, Week: result2, Date: result3 }
            const beforeData = saveDateData;
            beforeData.push({ totalData })
            setSaveDateData(beforeData)
        }


        // console.log("Month");
        // console.log(createYM2Month);
        // console.log("Week");
        // console.log(createYM2Week);
        // console.log("Date");
        // console.log(createYM2Date);
    }

    // function choiceBtn(num) {
    //     if (num === 1) {
    //         setCreateYM2(createYM2Months);
    //     }
    //     else if (num === 2) {
    //         setCreateYM2(createYM2Weeks);
    //     }
    //     else if (num === 3) {
    //         setCreateYM2(createYM2Dates);
    //     }
    // }

}
//     return (
//         <>
//             {/* <div style={{ position: "absolute", left: "50px", zIndex: "500" }}>
//                 <Button onClick={() => { choiceBtn(1) }}>month</Button>
//                 <Button onClick={() => { choiceBtn(2) }}>week</Button>
//                 <Button onClick={() => { choiceBtn(3) }}>date</Button>
//             </div> */}
//             <ResponsiveBar
//                 data={createYM2}
//                 keys={
//                     ['count']
//                 }
//                 indexBy="Date"
//                 margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//                 padding={0.2}
//                 innerPadding={1}
//                 groupMode="stacked"
//                 valueScale={{ type: 'linear' }}
//                 indexScale={{ type: 'band', round: true }}
//                 colors={{ scheme: 'paired' }}
//                 defs={[
//                     {
//                         id: 'dots',
//                         type: 'patternDots',
//                         background: 'inherit',
//                         color: '#38bcb2',
//                         size: 4,
//                         padding: 1,
//                         stagger: true
//                     },
//                     {
//                         id: 'lines',
//                         type: 'patternLines',
//                         background: 'inherit',
//                         color: '#eed312',
//                         rotation: -45,
//                         lineWidth: 6,
//                         spacing: 10
//                     }
//                 ]}
//                 fill={[

//                     {
//                         match: {
//                             id: 'L_DEC'
//                         },
//                         id: 'lines'
//                     }
//                 ]}
//                 borderColor={{
//                     from: 'color',
//                     modifiers: [
//                         [
//                             'darker',
//                             1.6
//                         ]
//                     ]
//                 }}
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: 'year',
//                     legendPosition: 'middle',
//                     legendOffset: 32
//                 }}
//                 axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: '단위 : 명',
//                     legendPosition: 'middle',
//                     legendOffset: -40
//                 }}
//                 labelSkipWidth={12}
//                 labelSkipHeight={5}
//                 labelTextColor={{
//                     from: 'color',
//                     modifiers: [
//                         [
//                             'darker',
//                             1.6
//                         ]
//                     ]
//                 }}
//                 legends={[
//                     {
//                         dataFrom: 'keys',
//                         anchor: 'bottom-right',
//                         direction: 'column',
//                         justify: false,
//                         translateX: 120,
//                         translateY: 0,
//                         itemsSpacing: 2,
//                         itemWidth: 100,
//                         itemHeight: 20,
//                         itemDirection: 'left-to-right',
//                         itemOpacity: 0.85,
//                         symbolSize: 20,
//                         effects: [
//                             {
//                                 on: 'hover',
//                                 style: {
//                                     itemOpacity: 1
//                                 }
//                             }
//                         ]
//                     }
//                 ]}

//                 role="application"
//                 ariaLabel="Nivo bar chart demo"
//                 barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
//             />
//         </>

//     )
// }



const Float = styled.div`
    background-color : pink;
    position:absolute;
    pointer-events: none;
`