import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ToastContent } from './model/toastContent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  choosenDs: string[] = [];
  choosenDsElements: HTMLElement[] = [];

  toastContents: ToastContent[] = [];


  checkBoxds: RealEstateDistrict[] = [];


  ngOnInit(): void {

    for (let i = 1; i <= 23; i++) {
      let a: RealEstateDistrict = {
        reName: i + ". Kerület",
        isChecked: false
      }
      this.checkBoxds.push(a)
    }
  }

  processDistrict(ds: any) {
    let dist = ds.target.value;
    var dsObject = this.checkBoxds.filter(uce => uce.reName === dist)[0];
    let dsId = dsObject.reName.split(".")[0];
    let elementPath = document.querySelector("#bp" + dsId);

    if (dsObject.isChecked == false) {
      dsObject.isChecked = true;

      elementPath?.classList.add("addBackground")
      elementPath?.classList.remove("darea")
      elementPath?.classList.add("addedBackground")
      this.choosenDs.push(dsId);
    } else {
      const index = this.choosenDs.indexOf(dsId, 0);
      if (index > -1) {
        // this.choosenDsElements?.splice(index, 1);
        this.choosenDs.splice(index, 1);
      }
      dsObject.isChecked = false;
      elementPath?.classList.remove("addBackground")
      elementPath?.classList.remove("addedBackground")
      elementPath?.classList.add("darea")
    }
  }


  getDistcitNumber(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const childId = clickedElement.id;
    let dist = childId.split('bp')[1]//getting the number--bp1, bp2...->1,2
    let checkDist = this.checkBoxds.find(cb => cb.reName.split('.')[0] === dist);

    // checkDist!.isChecked = !checkDist?.isChecked;

    if (!this.choosenDs.some(d => d === dist)) {
      clickedElement.classList.add("addBackground")
      clickedElement.classList.remove("darea")
      clickedElement.classList.add("addedBackground")
      checkDist!.isChecked = true;
      // this.choosenDsElements?.push(clickedElement);
      this.choosenDs.push(dist);
    } else {
      const index = this.choosenDs.indexOf(dist, 0);
      if (index > -1) {
        // this.choosenDsElements?.splice(index, 1);
        this.choosenDs.splice(index, 1);
      }
      checkDist!.isChecked = false;
      clickedElement.classList.remove("addBackground")
      clickedElement.classList.remove("addedBackground")
      clickedElement.classList.add("darea")

    }
  }

  removeDistrict(dist: string) {
    const index = this.choosenDs.indexOf(dist, 0);
    if (index > -1) {

      let element = this.choosenDsElements.find(e => e.id.split('bp')[1] === dist)
      element?.classList.remove("addBackground")
      element?.classList.remove("addedBackground")
      element?.classList.add("darea")




      this.choosenDs.splice(index, 1);
    }
  }

  addToast() {
    let a = {
      headline: "FirstHeadline",
      date: new Date(),
      toastMessage: "FirstMessage"
    }
    this.toastContents.push(a)
    console.log(this.toastContents);
  }

  removeToastParent(tc: ToastContent) {
    let toastIndex = this.toastContents.indexOf(tc);


    this.toastContents.splice(toastIndex, 1);

  }

  //*************************************************************** */
  ntm: ToastContent | null = null;
  toastStatus: string = "hide";
  bootstrap: any;
  testToast() {
    // this.ntm = {
    //   date: new Date(),
    //   headline: "HEADLINE",
    //   toastMessage: "MESSAGGE"
    // }
  }
}

export interface RealEstateDistrict {
  reName: string,
  isChecked: boolean
}