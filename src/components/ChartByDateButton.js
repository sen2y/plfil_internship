import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';
import { Button } from "@material-ui/core";
import { Fis } from 'aws-sdk';
import { create } from '@mui/material/styles/createTransitions';
import styled from "styled-components";
import { style } from '@mui/system';

export const ChartByDateButton = ({ dataList, keys, groupMode }) => {

    const [createYM2, setCreateYM2] = useState(dataList.Month);

    useEffect(() => {
        setCreateYM2(dataList.Month)
    }, [dataList])

    function getWidth(data) {

        const defaultWidth = 1600;

        if (!Array.isArray(data)) {
            return defaultWidth;
        }
        else {
            const newWidth = data.length * 75;
            if (newWidth > defaultWidth) {
                return newWidth
            } else {
                return defaultWidth
            }
        }
    }


    return (
        <>

            <Float>
                <Button onClick={() => { setCreateYM2(dataList.Month) }}>Month</Button>
                <Button onClick={() => { setCreateYM2(dataList.Week) }}>Week</Button>
                <Button onClick={() => { setCreateYM2(dataList.Date) }}>Date</Button>
            </Float>

            <div style={{ height: "700px", width: getWidth(createYM2) }}>
                <ResponsiveBar
                    data={createYM2 ? createYM2 : []}
                    keys={
                        keys
                    }
                    indexBy="Date"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.2}
                    innerPadding={1}
                    groupMode={groupMode}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'pastel2' }}
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
                    fill={[

                        {
                            match: {
                                id: 'L_DEC'
                            },
                            id: 'lines'
                        }
                    ]}
                    // borderRadius={3}
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
            </div>
        </>

    )
}


const FloatOuter = styled.div`
    display: flex;
    justify-content: center;
`

const Float = styled.div`
    margin-left: 10px;
    position:absolute;
    z-index: 100;
    
`