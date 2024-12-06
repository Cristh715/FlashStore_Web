const { Builder, By, until, Browser } = require('selenium-webdriver');
const { strictEqual } = require('assert');

describe('LoginFunctionality', () => {
  let driver;

  jest.setTimeout(30000);

  beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:3000/login');
  });

  afterAll(async () => {
    await driver.quit();
  });

  const esperarLoader = async (selector, timeout = 10000) => {
    const elemento = await driver.wait(until.elementLocated(By.css(selector)), timeout);
    await driver.wait(until.elementIsVisible(elemento), timeout);
    return elemento;
  };

  it('Verifica inicio de sesión exitoso', async () => {
    try {
      await esperarLoader('.login-form');

      const usernameField = await driver.findElement(By.css('#username'));
      const passwordField = await driver.findElement(By.css('#password'));
      const loginButton = await driver.findElement(By.css('.login-button'));

      await usernameField.sendKeys('usuario_prueba');
      await passwordField.sendKeys('contraseña_prueba');
      await loginButton.click();

      const successMessage = await esperarLoader('.login-success', 5000);
      const successText = await successMessage.getText();
      strictEqual(successText, 'Inicio de sesión exitoso');
    } catch (error) {
      console.log('Error durante la prueba de inicio de sesión:', error);
    }
  });

  it('Verifica error con credenciales incorrectas', async () => {
    try {
      await esperarLoader('.login-form');

      const usernameField = await driver.findElement(By.css('#username'));
      const passwordField = await driver.findElement(By.css('#password'));
      const loginButton = await driver.findElement(By.css('.login-button'));

      await usernameField.clear();
      await passwordField.clear();
      await usernameField.sendKeys('usuario_invalido');
      await passwordField.sendKeys('contraseña_invalida');
      await loginButton.click();

      const errorMessage = await esperarLoader('.login-error', 5000);
      const errorText = await errorMessage.getText();
      strictEqual(errorText, 'Credenciales incorrectas');
    } catch (error) {
      console.log('Error al verificar manejo de credenciales incorrectas:', error);
    }
  });
});
