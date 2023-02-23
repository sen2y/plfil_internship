export function analysisGender(list) {
    let genderDatas = [];

    let man = 0;
    let woman = 0;
    for (let i = 0; i < list.length; i++) {
        const actorProfile = list[i];
        if (actorProfile.gender === "남자") {
            man++;
        }
        else if (actorProfile.gender === "여자") {
            woman++;
        }
    }

    if (man > 0) {
        genderDatas = [{ "man": man, "woman": woman }]
    }

    return genderDatas;


}