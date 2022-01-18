function TimeGetter(time) {
    const hour = /[0-9]{1,5}h/;
    const min = /[0-9]{1,2}m/;
    const day = /[0-9]{1,2}d/;
    const week = /[0-9]{1,5}w/;
    const digit = /[0-9]+/;
    if (hour.test(time)) {
        const getNumber = digit.exec(time)[0];
        return { time: `${getNumber.padStart(2, '0') }:00:00` }
    } else if (min.test(time)) {
        const getNumber = digit.exec(time)[0];
        return { time: `00:${getNumber.padStart(2, '0') }:00` }
    } else if (day.test(time)) {
        const getNumber = digit.exec(time)[0];
        return { time: `${(getNumber*24) }:00:00` }
    } else if (week.test(time)) {
        const getNumber = digit.exec(time)[0];
        const calc = (24 * 7) * getNumber;
        return { time: `${calc}:00:00` }
    } else return { time: null }
}

const timeInfo = TimeGetter('60m')
console.log(timeInfo)