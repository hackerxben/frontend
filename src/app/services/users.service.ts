import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "../models/loginRequest.model";
import { LoginReponse } from "../models/loginResponse.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
export class UserService{
    test="This is a test"


    constructor(
        private http: HttpClient
    ){
    }

    getUser(): Observable<User>{
        return this.http.get<User>("http://localhost:3000/getUser")
    }

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>("http://localhost:3000/getUsers")
    }

    signIn(loginRequest:LoginRequest): Observable<LoginReponse>{
        return this.http.post("http://localhost:3000/signIn",loginRequest)
    }
}
