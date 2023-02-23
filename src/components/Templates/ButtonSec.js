import { Box, Tab, Tabs, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const ButtonSec = ({ tabIndex, setShowTab, setShowChart }) => {

    const [flag1, setFlag1] = useState(true);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);
    const [flag4, setFlag4] = useState(false);
    const [flag5, setFlag5] = useState(false);
    const [flag6, setFlag6] = useState(false);
    const [flag7, setFlag7] = useState(false);
    const [flag8, setFlag8] = useState(false);
    const [flag9, setFlag9] = useState(false);
    const [flag10, setFlag10] = useState(false);


    const actorBtnlist = [
        { text: "배우프로필 성비", indexbtn: flag1, set: setFlag1 },
        { text: "연도별 배우등록", indexbtn: flag2, set: setFlag2 },
        { text: "배우 연령대 (Bar) ", indexbtn: flag3, set: setFlag3 },
        { text: "배우 연령대 (Pie)", indexbtn: flag4, set: setFlag4 },
        { text: "배우 등록일 월/주/일", indexbtn: flag5, set: setFlag5 },
        { text: "배우 등록일 누적", indexbtn: flag6, set: setFlag6 },
    ]

    const userBtnlist = [
        { text: "프로필 등록 유무", indexbtn: flag1, set: setFlag1 },
        { text: "연도별 가입", indexbtn: flag2, set: setFlag2 },
        { text: "가입 월/주/일", indexbtn: flag3, set: setFlag3 },
        { text: "가입 누적", indexbtn: flag4, set: setFlag4 },
    ]

    const orderBtnlist = [
        { text: "연도별 주문", indexbtn: flag1, set: setFlag1 },
        { text: "주문 월/주/일", indexbtn: flag2, set: setFlag2 },
        { text: "누적 주문", indexbtn: flag3, set: setFlag3 },
        { text: "신규 주문", indexbtn: flag4, set: setFlag4 },
        { text: "매출 월/주/일", indexbtn: flag5, set: setFlag5 },
        { text: "누적 매출", indexbtn: flag6, set: setFlag6 },
    ]
    const couponBtnlist = [
        { text: "사용자 별 쿠폰 보유량", indexbtn: flag1, set: setFlag1 },
        { text: "쿠폰 적립/사용 수량 비교", indexbtn: flag2, set: setFlag2 },
    ]

    const applicationBtnlist = [
        { text: "지원 내역 월/주/일", indexbtn: flag1, set: setFlag1 },
        { text: "누적 지원 내역", indexbtn: flag2, set: setFlag2 },
    ]

    const actorCareerlist = [
        { text: "작품 카테고리", indexbtn: flag1, set: setFlag1 },
        { text: "배역 비율(전체)", indexbtn: flag2, set: setFlag2 },
        { text: "(장편상업)", indexbtn: flag3, set: setFlag3 },
        { text: "(독립)", indexbtn: flag4, set: setFlag4 },
        { text: "(단편)", indexbtn: flag5, set: setFlag5 },
        { text: "(연극)", indexbtn: flag6, set: setFlag6 },
        { text: "(TV드라마)", indexbtn: flag7, set: setFlag7 },
        { text: "(웹드+유튜브)", indexbtn: flag8, set: setFlag8 },
        { text: "배역 TOP100 (현재 나이)", indexbtn: flag9, set: setFlag9 },  // 배역 Table
        { text: "배역 TOP100 (출연 당시)", indexbtn: flag10, set: setFlag10 }  // 배역 Table // 당시 나이 기준
    ]

    const firstList = [
        { list: actorBtnlist },
        { list: userBtnlist },
        { list: orderBtnlist },
        { list: couponBtnlist },
        { list: applicationBtnlist },
        { list: actorCareerlist }
    ]

    const handleClick = (setFlag) => {
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setFlag4(false);
        setFlag5(false);
        setFlag5(false);
        setFlag6(false);
        setFlag7(false);
        setFlag8(false);
        setFlag9(false);
        setFlag10(false);
        setFlag(true);
    }

    useEffect(() => {
        handleClick(setFlag1)
    }, [tabIndex])

    return (
        <>
            {firstList.map((tablist, index) => (
                <div key={index + "Outer"}>
                    {tabIndex === index && (


                        <Box sx={{ display: 'flex' }}>

                            {tablist.list.map((list, index2) => (

                                <Button
                                    key={index + index2 + "key"}
                                    onClick={() => {
                                        handleClick(list.set);
                                        setShowTab(index);
                                        setShowChart(index2);
                                    }}
                                    color={list.indexbtn ? "secondary" : "primary"}>
                                    {list.text}
                                </Button>

                            ))}

                        </Box>
                    )}
                </div>
            ))}

        </>
    )
}

export default ButtonSec;


