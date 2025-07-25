import { LoginPage } from "../support/pages/loginPage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

describe('pre entrega', () => {

    let productos;
    let login;
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new ShoppingCartPage();

    before(() => {
        cy.fixture('login').then((datosLogin) => {
            login = datosLogin;
        });

        cy.fixture('productos').then((datosProductos) => {
            productos = datosProductos;
        });
    });

    beforeEach(() => {
        cy.visit('/');
        loginPage.ClickRegisterToggle(); 
        loginPage.escribirUsuario(login.Login.usuario); 
        loginPage.escribirContraseña(login.Login.clave); 
        loginPage.clickBotonLogin(); 
    });
    
    it('Se agregan productos, se validan datos y verifica total', () => {

        //modulo "Online Shop"
        productsPage.clickOnlineShopLink();

        // Elegir 2 productos y añadirlos al carrito. 
        productsPage.agregarProducto(productos.producto1.nombre); 
        productsPage.verificarProductoAgregadoModal(productos.producto1.nombre);
        productsPage.cerrarModalProductoAgregado(); 

        productsPage.agregarProducto(productos.producto2.nombre); 
        productsPage.verificarProductoAgregadoModal(productos.producto2.nombre);
        productsPage.cerrarModalProductoAgregado(); 

        productsPage.clickShoppingCart(); 

        // Verificar cantidad, nombre y precio de los dos productos en el carrito.
        cartPage.verificarCantidadProducto(productos.producto1.nombre, '1'); 
        cartPage.verificarProductoYPrecio(productos.producto1.nombre, productos.producto1.precio); 
        cartPage.verificarTotalProducto(productos.producto1.nombre, productos.producto1.precio);
        
        cartPage.verificarCantidadProducto(productos.producto2.nombre, '1'); 
        cartPage.verificarProductoYPrecio(productos.producto2.nombre, productos.producto2.precio);
        cartPage.verificarTotalProducto(productos.producto2.nombre, productos.producto2.precio);

        // Hacer click en "Show total price" y verificar el precio acumulado de los 2 productos 
        const totalEsperado = (Number(productos.producto1.precio) + Number(productos.producto2.precio)).toFixed(2);
        cartPage.clickTotalPrice();
        cartPage.verificarPrecioTotalAcumulado(totalEsperado);

    });

});