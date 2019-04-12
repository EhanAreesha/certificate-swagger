import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CertificatesComponent } from "./certificates/certificates.component";
import { CertificateComponent } from "./certificates/details/certificate.component";

const routes: Routes = [
  { path: "certificates", component: CertificatesComponent },
  { path: "certificates/:id", component: CertificateComponent },
  { path: "**", redirectTo: "certificates" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
