import React from 'react'
import styled from "styled-components";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

export default function FeaturedInfo() {
    return (
        <Featured>
            {/* 1. */}
            <FeaturedItem>
                <Title>
                    오늘의 매출
                </Title>
                <Container>
                    <Money> 241,000

                    </Money>
                    <Rate>
                        +12% <NorthIcon sx={{ color: 'red' }} />
                    </Rate>

                </Container>
                <FeatureSub>Compare to last day</FeatureSub>
            </FeaturedItem>
            {/* 2. */}
            <FeaturedItem>
                <Title>
                    일일 가입 수
                </Title>
                <Container>
                    <Money> 29

                    </Money>
                    <Rate>
                        -10<SouthIcon sx={{ color: 'blue' }} />
                    </Rate>

                </Container>
                <FeatureSub>Compare to last day</FeatureSub>
            </FeaturedItem>
            {/* 3. */}
            <FeaturedItem>
                <Title>
                    신규 주문 수
                </Title>
                <Container>
                    <Money> 29

                    </Money>
                    <Rate>
                        -10<SouthIcon sx={{ color: 'blue' }} />
                    </Rate>

                </Container>
                <FeatureSub>Compare to last day</FeatureSub>
            </FeaturedItem>
        </Featured>
    )

}



const Featured = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const FeaturedItem = styled.div`
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 12px -1px #000000;
    box-shadow: 0px 0px 12px -1px #000000;;
`
const Title = styled.span`
    font-size: 20px;
`
const Container = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`
const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`
const Rate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const FeatureSub = styled.span`
font-size: 14;
color: gray;
`