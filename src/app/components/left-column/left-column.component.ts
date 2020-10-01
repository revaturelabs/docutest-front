import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent implements OnInit {

arr;
arr2;
btnDispArr: any [];

  constructor() {
     this.btnDispArr = new Array();
   }

  ngOnInit(): void {
    this.arr = document.getElementsByClassName("route-link");
    this.arr2 = document.getElementsByClassName("add-remove-btns");
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].setAttribute("id", "route-link-" + (i + 1));
      this.arr2[i].setAttribute("id", "add-remove-btns-" + (i + 1));
      this.btnDispArr.push(false);
    }
  }

  clickEndPoint(route) {
    document.getElementById(route).click();
  }

  displayAddRemoveBtns(route) {
    if (this.btnDispArr[parseInt(route) - 1] === false) {
      document.getElementById("add-remove-btns-" + route).style.display = "block";
      this.btnDispArr[parseInt(route) - 1] = true;
    } else if (this.btnDispArr[parseInt(route) - 1] === true) {
      document.getElementById("add-remove-btns-" + route).style.display = "none";
      this.btnDispArr[parseInt(route) - 1] = false;
    }
  }

}
