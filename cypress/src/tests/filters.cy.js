/// <reference types="cypress" />

import { HomePage } from '../PO/pages/home.page';
import { filterScenarios } from '../test-data/testData';

context('Tool shop filters', () => {
  const homePage = new HomePage();
  beforeEach(() => {
    cy.viewport(1280, 720)
    homePage.open();
  })

  it('should order items by name asc', () => {

    homePage.filter.sortFilter.select(filterScenarios[0].filter)
    homePage.products.getAllNames().then(names => {
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).to.deep.equal(sortedNames);
    })

  })

  it('should order items by name desc', () => {

    homePage.filter.sortFilter.select(filterScenarios[1].filter)
    homePage.products.getAllNames().then(names => {
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b)).reverse();
      expect(names).to.deep.equal(sortedNames);

    })
  })

  it('should order items by price asc', () => {

    homePage.filter.sortFilter.select(filterScenarios[2].filter)
    homePage.products.getAllPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    })
  })

  it('should order items by price desc', () => {

    homePage.filter.sortFilter.select(filterScenarios[3].filter)
    homePage.products.getAllPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    })
  })

  it('should order items by co2 asc', () => {

    homePage.filter.sortFilter.select(filterScenarios[4].filter)
    homePage.products.getAllCo2().then(co2 => {
      const sortedCo2 = [...co2].sort((a, b) => a.localeCompare(b));
      expect(co2).to.deep.equal(sortedCo2);
    })
  })

  it('should order items by co2 desc', () => {

    homePage.filter.sortFilter.select(filterScenarios[5].filter)
    homePage.products.getAllCo2().then(co2 => {
      const sortedCo2 = [...co2].sort((a, b) => a.localeCompare(b)).reverse();
      expect(co2).to.deep.equal(sortedCo2);
    })
  })

})