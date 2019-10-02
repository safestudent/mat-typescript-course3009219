import { Given, When, Then } from "cucumber";

import { HomePage } from '../page_objects/home.page'
import { ViewProductPage } from '../page_objects/view-product.page'
import { AddProductPage } from '../page_objects/add-product.page'

const homePage: HomePage = new HomePage();
const viewProductPage: ViewProductPage = new ViewProductPage();
const addProductPage: AddProductPage = new AddProductPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given('a product doesn\'t exist', function (dataTable) {

  const arrayOfProducts = dataTable.hashes();
  this.product = arrayOfProducts[0];

  return expect(homePage.productInTable(this.product).isPresent()).to.eventually.be.false;
    
  });

When('I add the product', function () {
    
  homePage.addProductButton.click();
  addProductPage.productNameField.sendKeys(this.product.name);
  addProductPage.productDescriptionField.sendKeys(this.product.description);
  addProductPage.productPriceField.sendKeys(this.product.price);
  return addProductPage.addProductButton.click();

  });

Then('the product is created', function () {

  return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;

});