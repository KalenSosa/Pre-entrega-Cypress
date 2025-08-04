export class ProductsPage {
  constructor() {
    this.onlineShopLink = '#onlineshoplink';
    this.cerrarModalBoton = '#closeModal';
    this.productoNombreTexto = 'p';
    this.modalProductoAgregado = '.chakra-modal__content.css-pv22qu';
    this.botonShoppingCart = '/html/body/div[1]/div/div[2]/div[3]/div/div[2]/button';
  }

  clickOnlineShopLink() {
    cy.get(this.onlineShopLink).click();
  }

  agregarProducto(nombreProducto) {
    cy.contains(this.productoNombreTexto, nombreProducto).parent('div.css-4t9hm0').find('button[aria-label="Add to cart"]').click();
  }

  obtenerModalProductoAgregado() {
    return cy.get(this.modalProductoAgregado);
  }

  cerrarModalProductoAgregado() {
    cy.get(this.cerrarModalBoton).click();
  }

  clickShoppingCart() {
    cy.xpath(this.botonShoppingCart).click();
  }
}
