export function groupByYear(list) {
    let yearData = [];
    const createYears = {}; // {2021:1,2022:1,2023:1,,,}
    const createYM = [];

    for (let i = 0; i < list.length; i++) {
        const actorProfile = list[i];
        const createDate = actorProfile.createdAt.substr(0, 10);
        const createYear = actorProfile.createdAt.substr(0, 4);
        const createMonth = actorProfile.createdAt.substr(5, 2);

        if (createYear in createYears) {
            createYears[createYear]++;
            for (let k = 0; k < createYM.length; k++) {
                if (parseInt(createYear) == createYM[k].year) {
                    addCreateMonth(k, createYM, createMonth);
                }
            }
        }

        else {
            createYears[createYear] = 1;
            addCreateYM(createYM, createDate);
            addCreateMonth(createYM.length - 1, createYM, createMonth);
        }

    }

    let result = createYM.sort(function (a, b) { return a.year > b.year ? 1 : -1 }); // year 기준 sort

    if (result.length !== 0) {
        yearData = { year: result }
    }
    return yearData;


}

function addCreateYM(createYM, createDate) {
    const createYear = createDate.substr(0, 4);
    createYM[createYM.length] = {
        year: createYear,
        '01월': 0, '02월': 0, '03월': 0, '04월': 0, '05월': 0, '06월': 0,
        '07월': 0, '08월': 0, '09월': 0, '10월': 0, '11월': 0, '12월': 0
    }

}

function addCreateMonth(k, createYM, createMonth) {
    const index = createMonth + "월"
    createYM[k][index]++
}