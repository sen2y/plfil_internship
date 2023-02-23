
import { nativeSelectClasses } from "@mui/material";
import ActorPage from "components/pages/ActorPage";
import Sidebar from "components/sidebar/Sidebar";
import Topbar from "components/topbar/Topbar";
import { useState } from "react";
import styled from "styled-components";

function New() {

    return (
        <>
            <Topbar />
            <Container>
                <Sidebar />
                <ActorPage />
            </Container>

        </>
    );


}

const Container = styled.div`
    display: flex;
    margin-top: 10px;
`
const Test = styled.div`
    flex:4;
    background-color: wheat;
`

export default New;
