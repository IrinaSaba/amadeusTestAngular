import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle : string = 'Product list'
  imageWidth: number = 50
  imageMargin: number = 2
  showImage: boolean = true
  listFilter: string = 'name'
  products : IProduct[] = [
    {
      "name": 'qsjfgsfjhlfjh',
      "target": "Leaf Rake",
      "bodyPart": "GDN-0011",
      "equipment": "March 19, 2021",
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "name": 'qsjfgsfjhlfjh',
      "target": "Garden Cart",
      "bodyPart": "GDN-0023",
      "equipment": "March 18, 2021",
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "name": 'qsjfgsfjhlfjh',
      "target": "Hammer",
      "bodyPart": "TBX-0048",
      "equipment": "May 21, 2021",
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "name": 'qsjfgsfjhlfjh',
      "target": "Saw",
      "bodyPart": "TBX-0022",
      "equipment": "May 15, 2021",
      "imageUrl": "assets/images/saw.png"
    },
    {
      "name": 'qsjfgsfjhlfjh',
      "target": "Video Game Controller",
      "bodyPart": "GMG-0042",
      "equipment": "OctoberEquipment",
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ]; 
    toggleImage() : void {
      this.showImage = !this.showImage
    }
  constructor() { }

  ngOnInit(): void {
  }

}
