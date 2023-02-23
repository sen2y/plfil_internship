import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { fetchDataFromDb } from './api';
import { calcAge } from './common';
const NUM = 5;

export const MyResponsiveBar4 = ({ data /* see data tab */ }) => {
    //const [testData, setTestData] = useState([{},]);
    const [actorProfiles, setActorProfiles] = useState([]);
    //const [ageGenderDatas, setAgeGenderDatas] = useState([{},]);
    const [createY2021, setCreateY2021] = useState([{},]);
    const [createY2022, setCreateY2022] = useState([{},]);

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

    function addCreateMonth2(createYear, createMonth) {
        const index = createMonth + "월"
        for (let i = 0; i < createYear.length; i++) {

            if (createYear[i].Month == index) {
                createYear[i].count++;
            }
        }
    }
    function countDate2(list) {
        const count = 0;
        const createYears = {}; // {2021:1,2022:1,2023:1,,,}
        const create2021 = [
            { Month: "01월", count: 0 },
            { Month: "02월", count: 0 },
            { Month: "03월", count: 0 },
            { Month: "04월", count: 0 },
            { Month: "05월", count: 0 },
            { Month: "06월", count: 0 },
            { Month: "07월", count: 0 },
            { Month: "08월", count: 0 },
            { Month: "09월", count: 0 },
            { Month: "10월", count: 0 },
            { Month: "11월", count: 0 },
            { Month: "12월", count: 0 },

        ]; // [{Month: "1월", 2021:1, 2022:1},]
        const create2022 = [
            { Month: "01월", count: 0 },
            { Month: "02월", count: 0 },
            { Month: "03월", count: 0 },
            { Month: "04월", count: 0 },
            { Month: "05월", count: 0 },
            { Month: "06월", count: 0 },
            { Month: "07월", count: 0 },
            { Month: "08월", count: 0 },
            { Month: "09월", count: 0 },
            { Month: "10월", count: 0 },
            { Month: "11월", count: 0 },
            { Month: "12월", count: 0 },
        ]

        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            const createDate = actorProfile.createdAt.substr(0, 10);
            const createYear = actorProfile.createdAt.substr(0, 4);
            const createMonth = actorProfile.createdAt.substr(5, 2);

            // years count ( ex => { 2021 : 123, 2022 : 185 }) 
            if (createYear in createYears) {
                createYears[createYear]++;
            }

            else {
                createYears[createYear] = 1;
            }

            // 년도 구분해서 각 객체에 count ++
            if (parseInt(createYear) == 2021) {
                addCreateMonth2(create2021, createMonth);
            }
            else if (parseInt(createYear) == 2022) {
                addCreateMonth2(create2022, createMonth);
            }

        }

        let result = create2021.sort(function (a, b) { return a.Month > b.Month ? 1 : -1 }); // year 기준 sort
        let result2 = create2022.sort(function (a, b) { return a.Month > b.Month ? 1 : -1 }); // year 기준 sort
        setCreateY2022(create2022);
        setCreateY2021(create2021);

        //console.log(createYM);
        // console.log("2022")
        // console.log(create2022);
        // console.log("2021")
        // console.log(create2021);
        // console.log(createYears);
    }

    return (
        <>

            <button onClick={async () => {
                const fetchedData = await fetchDataFromDb("actorProfile", 300);
                setActorProfiles(fetchedData)
            }}>배우프로필 데이터 불러오기</button>
            <button onClick={() => { countDate2(actorProfiles) }}>2022</button>


            <ResponsiveBar
                data={createY2022}
                keys={
                    ['count']
                }
                indexBy="Month"
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