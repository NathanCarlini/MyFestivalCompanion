import { DateTime } from "next-auth/providers/kakao"

export default class ArticleToSend{
    readonly timesamp : Date;
    account_idaccount : number;
    title : string;
    text : string;
    creationdate! : DateTime;
    deletiondate! : DateTime;
    editdate! : DateTime;

    constructor(idaccount: number, titre: string, texte: string, datetoinput: DateTime){
        this.timesamp = new Date();
        this.account_idaccount = idaccount;
        this.title = titre;
        this.text = texte;
        this.creationdate = datetoinput;
        this.deletiondate = datetoinput;
        this.editdate = datetoinput;
    }
}