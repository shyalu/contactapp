import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  contacts:Contact[]= [];
  errorMessage!: string;
  sortedColumn!: string;

  constructor(private service:ContactService, private router:Router) { 
  }

  ngOnInit(): void {
    this.service.getAllContacts().subscribe((data:any)=>{
      this.contacts = data;
    }, (error) =>{
      this.errorMessage = error;
    });
  }

}




