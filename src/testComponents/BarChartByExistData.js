import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';

export const BarChartByExistData = ({ dataList, saveDateData, setSaveDateData }) => {
    const [ynData, setYnData] = useState([{},]);
    useEffect(() => {
        existData(dataList)
    }, [dataList]);

    function existData(list) {
        const countData = { Y: 1, N: 0 }; // {Y:230, N:10} -> 프로필 등록 유무 사용자 수 
        const existCountData = [{ exist: 1, count: 0 }, { exist: 0, count: 0 }]; // [{exist:y, count:230},{exist:n, num:10}]

        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            let countC = actorProfile.actorProfiles;
            if (countC === null) {
                countC = 0;
            }
            if (countC === 0) {
                countData["N"]++;
                existCountData[1].count++
            }

            else {
                countData["Y"]++;
                existCountData[0].count++
            }
        }
        // console.log(countData)
        // console.log(existCountData[0])
        // console.log(existCountData[1])
        setYnData(existCountData)

        if (existCountData[0].count > 0) {
            const existProfile = existCountData
            const beforeData = saveDateData;
            beforeData.push({ existProfile })
            setSaveDateData(beforeData)

        }

    }

    // return (
    //     <>

    //         <ResponsiveBar
    //             data={ynData}
    //             keys={
    //                 ['count']
    //             }
    //             indexBy="exist"
    //             margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    //             padding={0.05}
    //             groupMode="stacked"
    //             valueScale={{ type: 'linear' }}
    //             indexScale={{ type: 'band', round: true }}
    //             colors={{ scheme: 'paired' }}
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
    //                 legend: '프로필 유무 Y(1)/N(0)',
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