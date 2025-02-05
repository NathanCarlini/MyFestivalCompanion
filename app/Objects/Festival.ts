import { DateTime } from "next-auth/providers/kakao"

export default class Festival {
    
    readonly timesampmodification : Date;
    idfestival! : number;
    name! : string;
    description! : string;
    password! : string;
    festivalstartdate! : DateTime;
    festivalenddate! : DateTime;
    creationdate! : DateTime;
    deletiondate! : DateTime;
    editdate! : DateTime;
    siteinternet! : string;
    latitude! : number;
    longitude! : number;

    constructor(){
        this.timesampmodification = new Date();
    }
}