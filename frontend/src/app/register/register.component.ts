import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void { }

  register() {
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "password": this.password,
    };

    this.http.post("http://localhost:3001/users/", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Registration success");
    });
  }

  save() {
    this.register();
  }

  login(){
    this.router.navigateByUrl('/');

  }
}
