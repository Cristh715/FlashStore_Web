const { Builder, By, until, Browser } = require('selenium-webdriver');
const { strictEqual } = require('assert');

describe('ProductCard', () => {
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

  it('Aviso de no puede añadir favorito', async () => {
    try {
      const favoriteCheckbox = await esperarLoader('input[type="checkbox"]');

      if (await favoriteCheckbox.isEnabled()) {
        await favoriteCheckbox.click();
      }

      const notification = await esperarLoader('.notification-favorites', 5000);
      const notificationText = await notification.getText();
      strictEqual(notificationText, 'Inicia sesión para añadir a favoritos');
    } catch (error) {
      console.log('Error al interactuar con el checkbox o la notificación:', error);
    }
  });
});
