import { listOrderModels } from "graphql/queries";
import { API, Storage } from "aws-amplify";
import { listActorProfiles } from "graphql/queries";
import { listUserModels } from "graphql/queries";
import { getPlfilStatus } from "graphql/queries";
import { updatePlfilStatus } from "graphql/mutations";
import { listCouponHistories } from "graphql/queries";
import { listProfileTourModels } from "graphql/queries";
import { parseToKoreanDateTime } from "./common";
import { listPlfilApplications } from "graphql/queries";
import { listActorCareers } from "graphql/queries";

export async function fetchDataFromDb(dbName, limit) {
  const presetData = {
    actorProfile: {
      func: listActorProfiles,
      funcName: "listActorProfiles",
      variables: {},
    },
    userModel: {
      func: listUserModels,
      funcName: "listUserModels",
      variables: {},
    },
    order: {
      func: listOrderModels,
      funcName: "listOrderModels",
      variables: {
        filter: { category: { eq: "ProfileTour" }, status: { ne: "created" } },
      },
    },
    couponHistory: {
      func: listCouponHistories,
      funcName: "listCouponHistories",
      variables: {},
    },
    profileTour: {
      func: listProfileTourModels,
      funcName: "listProfileTourModels",
      variables: {},
    },
    plfilApplication: {
      func: listPlfilApplications,
      funcName: "listPlfilApplications",
      variables: {},
    },
    actorCareer: {
      func: listActorCareers,
      funcName: "listActorCareers",
      variables: {},
    },
  };

  let fecthedData = [];

  const func = presetData[dbName].func;
  const funcName = presetData[dbName].funcName;
  let nextToken = 0;

  while (nextToken !== null && fecthedData.length <= limit) {
    console.log(
      "데이터를 불러오는 중 입니다. 현재" + fecthedData.length + "개"
    );

    const variables = presetData[dbName].variables;
    variables.limit = 400;
    if (nextToken !== null && nextToken !== 0) {
      variables.nextToken = nextToken;
    }
    const apiData = await API.graphql({
      query: func,
      variables: variables,
    });

    nextToken = await apiData.data[funcName].nextToken;
    const items = await apiData.data[funcName].items;

    fecthedData = [...fecthedData, ...items];
  }
  console.log("fetch완료");
  console.log(fecthedData);
  // const Test1 = (props) => {
  //   return (
  //     console.log(props.gender)

  //   )
  // }

  // Test1(fecthedData[1])
  fecthedData.map((item) => {
    item.createdAt = parseToKoreanDateTime(item.createdAt, "yyyy-mm-dd");
  });
  return fecthedData;
}

export async function loadAnalysisData() {
  const fetchedData = await fetch(
    "https://plfilbuket223845-staging.s3.ap-northeast-2.amazonaws.com/public/analysisData.json"
  )
  const data = await fetchedData.json()
  return data

  // const statusAPI = await API.graphql({
  //   query: getPlfilStatus,
  //   variables: { id: "analysisData" },
  // });
  // const status = statusAPI.data.getPlfilStatus.statusJson;
  // const resultData = JSON.parse(status);
  // return resultData;
}

export async function saveAnalysisData(objData) {
  const saveData = Storage.put("analysisData.json", JSON.stringify(objData));
  // const saveData = Storage.put("analysisData.json", JSON.stringify({ a: 1, b: 2 }));
  window.alert("저장완료");

  // const inputData = {};
  // inputData.id = "analysisData";
  // inputData.statusJson = JSON.stringify(objData);
  // const saveData = await API.graphql({
  //   query: updatePlfilStatus,
  //   variables: { input: inputData },
  // });

  return saveData;
}
