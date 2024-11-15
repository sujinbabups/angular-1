import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id: string = "";
  product: string = "";
  quantity: string = "";
  products: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllProducts(); 
  }

  enter() {
    let bodyData = {
      id: this.id,
      product: this.product,
      quantity: this.quantity,
    };

    this.http.post("http://localhost:3001/product", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("New product added");
      this.getAllProducts(); 
    });
  }

  getAllProducts() {
    this.http.get("http://localhost:3001/products").subscribe((products: any) => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.http.delete(`http://localhost:3001/product/${id}`).subscribe(() => {
      alert("Product deleted");
      this.getAllProducts();
    });
  }

  save() {
    this.enter();
  }
}
