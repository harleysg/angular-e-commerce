import { HttpEvent, HttpRequest, HttpErrorResponse, HttpHandlerFn } from '@angular/common/http';
// ----------
import { Observable, catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>>  => next(req).pipe(catchError(HandleErrorInterceptor))

function HandleErrorInterceptor(error: HttpErrorResponse): ReturnType<typeof throwError> {
  const errorResponse = `${error.status}`
  return throwError(() => errorResponse)
}
