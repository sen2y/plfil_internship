import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { Button } from "@material-ui/core";

//export const BarChartByAccButton = ({ dataList, setEnterWidthAcc, setEnterHeightAcc }) => {
export const BarChartByAccButton = ({ dataList, saveDateData, setSaveDateData }) => {
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

    // const getWeek = (date) => {
    //     const currentDate = date.getDate()
    //     const firstDay = new Date(date.setDate(1)).getDay();
    //     return Math.ceil((currentDate + firstDay) / 7);
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

        // 누적 chart 추가 부분
        // 아래 주석처럼 반복문으로 돌리면 오류 생김. 나중에 다시 보기

        //let tmpResult = [result, result2, result3];
        let cnt = 0;
        for (let k = 0; k < result.length; k++) {
            let tmpCount;
            tmpCount = cnt;
            cnt += result[k].count;
            result[k].count += tmpCount;
        }
        cnt = 0;
        for (let k = 0; k < result2.length; k++) {
            let tmpCount;
            tmpCount = cnt;
            cnt += result2[k].count;
            result2[k].count += tmpCount;
        }
        cnt = 0;
        for (let k = 0; k < result3.length; k++) {
            let tmpCount;
            tmpCount = cnt;
            cnt += result3[k].count;
            result3[k].count += tmpCount;
        }


        // for (let i = 0; tmpResult.length; i++) {
        //     let cnt = 0;
        //     console.log(tmpResult[i])
        //     console.log(tmpResult)
        //     console.log(tmpResult.length)
        //     for (let k = 0; k < tmpResult[i].length; k++) {
        //         let tmpCount;
        //         tmpCount = cnt;
        //         cnt += tmpResult[i][k].count;
        //         tmpResult[i][k] += tmpCount;
        //     }
        // }
        setCreateYM2Months(result);
        setCreateYM2Weeks(result2);
        setCreateYM2Dates(result3);
        if (result.length !== 0) {
            const totalDataAcc = { Month: result, Week: result2, Date: result3 }
            const beforeData = saveDateData;
            beforeData.push({ totalDataAcc })
            setSaveDateData(beforeData)
        }

    }
    // function choiceBtn(num) {
    //     if (num === 4) {
    //         setCreateYM2(createYM2Months)
    //     }
    //     else if (num === 5) {
    //         setCreateYM2(createYM2Weeks)
    //     }
    //     else if (num === 6) {
    //         setCreateYM2(createYM2Dates)
    //     }
    // }

    return (
        <>
            {/* <Button onClick={() => { choiceBtnAcc(1); setEnterWidthAcc('1100px'); setEnterHeightAcc('700px') }}>month</Button>
            <Button onClick={() => { choiceBtnAcc(2); setEnterWidthAcc('270rem'); setEnterHeightAcc('700px') }}>week</Button>
            <Button onClick={() => { choiceBtnAcc(3); setEnterWidthAcc('1500rem'); setEnterHeightAcc('700px') }}>date</Button> */}

            <ResponsiveBar
                data={createYM2}
                keys={
                    ['count']
                }
                indexBy="Date"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.2}
                innerPadding={1}
                groupMode="stacked"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'paired' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[

                    {
                        match: {
                            id: 'L_DEC'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'year',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '단위 : 명',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={5}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}

                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
            />
        </>

    )
}

