import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CertificateService } from "../certificates.service";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
declare var $: any;

@Component({
  selector: "certificate-details",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.scss"]
})
export class CertificateComponent {
  icertificate: ICertificate;
  constructor(
    private route: ActivatedRoute,
    private _certificateService: CertificateService
  ) {}

  ngOnInit() {
    this.icertificate = {
      certificate: {},
      certificateId: null,
      leftLogo: "./../../assets/images/2000px-EdX.png",
      rightLogo: "./../../assets/images/bottom-right-logo.png"
    };
    this.icertificate.certificate = { UserName: "" };
    this.icertificate.certificateId = this.route.snapshot.paramMap.get("id");
    if (this.icertificate.certificateId != null) {
      this._certificateService
        .getCertificateDetails(this.icertificate.certificateId)
        .subscribe((data: ICertificateObj) => {
          this.icertificate.certificate = data;
        });
    }
  }

  public captureScreen() {
    var data = document.getElementById("contentToConvert");
    html2canvas(data).then(canvas => {
      var imgWidth = 280;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("l", "mm", "a4"); // landscape, mili metre & A4 size page of PDF
      var position = 15;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.autoPrint();
      window.open(pdf.output("bloburl"), "_blank");
    });
  }
}
