// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { Button } from '@material-ui/core';
import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const PieChart = ({ ...props }) => {

    let data = [];
    let scheme = 'pastel1';

    // 성비
    if (props.legend === 'gender') {
        const man = props.dataList[0].man
        const woman = props.dataList[0].woman
        data = [
            { id: 'woman', value: woman },
            { id: 'man', value: man },
        ]
    }

    // 프로필 유무
    if (props.legend === '프로필') {
        const yes = props.dataList[0].count
        const no = props.dataList[1].count
        data = [
            { id: '등록', value: yes },
            { id: '미등록', value: no },
        ]
        scheme = 'set3'
    }

    // 배우 연령대  (5살 단위)
    if (props.legend === 'age') {
        const list = props.dataList

        for (let i = 0; i < list.length; i++) {
            data.push({ id: list[i].age, value: list[i].man + list[i].woman })
        }

    }

    // actor career
    if (props.legend === 'career') {
        const list = props.dataList
        for (let i = 0; i < list.length; i++) {
            data.push({ id: list[i].category, value: list[i].count })
        }
        scheme = 'set3'
    }

    return (
        <div style={{ width: '450px', height: '420px', marginLeft: '10px' }}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 100, bottom: 90, left: 80 }}
                // sortByValue={true} // 정렬
                valueFormat=","
                sortByValue={true}
                innerRadius={0.4} // 안쪽여백
                padAngle={1.5}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: scheme }}
                borderWidth={2}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '0.2'
                        ]
                    ]
                }}
                // arcLinkLabel="value"
                // arcLabel="id"
                arcLinkLabelsSkipAngle={2.5}
                arcLinkLabelsTextColor="#000000"
                arcLinkLabelsDiagonalLength={30}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
                arcLabelsSkipAngle={0}

                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '2.1'
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 15,
                        translateY: 57,
                        itemsSpacing: 28,
                        itemWidth: 30,
                        itemHeight: 13,
                        itemTextColor: '#999',
                        itemDirection: 'top-to-bottom',
                        itemOpacity: 1,
                        symbolSize: 19,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />

        </div>
    )
}
