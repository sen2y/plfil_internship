import React from 'react'
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fontSize } from '@mui/system';
export default function Sidebar() {
    // dashboard 용 main과 관련없음
    return (
        <Sidebars>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* 메뉴 1 */}
                    <SidebarTitle>
                        Actor Page
                    </SidebarTitle>
                    <SidebarList>

                        <SidebarListItem >
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Actor Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            User Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Order Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Coupon Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Application Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Career Page
                        </SidebarListItem>

                    </SidebarList>
                    {/* 메뉴 2 */}
                    <SidebarTitle>
                        User Page
                    </SidebarTitle>
                    <SidebarList>

                        <SidebarListItem >
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Actor Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            User Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Order Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Coupon Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Application Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Career Page
                        </SidebarListItem>

                    </SidebarList>
                    {/* 메뉴 3 */}
                    <SidebarTitle>
                        Order Page
                    </SidebarTitle>
                    <SidebarList>

                        <SidebarListItem >
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Actor Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            User Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Order Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Coupon Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Application Page
                        </SidebarListItem>
                        <SidebarListItem>
                            <ArrowForwardIosIcon sx={{ marginRight: '10px', fontSize: 15 }} />
                            Career Page
                        </SidebarListItem>

                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </Sidebars>
    )
}

const Sidebars = styled.div`
    flex:1;
    height: calc(100vh - 50px);
    background-color: rgb(240,239,239);
    position: sticky;
    top: 50px;
    
`
const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`
const SidebarMenu = styled.div`
    margin-bottom: 2rem;
`
const SidebarTitle = styled.h3`
    font-size: 0.9rem;
    color: rgb(180, 180, 180);
`
const SidebarList = styled.ul`
   list-style: none;
   padding: 0.5rem;

`
const SidebarListItem = styled.li`
    padding: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
        background-color: rgb(212, 209, 235);
        /* box-shadow: 1px 1px 0 rgb(0,0,0,0.5); */
    };
    
    &:active{
        background-color: rgb(212, 209, 235);
        font-weight: bold;
    };

`
