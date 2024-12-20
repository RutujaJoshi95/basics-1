import { Component } from "@angular/core";
import { Iproduct } from "../../models/project";




@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]

})
export class ProductComponent {
    productComapany : string = "SAMSUNG";

    proArr : Array<Iproduct> = [

        {
            productName :  "Samsung Galaxy S23",
            productId : "SM-S911B"
        },
        {
            productName :  "Samsung Galaxy Z Fold 5",
            productId : "SM-F946B"
        },
        {
            productName :  "Galaxy A14",
            productId : "SM-A145F"
        },
        {
            productName :  "Samsung Galaxy Note 20 Ultra",
            productId : "SM-N986B"
        },
        {
            productName :  "Samsung Galaxy Z Flip 5",
            productId : "SM-F731B"
        },
    ]
    productComapany1 : string = "MOTOROLA";

    proArr1 : Array<Iproduct> = [

        {
            productName :  "Motorola Edge 40",
            productId : "XT2303-1"
        },
        {
            productName :  "Motorola Moto G Power",
            productId : "XT2313-1"
        },
        {
            productName :  "Motorola Moto Edge 30 Pro",
            productId : "XT2201-1 "
        },
        {
            productName :  " Motorola Moto G52 ",
            productId : "XT2223-1 "
        },
        {
            productName :  "Motorola Razr",
            productId : "XT2321-1"
        },
    ]
}
