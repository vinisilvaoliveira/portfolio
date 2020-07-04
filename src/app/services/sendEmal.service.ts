import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class SendEmalService {

    private url: string = environment.apiURL + "/email";

    constructor(private http: HttpClient) { }

    postEmail(emailDados: any): Observable<any> {
        return this.http
            .post<any>(this.url, emailDados)
            .pipe(
                map(res => {
                    return res;
                }),
                catchError(err => {
                    return throwError('Email inválido');
                }),
            );
    }
}
