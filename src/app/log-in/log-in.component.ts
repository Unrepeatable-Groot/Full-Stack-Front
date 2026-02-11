import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  onFormSubmit(form:NgForm){
    let users = [];
    users.push(form.value);
    users.forEach(user => {
      console.log(user)
    });
  }
}
