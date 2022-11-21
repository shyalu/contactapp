import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  contactForm!: FormGroup;
  contactId!: string;
  public contact: Contact = {} as Contact;
  errorMessage!: string;

  constructor(private service:ContactService, private router:Router, private activateRouter:ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((param)=>{
     this.contactId = param.get('id') as string;
    });
    if(this.contactId){
      this.service.getselectedContact(this.contactId).subscribe((data:Contact)=>{
        this.contact = data;

        this.contactForm = this.formBuilder.group({
          firstName: [data.firstName, [Validators.required, Validators.maxLength(30)]],
          lastName: [data.lastName, [Validators.required, Validators.maxLength(30)]],
          email: [data.email, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          phoneNumber: [data.phoneNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/[0-9]*$/)]],
          address: [data.address, [Validators.required,Validators.maxLength(70)]],
          city: [data.city, [Validators.required, Validators.maxLength(20)]],
          state: [data.state, [Validators.required, Validators.maxLength(20)]],
          country: [data.country, [Validators.required, Validators.maxLength(20)]],
          postalCode: [data.postalCode, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/[0-9]*$/)]]
        });
      }, (error)=>{
        this.errorMessage = error;
      })
    }

  }

  
  get f() { return this.contactForm.controls; }
  
  editForm(){
    this.service.updateselectedContact(this.contactForm.value, this.contactId).subscribe((data)=>{
      //this.toastr.success('Contact details updated successfully.');
      this.router.navigate(['/home'], { relativeTo: this.activateRouter })
    }, (error)=>{
      this.errorMessage = error;
    })
  }
}
