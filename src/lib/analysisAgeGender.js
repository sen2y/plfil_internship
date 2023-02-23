import { calcAge } from "./common";


const NUM = 5; // 배우 연령대 그래프 default
const NUM2 = 3;
const NUM3 = 10;


export function anaylsisAgeGenderActorData(actorDataList) {

    let actorAgeData = {};

    let result1, result2, result3
    if (actorDataList.length !== 0) {
        let ageGenderData = [];
        ageGenderData = countAge(actorDataList, NUM)
        result1 = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 })

        ageGenderData = countAge(actorDataList, NUM2)
        result2 = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 })

        ageGenderData = countAge(actorDataList, NUM3)
        result3 = ageGenderData.sort(function (a, b) { return a.age > b.age ? 1 : -1 })

        if (ageGenderData.length !== 0) {
            actorAgeData = { actorAge1: result1, actorAge2: result2, actorAge3: result3 }
        }


    }


    return actorAgeData;
}


function countAge(list, num) { // num : 연령대 나누는 기준
    let count = 0;
    const ageData = {};
    const ageGenderData = []; // [{ageData: 0~5, man: 0. woman: 0},{}]

    ageData["unknown"] = 0;
    for (let i = 0; i < list.length; i++) {
        //putNum(actorAge, actorGender, ageGenderData)
        const actorProfile = list[i];
        const actorAge = calcAge(actorProfile.birthday);
        const actorGender = actorProfile.gender
        const startAt = (parseInt(actorAge / num) * num).toString()
        const endAt = ((parseInt(actorAge / num) + 1) * num).toString()
        const ageIndex = makeToDigit(startAt) + "~" + makeToDigit(endAt)

        if (ageIndex in ageData) {
            ageData[ageIndex]++
            for (let k = 0; k < ageGenderData.length; k++) {

                if (ageIndex === ageGenderData[k].age) {
                    if (actorGender === "남자") {
                        ageGenderData[k].man++;
                    }
                    else { ageGenderData[k].woman++; }

                }
            }
        }
        else {
            if (startAt > 250 || startAt < 0) { // 250살 넘으면 unknown으로
                addUnknown(count, ageGenderData, actorGender);
                count++;

            }
            else {
                ageData[ageIndex] = 1
                addGender(ageGenderData, ageIndex, actorGender) // 배열 추가
            }
        }

    } return ageGenderData

} function makeToDigit(stringNum) { // ex> 5 -> 05
    if (stringNum.length === 1) {
        return "0" + stringNum
    } else {
        return stringNum
    }
}

function addGender(ageGenderData, ageIndex, actorGender) {
    if (actorGender === "남자") {
        ageGenderData[ageGenderData.length] = { age: ageIndex, woman: 0, man: 1 }
    }
    else if (actorGender === "여자") {
        ageGenderData[ageGenderData.length] = { age: ageIndex, woman: 1, man: 0 }
    }
}

function addUnknown(count, ageGenderData, actorGender) {
    if (count < 1) {
        if (actorGender === "남자") {
            ageGenderData[ageGenderData.length] = { age: "unknown", woman: 0, man: 1 }
        }
        else {
            ageGenderData[ageGenderData.length] = { age: "unknown", woman: 1, man: 0 }
        }
    }
    else {
        let index = ageGenderData.findIndex(i => i.age === "unknown")
        if (actorGender === "남자") {
            ageGenderData[index].man++;
        }
        else {
            ageGenderData[index].woman++;
        }

    }
}