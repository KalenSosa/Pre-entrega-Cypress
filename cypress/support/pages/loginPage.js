export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.contraseñaInput = '#pass';
        this.loginButton = '#submitForm'; 
        this.registerToggle = '//*[@id="registertoggle"]'; 
    }

    escribirUsuario(usuario) {
        cy.get(this.userInput).type(usuario);
    }

    escribirContraseña(contraseña) {
        cy.get(this.contraseñaInput).type(contraseña);
    }

    clickBotonLogin() { 
        cy.get(this.loginButton).click();
    }

    ClickRegisterToggle() { 
        cy.xpath(this.registerToggle).dblclick({ force: true });
    }
}