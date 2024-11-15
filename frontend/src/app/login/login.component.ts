import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}
  signin(){
    this.router.navigateByUrl('/register');

  }

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:3001/users/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status) {
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect email or password");
        console.log("Error login");
      }
    });
  }
}
