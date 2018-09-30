import {
    IM_IMAGE_URL
} from './Constants';
import {AsyncStorage} from "react-native";
import moment from 'moment';
import{
   RANGE_R1Y,
   RANGE_R3M,
   RANGE_R6M,
   RANGE_RTILL_DATE
} from './Types'
//import file from '../assets/graph_data.json'

export function getTransactionType(transactionType) {
    if (transactionType === "DIVIDEND_RECIEVED")
        return "Received";
    else if (transactionType === "DIVIDEND_PAYOUT")
        return "Payout";
    else if (transactionType === "PAYOUT_MUTUAL_FUNDS")
        return "Payout MF";
    else if (transactionType === "PAYIN_MUTUAL_FUNDS")
        return "Payin MF";
    else
        return transactionType;
}

export function getProductType(productType) {
    if (productType === "core_product")
        return "Arbor";
    else if (productType === "nest_egg")
        return "Bloom";
    else if (productType === "MANAGED_MUTUAL_FUNDS")
        return "MF";
    else
        return "No Product";
}

export function makeNumberArray(graphData) {
    let data = graphData;
    let numberArray = [];
    for (let i = 0; i < data.length - 1 ; i++) {
        numberArray.push(graphData[i].value);
    }
    return numberArray;
}

export function makeNumberArrayInt(graphData) {
    let data = graphData;
    let numberArray = [];
    for (let i = 0; i < data.length - 1; i++) {
        numberArray.push(parseInt(graphData[i].value));
    }
    return numberArray;
}


export function makeNumberArrayForFB(graphData){
    let data = graphData;
    let numberArray = [];
    for (let i = 0; i < data.length - 1; i++) {
        numberArray.push(parseInt(graphData[i]));
    }
    return numberArray;
}

export function getCurrentDate() {
    let today = new Date();
    let date = today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate();
    console.log(date);
    return date;
}

export function getDateBasedOnType(days) {
    let yesterday = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * days);
    return yesterday.getFullYear() + "-" + parseInt(yesterday.getMonth() + 1) + "-" + yesterday.getDate();
}

export function convertIndianCurrency(currency) {
    let money = currency.toLocaleString("en-IN",{style:"currency",currency:"INR"});
    let product = '\u20B9'+'XYZ';
    console.log(product,"test");
    return money.substring(0, money.indexOf('.'));
}

export function convertIndianCurrencyForDetail(currency) {

    return currency.toLocaleString("en-IN",{style:"currency",currency:"INR"});
}

export function snapShotToArray(snapshot) {
    let returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        let childData = childSnapshot.val();
        returnArr.push(childData);
    });
    return returnArr;
}


export function makeImageUrl(rmId) {
    return IM_IMAGE_URL + "/" + rmId + ".jpg";
}

export function getActiveFormDate(){
    let activeDate = '2016-05-01';
    AsyncStorage.getItem('active_from', (err, result) => {
        if (!err && result != null) {
            activeDate = result;
        }
    });
    return activeDate;
}


export function getTimeStampForApi(date){
    return moment(date,'DD MMM YY').format('YYYY-MM-DD');
}

export function getTimeDate(currentDate) {
    return  moment(currentDate, 'YYYY-MM-DD').format('DD MMM YY');
}

export const numberWithCommas = (x) => {
    return x.toLocaleString('en-IN');
};

export function getProfitPercentage  (totalProfit, totalCapital){
    let profit = (totalProfit/totalCapital)*100;
    return ((profit*100)/100).toFixed(2)+"%";
}

export function getSelectedReportPeriod(type){
    if(type === RANGE_R1Y)
      return "1 Year";
    else if (type === RANGE_R3M)
      return "3 Month";
    else if (type === RANGE_R6M)
      return "6 Month" ;
    else if (type === RANGE_RTILL_DATE)
      return "Till Date" ;
    else
        return "Please Select Period"

}

export function getGraphColor(netProfitPer){
    if(netProfitPer.indexOf('-')>-1)
       return "#DD6B55";
    else
       return "#33dd99";
}

export function getTextColor(netProfitPer){
    if(netProfitPer.indexOf('-')>-1)
       return "true";
    else
       return "false";
}

export function mergeFolderAndFileResponse (fileResponse, folderResponse){
    let newDocList = [];
     //convert folder response to model
    for(let i =0; i< folderResponse.length; i++){
        let newDocModel = {
            "document_id": 0,
            "file_name": null,
            "folder_name": folderResponse[i].folder_name,
            "relationship_id": folderResponse[i].relationship_id,
            "file_count": folderResponse[i].file_count,
            "type":"folder",
            "file_deleted": null,
            "notes": null,
            "file_url": null,
            "created_date": null,
            "modified_date":null,
            "mime": null
        };
        newDocList.push(newDocModel)
    }
    //convert file response to model
    for(let j = 0; j< fileResponse.length;j++){
        let newDocModel = {
            "document_id": fileResponse[j].document_id,
            "file_name": fileResponse[j].file_name,
            "folder_name": fileResponse[j].folder_name,
            "relationship_id": fileResponse[j].relationship_id,
            "file_count": null,
            "type":"file",
            "file_deleted": fileResponse[j].file_deleted,
            "notes": fileResponse[j].notes,
            "file_url": fileResponse[j].file_url,
            "created_date": fileResponse[j].created_date,
            "modified_date":fileResponse[j].modified_date,
            "mime": fileResponse[j].mime
        };
        newDocList.push(newDocModel)
    }
    return newDocList;
}

export function makeXAxisData (data){
    let numberArray = [];
    for (let i = 0; i < data.length - 1; i++) {
        let ts = moment(data[i].date+ "9:00", "YYYY-MM--DD H:mm").valueOf();
        numberArray.push(ts);
    }
    return numberArray;
}

// Sat Jul 01 2017 00:30:27 GMT+0530
export function convertISTTime(time){
    let t = time.toString();
    let month = t.substring(4,7);
    let date = t.substring(9,10);
    let year = t.substring(11,15);
    return year + "-" + getMonth(month) + "-" + date;;
}

//temp solution
export function getMonth(monthName){
    let month = 0;
    if(monthName === 'Jul')
        return 7;
    else if(monthName === 'Jan')
        return 1;
    else if (monthName === 'Feb')
        return 2;
    else if (monthName === 'Mar')
        return 3;
    else if (monthName === 'Apr')
        return 4;
    else if (monthName === 'May')
        return 5;
    else if (monthName === 'Jun')
        return 6;
    else if (monthName === 'Aug')
        return 8;
    else if (monthName === 'Sep')
        return 9;
    else if (monthName  === 'Oct')
        return 10;
    else if (monthName === 'Nov')
        return 11;
    else if (monthName === 'Dec')
        return 12;
    return month
}
