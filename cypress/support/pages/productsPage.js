export class ProductsPage {
    constructor() {
        this.onlineShopLink = '#onlineshoplink'; 
        this.cerrarModalBoton = '#closeModal'; 
        this.productoNombretexto = 'p'; //Lo puse para validar el parrafo donde esta el nombre del producto porque me daba error
        this.productoAgregadodModal = '.chakra-modal__content.css-pv22qu'; 
        this.ShoppingCartBoton = '/html/body/div[1]/div/div[2]/div[3]/div/div[2]/button'; 
    }

    clickOnlineShopLink() { 
        cy.get(this.onlineShopLink).click();
    }

    agregarProducto(nombreProducto) {
        cy.contains(this.productoNombretexto, nombreProducto).parent('div.css-4t9hm0').find('button[aria-label="Add to cart"]').click(); 
    }

    verificarProductoAgregadoModal(nombreProducto) { 
        cy.get(this.productoAgregadodModal).should('be.visible').and('contain.text', `${nombreProducto} has been added to the shopping cart`);
    }

    cerrarModalProductoAgregado() { 
        cy.get(this.cerrarModalBoton).click();
    }

    clickShoppingCart() { 
        cy.xpath(this.ShoppingCartBoton).click();
    }
}