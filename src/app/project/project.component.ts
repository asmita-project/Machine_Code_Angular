import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
declare var Swal: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public productlist: any
  public categorylist: any

  public subcategorylist: any

  public supersubcategorylist: any

  public packagelist: any
  public comoditytypelist: any

  public productPage = false

  public productData = {
    name: "",
    images: "",
    sup_sub_category_id: "1",
    sub_category_id: "3",
    category_id: "",
    commodity_type_id: "",
    package_id: "",
    is_active: true
  }
  constructor(public restService: RestService,
    public router: Router,) { }

  ngOnInit(): void {

    // if (this.router.url === "/addproject") {
    //   this.getallproduct()
    //   this.productPage = true
    // }
    // else if(this.router.url === "/project"){
    //   this.productPage = false
    //   this.getallcategory()
    //   this.getallcomoditytype()
    //   this.getallpackage()
    // }
    this.getallproduct()

    this.getallcategory()
    this.getallcomoditytype()
    this.getallpackage()

  }


  public RedirectProduct() {
    this.productPage = true
  }

  public backproductpage() {
    this.productPage = false
  }
  public getallproduct() {
    this.restService.getproduct().subscribe(
      (response: any) => {
        console.log(response, "response");
        this.productlist = response

      },
      error => {
        console.log('Error in data load.');
      }
    );

  }

  public getallcategory() {
    this.restService.getCategory().subscribe((response) => {
      this.categorylist = response.pro_category;
      console.log("category", this.categorylist)
    },
      error => {
        console.log('Error in data load.');
      }
    );

  }

  public getallcomoditytype() {
    this.restService.getcomoditytype().subscribe((response) => {
      this.comoditytypelist = response;
      console.log("response comodity", response)
    },
      error => {
        console.log('Error in data load.');
      }
    );

  }

  public getallpackage() {
    this.restService.getpackagetype().subscribe((response) => {
      this.packagelist = response?.package;
      console.log("response package", response.package)
    },
      error => {
        console.log('Error in data load.');
      }
    );

  }

  public getcategorybyid() {
    this.restService.getsupersubcategory(this.productData.category_id).subscribe((response) => {
      this.supersubcategorylist = response;
    },
      error => {
        console.log('Error in data load.');
      }
    );
  }

  public getsupersubcategorybyid() {
    this.restService.getsupersubcategory(this.productData.sup_sub_category_id).subscribe((response) => {
      this.subcategorylist = response;
    },
      error => {
        console.log('Error in data load.');
      }
    );
  }

  public submitproject() {
    this.restService.productadd(this.productData).subscribe((response) => {
      console.log(response, "response");
      Swal.fire('Project Add Successfully','','success');
      this.productPage = false
      this.productData.name=""
      this.productData.category_id="",
      this.productData.commodity_type_id=""
      this.productData.package_id="",
      this.productData.sub_category_id="",
      this.productData.sup_sub_category_id=""
      this.getallproduct()
    },
      error => {
        Swal.fire('something went wrong', '', 'warning');
      }
    )
    console.log("Product Data", this.productData)
  }













}
