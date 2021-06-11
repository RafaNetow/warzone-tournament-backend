import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserModelWarzone } from "./Models/DtoUserWz";
const API = require('call-of-duty-api')();

@Injectable()
export class WarzoneApiService {

    async getInfoUser(idUser : string): Promise<UserModelWarzone[]> {
        try {
            console.log("first",idUser)
            console.log(await API.login("....................", "......................."));
            console.log("all ok")
        } catch (err) {
            console.log(err)
            //Handle Exception
        }
        return null;
    }
}