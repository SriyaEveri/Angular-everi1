

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule, NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   NamFomVar = {
//     NamIptVak: "",
//     prod: "",
//     cost: 0
//   };
//   prodAryVar!:any

//   constructor(public HttpConnection: HttpClient) { 
//     this.HttpConnection.get("http://localhost:8000/prod")
//     .subscribe( ResRsgVar =>{
//       console.log(ResRsgVar)
//       this.prodAryVar=ResRsgVar
//     })

//     this.HttpConnection.post("http://localhost:8000/prod",)
//     .subscribe( ResRsgVar =>{
//       console.log(ResRsgVar)
//       this.prodAryVar=ResRsgVar
//     })
    
//   }

//   verifyTable = [
//     { "NamVak": "Sriya", "prod": "Tesla Ev Car", "cost": 5000000 },
//     { "NamVak": "Navya", "prod": "Tesla Ev Car", "cost": 10000000 },
//     { "NamVak": "serena", "prod": "iphone 20", "cost": 400000 },
//     { "NamVak": "jayanth", "prod": "HP Envy 390", "cost": 40000 }
//   ];

//   EdtIdxVar = -1;

//   editRow(index: number) {
//     const selectedRow = this.verifyTable[index];
//     this.NamFomVar.NamIptVak = selectedRow.NamVak;
//     this.NamFomVar.prod = selectedRow.prod;
//     this.NamFomVar.cost = selectedRow.cost;
//     this.EdtIdxVar = index;
//   }

//   deleteRow(index: number) {
//     if (confirm("Do you really want to delete?")) {
//       this.verifyTable.splice(index, 1);
//     }
//   }

//   UptBtnFnc() {
//     if (this.EdtIdxVar >= 0) {
//       this.verifyTable[this.EdtIdxVar] = {
//         NamVak: this.NamFomVar.NamIptVak,
//         prod: this.NamFomVar.prod,
//         cost: this.NamFomVar.cost
//       };
//       this.EdtIdxVar = -1;
//       this.resetForm(); 
//     }
//   }

//   resetForm() {
//     this.NamFomVar = {
//       NamIptVak: "",
//       prod: "",
//       cost: 0
//     };
//   }
// }

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule, NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {

//   NamFomVar={
//     "NamVak":"",
// 	  "PrdVak":"",
//     "CstVak":0
//   }

//   TodoAryVar = [
//     "Play Cricket",
//     "Watch Movie",
//     "Pilimigrage Center",
//     "Mediation",
//     "Sleep"
//   ]

//   prodAryVar!:any
//   selectedProdId: string | null = null;

//   constructor(public httpConnection: HttpClient) { 
//     this.getProdFnc()
//   }

//   getProdFnc()
//   {
//     this.httpConnection.get("http://localhost:8000/prod")
// 		.subscribe(
// 			ResRsgVar =>
// 			{
// 				console.log(ResRsgVar)
//         this.prodAryVar = ResRsgVar
// 			})
//   }

//   AddProdFnc(NamFomVav:NgForm)
//   {
//     this.httpConnection.post(
//       "http://localhost:8000/prod",
//       this.NamFomVar
//     )
//         .subscribe(
//           ResRsgVar =>
//           {
//             console.log(ResRsgVar)
//             NamFomVav.resetForm()
//             this.getProdFnc()
//           })
//   }
//   deleteProdFnc(UidCol: string) {
//     this.httpConnection.delete(`http://localhost:8000/prod/${UidCol}`)
//       .subscribe(
//         ResRsgVar => {
//           console.log(ResRsgVar);
//           this.getProdFnc();
//         });
//   }
//   updateProdFnc(UidCol: string, NamFomVav: NgForm) {
//     this.httpConnection.put(
//       `http://localhost:8000/prod/${UidCol}`,
//       this.NamFomVar
//     )
//       .subscribe(
//         ResRsgVar => {
//           console.log(ResRsgVar);
//           NamFomVav.resetForm();
//           this.getProdFnc();
//           this.resetForm();
//         });
//   }

//   loadProdFnc(prod: any) {
//     this.selectedProdId = prod.UidCol;
//     this.NamFomVar = {
//       NamVak: prod.nameCol,
//       PrdVak: prod.productCol,
//       CstVak: prod.costCol
//     };
//   }
//   resetForm() {
//     this.selectedProdId = null;
//     this.NamFomVar = {
//       "NamVak": "",
//       "PrdVak": "",
//       "CstVak": 0
//     };
//   }
  

//   EdtIdxVar = -1

//   // EdtBtnFnc(IdxVar:number)
//   // {
//   //   this.EdtIdxVar = IdxVar
//   //   this.NamFomVar.NamIptVak = this.TodoAryVar[IdxVar]
//   // }

//   // UptBtnFnc(NamIptPsgVav:NgModel)
//   // {
//   //   this.TodoAryVar[this.EdtIdxVar] = this.NamFomVar.NamIptVak
//   //   this.EdtIdxVar = -1
//   //   NamIptPsgVav.reset('')
//   // }

//   // DelBtnFnc(IdxVar:number)
//   // {
//   //   if(confirm("Do u really wannu del"))
//   //     this.TodoAryVar.splice(IdxVar,1)
//   // }
  
// }

import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NamFomVar = {
    nameCol: "",
    productCol: "",
    costCol: 0
  };
 
  prodAryVar!: any;
  EdtIdxVar = -1;
 
  constructor(public httpConnection: HttpClient) {
    this.getProdFnc();
  }
 
  getProdFnc() {
    this.httpConnection.get("http://localhost:8000/prod")
      .subscribe({
        next: (ResRsgVar: any) => {
          this.prodAryVar = ResRsgVar;
          console.log(this.prodAryVar);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        }
      });
  }
 
  AddProdFnc(NamFomVar: NgForm) {
    this.httpConnection.post(
      "http://localhost:8000/prod",
      this.NamFomVar
    ).subscribe({
      next: (ResRsgVar: any) => {
        console.log('Response:', ResRsgVar);
        this.getProdFnc();
        this.resetForm();
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }
 
  editRow(index: number) {
    const selectedRow = this.prodAryVar[index];
    this.NamFomVar.nameCol = selectedRow.nameCol;
    this.NamFomVar.productCol = selectedRow.productCol;
    this.NamFomVar.costCol = selectedRow.costCol;
    this.EdtIdxVar = index;
  }
 
  UptBtnFnc(index: number) {
    if (this.EdtIdxVar >= 0) {
      const updatedRow = this.prodAryVar[index];
      updatedRow.nameCol = this.NamFomVar.nameCol;
      updatedRow.productCol = this.NamFomVar.productCol;
      updatedRow.costCol = this.NamFomVar.costCol;
 
      this.httpConnection.put(`http://localhost:8000/prod/${updatedRow.UidCol}`, updatedRow)
        .subscribe({
          next: (ResRsgVar: any) => {
            console.log('Updated:', ResRsgVar);
            this.getProdFnc();
            this.resetForm();
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        });
 
      this.EdtIdxVar = -1;
    }
  }
 
  deleteRow(index: number, UidCol: number) {
    if (confirm("Do you really want to delete?")) {
      this.httpConnection.delete(`http://localhost:8000/prod/${UidCol}`)
        .subscribe({
          next: (ResRsgVar: any) => {
            console.log('Deleted:', ResRsgVar);
            this.getProdFnc(); // Refresh the list after deletion
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        });
    }
  }
 
  resetForm() {
    this.NamFomVar = {
      nameCol: "",
      productCol: "",
      costCol: 0
    };
    this.EdtIdxVar = -1;
  }
}
 