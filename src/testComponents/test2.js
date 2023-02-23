import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { fetchDataFromDb } from './api';
import { calcAge } from './common';
const NUM = 5; // 배우 연령대 그래프 default


export const MyResponsiveBar2 = ({ data /* see data tab */ }) => {
    const [testData, setTestData] = useState([{},]);
    const [actorProfiles, setActorProfiles] = useState([]);
    const [ageGenderDatas, setAgeGenderDatas] = useState([{},]);

    useEffect(() => {
        // const actorProfileData = fetchDataFromDb("actorProfile", 300);
        // console.log(actorProfileData)

        //setTestData([{ "man": 100, "woman": 300 },])
    }, []);

    // const onReset = () => {
    //     setTestData([{
    //         "00~05": 0, "05~10": 0, "10~15": 0, "15~20": 0, "20~25": 0, "25~30": 0,
    //         "30~35": 0, "35~40": 0, "40~45": 0, "45~50": 0, "50~55": 0, "55~60": 0
    //     },])
    // }

    function makeToDigit(stringNum) { // ex> 5 -> 05
        if (stringNum.length == 1) {
            return "0" + stringNum
        } else {
            return stringNum
        }
    }

    function putNum(age, gender, ageGenderDataList) {
    }

    function addGender(ageGenderData, ageIndex, actorGender) {
        if (actorGender == "남자") {
            ageGenderData[ageGenderData.length] = { age: ageIndex, man: 1, woman: 0 }
        }
        else {
            ageGenderData[ageGenderData.length] = { age: ageIndex, man: 0, woman: 1 }
        }
    }

    function addUnknown(count, ageGenderData, actorGender) {
        if (count < 1) {
            if (actorGender == "남자") {
                ageGenderData[ageGenderData.length] = { age: "unknown", man: 1, woman: 0 }
            }
            else {
                ageGenderData[ageGenderData.length] = { age: "unknown", man: 0, woman: 1 }
            }
        }
        else {
            let index = ageGenderData.findIndex(i => i.age == "unknown")
            if (actorGender == "남자") {
                ageGenderData[index].man++;
            }
            else {
                ageGenderData[index].woman++;
            }

        }
    }

    function countAge(list, num) { // num : 연령대 나누는 기준
        let count = 0;
        const ageData = {};
        const ageGenderData = []; // [{ageData: 0~5, man: 0. woman: 0},{}]

        ageData["unknown"] = 0;
        for (let i = 0; i < list.length; i++) {
            //putNum(actorAge, actorGender, ageGenderData)
            const actorProfile = list[i];
            const actorAge = calcAge(actorProfile.birthday);
            const actorGender = actorProfile.gender
            const startAt = (parseInt(actorAge / num) * num).toString()
            const endAt = ((parseInt(actorAge / num) + 1) * num).toString()
            const ageIndex = makeToDigit(startAt) + "~" + makeToDigit(endAt)

            if (ageIndex in ageData) {
                ageData[ageIndex]++
                for (let k = 0; k < ageGenderData.length; k++) {
                    if (ageIndex == ageGenderData[k].age) {
                        if (actorGender == "남자") {
                            ageGenderData[k].man++;
                        }
                        else { ageGenderData[k].woman++; }
                    }
                }
            }
            else {
                if (startAt > 250 || startAt < 0) { // 250살 넘으면 unknown으로
                    addUnknown(count, ageGenderData, actorGender);
                    count++;

                }
                else {
                    ageData[ageIndex] = 1
                    addGender(ageGenderData, ageIndex, actorGender) // 배열 추가
                }
            }
        }
        // console.log(Object.keys(ageData))
        // console.log(ageGenderData)

        setTestData([ageData])
        //Object.keys(ageGenderData).sort()
        // console.log(ageGenderData)
        let result = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 });

        setAgeGenderDatas(ageGenderData)

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
    return (
        <>

            <button onClick={async () => {
                const fetchedData = await fetchDataFromDb("actorProfile", 500);
                // userModel
                setActorProfiles(fetchedData)
            }}>2. 배우프로필 데이터 불러오기</button>

            <button onClick={() => { countAge(actorProfiles, NUM) }}>배우 연령대 (5살 단위)</button>
            <button onClick={() => { countAge(actorProfiles, 3) }}>3살 단위</button>
            <button onClick={() => { countAge(actorProfiles, 10) }}>10살 단위</button>
            {/* <button onClick={onReset}>Reset</button> */}



            <ResponsiveBar
                data={ageGenderDatas}
                keys={
                    ['man', 'woman']
                    // 'age0', 'age10_a', 'age10_b', 'age20_a', 'age20_b', 'age30_a', 'age30_b', 'age40', 'age50', 'ageOver'
                    // Object.keys(ageGenderDatas[0]).sort()
                }
                indexBy="age"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.05}
                groupMode="stacked"
                //layout="horizontal"
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
                // fill={[
                //     {
                //         match: {
                //             id: 'man'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'woman'
                //         },
                //         id: 'lines'
                //     }
                // ]}
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
                    legend: 'age',
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