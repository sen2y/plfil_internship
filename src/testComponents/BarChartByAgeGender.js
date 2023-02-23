import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { calcAge } from 'lib/common';
import { Button } from "@material-ui/core";
const NUM = 5; // 배우 연령대 그래프 default
const NUM2 = 3;
const NUM3 = 10;

export const BarChartByAgeGender = ({ dataList, saveDateData, setSaveDateData }) => {
    const [ageGenderDataNum1, setAgeGenderDataNum1] = useState();
    const [ageGenderDataNum2, setAgeGenderDataNum2] = useState();
    const [ageGenderDataNum3, setAgeGenderDataNum3] = useState();
    const [ageGenderDatas, setAgeGenderDatas] = useState([{},]);

    useEffect(() => {
        putNum();
    }, [dataList]);

    // useEffect(() => {
    //     choiceBtn(choice);
    // }, [choice])


    function makeToDigit(stringNum) { // ex> 5 -> 05
        if (stringNum.length === 1) {
            return "0" + stringNum
        } else {
            return stringNum
        }
    }

    function addGender(ageGenderData, ageIndex, actorGender) {
        if (actorGender === "남자") {
            ageGenderData[ageGenderData.length] = { age: ageIndex, man: 1, woman: 0 }
        }
        else if (actorGender === "여자") {
            ageGenderData[ageGenderData.length] = { age: ageIndex, man: 0, woman: 1 }
        }
    }

    function addUnknown(count, ageGenderData, actorGender) {
        if (count < 1) {
            if (actorGender === "남자") {
                ageGenderData[ageGenderData.length] = { age: "unknown", man: 1, woman: 0 }
            }
            else {
                ageGenderData[ageGenderData.length] = { age: "unknown", man: 0, woman: 1 }
            }
        }
        else {
            let index = ageGenderData.findIndex(i => i.age === "unknown")
            if (actorGender === "남자") {
                ageGenderData[index].man++;
            }
            else {
                ageGenderData[index].woman++;
            }

        }
    }

    function countAge(list, num) { // num : 연령대 나누는 기준
        console.log(num)
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

                    if (ageIndex === ageGenderData[k].age) {
                        if (actorGender === "남자") {
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

        } return ageGenderData

    }

    function putNum() {
        let result1, result2, result3
        if (dataList.length !== 0) {
            let ageGenderData = [];
            ageGenderData = countAge(dataList, NUM)
            result1 = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 })
            setAgeGenderDataNum1(result1)

            ageGenderData = countAge(dataList, NUM2)
            result2 = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 })
            setAgeGenderDataNum2(result2)

            ageGenderData = countAge(dataList, NUM3)
            result3 = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 })
            setAgeGenderDataNum3(result3)

            if (ageGenderData.length !== 0) {
                const actorAgeData = { actorAge1: result1, actorAge2: result2, actorAge3: result3 }
                const beforeData = saveDateData;
                beforeData.push({ actorAgeData })
                setSaveDateData(beforeData)
            }

        }
    }

    // function choiceBtn(num) {
    //     if (num === 10) {
    //         setAgeGenderDatas(ageGenderDataNum1)
    //     }
    //     else if (num === 11) {
    //         setAgeGenderDatas(ageGenderDataNum2)
    //     }
    //     else if (num === 12) {
    //         setAgeGenderDatas(ageGenderDataNum3)
    //     }
    // }


    // return (
    //     <>
    //         <ResponsiveBar
    //             data={ageGenderDatas}
    //             keys={
    //                 ['man', 'woman']
    //             }
    //             indexBy="age"
    //             margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    //             padding={0.05}
    //             groupMode="stacked"
    //             //layout="horizontal"
    //             valueScale={{ type: 'linear' }}
    //             indexScale={{ type: 'band', round: true }}
    //             colors={{ scheme: 'paired' }}
    //             defs={[
    //                 {
    //                     id: 'dots',
    //                     type: 'patternDots',
    //                     background: 'inherit',
    //                     color: '#38bcb2',
    //                     size: 4,
    //                     padding: 1,
    //                     stagger: true
    //                 },
    //                 {
    //                     id: 'lines',
    //                     type: 'patternLines',
    //                     background: 'inherit',
    //                     color: '#eed312',
    //                     rotation: -45,
    //                     lineWidth: 6,
    //                     spacing: 10
    //                 }
    //             ]}
    //             borderColor={{
    //                 from: 'color',
    //                 modifiers: [
    //                     [
    //                         'darker',
    //                         1.6
    //                     ]
    //                 ]
    //             }}
    //             axisTop={null}
    //             axisRight={null}
    //             axisBottom={{
    //                 tickSize: 5,
    //                 tickPadding: 5,
    //                 tickRotation: 0,
    //                 legend: 'age',
    //                 legendPosition: 'middle',
    //                 legendOffset: 32
    //             }}
    //             axisLeft={{
    //                 tickSize: 5,
    //                 tickPadding: 5,
    //                 tickRotation: 0,
    //                 legend: '단위: 명',
    //                 legendPosition: 'middle',
    //                 legendOffset: -40
    //             }}
    //             labelSkipWidth={12}
    //             labelSkipHeight={5}
    //             labelTextColor={{
    //                 from: 'color',
    //                 modifiers: [
    //                     [
    //                         'darker',
    //                         1.6
    //                     ]
    //                 ]
    //             }}
    //             legends={[
    //                 {
    //                     dataFrom: 'keys',
    //                     anchor: 'bottom-right',
    //                     direction: 'column',
    //                     justify: false,
    //                     translateX: 120,
    //                     translateY: 0,
    //                     itemsSpacing: 2,
    //                     itemWidth: 100,
    //                     itemHeight: 20,
    //                     itemDirection: 'left-to-right',
    //                     itemOpacity: 0.85,
    //                     symbolSize: 20,
    //                     effects: [
    //                         {
    //                             on: 'hover',
    //                             style: {
    //                                 itemOpacity: 1
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]}

    //             role="application"
    //             ariaLabel="Nivo bar chart demo"
    //             barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
    //         />
    //     </>

    // )
}