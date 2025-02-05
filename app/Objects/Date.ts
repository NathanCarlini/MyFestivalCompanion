export default class NowDate{
    fulldate : string;

    constructor(){
        const nowdate =  new Date();
        const day = nowdate.getDay();
        const month = nowdate.getMonth();
        const year = nowdate.getFullYear();
        this.fulldate = year + "-" + month + "-" + day;

    }
}