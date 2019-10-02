import { element, by } from "protractor"

export class ViewProductPage {

    public productName = (product: myLib.Product) => {
        return element(by.cssContainingText("h2", product.name))
    }


}