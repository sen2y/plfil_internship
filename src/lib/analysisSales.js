export function analysisSales(list) {

    let totalAmountData;

    const createYears = {}; // ex -> {2021: 162, 2022: 185}
    const createYM2Month = []; // ex ->  [{Date:21-08, amount: 12}, {Date:21-09, amount: 5},,,]
    const createYM2Week = []; // ex ->  [{Date:21-08-1, amount: 12}, {Date:21-09-2, amount: 5},,,]
    const createYM2Date = []; // ex ->  [{Date:21-08-17, amount: 12}, {Date:21-09-21, amount: 5},,,]

    for (let i = 0; i < list.length; i++) {
        const orderData = list[i];
        const amount = orderData.amount;

        const createYear = orderData.createdAt.substr(0, 4); // ex: 2021
        let createIndex = orderData.createdAt.substr(2, 5); // ex: 21-06
        let createIndexY = orderData.createdAt.substr(2, 2); // ex: 21
        let createIndexM = orderData.createdAt.substr(5, 2); // ex: 06
        const createDate28 = orderData.createdAt.substr(2, 8); // ex: 21-06-22
        const createDate = orderData.createdAt.substr(0, 10); // ex: 2021-06-22
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



        if (createYear in createYears) {
            let find1 = false; let find2 = false; let find3 = false;
            createYears[createYear]++;

            const createlists = [
                {
                    find: find1,
                    YMD: createYM2Month,
                    date: createIndex
                },
                {
                    find: find2,
                    YMD: createYM2Week,
                    date: createIndexWeek
                },
                {
                    find: find3,
                    YMD: createYM2Date,
                    date: createDate28
                }
            ]

            for (let i = 0; i < 3; i++) {
                const list = createlists[i]
                for (let k = 0; k < list.YMD.length; k++) {
                    if (list.date === list.YMD[k].Date) {
                        list.find = k; break;
                    }

                }

                if (list.find !== false) {
                    list.YMD[list.find].amount += amount;
                }
                else {
                    list.YMD.push({ Date: list.date, amount: amount }); // 배열 추가
                }

            }
        }


        // 새로운 Month
        else { // 2021, 2022, 2023, ,, 처음 발견 시 실행
            createYears[createYear] = 1;
            createYM2Month.push({ Date: createIndex, amount: amount }); // 배열 추가
            createYM2Week.push({ Date: createIndexWeek, amount: amount }); // 배열 추가
            createYM2Date.push({ Date: createDate28, amount: amount }); // 배열 추가
        }

    }
    let result = createYM2Month.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // month 기준 sort
    let result2 = createYM2Week.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // week 기준 sort
    let result3 = createYM2Date.sort(function (a, b) { return a.Date > b.Date ? 1 : -1 }); // year 기준 sort

    if (result.length !== 0) {
        totalAmountData = { Month: result, Week: result2, Date: result3 }

    }

    console.log(totalAmountData.Month)
    return totalAmountData;

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
