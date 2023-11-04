import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Machine_test';
  public loginStatus = false;
  public showFiller = false;

  constructor(private restService: RestService,
    private router: Router){
      if (localStorage.getItem('islogin')) {
        this.router.navigate(['/project']);
        this.loginStatus = true;
      }
      else {
        this.router.navigate(['/homepage']);
  
      }
    }

    public logout(){
      sessionStorage.clear();
      localStorage.clear();
      location.reload();
    }

}
