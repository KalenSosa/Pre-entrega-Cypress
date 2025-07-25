export class ShoppingCartPage {
    constructor() {
        this.productoNombreCarrito = '#productName';     
        this.productoPrecioCarrito = '#unitPrice';         
        this.productoCantidadCarrito = '#productAmount';   
        this.clickPrecioTotal = 'button:contains("Show total price")'; 
        this.verificarPrecioTotal = '#price';               
    }

   verificarProductoYPrecio(nombreProducto, precioProducto) {
    cy.contains('[data-cy="productName"]', nombreProducto).parents('.css-1bhbsny').find('[data-cy="unitPrice"]').should('contain.text', precioProducto);
  }
    

   verificarCantidadProducto(nombreProducto, cantidadEsperada) {
    cy.contains('[data-cy="productName"]', nombreProducto).parents('.css-1bhbsny').find('[data-cy="productAmount"]').should('have.text', cantidadEsperada);
  }

  verificarTotalProducto(nombreProducto, totalEsperado) {
  cy.contains('[data-cy="productName"]', nombreProducto).parents('.css-1bhbsny').find('[data-cy="totalPrice"]').should('contain.text', totalEsperado);
}

    clickTotalPrice() {
        cy.get(this.clickPrecioTotal).click();
    }

    verificarPrecioTotalAcumulado(precioTotal) {
        cy.get(this.verificarPrecioTotal).should('have.text', precioTotal);
    }
}