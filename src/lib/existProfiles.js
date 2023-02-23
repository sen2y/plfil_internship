export function existProfiles(list) {
    let existProfile = [];

    const countData = { Y: 1, N: 0 }; // {Y:230, N:10} -> 프로필 등록 유무 사용자 수 
    const existCountData = [{ exist: 1, count: 0 }, { exist: 0, count: 0 }]; // [{exist:y, count:230},{exist:n, num:10}]

    for (let i = 0; i < list.length; i++) {
        const actorProfile = list[i];
        let countC = actorProfile.actorProfiles;
        if (countC === null) {
            countC = 0;
        }
        if (countC === 0) {
            countData["N"]++;
            existCountData[1].count++
        }

        else {
            countData["Y"]++;
            existCountData[0].count++
        }
    }

    if (existCountData[0].count > 0) {
        existProfile = existCountData;
    }

    return existProfile;
}