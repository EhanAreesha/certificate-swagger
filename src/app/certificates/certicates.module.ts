import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {DataTableModule} from 'primeng/datatable';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CertificateService } from './certificates.service';
import { CertificatesComponent } from './certificates.component';
import { CertificateComponent } from './details/certificate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CertificatesComponent,
    CertificateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AccordionModule,
    ToastModule,
    DataTableModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService, CertificateService]
})
export class CertificateModule {
  constructor() {
  }

}
