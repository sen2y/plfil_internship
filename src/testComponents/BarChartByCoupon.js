import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';

export const BarChartByCoupon = ({ dataList, saveDateData, setSaveDateData }) => {
    const [couponNum, setCouponNum] = useState([{},]);
    useEffect(() => {
        countCoupon(dataList)
    }, [dataList]);

    function countCoupon(list) {
        const countData = {}; // {count_0:230, count_1:150, count_2:} -> 보유쿠폰 수량 별 인원 리스트
        const couponNumData = []; // [{num:0, count:230},{num: 0, num:150},,]

        for (let i = 0; i < list.length; i++) {
            const actorProfile = list[i];
            let countC = actorProfile.profileTourCoupon;
            if (countC === 0 || countC === null) {
                countC = 0;
            }

            let list_index = "count_" + countC
            if (list_index in countData) {
                countData[list_index]++;
                for (let k = 0; k < couponNumData.length; k++) {
                    if (couponNumData[k].num === countC) {
                        couponNumData[k].count++;
                    }
                }
            }
            else {
                countData[list_index] = 1
                couponNumData.push({ num: countC, count: 1 }); // 배열추가
            }

            // if (countC >= 100) { // 보유쿠폰 수량 / username 확인코드
            //     console.log(actorProfile.username)
            //     console.log(countC)
            // }


        }

        let result = couponNumData.sort(function (a, b) { return a.num > b.num ? 1 : -1 });
        setCouponNum(result)

        if (result.length !== 0) {
            const userCouponData = { countCoupon: result }
            const beforeData = saveDateData;
            beforeData.push({ userCouponData })
            setSaveDateData(beforeData)
        }


        // console.log(countData)
        // console.log(result)


    }

    // return (
    //     <>

    //         <ResponsiveBar
    //             data={couponNum}
    //             keys={
    //                 ['count']
    //             }
    //             indexBy="num"
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
    //                 legend: '보유 쿠폰 수량',
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