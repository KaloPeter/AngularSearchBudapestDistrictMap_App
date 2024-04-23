import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild("bpDistricts") parentRef: undefined | ElementRef<HTMLElement>;

  choosenDs: string[] = [];
  choosenDsElements: HTMLElement[] = [];


  ngOnInit(): void {

  }



  getDistcitNumber(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const childId = clickedElement.id;
    let dist = childId.split('bp')[1]

    if (!this.choosenDs.some(d => d === dist)) {

      clickedElement.classList.add("addBackground")
      clickedElement.classList.remove("darea")
      clickedElement.classList.add("addedBackground")

      this.choosenDsElements?.push(clickedElement);
      this.choosenDs.push(dist);
    } else {
      const index = this.choosenDs.indexOf(dist, 0);
      if (index > -1) {
        this.choosenDsElements?.splice(index, 1);
        this.choosenDs.splice(index, 1);
      }
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

}
