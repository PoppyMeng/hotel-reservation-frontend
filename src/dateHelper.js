/* eslint-disable prettier/prettier */

const displayDate = (date) => {
    return date.toString().split(" ").slice(0, 4).join(" ");
}

const makeDateSearchString =(date)=>{
    const year=date.getFullYear().toString();
    let actualDate = date.getDate().toString();
    if (actualDate.length ==1){
        actualDate="0"+actualDate;
    }
    let month = (date.getMonth() + 1).toString();
    if (month.length == 1) {
        month = "0" + month;
    }
    return (year + month + actualDate);
}

const makeDateFromSearchString = (dateString)=>{
    const year=parseInt(dateString.slice(0, 4));
    const month = parseInt(dateString.slice(4, 6));
    const date = parseInt(dateString.slice(6, 8));
    return new Date(year, month, date);
}


export {displayDate, makeDateFromSearchString, makeDateSearchString};