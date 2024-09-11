import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-booking',
  templateUrl: './doctor-booking.component.html',
  styleUrl: './doctor-booking.component.css'
})
export class DoctorBookingComponent {
  bookingForm: FormGroup | any;
  doctors: string[] = ['Dr. John Smith', 'Dr. Emily Davis', 'Dr. Sarah Lee']; // Example doctors
showModal: any;
  alertMessage: string | any;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      appointmentDate: ['', Validators.required],
      doctor: ['', Validators.required],
      reason: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      // You can handle form submission here (e.g., send data to a server)
      this.alertMessage = 'Your appointment has been successfully booked!';
      this.showModal = true;
    } else {
      this.alertMessage = 'There was an error with your booking. Please check the form and try again.';
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
