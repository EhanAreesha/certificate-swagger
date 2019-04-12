import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CertificateService {
  BASE_URL = "https://lmswebapp.azurewebsites.net/api";

  constructor(private http: HttpClient) {}

  getCertificateList(): Observable<ICertificateList[]> {
    return this.http.get<ICertificateList[]>(
      this.BASE_URL + "/certificates/b3fe1982-a2e1-4ce5-8047-f913eb2dd965/List"
    );
  }

  getCertificateDetails(id: string): Observable<ICertificateObj> {
    return this.http.get<ICertificateObj>(
      this.BASE_URL + "/certificates/" + id
    );
  }
}
