const { Builder, By, until, Browser } = require('selenium-webdriver');
const { strictEqual } = require('assert');

describe('ProductDescription', () => {
  let driver;

  jest.setTimeout(30000);

  beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:3000/product/19')// Producto de ejemplo
  });

  afterAll(async () => {
    await driver.quit();
  });

  const esperarLoader = async (selector, timeout = 10000) => {
    const elemento = await driver.wait(until.elementLocated(By.css(selector)), timeout);
    await driver.wait(until.elementIsVisible(elemento), timeout);
    return elemento;
  };

  it('Verifica la notificación después de añadir al carrito', async () => {
    try {
      await esperarLoader('.background-loader');

      const addToCartButton = await driver.wait(until.elementLocated(By.css('.add-to-car')), 5000);

      await addToCartButton.click();

      const notification = await esperarLoader('.notification-cart', 5000);
      const notificationText = await notification.getText();
      strictEqual(notificationText, 'Producto añadido al carrito');
    } catch (error) {
      console.log('Error al interactuar con el botón de agregar al carrito o la notificación:', error);
    }
  });
});
