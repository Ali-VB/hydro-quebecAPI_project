import moment from "moment";

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