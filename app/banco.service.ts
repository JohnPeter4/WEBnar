// banco.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private http: HttpClient) { }

  public postUsuario(code: string): Observable<string> {
    const url = 'http://localhost:8080/angular';
    const params = new HttpParams()
    .set('code', code);  
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(url, params, options);
  }


  public getTodosUsuarios(): Observable<any> {
    const url = 'http://localhost:8080/angular';
    return this.http.get<any>(url);
  }

}
