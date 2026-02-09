const selectors = require("../fixtures/selectors.json");
const websiteData = require("../fixtures/websiteData.json");
const loginData = require("../fixtures/loginData.json");


describe("7.7.1 Correct display of the main page", () => {

	beforeEach(() => {

		cy.visit("/");
	})

	it('Displaying the name "Идёмвкино"', () => {

		cy.get(selectors.title).should("have.text", websiteData.title);
	});

	it("Should show correct number of days", () => {
		cy.get(selectors.calendar).should("have.length", websiteData.weekLength);
	});

	it("Should show correct number of films", () => {
		cy.get(selectors.movies).should("have.length", websiteData.moviesCount);
	});

})

// describe("7.7.2 Login admin page", () => {

// 	beforeEach(() => {

// 		cy.visit("/admin");
// 	})
// 	it("Should successfully login", () => {
// 		cy.login(loginData.validEmail, loginData.validPass);
// 		cy.contains(websiteData.titleAdmin).should("be.visible");
// 	});

// 	it("Should unsuccessfully login", () => {
// 		cy.login(loginData.invalidEmail, loginData.invalidPass);
// 		cy.contains(websiteData.errorAuthorizations).should("be.visible");
// 	});

// })

// describe("7.7.3 booking a movie with admin data", () => {
// 	beforeEach(() => {
// 		cy.visit("/admin");
// 	})


// 	it("Booking a movie with admin data", () => {
// 		cy.login(loginData.validEmail, loginData.validPass);
// 		cy.contains(websiteData.titleAdmin).should("be.visible");

// 		cy.get(selectors.movie_title).then(($el) => $el.textContent).should("contains.text", "Ведьмак");
// 		cy.get(selectors.movie_title).invoke('text').then((text) => {
// 			cy.visit("http://qamid.tmweb.ru");

// 			cy.get(selectors.days).click();
// 			cy.get(selectors.movie_card).contains(text);
// 			cy.get(selectors.movies).contains("20:00").click();
// 			const seats = require("../fixtures/seats.json");
// 			seats.forEach(seat => {
// 				cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
// 			});
// 			cy.get(selectors.button).click();
// 			cy.contains("Вы выбрали билеты:").should('be.visible');
		// })

	// });
// });