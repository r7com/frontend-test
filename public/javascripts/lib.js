export const sortParticipants = (list) => {
    let total = 0

    const newList = []

    for (const item of list) {
        total += item?.negative ? +item.negative : 0
        total += item?.positive ? +item.positive : 0
    }

    for (const item of list) {
        let negative = item?.negative ? +item.negative : 0
        let positive = item?.positive ? +item.positive : 0

        newList.push(
            {
                ...item,
                percentage_negative: (negative / total) * 100,
                percentage_positive: (positive / total) * 100
            }
        )
    }

    return newList.sort((a, b) => {
        if (a.percentage_positive < b.percentage_positive) {
            return 1
        }

        if (a.percentage_positive > b.percentage_positive) {
            return -1
        }

        return 0
    })
}