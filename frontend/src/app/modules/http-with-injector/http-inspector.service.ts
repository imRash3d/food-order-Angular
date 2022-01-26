import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class HttpInspectorService implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let current_user: any;
   
        // Clone the request to add the new header.
        if (current_user) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + ''),
            });
            // send the newly created request
            return next.handle(authReq) as any;
        } else {

            // send the newly created request
            return next.handle(req) as any;
        }
    }

}

