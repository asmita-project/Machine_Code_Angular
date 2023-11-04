import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public API_URL = "/api"
  // public API_URL = " https://bookmystore.co/api"



  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT'
    })

  };


  public postFormData(url: string, json: any) {
    const headers = new Headers();

    return this.http.post(url, json, this.httpOptions).pipe(map(res => {
      const postresponse = res;
      console.log('service method: ' + postresponse);
      return postresponse;
    })
    );
  }

  public getJSONFromURL(url: string) {
    return this.http.get(url);
  }
     public URL = " http://localhost:4200/api"

  public getCategory(): Observable<any> {

    return this.http.get(`${this.URL}/pro_category?ad=1`);
  }

  public getsupersubcategory(id:any): Observable<any> {

    return this.http.get(`${this.URL}/super_sub_category_by_cat/'${id}`);
  }

  public getsubcategory(id:any): Observable<any> {

    return this.http.get(`${this.URL}/sub_category_by_subcat/'${id}`);
  }

  public getcomoditytype(): Observable<any> {

    return this.http.get(`${this.URL}/commodity_type`);
  }

  public getpackagetype(): Observable<any> {

    return this.http.get(`${this.URL}/package`);
  }

  public productadd(data: any): Observable<any> {
    return this.http.post(`${this.URL}/addpro`, data);
  }

  public loginApi(data: any): Observable<any> {
    return this.http.post(`${this.URL}/newlogin`, data);
  }
 
  public getproduct(): Observable<any> {

    return this.http.get(`${this.URL}/prolist`);
  }
 


}
