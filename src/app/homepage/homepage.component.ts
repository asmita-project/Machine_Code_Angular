import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
declare var Swal: any;


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  public LoginObject ={
    email:"",
    password:""
  }

  constructor( 
    public restService: RestService,
    public router: Router,) { }

  ngOnInit(): void {
  }


 public login(){

    this.restService.loginApi(this.LoginObject).subscribe((response)=>{
          console.log(response,"response");
          if (response.msg == "Error") {
            Swal.fire('Email And Password is incorrect','','warning');

          }
          else{
            sessionStorage.setItem('islogin',"true");
            localStorage.setItem('islogin',"true");
            this.router.navigate(['/project']);   
            location.reload();
          }
        
         
    }, 
    error=>{
      Swal.fire('Email And Password is incorrect','','warning');
    }
    )


   
   
  }

}
