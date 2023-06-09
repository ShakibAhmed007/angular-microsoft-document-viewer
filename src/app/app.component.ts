import { Component, VERSION } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  baseURL = 'https://view.officeapps.live.com/op/embed.aspx?src=';
  urlSafe: SafeResourceUrl;

  /**
   * For urlDoc, urlCsv, urlXl, urlPpt
   * use encodedDownloadLink with baseUrl as prefix
   */
  urlDoc: string = `${this.baseURL}https%3A%2F%2Fcsg10033fffa5b497aa.blob.core.windows.net%2Fcrm2point0%2FDevelopment%2F15%2F10000098%2FMyDocument%2FNajrul%20Bhai%20Test-20230609104427%2FNajrul%20Bhai%20Test-20230609104536.docx%3Fsv%3D2021-08-06%26se%3D2038-06-09T11%253A08%253A17Z%26sr%3Db%26sp%3Dr%26sig%3D8RlhVGE0X%252B3LpfBDMVUo8pkj8HbKFG%252Bf%252BP6FZkzN95c%253D`;

  urlCsv: string = `${this.baseURL}https%3a%2f%2fcsg10033fffa5b497aa.blob.core.windows.net%2fcrm2point0%2fDevelopment%2f15%2f10000098%2fMyDocument%2fNajrul+Bhai+Test-20230609104427%2fNajrul+Bhai+Test-20230609104826.csv%3fsv%3d2021-08-06%26se%3d2038-06-09T11%253A10%253A37Z%26sr%3db%26sp%3dr%26sig%3dgxD7kIlVPtjmwkJVUaQIcIG%252Bxl82yDdXsQgu%252B1dRTnY%253D`;

  urlXl: string = `${this.baseURL}https%3A%2F%2Fcsg10033fffa5b497aa.blob.core.windows.net%2Fcrm2point0%2FDevelopment%2F15%2F10000098%2FMyDocument%2FNajrul%20Bhai%20Test-20230609104427%2FNajrul%20Bhai%20Test-20230609104537.xlsx%3Fsv%3D2021-08-06%26se%3D2038-06-09T11%253A15%253A27Z%26sr%3Db%26sp%3Dr%26sig%3DJY9a7ty%252BaxkD19%252BmlK3NW%252FN4vfFwJRypsQT5XmFnSN8%253D`;

  urlPpt: string = `${this.baseURL}https%3A%2F%2Fcsg10033fffa5b497aa.blob.core.windows.net%2Fcrm2point0%2FDevelopment%2F15%2F10000098%2FMyDocument%2FNajrul%20Bhai%20Test-20230609104427%2FNajrul%20Bhai%20Test-20230609104537.pptx%3Fsv%3D2021-08-06%26se%3D2038-06-09T11%253A18%253A30Z%26sr%3Db%26sp%3Dr%26sig%3DfcTEDKsgmH9ofCnoR%252BxaHsSZNsOuj5n7Pvdqc1tFDJw%253D`;

  /**
   * For urlPdf, urlJpg
   * use downloadlink without any prefix
   */
  urlPdf: string = `https://csg10033fffa5b497aa.blob.core.windows.net/crm2point0/Development/15/10000098/MyDocument/Najrul Bhai Test-20230609104427/Najrul Bhai Test-20230609104726.pdf?sv=2021-08-06&se=2038-06-09T11%3A39%3A37Z&sr=b&sp=r&sig=SIxksia4zrQDLysx4t%2FfwhaPm4B0KHm8OMretujRMSs%3D`;

  urlJpg: string = `https://csg10033fffa5b497aa.blob.core.windows.net/crm2point0/Development/15/10000098/MyDocument/Najrul Bhai Test-20230609104427/Najrul Bhai Test-20230609104606.jpg?sv=2021-08-06&se=2038-06-09T11%3A38%3A01Z&sr=b&sp=r&sig=wMpcic8q%2Fz9na0mAKsx%2FQ7AUc0mzcv1GfR%2BJwqaIPhs%3D`;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDoc);
  }

  selectDocumentType(type: any) {
    switch (type) {
      case 'doc':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlDoc
        );
        window.open(this.urlDoc, '_blank');
        break;
      case 'xl':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlXl
        );
        window.open(this.urlXl, '_blank');
        break;
      case 'ppt':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlPpt
        );
        window.open(this.urlPpt, '_blank');
        break;
      case 'csv':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlCsv
        );
        window.open(this.urlCsv, '_blank');
        break;
      case 'pdf':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlPdf
        );
        window.open(this.urlPdf, '_blank');
        break;
      case 'jpg':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlJpg
        );
        window.open(this.urlJpg, '_blank');
        break;
      default:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.urlDoc
        );
    }
  }
}
