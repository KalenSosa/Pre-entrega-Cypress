import { LoginPage } from "../support/pages/loginPage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

describe("pre entrega", () => {
  let productos;
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new ShoppingCartPage();

  before(() => {
    cy.fixture("productos").then((datosProductos) => {
      productos = datosProductos;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    loginPage.ClickRegisterToggle();
    loginPage.escribirUsuario(Cypress.env("usuario"));
    loginPage.escribirContraseña(Cypress.env("contraseña"));
    loginPage.clickBotonLogin();
  });

  it("Se agregan productos, se validan datos y verifica total", () => {
    //modulo "Online Shop"
    productsPage.clickOnlineShopLink();

    // Elegir 2 productos y añadirlos al carrito.

    // Producto 1 (2 unidades)
    productsPage.agregarProducto(productos.producto1.nombre);
    productsPage.obtenerModalProductoAgregado()
      .should("be.visible").and("contain.text",`${productos.producto1.nombre} has been added to the shopping cart`);
    productsPage.cerrarModalProductoAgregado();

    productsPage.agregarProducto(productos.producto1.nombre);
    productsPage.obtenerModalProductoAgregado()
      .should("be.visible").and("contain.text",`${productos.producto1.nombre} has been added to the shopping cart`);
    productsPage.cerrarModalProductoAgregado();

    cy.get(productsPage.modalProductoAgregado).should("not.exist");

    // Producto 2 (2 unidades)
    productsPage.agregarProducto(productos.producto2.nombre);
    productsPage.obtenerModalProductoAgregado()
      .should("be.visible").and("contain.text",`${productos.producto2.nombre} has been added to the shopping cart`);
    productsPage.cerrarModalProductoAgregado();

    productsPage.agregarProducto(productos.producto2.nombre);
    productsPage.obtenerModalProductoAgregado()
      .should("be.visible").and("contain.text",`${productos.producto2.nombre} has been added to the shopping cart`);
    productsPage.cerrarModalProductoAgregado();
    
    cy.get(productsPage.modalProductoAgregado).should("not.exist");

    //Ir al carrito de compras
    productsPage.clickShoppingCart();

    // Verificar cantidad, nombre y precio de los dos productos en el carrito.
    cartPage.obtenerCantidadProducto(productos.producto1.nombre).should("have.text", "2");
    cartPage.obtenerCantidadProducto(productos.producto2.nombre).should("have.text", "2");

    // Hacer click en "Show total price" y verificar el precio acumulado de los productos

    const totalEsperado =
      (productos.producto1.precio * productos.producto1.quantity +
       productos.producto2.precio * productos.producto2.quantity) /100;

     cartPage.clickTotalPrice();
     cartPage.obtenerPrecioTotalAcumulado().should("have.text", totalEsperado.toFixed(2));
  });
});
