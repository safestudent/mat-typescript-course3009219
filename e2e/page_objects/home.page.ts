import { $, by, element } from "protractor";


export class HomePage{
    
    public addProductButton = $("a[tabindex='0']")


    /**
     * Find a product in the table
     * 
     * @param Product - this will be the product created by test data
     * @returns the product it finds in the table on the website
     */
    public productInTable = (product : myLib.Product ) => {
        return element(by.cssContainingText("td.mat-cell", product.name ))
    }

}