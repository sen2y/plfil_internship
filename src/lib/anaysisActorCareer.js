export function analysisActorCareer(list) { // list = actorCareer
    const roleList = []; //['단역', '주연', '이미지단역', '조연', '기타', null, '']
    const cateList = []; //['단편영화', 'TV드라마', '연극', '기타', '장편상업영화']
    const countRole = []; //[{role : '단역', count : 1} ,]
    const countCate = [];

    let returnList = {};
    for (let i = 0; i < list.length; i++) {
        const a = list[i]
        if (a.roleGrade === '' || a.roleGrade === null) { a.roleGrade = '값 없음' } // '', null 은 null로 통합
        if (a.category === '' || a.category === null) { a.category = '값 없음' } // '', null 은 null로 통합


        // cateList 목록
        if (cateList.includes(a.category)) {
            let tempIndex = countCate.findIndex(v => v.category === a.category);
            countCate[tempIndex].count++;
        }
        else {
            cateList.push(a.category)
            countCate[countCate.length] = { category: a.category, count: 1 }
        }


        // role 목록
        if (roleList.includes(a.roleGrade)) {
            let tempIndex = countRole.findIndex(v => v.category === a.roleGrade);
            countRole[tempIndex].count++;
        }
        else {
            roleList.push(a.roleGrade)
            countRole[countRole.length] = { category: a.roleGrade, count: 1 }
        }
        returnList = { countRole: countRole, countCate: countCate };
    }
    return returnList;
}


