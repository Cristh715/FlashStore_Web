# README - Web flash Store
## Propósito del proyecto
El propósito de proyecto, es realizar un ecommerce para una tienda de smartphones, tablets, accesorios, etc.
Este proyecto está construido con React para el frontend y Node.js con Express para el backend. Utiliza MySQL como base de datos para gestionar la información de los productos, usuarios y pedidos.

## Objetivo
Crear una plataforma funcional para la compra y venta de productos, asegurando la calidad mediante la integración de herramientas de construcción automática, análisis estático, pruebas unitarias, funcionales y de seguridad.

## Funcionalidades principales

## Integración con Jenkins:

### Construcción automática
**Herramienta/Framework:** React (frontend) y Node.js (backend)

#### Comandos:
```bash
npm install
npm run build
```

#### Integración con Jenkins:
```groovy
stage('Build') {
    parallel {
        stage('Frontend Build') {
            steps {
                dir('client') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
        stage('Backend Build') {
            steps {
                dir('server') {
                    bat 'npm install'
                }
            }
        }
    }
}
```

---

### Análisis estático
**Herramienta/Framework:** SonarQube - Sonar Scanner

#### Evidencia:
```bash
sonar-scanner -Dsonar.url=http://localhost:9000/ \
-Dsonar.login=squ_676343b0b6f1e9e1ee971e1da8b6c703b334b322 \
-Dsonar.projectKey=FlashStore \
-Dsonar.projectName=FlashStore \
-Dsonar.sources=.
```

#### Integración con Jenkins:
```groovy
stage('SonarQube Analysis ') {
    steps {
        bat "$SCANNER_HOME/bin/sonar-scanner -Dsonar.url=http://localhost:9000/ \
        -Dsonar.login=squ_676343b0b6f1e9e1ee971e1da8b6c703b334b322 \
        -Dsonar.projectKey=FlashStore \
        -Dsonar.projectName=FlashStore \
        -Dsonar.sources=. "
    }
}
```

---

### Pruebas unitarias
**Herramienta/Framework:** Jest para Node.js

#### Evidencia:
```javascript
  test('handleAgregarFavorito debe agregar un producto a favoritos', async () => {
    agregarFavorito.mockImplementation((usuario_id, producto_id, callback) => callback(null, { usuario_id, producto_id }));

    const req = { body: { usuario_id: 1, producto_id: 1 } };
    await handleAgregarFavorito(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Producto agregado a favoritos',
      results: { usuario_id: 1, producto_id: 1 }
    });
  });

```

#### Integración con Jenkins:
```groovy
stage('Run Unit Tests') {
    steps {
        script {
            dir('server') {
                bat 'npm test'
            }
        }
    }
}
```

---

### Pruebas funcionales
**Herramienta/Framework:** Selenium y Jest

#### Evidencia:
```javascript
describe('ProductDescription', () => {
  let driver;

  jest.setTimeout(15000);

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
```

#### Integración con Jenkins:
```groovy
stage('Run Functional Tests') {
    steps {
        script {
            dir('client') {
                bat 'npm test'
            }
        }
    }
}
```

---

