import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dcalc';
  formURl: SafeResourceUrl;
  formSource = 'https://docs.google.com/forms/d/e/1FAIpQLSeAovHRsG4I5-ubQqObSW1-hgLai9ceV4LbS1fbimIa8pCm3g/viewform?embedded=true';

  constructor(private sanitizer: DomSanitizer) {
    this.formURl = this.sanitizer.bypassSecurityTrustResourceUrl(this.formSource);
  }

  getFormSource() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.formSource);
  }
}
