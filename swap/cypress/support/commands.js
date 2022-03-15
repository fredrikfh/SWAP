// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import cy from "date-fns/esm/locale/cy/index.js";

// import { cy } from "date-fns/locale";

// LOGIN
Cypress.Commands.add("login", () => {
	cy.visit("http://localhost:3000/login");
	cy.get('input[name="email"]').type("cypresstest@mail.com");
	cy.get('input[name="password"]').type("password123");
	cy.get("#loginButton").click();

	//cy.get("#").type(username);
	//cy.get("#").type(password);
	//cy.get("#loginButton").click();
	//cy.get("#logoutButton").should("be.visible");
});

// REGISTER
Cypress.Commands.add("register", () => {
	cy.request({
		method: "POST",
		url: "localhost:<PORT>/register",
		body: {
			username: "test@swap.no",
			password: "password",
		},
	});
});

Cypress.Commands.add(
	"createNewPost",
	(title, description, price, date, event, isBuying, location, venue) => {
		cy.get("#addItemButton").click();

		if (!isBuying) {
			cy.get("#addItemRadioSell").click();
			cy.get("#addItemPrice").type(price);
		}

		cy.get("#addItemTitle").type(title);
		cy.get("#addItemDescription").type(description);
		cy.get("#addItemDate").type(date);
		cy.get("#addItemEvent").type(event + "{enter}");
		cy.get("#addItemLocation").type(location);
		cy.get("#addItemVenue").type(venue);
		cy.get("#addItemCreate").click();
	}
);

Cypress.Commands.add(
	"verifyPostExist",
	(title, description, price, date, event, isBuying, location, venue) => {
		cy.contains(title);
		cy.contains(description);
		cy.contains(price);
		cy.contains(date);
		cy.contains(event);
		cy.contains(location);
		cy.contains(venue);
		if (!isBuying) {
			cy.contains("Til salgs");
		} else {
			cy.contains("Ønskes kjøpt");
		}
	}
);
