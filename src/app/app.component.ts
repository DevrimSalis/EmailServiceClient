import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Email } from './models/email.model';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.emailForm = this.fb.group({
      to: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  sendEmail() {
    const email: Email = this.emailForm.value;
    this.emailService.sendEmail(email).subscribe(() => {
      alert('E-posta başarıyla gönderildi.');
    }, error => {
      console.error(error);
      alert('E-posta gönderirken bir hata oluştu.');
    });
  }
}