import { saveAnalysisData, loadAnalysisData, fetchDataFromDb } from "lib/api";
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { anaylsisAgeGenderActorData } from "lib/analysisAgeGender";
import { groupByDateAcc } from "lib/groupByDateAcc";
import { groupByDateNew } from "lib/groupByDateNew";
import { getCurrentCoupon } from "lib/getCurrentCoupon";
import { analysisGender } from "lib/analysisGender";
import { groupByYear } from "lib/groupByYear";
import { existProfiles } from "lib/existProfiles";
import { analysisCouponNum } from "lib/analysisCouponNum";
import { analysisSales } from "lib/analysisSales";
import { analysisSalesAcc } from "lib/analysisSalesAcc";
import { analysisActorCareer } from "lib/anaysisActorCareer";
import { PresignedPost } from "aws-sdk/clients/s3";
import { analysisRoleCount } from "lib/analysisRoleCount";


// Tab보다 상단 section
const HeaderSec = ({ ...props }) => {
    useEffect(() => {

        loadTestData()

    }, []);

    async function loadTestData() {
        const datas = await loadAnalysisData();

        // actor
        props.setTotalDateActor(datas.saveDataActor.totalData)
        props.setAgeDataActor(datas.saveDataActor.actorAgeData)
        props.setTotalDateAccActor(datas.saveDataActor.totalDataAcc)
        props.setGenderDatasActor(datas.saveDataActor.genderDatas)
        props.setYearDataActor(datas.saveDataActor.yearData.year)

        // user
        props.setTotalDateUser(datas.saveDataUser.totalData)
        props.setUserCouponDataUser(datas.saveDataUser.userCouponData.countCoupon)
        props.setTotalDateAccUser(datas.saveDataUser.totalDataAcc)
        props.setExistProfile(datas.saveDataUser.existProfile)
        props.setYearDataUser(datas.saveDataUser.yearData.year)

        // order
        props.setCouponData(datas.saveDataOrder.couponData)
        props.setTotalDateAccOrder(datas.saveDataOrder.totalDataAcc)
        props.setTotalDateNewOrder(datas.saveDataOrder.totalData)
        props.setYearDataOrder(datas.saveDataOrder.yearData.year)
        props.setTotalDateAmount(datas.saveDataOrder.totalAmount)
        props.setTotalDateAmountAcc(datas.saveDataOrder.totalAmountAcc)

        // plfilApplication
        props.setTotalDateApplication(datas.saveDataApplication.totalData)
        props.setTotalDateAccApplication(datas.saveDataApplication.totalDataAcc)

        // actorCareers
        props.setRole(datas.saveDataCareer)
        props.setRoleCount(datas.saveDataRole)

        // update time
        props.setUdTime(datas.updateTime)
        // console.log(datas[3].updateTime)

        props.setLoading(false);

    }

    async function handleLoadeDataButton() {
        const savedData = await loadAnalysisData()
        console.log(savedData)
    }

    async function handleLoadAnalysisSaveButton() {
        // 1. 데이터들 불러오기
        const actorData = await fetchDataFromDb("actorProfile", 500000);
        const userData = await fetchDataFromDb("userModel", 500000);
        const orderData = await fetchDataFromDb("order", 500000);
        const couponData = await fetchDataFromDb("couponHistory", 500000);
        const profileTourNew = await fetchDataFromDb("profileTour", 500000);
        const plfilApplication = await fetchDataFromDb("plfilApplication", 500000);
        const actorCareer = await fetchDataFromDb("actorCareer", 5000000)

        const updateTime = new Date().toLocaleString();


        // 2. 분석해서 정리하기
        // 배우 나이
        const actorAgeData = anaylsisAgeGenderActorData(actorData);
        // 배우 성별
        const actorgenderData = analysisGender(actorData);
        // 프로필 등록 유무
        const existUserData = existProfiles(userData);
        // 연도별
        const yearDataOfActor = groupByYear(actorData);
        const yearDataOfUser = groupByYear(userData);
        const yearDataOfOrder = groupByYear(orderData);
        // 월/주/일 ( + 신규 )
        const totalDataOfActor = groupByDateNew(actorData);
        const totalDataOfUser = groupByDateNew(userData);
        const totalDataOrder = groupByDateNew(orderData);
        const totalDataOfApplication = groupByDateNew(plfilApplication)
        // 누적 월/주/일
        const totalDataAccOfActor = groupByDateAcc(actorData);
        const totalDataAccOfUser = groupByDateAcc(userData);
        const totalDataAccOfOrder = groupByDateAcc(orderData);
        const totalDataAccOfApplication = groupByDateAcc(plfilApplication);
        // 보유 쿠폰 수량
        const userCouponData = getCurrentCoupon(userData);
        // 쿠폰 적립/사용
        const couponHistoryData = analysisCouponNum(couponData, profileTourNew);
        // 매출 월/주/일
        const totalSalesData = analysisSales(orderData);
        const totalSalesDataAcc = analysisSalesAcc(orderData);
        // actorcareer
        const actorCareers = analysisActorCareer(actorCareer);
        const actorCareers1 = analysisActorCareer(makeList(actorCareer, "장편상업영화"));
        const actorCareers2 = analysisActorCareer(makeList(actorCareer, "장편독립영화"));
        const actorCareers3 = analysisActorCareer(makeList(actorCareer, "단편영화"));
        const actorCareers4 = analysisActorCareer(makeList(actorCareer, "연극"));
        const actorCareers5 = analysisActorCareer(makeList(actorCareer, "TV드라마"));
        const actorCareers6 = analysisActorCareer(makeList(actorCareer, "웹드라마", "유튜브"));
        const actorCountRole = analysisRoleCount(actorCareer, actorData) // 배역 TOP 100

        // 3. 저장하기
        const saveDataActor = { genderDatas: actorgenderData, yearData: yearDataOfActor, actorAgeData: actorAgeData, totalData: totalDataOfActor, totalDataAcc: totalDataAccOfActor }
        const saveDataUser = { existProfile: existUserData, yearData: yearDataOfUser, totalData: totalDataOfUser, totalDataAcc: totalDataAccOfUser, userCouponData: userCouponData }
        const saveDataOrder = { yearData: yearDataOfOrder, couponData: couponHistoryData, totalDataAcc: totalDataAccOfOrder, totalData: totalDataOrder, totalAmount: totalSalesData, totalAmountAcc: totalSalesDataAcc }
        const saveDataApplication = { totalData: totalDataOfApplication, totalDataAcc: totalDataAccOfApplication }
        const saveDataCareer = { role: actorCareers.countRole, category: actorCareers.countCate, commercial: actorCareers1.countRole, independence: actorCareers2.countRole, short: actorCareers3.countRole, play: actorCareers4.countRole, TV: actorCareers5.countRole, web: actorCareers6.countRole }
        const saveDataRole = { present: actorCountRole.present, past: actorCountRole.past };
        const data = { saveDataActor: saveDataActor, saveDataUser: saveDataUser, saveDataOrder: saveDataOrder, saveDataApplication: saveDataApplication, saveDataCareer: saveDataCareer, updateTime: updateTime, saveRoleCount: actorCareer, saveDataRole: saveDataRole };//saveDataRole: saveDataRole 
        const savedData = await saveAnalysisData(data)
        // console.log(savedData)

    }

    if (props.udTime) {

    }

    return (
        <>
            <Button onClick={() => handleLoadeDataButton()}>✔️통계데이터 불러오기</Button>
            <Button onClick={() => handleLoadAnalysisSaveButton()}>✔️데이터로드/분석/저장 (update)   </Button>
            <PText>상단 Update버튼은 데이터 저장까지 2~3분 이상 소요됩니다. 업데이트 완료 후, 새로고침을 해주세요.  </PText>
            <PText>기존 저장된 데이터는 바로 확인 가능합니다.<TextR> 마지막 update : {props.udTime}</TextR></PText>
            <PText />
        </>
    )
}

function makeList(list, category, category2) {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        const a = list[i];
        if (a.category === '' || a.category === null) { a.category = '값 없음' } // '', null 은 null로 통합

        if (a.category === category || a.category === category2) {
            newList.push(list[i])
        }
    }
    return newList
}

const TextR = styled.b`
    color: black;
    font-size: 13px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 20px;
    
`
const PText = styled.p`
    margin-top: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    color: gray;
`


export default HeaderSec;