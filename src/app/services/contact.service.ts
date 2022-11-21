import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  private baseUrl:string= 'http://localhost:3000';

  getAllContacts(): Observable<Contact>{
    let url = `${this.baseUrl}/contacts`;
    return this.http.get<Contact>(url);
  }

  addNewContact(contact:Contact) :Observable<Contact>{
    let url = `${this.baseUrl}/contacts`;
    return this.http.post<Contact>(url, contact);
  }

  updateselectedContact(contact:Contact, id:string) :Observable<Contact>{
    let url = `${this.baseUrl}/contacts/${id}`;
    return this.http.put<Contact>(url, contact);
  }

  getselectedContact(id:string) :Observable<Contact>{
    let url = `${this.baseUrl}/contacts/${id}`;
    return this.http.get<Contact>(url);
  }
}
