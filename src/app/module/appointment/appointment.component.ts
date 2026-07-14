
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit {
  @ViewChild(FormGroupDirective)
   formDirective!: FormGroupDirective;
  timeSlots: string[] = [];
  scriptURL='https://script.google.com/macros/s/AKfycby6_H31ZDT0hT737HQ6TxA7oMJMMdJUF04u5k-4IdpvXNQ5-nm3Zet1m9yIDbWerr4A/exec'
  //subject="AppointmentEnquires"

  appointmentForm = this.fb.group({
    name: ['', Validators.required],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[6-9][0-9]{9}$')
      ]
    ],
    email: ['', Validators.email],
    treatment: ['', Validators.required],
    appointmentDate: ['', Validators.required],
    appointmentTime: ['', Validators.required]
  });

  today = new Date();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.generateTimeSlots();
  }

  // ⏰ Generate 1-hour time slots
  generateTimeSlots() {
    for (let hour = 10; hour < 18; hour++) {
      this.timeSlots.push(
        `${this.format(hour)} - ${this.format(hour + 1)}`
      );
    }
  }

  format(hour: number): string {
    const h = hour > 12 ? hour - 12 : hour;
    const period = hour >= 12 ? 'PM' : 'AM';
    return `${h}:30 ${period}`;
  }

  // 📅 Block past dates & Sundays
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    const isSunday = date.getDay() === 0;
    const isPast =
      date <
      new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate()
      );

    return !isSunday && !isPast;
  };

  // 🚀 Submit form
  bookAppointment() {
    if (this.appointmentForm.invalid) return;
    this.http.post(this.scriptURL,
      JSON.stringify(this.appointmentForm.value),
      {
        headers:{'Content-Type': 'text/plain'}
      }
    ).subscribe({
      next: () => {
        alert('Appointment booked successfully');
         this.formDirective.resetForm();

      this.appointmentForm.reset({
        name: '',
        phone: '',
        email: '',
        treatment: '',
        appointmentDate: null,
        appointmentTime: ''
      });
      },
      error: () => {
        alert('Something went wrong');
      }
    });
  }
}