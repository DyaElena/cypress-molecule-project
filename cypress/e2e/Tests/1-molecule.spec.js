describe("home page tests", () => {
  beforeEach("open application", () => {
    cy.visit("https://www.molecule.to/");
  });

  it("nav tests", () => {
    cy.get(".nav-container a").eq(0).should("have.attr", "href", "/");

    const links = [
      "About Us",
      "Blog",
      "Documentation",
      "Careers",
      "Contact",
      "Launch Marketplace",
    ];

    links.forEach((link) => {
      cy.get(".main-menu-container").should("contain", link);
    });
  });
});
