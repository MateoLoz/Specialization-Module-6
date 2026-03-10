/// <reference types="cypress" />

import { HomePage } from '../PO/pages/home.page';

context('Tool shop filters', () => {
  const homePage = new HomePage();
  beforeEach(() => {
    homePage.open();
  })

  it('should order items by name asc', () => {

    homePage.filter.sortByValue('name,asc')
    const names = homePage.products.getAllNames();
    const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).to.deep.equal(sortedNames);

  })

  it('should order items by name desc', () => {

    homePage.filter.sortByValue('name,desc')
    const names = homePage.products.getAllNames();
    const sortedNames = [...names].sort((a, b) => a.localeCompare(b)).reverse();
    expect(names).to.deep.equal(sortedNames);
  })

  it('should order items by price asc', () => {

    homePage.filter.sortByValue('name,asc')
    const prices = homePage.products.getAllPrices();
    const sortedprices = [...prices].sort((a, b) => a.localeCompare(b));
    expect(prices).to.deep.equal(sortedprices)
  })

  it('should order items by price desc', () => {

    homePage.filter.sortByValue('name,asc')
    const prices = homePage.products.getAllPrices();
    const sortedprices = [...prices].sort((a, b) => a.localeCompare(b)).reverse();
    expect(prices).to.deep.equal(sortedprices)

  })

  it('should order items by co2 asc', () => {

    homePage.filter.sortByValue('co2_rating,asc')
    const co2 = homePage.products.getAllCo2();
    const sortedco2 = [...co2].sort((a, b) => a.localeCompare(b));
    expect(co2).to.deep.equal(sortedco2)

  })

  it('should order items by co2 desc', () => {

    homePage.filter.sortByValue('co2_rating,asc')
    const co2 = homePage.products.getAllCo2();
    const sortedco2 = [...co2].sort((a, b) => a.localeCompare(b)).reverse();
    expect(co2).to.deep.equal(sortedco2)

  })

})