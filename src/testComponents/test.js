// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { fetchDataFromDb } from './api';
import { calcAge } from './common';
import "./test.css"


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.




export const MyResponsiveBar = ({ data /* see data tab */ }) => {


    const [testData, setTestData] = useState([{ "man": 500, "woman": 300 },]);
    const [actorProfiles, setActorProfiles] = useState([]);


    useEffect(() => {
        // const actorProfileData = fetchDataFromDb("actorProfile", 300);
        // console.log(actorProfileData)

        //setTestData([{ "man": 100, "woman": 300 },])
    }, []);

    const onChange = () => {
        setTestData([{ "man": 400, "woman": 600 },])
    }
    const onReset = () => {
        setTestData([{ "man": 500, "woman": 300 },])
    }

    function testFunction() {
        // console.log("test")
    }

    function countGender(list) {
        let man = 0;
        let woman = 0;
        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            if (actorProfile.gender == "남자") {
                man++;
            }
            else {
                woman++;
            }

        } setTestData([{ "man": man, "woman": woman },])
        // console.log(man);
        // console.log(woman);


    }

    function countAge(list) {
        let age0 = 0; // 10세미만
        let age10_a = 0; // 10~14살
        let age10_b = 0; // 15~19살
        let age20_a = 0; // 20~24살
        let age20_b = 0; // 25~29살
        let age30_a = 0; // 30~34살
        let age30_b = 0; // 35~39살
        let age40 = 0; // 40~49살
        let age50 = 0; // 50~59살
        let ageOver = 0; // 60세 이상
        for (let i = 0; i < list.length; i++) {

            const actorProfile = list[i];
            //console.log(calcAge(actorProfile.birthday));
            if (calcAge(actorProfile.birthday) < 10) {
                age0++;
            }
            else if (calcAge(actorProfile.birthday) < 15 && calcAge(actorProfile.birthday) >= 10) {
                age10_a++;
            }
            else if (calcAge(actorProfile.birthday) < 20 && calcAge(actorProfile.birthday) >= 15) {
                age10_b++;
            }
            else if (calcAge(actorProfile.birthday) < 25 && calcAge(actorProfile.birthday) >= 20) {
                age20_a++;

            }
            else if (calcAge(actorProfile.birthday) < 30 && calcAge(actorProfile.birthday) >= 25) {
                age20_b++;
            }
            else if (calcAge(actorProfile.birthday) < 35 && calcAge(actorProfile.birthday) >= 30) {
                age30_a++;

            }
            else if (calcAge(actorProfile.birthday) < 40 && calcAge(actorProfile.birthday) >= 35) {
                age30_b++;

            }
            else if (calcAge(actorProfile.birthday) < 50 && calcAge(actorProfile.birthday) >= 40) {
                age40++;

            }
            else if (calcAge(actorProfile.birthday) < 60 && calcAge(actorProfile.birthday) >= 50) {
                age50++;

            }
            else {
                ageOver++;
            }
        }
        // console.log(age0)
        // console.log(age10_a);
        // console.log(age10_b);
        // console.log(age20_a);
        // console.log(age20_b);
        // console.log(age30_a);
        // console.log(age30_b);
        // console.log(age40);
        // console.log(age50);
        // console.log(ageOver);
    }

    return (
        <>

            <button className='btn1' onClick={onChange}>Button</button>
            <button onClick={async () => {
                const fetchedData = await fetchDataFromDb("actorProfile", 500);
                setActorProfiles(fetchedData)
            }}>1. 배우프로필 데이터 불러오기</button>
            <button onClick={() => { console.log(actorProfiles) }}> 저장된 배우프로필 데이터 확인</button>
            <button onClick={() => { countGender(actorProfiles) }}>배우프로필 성비</button>
            <button onClick={() => { countAge(actorProfiles) }}>배우 연령대</button>


            <button onClick={onReset}>Reset</button>
            <ResponsiveBar

                data={testData}
                keys={[
                    'man', 'woman'
                ]}
                indexBy="gender"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                //layout="horizontal"
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
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
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
                    legend: 'gender',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '단위: 명',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
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