import { create } from '@mui/material/styles/createTransitions';
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';

export const BarChartByMonthNew = ({ dataList }) => {
    const [createYMs, setCreateYMs] = useState([{},]);
    const [createUser, setCreateUser] = useState([{},]); // createNew 배열에는 신규유저의 username
    useEffect(() => {
        countDate(dataList)
    }, [dataList]);


    function newUserCount(index, createYM2, actorProfile) {
        // createNew 배열에는 신규유저의 username
        let user = createUser;
        let countUser = 0;

        for (let j = 0; j < user.length; j++) {
            if (user[j] === actorProfile.username) {
                break;
            }
            countUser++;
        }

        if (countUser === user.length) {

            user.push(actorProfile.username)
            createYM2[index].new++;
        }
        setCreateUser(user);
    }

    function countDate(list) {

        const newUser = [];
        const createYears = {}; // ex -> {2021: 162, 2022: 185}
        const createYM2 = []; // ex ->  [{Month:21-08, count: 12, new: 2}, {Month:21-09, count: 5, new: 3},,,]
        const listS = list.sort(function (a, b) { return a.createdAt > b.createdAt ? 1 : -1 });
        for (let i = 0; i < listS.length; i++) {
            const actorProfile = listS[i];
            const createYear = actorProfile.createdAt.substr(0, 4); // ex: 2021
            const createIndex = actorProfile.createdAt.substr(2, 5); // ex: 21-06
            if (createYear in createYears) {
                let find = false
                createYears[createYear]++;

                for (let k = 0; k < createYM2.length; k++) {
                    // 배열에 있는 Month,
                    if (createIndex === createYM2[k].Month) {
                        find = k; break;
                    }
                }
                if (find !== false) {
                    createYM2[find].count++;
                    newUserCount(find, createYM2, actorProfile);
                } else {
                    let user = createUser;
                    let countUser = 0;
                    for (let j = 0; j < user.length; j++) {
                        if (user[j] === actorProfile.username) {
                            break;
                        }
                        countUser++;
                    }
                    if (countUser === user.length) {
                        user.push(actorProfile.username)
                        createYM2.push({ Month: createIndex, count: 1, new: 1 });
                    }
                    else {
                        createYM2.push({ Month: createIndex, count: 1, new: 0 });
                    }
                }
            }
            // 새로운 Month
            else { // 2021, 2022, 2023, ,, 처음 발견 시 실행
                createYears[createYear] = 1;
                // 배열 추가
                let user = createUser;
                let countUser = 0;
                for (let j = 0; j < user.length; j++) {
                    if (user[j] === actorProfile.username) {
                        break;
                    }
                    countUser++;
                }
                if (countUser === user.length) {
                    user.push(actorProfile.username)
                    createYM2.push({ Month: createIndex, count: 1, new: 1 });
                }
                else {
                    createYM2.push({ Month: createIndex, count: 1, new: 0 });
                }
                let result = user.sort(function (a, b) { return a > b ? 1 : -1 })
                setCreateUser(user);
            }


        }
        let result = createYM2.sort(function (a, b) { return a.Month > b.Month ? 1 : -1 }); // year 기준 sort
        setCreateYMs(result);
        console.log(createUser)
        // console.log(createYM2);
    }

    return (
        <>

            <ResponsiveBar
                data={createYMs}
                keys={
                    ['new']
                }
                indexBy="Month"
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