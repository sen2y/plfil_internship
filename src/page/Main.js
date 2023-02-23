import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { AgeGender } from "components/AgeGender";
import { BasicChart } from "components/BasicChart";

import HeaderSec from "components/Templates/HeaderSec";
import TabSec from "components/Templates/TabSec";
import { ChartByDateButton } from "components/ChartByDateButton";
import ButtonSec from "components/Templates/ButtonSec";
import ChartSec from "components/Templates/ChartSec";
import { PieChart } from "components/PieChart";
import MaterialTable from "components/MaterialTable";

function Main() {


    const [loading, setLoading] = useState(true);
    const [tabIndex, setTabIndex] = useState(0);
    const [years, setYears] = useState([]);

    //actor
    const [totalDateActor, setTotalDateActor] = useState([]);
    const [totalDateAccActor, setTotalDateAccActor] = useState([]);
    const [ageDataActor, setAgeDataActor] = useState([]);
    const [genderDatasActor, setGenderDatasActor] = useState([]);
    const [yearDataActor, setYearDataActor] = useState([]);

    //user
    const [totalDateUser, setTotalDateUser] = useState([]);
    const [totalDateAccUser, setTotalDateAccUser] = useState([]);
    const [userCouponDataUser, setUserCouponDataUser] = useState([]);
    const [existProfile, setExistProfile] = useState([]);
    const [yearDataUser, setYearDataUser] = useState([]);

    //order
    const [couponData, setCouponData] = useState([]);
    const [totalDateAccOrder, setTotalDateAccOrder] = useState([]);
    const [totalDateNewOrder, setTotalDateNewOrder] = useState([]);
    const [yearDataOrder, setYearDataOrder] = useState([]);
    const [totalDateAmount, setTotalDateAmount] = useState([]);
    const [totalDateAmountAcc, setTotalDateAmountAcc] = useState([]);

    // plfilApplication
    const [totalDateApplication, setTotalDateApplication] = useState([]);
    const [totalDateAccApplication, setTotalDateAccApplication] = useState([]);

    //actor career
    const [role, setRole] = useState([]);
    const [roleCount, setRoleCount] = useState([]);

    //update time
    const [udTime, setUdTime] = useState();

    //button 
    const [showTab, setShowTab] = useState(0);
    const [showChart, setShowChart] = useState(0);

    useEffect(() => {
        setShowTab(tabIndex)
        setShowChart(0)
    }, [tabIndex])


    const months = ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월']

    const list1 = [{
        heightIn: '750px',
        widthIn: '700px',
        height: '700px', width: '700px',
        content: <PieChart dataList={genderDatasActor} legend={"gender"} />,
        bColor: '',
        scrollbar: false,
        text: "배우프로필 성비"
    },
    {
        heightIn: '750px',
        widthIn: '700px',
        height: '700px',
        width: '700px',
        content: <BasicChart dataList={yearDataActor} legend={"year"} index="year" groupMode={"stacked"} keys={months} />,
        bColor: '',
        scrollbar: false,
        text: "연도별 배우등록 data"
    },
    {
        heightIn: '750px',
        widthIn: '100%',
        content: <AgeGender dataList={ageDataActor} />,
        scrollbar: false,
        text: "배우 연령대",
        ageGenderButton: true,
    },
    {
        heightIn: '750px',
        widthIn: '100%',
        content: <PieChart dataList={ageDataActor.actorAge3} legend={"age"} />,
        scrollbar: false,
        text: "배우 연령대",
        ageGenderButton: true,
    },
    {
        heightIn: '800px',
        widthIn: '100%',
        content: <ChartByDateButton dataList={totalDateActor} keys={['count']} groupMode={"stacked"} />,
        scrollbar: true,
        text: "배우 등록일 월/주/일 별 data",
    },
    {
        heightIn: '800px',
        widthIn: '100%',
        content: <ChartByDateButton dataList={totalDateAccActor} keys={['count']} groupMode={"stacked"} />,
        scrollbar: true,
        text: "배우 등록일 월/주/일 누적 data",
    },
    ]
    const list2 = [
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={existProfile} legend={"프로필"} />,
            bColor: '',
            scrollbar: false,
            text: "프로필 등록 유무"
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <BasicChart dataList={yearDataUser} years={years} setYears={setYears} legend={"year"} index="year" groupMode={"stacked"} keys={months} />,
            bColor: '',
            scrollbar: false,
            text: "연도별 가입 data"
        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateUser} keys={['count']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "가입 월/주/일 data",

        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateAccUser} keys={['count']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "가입 월/주/일 누적 data",

        },
    ]
    const list3 = [
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <BasicChart dataList={yearDataOrder} legend={"year"} index="year" groupMode={"stacked"} keys={months} />,
            bColor: '',
            scrollbar: false,
            text: "연도별 Order data"
        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateNewOrder} keys={['count']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 Order data",

        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateAccOrder} keys={['count']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 누적 Order data",

        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateNewOrder} keys={['new']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 신규 주문 data",

        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateAmount} keys={['amount']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 매출 data",

        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateAmountAcc} keys={['amount']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 매출 누적 data",

        },

    ]

    const list4 = [
        {
            heightIn: '750px',
            widthIn: '100%',
            height: '1000px',
            width: '200rem',
            content: <BasicChart dataList={userCouponDataUser} legend={'보유 쿠폰 수량'} index={"num"} groupMode={"stacked"} keys={['count']} />,
            scrollbar: true,
            text: "사용자 별 보유 프로필 투어 쿠폰 개수"
        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={couponData} keys={['add', 'use']} groupMode={"grouped"} />,
            scrollbar: true,
            text: "쿠폰 적립/사용 수량 비교",

        },
    ]

    const list5 = [
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateApplication} keys={['count']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 오디션공고 지원 내역",

        },
        {
            heightIn: '800px',
            widthIn: '100%',
            content: <ChartByDateButton dataList={totalDateAccApplication} keys={['count']} groupMode={"stacked"} />,
            scrollbar: true,
            text: "월/주/일별 오디션공고 누적 지원 내역",

        },
    ]

    const list6 = [
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.category} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: "작품 카테고리"
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.role} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " Total 배역 비율 "
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.commercial} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " 장편 상업영화 배역 비율 "
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.independence} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " 독립영화 배역 비율 "
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.short} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " 단편영화 배역 비율 "
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.play} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " 연극 배역 비율 "
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.TV} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " TV드라마 배역 비율 "
        },
        {
            heightIn: '750px',
            widthIn: '700px',
            height: '700px',
            width: '700px',
            content: <PieChart dataList={role.web} legend={"career"} />,
            bColor: '',
            scrollbar: false,
            text: " 웹드라마+유튜브 배역 비율 "
        },
        {
            content: <MaterialTable roleCount={roleCount.present} num={1} />,
            bColor: '',
            scrollbar: false,
            text: " 현재 나이 기준 ",
            heightIn: '750px',
            widthIn: '1100px',
        },
        {
            content: <MaterialTable roleCount={roleCount.past} num={2} />,
            bColor: '',
            scrollbar: false,
            text: " 출연 당시 나이 기준 ",
            heightIn: '750px',
            widthIn: '1100px',
        },

    ]

    const listIn = [
        { num: 0, text: "Actor Data", list: list1 },
        { num: 1, text: "User Data", list: list2 },
        { num: 2, text: "Order Data", list: list3 },
        { num: 3, text: "Coupon Data", list: list4 },
        { num: 4, text: "Application Data", list: list5 },
        { num: 5, text: "Actor Career Data", list: list6 }
    ]

    return (
        <>
            <HeaderSec
                setTotalDateActor={setTotalDateActor}
                setAgeDataActor={setAgeDataActor}
                setTotalDateAccActor={setTotalDateAccActor}
                setGenderDatasActor={setGenderDatasActor}
                setYearDataActor={setYearDataActor}
                setTotalDateUser={setTotalDateUser}
                setUserCouponDataUser={setUserCouponDataUser}
                setTotalDateAccUser={setTotalDateAccUser}
                setExistProfile={setExistProfile}
                setYearDataUser={setYearDataUser}
                setCouponData={setCouponData}
                setTotalDateAccOrder={setTotalDateAccOrder}
                setTotalDateNewOrder={setTotalDateNewOrder}
                setYearDataOrder={setYearDataOrder}
                setTotalDateAmount={setTotalDateAmount}
                setTotalDateAmountAcc={setTotalDateAmountAcc}
                setTotalDateApplication={setTotalDateApplication}
                setTotalDateAccApplication={setTotalDateAccApplication}
                setRole={setRole}
                setRoleCount={setRoleCount}
                setUdTime={setUdTime}
                udTime={udTime}
                setLoading={setLoading}
            />
            {console.log(genderDatasActor)}

            {loading ? "로딩중" : <>

                <TabSec tabIndex={tabIndex} setTabIndex={setTabIndex} />
                <ButtonSec tabIndex={tabIndex} setShowTab={setShowTab} setShowChart={setShowChart} />
                <ChartSec tabIndex={tabIndex} showTab={showTab} showChart={showChart} listIn={listIn} />



            </>}

        </>
    );
}


export default Main
