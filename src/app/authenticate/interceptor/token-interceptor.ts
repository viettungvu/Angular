import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authString = localStorage.getItem('token') as string;
    //var auth = JSON.parse(authString);

    let modifiedReq = request.clone({
      params: request.params.append('token', authString),
    });
    return next.handle(modifiedReq);
  }

}