import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router, private toast: NgToastService){}
  logout(){
    this.router.navigate(['login']);
    this.toast.error({detail: "LOGGING OUT", summary:"See you next time!" ,duration: 5000})
  }

}
