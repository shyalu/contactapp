import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  contactForm!: FormGroup;
  contact: Contact = new Contact();
  errorMessage!: string;
  contacts:Contact[]= [];

  constructor(private service:ContactService, private formBuilder:FormBuilder, private router:Router, private activeRoute:ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNumber: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/[0-9]*$/)]],
      address: [null, [Validators.required,Validators.maxLength(70)]],
      city: [null, [Validators.required, Validators.maxLength(20)]],
      state: [null, [Validators.required, Validators.maxLength(20)]],
      country: [null, [Validators.required, Validators.maxLength(20)]],
      postalCode: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/[0-9]*$/)]]
    });
  
  }

  get f() { return this.contactForm.controls; }

  submitForm(){
  this.contact = this.contactForm.value;
  this.service.addNewContact(this.contact).subscribe((data:Contact)=>{
    this.toastr.success('Contact details added successfully.');
    this.router.navigate(['/home'], { relativeTo: this.activeRoute });
  }, (error)=>{
    this.errorMessage = error;
  })
 }

}
