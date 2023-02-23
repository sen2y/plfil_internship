import Chart from 'components/chart/Chart';
import FeaturedInfo from 'components/featurdInfo/FeaturedInfo';
import React from 'react'
import styled from "styled-components";

export default function ActorPage() {
    return (
        <>
            <Home>
                <FeaturedInfo />
                <Chart />
            </Home>

        </>
    )
}

const Home = styled.div`
    flex: 4;
`