import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Adminuser } from '../service/adminuser';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminregvalues = new Adminuser();
  message='';

  constructor(private service:AdminService,
               private router:Router){}

  ngOnInit(): void {
    
  }

  loginUser(){
     this.service.adminlogin(this.adminregvalues).subscribe(
        data=>{
          console.log("response received"),
          confirm("Do You Want to save the passsword!!");
          this.router.navigate(['/admindashboard'])
        },
      error=>{
        console.log("exception occured"),
        this.message="Bad Credentials plz Enter Valid EmailId and Password"
        confirm("login failed plz check Emailid & Password Correctly")
      }
     )
  }
}
