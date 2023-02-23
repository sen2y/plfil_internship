// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';

export const BarChartByGender = ({ dataList, saveDateData, setSaveDateData }) => {

    const [genderData, setGenderData] = useState([{},]);

    useEffect(() => {
        countGender(dataList)
    }, [dataList]);

    function countGender(list) {
        let man = 0;
        let woman = 0;
        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            if (actorProfile.gender === "남자") {
                man++;
            }
            else if (actorProfile.gender === "여자") {
                woman++;
            }

        } setGenderData([{ "man": man, "woman": woman }])

        if (man > 0) {
            const genderDatas = [{ "man": man, "woman": woman }]
            const beforeData = saveDateData;
            beforeData.push({ genderDatas })
            setSaveDateData(beforeData)

        }
        // if (num > 0) {
        //     console.log(21)
        //     const genderDatas = { "man": man, "woman": woman }

        //     const beforeData = saveDateData;
        //     console.log(genderDatas)

        //     console.log(saveDateData)
        //     beforeData.push({ genderDatas })

        //     console.log(genderDatas)
        //     console.log(beforeData)
        //     setSaveDateData(beforeData)
        // }
        // nnum++;
        // setNum(nnum)
        // console.log(num)


    }

    //     return (
    //         <>
    //             <ResponsiveBar

    //                 data={genderData}
    //                 keys={[
    //                     'man', 'woman'
    //                 ]}
    //                 indexBy="gender"
    //                 margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    //                 padding={0.3}
    //                 groupMode="grouped"
    //                 //layout="horizontal"
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
    //                             id: 'fries'
    //                         },
    //                         id: 'dots'
    //                     },
    //                     {
    //                         match: {
    //                             id: 'sandwich'
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
    //                     legend: 'gender',
    //                     legendPosition: 'middle',
    //                     legendOffset: 32
    //                 }}
    //                 axisLeft={{
    //                     tickSize: 5,
    //                     tickPadding: 5,
    //                     tickRotation: 0,
    //                     legend: '단위: 명',
    //                     legendPosition: 'middle',
    //                     legendOffset: -40
    //                 }}
    //                 labelSkipWidth={12}
    //                 labelSkipHeight={12}
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
}