import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { fetchDataFromDb } from './api';
import { calcAge } from './common';
const NUM = 5;

export const MyResponsiveBar3 = ({ data /* see data tab */ }) => {
    //const [testData, setTestData] = useState([{},]);
    const [actorProfiles, setActorProfiles] = useState([]);
    //const [ageGenderDatas, setAgeGenderDatas] = useState([{},]);
    const [createYMs, setCreateYMs] = useState([{},]);

    useEffect(() => {
        // const actorProfileData = fetchDataFromDb("actorProfile", 300);
        // console.log(actorProfileData)

        //setTestData([{ "man": 100, "woman": 300 },])
    }, []);

    function addCreateYM(createYM, createDate) {
        const createYear = createDate.substr(0, 4);
        createYM[createYM.length] = {
            year: createYear,
            '01월': 0, '02월': 0, '03월': 0, '04월': 0, '05월': 0, '06월': 0,
            '07월': 0, '08월': 0, '09월': 0, '10월': 0, '11월': 0, '12월': 0
        }

    }

    function addCreateMonth(k, createYM, createMonth) {
        // switch (createMonth) {
        //     case '01': createYM[k]["1월"]++;
        const index = createMonth + "월"
        //console.log(index)
        createYM[k][index]++
    }


    function countDate(list) {
        const count = 0;
        const createYears = {}; // {2021:1,2022:1,2023:1,,,}
        const createYM = [];

        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            const createDate = actorProfile.createdAt.substr(0, 10);
            const createYear = actorProfile.createdAt.substr(0, 4);
            const createMonth = actorProfile.createdAt.substr(5, 2);
            //const createDay = actorProfile.createdAt.substr(8, 2);

            if (createYear in createYears) {
                createYears[createYear]++;
                for (let k = 0; k < createYM.length; k++) {
                    if (parseInt(createYear) == createYM[k].year) {
                        addCreateMonth(k, createYM, createMonth);
                    }
                }
            }

            else {
                createYears[createYear] = 1;
                addCreateYM(createYM, createDate);
                addCreateMonth(createYM.length - 1, createYM, createMonth);
            }

        }

        let result = createYM.sort(function (a, b) { return a.year > b.year ? 1 : -1 }); // year 기준 sort
        setCreateYMs(createYM);
        //console.log(createYM);
        // console.log(createYMs);
        // console.log(createYears);
    }


    return (
        <>



            <button onClick={async () => {
                const fetchedData = await fetchDataFromDb("actorProfile", 300);
                setActorProfiles(fetchedData)
            }}>배우프로필 데이터 불러오기</button>

            <button onClick={() => { countDate(actorProfiles) }}>countDate</button>


            <ResponsiveBar
                data={createYMs}
                keys={
                    ['01월', '02월', '03월', '04월', '05월', '06월',
                        '07월', '08월', '09월', '10월', '11월', '12월']
                }
                indexBy="year"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.2}
                innerPadding={1}
                groupMode="stacked"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'set3' }}
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