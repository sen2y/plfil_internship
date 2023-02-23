import React from 'react'
import styled from "styled-components";

export default function Topbar() {
    return (
        <Topbars>
            <TopbarWrapper>
                <div className='topLeft'>
                    <Title>DashBoard</Title>
                </div>
                <div className='topRight'>right</div>
            </TopbarWrapper>

        </Topbars>
    )
}

const TopbarWrapper = styled.div`
    height: 100%;
    padding : 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Topbars = styled.div`
    width:100%;
    height: 50px;
    background-color: white ;
    position: sticky;
    top:0;
    z-index: 999;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`