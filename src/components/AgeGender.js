import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { calcAge } from 'lib/common';
import { Button } from "@material-ui/core";
import styled from "styled-components";
const NUM = 5; // 배우 연령대 그래프 default
const NUM2 = 3;
const NUM3 = 10;

export const AgeGender = ({ dataList }) => {

    const year5Data = dataList.actorAge1;
    const year3Data = dataList.actorAge2;
    const year10Data = dataList.actorAge3;

    const [ageGenderDatas, setAgeGenderDatas] = useState(year5Data);

    return (
        <>
            <Float>
                <Button onClick={() => { setAgeGenderDatas(year5Data) }}>배우 연령대 5살 단위</Button>
                <Button onClick={() => { setAgeGenderDatas(year3Data) }}>3살 단위</Button>
                <Button onClick={() => { setAgeGenderDatas(year10Data) }}>10살 단위</Button>
            </Float>

            {ageGenderDatas !== null &&
                <div style={{ height: 750, width: '100%' }}>
                    <ResponsiveBar
                        data={ageGenderDatas}
                        keys={
                            ['woman', 'man']
                        }
                        indexBy="age"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.05}
                        groupMode="stacked"
                        //layout="horizontal"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'pastel1' }}
                        valueFormat=","
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
                </div>
            }

        </>

    )
}
const Float = styled.div`
    margin-left: 10px;
    
`