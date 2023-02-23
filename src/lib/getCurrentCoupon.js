export function getCurrentCoupon(list) {
    let userCouponData;
    const countData = {}; // {count_0:230, count_1:150, count_2:} -> 보유쿠폰 수량 별 인원 리스트
    const couponNumData = []; // [{num:0, count:230},{num: 0, num:150},,]

    for (let i = 0; i < list.length; i++) {
        const actorProfile = list[i];

        let countC = actorProfile.profileTourCoupon;
        if (countC === 0 || countC === null) {
            countC = 0;
            continue;
        }

        let list_index = "count_" + countC
        if (list_index in countData) {
            countData[list_index]++;
            for (let k = 0; k < couponNumData.length; k++) {
                if (couponNumData[k].num === countC) {
                    couponNumData[k].count++;
                }
            }
        }
        else {
            countData[list_index] = 1
            couponNumData.push({ num: countC, count: 1 }); // 배열추가
        }

    }



    let result = couponNumData.sort(function (a, b) { return a.num > b.num ? 1 : -1 });
    let couponSum = 0;
    for (let j = 0; j < result.length; j++) {
        couponSum += result[j].num * result[j].count;

    }

    if (result.length !== 0) {
        userCouponData = { countCoupon: result }
    }
    return userCouponData;

}

