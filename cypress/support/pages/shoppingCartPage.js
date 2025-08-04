export class ShoppingCartPage {
  constructor() {
    this.productoNombreCarrito = '[data-cy="productName"]';
    this.productoPrecioCarrito = '[data-cy="unitPrice"]';
    this.productoCantidadCarrito = '[data-cy="productAmount"]';
    this.productoTotalCarrito = '[data-cy="totalPrice"]';
    this.botonMostrarPrecioTotal = 'button:contains("Show total price")';
    this.precioTotal = '#price';
  }

  obtenerProductoYPrecio(nombreProducto) {
    return cy.contains(this.productoNombreCarrito, nombreProducto).parents('.css-1bhbsny').find(this.productoPrecioCarrito);
  }

  obtenerCantidadProducto(nombreProducto) {
    return cy.contains(this.productoNombreCarrito, nombreProducto).parents('.css-1bhbsny').find(this.productoCantidadCarrito);
  }

  obtenerTotalProducto(nombreProducto) {
    return cy.contains(this.productoNombreCarrito, nombreProducto).parents('.css-1bhbsny').find(this.productoTotalCarrito);
  }

  clickTotalPrice() {
    cy.get(this.botonMostrarPrecioTotal).click();
  }

  obtenerPrecioTotalAcumulado() {
    return cy.get(this.precioTotal);
  }
}