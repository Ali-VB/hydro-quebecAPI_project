import moment from "moment";

// used in Bar Chart and Line Chart components
export function getDayString(dateArray, index) {
    const dateString = dateArray.map((item, i) => i === index && item.date);
    const momentObj = moment(dateString, "YYYY/M/D, h:mm:ss A");
    return momentObj.format("YYYY/M/D");
}

export function getTimeTotalDemandData(totalDemandData) {
    return totalDemandData.map((td_item) => {
        return {
            time: moment(td_item.date).format("hh:mm:ss a"),
            value: td_item.valeurs.demandeTotal == undefined ? 0 : td_item.valeurs.demandeTotal,
        };
    });
}

// used in Grid View components
export function separateDayAndTime(date) {
    const dateString = date;
    const momentObj = moment(dateString, "YYYY/M/D, h:mm:ss A");
    const dayString = momentObj.format("YYYY/M/D");
    const timeString = momentObj.format("h:mm:ss A");
    return { dayString, timeString }
}

// used in ThreeShift components
export function createShiftData(shiftData) {
    return shiftData.map((td_item) => ({
        date: td_item.date,
        demand: td_item.valeurs.demandeTotal,
    }));
};