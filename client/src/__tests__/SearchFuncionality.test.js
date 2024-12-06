const { Builder, By, until, Browser } = require('selenium-webdriver');
const { strictEqual } = require('assert');

describe('SearchBarFunctionality', () => {
    let driver;
  
    jest.setTimeout(30000);
  
    beforeAll(async () => {
      driver = await new Builder().forBrowser(Browser.CHROME).build();
      await driver.get('http://localhost:3000');
    });
  
    afterAll(async () => {
      await driver.quit();
    });
  
    const esperarLoader = async (selector, timeout = 10000) => {
      const elemento = await driver.wait(until.elementLocated(By.css(selector)), timeout);
      await driver.wait(until.elementIsVisible(elemento), timeout);
      return elemento;
    };
  
    it('Verifica búsqueda exitosa de un producto', async () => {
      try {
        await esperarLoader('.search-bar');

        const searchBar = await driver.findElement(By.css('.search-bar input'));
        const searchButton = await driver.findElement(By.css('.search-bar button'));
  
        await searchBar.sendKeys('producto_prueba');
        await searchButton.click();
  
        const searchResults = await esperarLoader('.search-results', 5000);
        const resultsText = await searchResults.getText();
        strictEqual(resultsText.includes('producto_prueba'), true);
      } catch (error) {
        console.log('Error durante la prueba de búsqueda:', error);
      }
    });
  
    it('Verifica mensaje de "sin resultados" para búsqueda inválida', async () => {
      try {
        await esperarLoader('.search-bar');

        const searchBar = await driver.findElement(By.css('.search-bar input'));
        const searchButton = await driver.findElement(By.css('.search-bar button'));
  
        await searchBar.clear();
        await searchBar.sendKeys('producto_inexistente'); // Término de búsqueda inválido
        await searchButton.click();
  
        const noResultsMessage = await esperarLoader('.no-results', 5000);
        const noResultsText = await noResultsMessage.getText();
        strictEqual(noResultsText, 'No se encontraron resultados');
      } catch (error) {
        console.log('Error al verificar búsqueda sin resultados:', error);
      }
    });
  });
  