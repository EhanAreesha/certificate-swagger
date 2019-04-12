import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { CertificateService } from "./certificates.service";
declare var $: any;

@Component({
  selector: "certificates-list",
  templateUrl: "./certificates.component.html",
  styleUrls: ["./certificates.component.scss"]
})
export class CertificatesComponent {
  icertificates: ICertificates;

  constructor(
    private router: Router,
    private _certificatesService: CertificateService
  ) {}

  loadCertLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      if (this.icertificates.certificateList) {
        this.icertificates.certificateTempList = this.icertificates.certificateList.slice(
          event.first,
          event.first + event.rows
        );
      }
    }, 250);
  }

  ngOnInit() {
    this.icertificates = { certificateTempList: [] };
    this._certificatesService
      .getCertificateList()
      .subscribe((data: ICertificateList[]) => {
        this.icertificates.certificateList = data;
        this.icertificates.totalRecords = this.icertificates.certificateList.length;
        this.icertificates.certificateTempList = this.icertificates.certificateList.slice(
          0,
          15
        );
      });
  }

  details(id) {
    console.log("Details id is: " + id);
    this.router.navigate(["certificates", id]);
  }
}
