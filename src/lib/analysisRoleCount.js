export function analysisRoleCount(list, list2) {
    // const actorObj = []
    // for (let i = 0; i < list2.length; i++) {
    //     actorObj.push({ username: list2[i].id, birthday: list2[i].birthday })
    // }
    // console.log(actorObj)
    const actorObj = {}
    for (let i = 0; i < list2.length; i++) {
        const today = new Date();
        const birthday = list2[i].birthday
        if (birthday === null) {
            continue;
        }
        const birthYear = birthday.substr(0, 4)
        // const birthDate = new Date(birthday.substr(0, 4), birthday.substr(5, 2), birthday.substr(8, 2));

        let age = today.getFullYear() - birthYear + 1;

        if (birthYear <= 1900 || birthYear > today.getFullYear() + 10) {
            // console.log("현재나이: " + age)
            // console.log("올해 년도 : " + today.getFullYear())
            // console.log("태어난 년도: " + birthYear)
            // console.log(list2[i])
            continue;
        }

        actorObj[list2[i].id] = age
    }

    let returnList = {};

    const topList = [];
    let countList = []; // 현재 나이로 계산
    let countList2 = []; // 당시 나이로 계산
    for (let i = 0; i < list.length; i++) {

        if (topList.includes(list[i].role)) {
            let tmp = countList.findIndex(v => v.role === list[i].role);
            countList[tmp].count++;
            countList2[tmp].count++;
            ageRatio(list[i], actorObj, countList[tmp], 1)
            ageRatio(list[i], actorObj, countList2[tmp], 2)


        }
        else {
            topList.push(list[i].role)
            countList[countList.length] = { role: list[i].role, count: 1, age10: 0, age20: 0, age30: 0, age40: 0 }
            countList2[countList2.length] = { role: list[i].role, count: 1, age10: 0, age20: 0, age30: 0, age40: 0 }
            ageRatio(list[i], actorObj, countList[countList.length - 1], 1)
            ageRatio(list[i], actorObj, countList2[countList.length - 1], 2)
        }
    }
    countList = countList.sort(function (a, b) { return a.count > b.count ? -1 : 1 })
    countList2 = countList2.sort(function (a, b) { return a.count > b.count ? -1 : 1 })
    countList = countList.slice(0, 100)
    countList2 = countList2.slice(0, 100)



    returnList = { present: countList, past: countList2 }
    return returnList;
}

function ageRatio(list, actorObj, countList, num) {

    let id = list.profileID;
    const today = new Date(); // 현재 날짜
    let careerYear = list.year; // 경력 당시 년도
    let ageId; // 계산된 배우 나이 ( num===1 : 경력당시 나이, num===2: 현재 나이)
    let careerAge = today.getFullYear() - careerYear; // 몇년전 경력인지
    if (careerYear < today.getFullYear() + 10 && careerYear > 1900) {
        if (num === 1) { // 현재 나이로 계산
            ageId = actorObj[id]
        }
        else if (num === 2) { // 경력 당시 나이로 계산
            ageId = actorObj[id] - careerAge // 해당 배우의 나이
        }

        if (ageId > 1000) {
            console.log(list)
            console.log(actorObj[id]) // 현재 나이
            console.log(careerYear) // 경력 년도 
            console.log(careerAge) // 몇년전 경력 
            console.log(ageId) // 
        }

        if (ageId < 20) {
            //0 ~ 10대  
            countList.age10++;
        }
        else if (ageId >= 20 && ageId < 30) {
            // 20대
            countList.age20++;
        }
        else if (ageId >= 30 && ageId < 40) {
            // 30대
            countList.age30++;
        }
        else if (ageId >= 40) {
            // 40대
            countList.age40++;
        }
    }


}