export function analysisCouponNum(list, list2) {

    let totalData;
    let changeCouponDate = []; // 쿠폰 적립 
    let changeCouponWeek = []; // 쿠폰 적립 
    let changeCouponMonth = []; // 쿠폰 적립 


    const createYears = {}; // ex -> {2021: 162, 2022: 185}

    list2.sort(function (a, b) { return a.createdAt > b.createdAt ? 1 : -1 }); // month 기준 sort

    for (let i = 0; i < list.length; i++) {
        const actorProfile = list[i];
        const createYear = actorProfile.createdAt.substr(0, 4); // ex: 2021
        let createIndex = actorProfile.createdAt.substr(2, 5); // ex: 21-06
        let createIndexY = actorProfile.createdAt.substr(2, 2); // ex: 21
        let createIndexM = actorProfile.createdAt.substr(5, 2); // ex: 06
        const createDate28 = actorProfile.createdAt.substr(2, 8); // ex: 21-06-22
        const createDate = actorProfile.createdAt.substr(0, 10); // ex: 2021-06-22
        let addNum = actorProfile.addNum;
        const week = getWeek(new Date(createDate));
        let createIndexWeek;

        if (week !== 0) {
            createIndexWeek = createIndex + "-" + week
        }
        else {
            if (parseInt(createIndexM) !== 12) { // 1~11월
                createIndexM = parseInt(createIndexM) + 1 // ex: 06 -> 07
                if (createIndexM < 10) {
                    createIndexM = "0" + createIndexM
                }
                createIndex = createIndex.substr(0, 3) + createIndexM // ex: 21-06 -> 21-07
            }
            else { // 12월이면 내년으로 넘겨야함
                createIndexY = parseInt(createIndexY) + 1 // 다음해로  
                createIndexM = "01" // 1월
                createIndex = createIndexY + "-" + createIndexM // ex: 21-12 -> 22-01
            }
            createIndexWeek = createIndex + "-1"
        }

        if (addNum > 0) { // 쿠폰 적립  

            if (createYear in createYears) {
                let find = false; let find2 = false; let find3 = false;
                createYears[createYear]++;

                // month
                for (let k = 0; k < changeCouponMonth.length; k++) {

                    // 배열에 있는 Month,
                    if (createIndex === changeCouponMonth[k].Date) {
                        find = k; break;
                    }


                }
                if (find !== false) {
                    changeCouponMonth[find].add += addNum;
                }
                else {
                    changeCouponMonth.push({ Date: createIndex, add: addNum, use: 0 }); // 배열 추가
                }


                // week
                for (let k = 0; k < changeCouponWeek.length; k++) {
                    // 배열에 있는 Week,
                    if (createIndexWeek === changeCouponWeek[k].Date) {
                        find2 = k; break;
                    }
                }

                if (find2 !== false) {
                    changeCouponWeek[find2].add += addNum;
                }
                else {
                    changeCouponWeek.push({ Date: createIndexWeek, add: addNum, use: 0 }); // 배열 추가
                }


                // date
                for (let k = 0; k < changeCouponDate.length; k++) {
                    // 배열에 있는 Date
                    if (createDate28 === changeCouponDate[k].Date) {
                        find3 = k; break;
                    }

                }

                if (find3 !== false) {
                    changeCouponDate[find3].add += addNum;
                }
                else {
                    changeCouponDate.push({ Date: createDate28, add: addNum, use: 0 }); // 배열 추가
                }
            }

            // 새로운 Month
            else { // 2021, 2022, 2023, ,, 처음 발견 시 실행
                createYears[createYear] = 1;

                changeCouponMonth.push({ Date: createIndex, add: addNum, use: 0 }); // 배열 추가
                changeCouponWeek.push({ Date: createIndexWeek, add: addNum, use: 0 }); // 배열 추가
                changeCouponDate.push({ Date: createDate28, add: addNum, use: 0 }); // 배열 추가
            }

        }

        else if (addNum < 0) { // 쿠폰 사용
            addNum = Math.abs(addNum) // 음수 -> 양수로 변환
            if (createYear in createYears) {
                let find = false; let find2 = false; let find3 = false;
                createYears[createYear]++;

                // month
                for (let k = 0; k < changeCouponMonth.length; k++) {

                    // 배열에 있는 Month,
                    if (createIndex === changeCouponMonth[k].Date) {
                        find = k; break;
                    }


                }
                if (find !== false) {
                    changeCouponMonth[find].use += addNum;
                }
                else {
                    changeCouponMonth.push({ Date: createIndex, add: 0, use: addNum }); // 배열 추가
                }


                // week
                for (let k = 0; k < changeCouponWeek.length; k++) {
                    // 배열에 있는 Week,
                    if (createIndexWeek === changeCouponWeek[k].Date) {
                        find2 = k; break;
                    }
                }

                if (find2 !== false) {
                    changeCouponWeek[find2].use += addNum;
                }
                else {
                    changeCouponWeek.push({ Date: createIndexWeek, add: 0, use: addNum }); // 배열 추가
                }


                // date
                for (let k = 0; k < changeCouponDate.length; k++) {
                    // 배열에 있는 Date
                    if (createDate28 === changeCouponDate[k].Date) {
                        find3 = k; break;
                    }

                }


                if (find3 !== false) {
                    changeCouponDate[find3].use += addNum;
                }
                else {
                    changeCouponDate.push({ Date: createDate28, add: 0, use: addNum }); // 배열 추가
                }
            }

            // 새로운 Month
            else { // 2021, 2022, 2023, ,, 처음 발견 시 실행
                createYears[createYear] = 1;
                changeCouponMonth.push({ Date: createIndex, add: 0, use: addNum }); // 배열 추가
                changeCouponWeek.push({ Date: createIndexWeek, add: 0, use: addNum }); // 배열 추가
                changeCouponDate.push({ Date: createDate28, add: 0, use: addNum }); // 배열 추가
            }

        }




    }

    let result = changeCouponMonth.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // month 기준 sort
    let result2 = changeCouponWeek.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // week 기준 sort
    let result3 = changeCouponDate.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // year 기준 sort

    let addCouponSum = 0;
    let useCouponSum = 0;
    for (let j = 0; j < result.length; j++) {
        addCouponSum += result[j].add
        useCouponSum += result[j].use

    }

    if (result.length !== 0) {
        totalData = { Month: result, Week: result2, Date: result3 }
    }

    return totalData;

}


const getWeek = (date) => {
    const currentDate = date.getDate()
    const firstDay = new Date(date.setDate(1)).getDay();
    const currentMonth = date.getMonth()
    const lastDay = new Date(date.getFullYear(), currentMonth + 1, 0) // 입력 월의 마지막 날
    const lastGetDay = lastDay.getDay() // 마지막 날 요일
    if (Math.ceil((currentDate + firstDay) / 7) === Math.ceil((lastDay.getDate() + firstDay) / 7)) { // 마지막주면
        if (lastGetDay === 6) { // 다음달 1일은 일요일부터 시작
            return Math.ceil((currentDate + firstDay) / 7);
        }
        else {// 막주와 다음달 첫째주가 이어진 경우 다음달 첫째주로 계산
            return 0;
        }
    }
    else {
        return Math.ceil((currentDate + firstDay) / 7);
    }
}