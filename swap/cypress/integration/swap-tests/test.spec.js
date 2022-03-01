import kortA from "../../fixtures/kortA.json";

describe("SWAP", () => {
	it("should be able to create a new post", () => {
		cy.visit("localhost:3000");
		cy.viewport(1201, 800);

		cy.createNewPost(
			kortA.title,
			kortA.description,
			kortA.price,
			kortA.date,
			kortA.event,
			kortA.isBuying,
			kortA.location,
			kortA.venue
		);

		/*
		cy.verifyPostExist(
			kortA.title,
			kortA.description,
			kortA.price,
			kortA.date,
			kortA.event,
			kortA.isBuying,
			kortA.location,
			kortA.venue
		);
		*/

		// TODO delete the item
		//cy.deleteItem(item);
		//cy.contains(item.name).should("not.exist");
	});

	it("should be able to search for items", () => {
		cy.viewport(1201, 800);

		/*
		cy.createItem(prodA.name, 0);
		cy.editItem(prodA);

		cy.createItem(prodB.name, 0);
		cy.editItem(prodB);

		cy.get("#searchField").type(prodA.name);
		cy.get("#itemList").children().should("contain.text", prodA.name);
		cy.get("#itemList").children().should("not.contain.text", prodB.name);

		cy.get("#searchField").clear().type(prodB.name);
		cy.get("#itemList").children().should("not.contain.text", prodA.name);
		cy.get("#itemList").children().should("contain.text", prodB.name);

		cy.get("#searchField").clear().type(prodA.name);
		cy.deleteItemByName(prodA.name);
		cy.get("#searchField").clear().type(prodB.name);
		cy.deleteItemByName(prodB.name);
		*/
	});
});
