import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';

export const BarChartByWeekAcc = ({ dataList }) => {
    const [createYMs, setCreateYMs] = useState([{},]);

    useEffect(() => {
        countDate(dataList)
    }, [dataList]);

    const getWeek = (date) => {
        const currentDate = date.getDate()
        const firstDay = new Date(date.setDate(1)).getDay();
        return Math.ceil((currentDate + firstDay) / 7);
    }

    function countDate(list) {
        const createYears = {}; // ex -> {2021: 162, 2022: 185}
        const createYM2 = []; // ex ->  [{Week:21-08-1, count: 12}, {Week:21-09-2, count: 5},,,]
        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            const createYear = actorProfile.createdAt.substr(0, 4); // ex: 2021
            const createIndex = actorProfile.createdAt.substr(2, 5); // ex: 21-06
            const createDate = actorProfile.createdAt.substr(0, 10);
            const week = getWeek(new Date(createDate));
            const createIndexWeek = createIndex + "-" + week
            if (createYear in createYears) {
                let find = false
                createYears[createYear]++;

                for (let k = 0; k < createYM2.length; k++) {
                    // 배열에 있는 Month,
                    if (createIndexWeek === createYM2[k].Week) {
                        find = k; break;
                    }
                }

                if (find !== false) {
                    createYM2[find].count++;
                } else {
                    createYM2.push({ Week: createIndexWeek, count: 1 }); // 배열 추가
                }
            }
            // 새로운 Month
            else { // 2021, 2022, 2023, ,, 처음 발견 시 실행
                createYears[createYear] = 1;
                createYM2.push({ Week: createIndexWeek, count: 1 }); // 배열 추가
            }

        }
        let result = createYM2.sort(function (a, b) { return a.Week > b.Week ? 1 : -1 }); // year 기준 sort

        let cnt = 0;
        for (let k = 0; k < result.length; k++) {
            let tmpCount;
            tmpCount = cnt;
            cnt += result[k].count;
            result[k].count += tmpCount;
        }
        setCreateYMs(result);

    }


    return (
        <>
            <ResponsiveBar
                data={createYMs}
                keys={
                    ['count']
                }
                indexBy="Week"
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