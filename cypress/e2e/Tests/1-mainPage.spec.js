describe("home page tests", () => {
  beforeEach("open application", () => {
    cy.visit("https://www.molecule.to/");
  });

  it("tests nav links", () => {
    //cy.get(".nav-container a").eq(0).should("have.attr", "href", "/");

    const links = [
      "/about-us",
      "/blog",
      "https://docs.molecule.to/",
      "https://moleculeto.notion.site/moleculeto/Open-roles-Molecule-a04512c367904c4599d046638f55bee4",
      "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@molecule.to",
      "https://discover.molecule.to/",
    ];

    links.forEach((link, i) => {
      cy.get(".mobile-top-links a").eq(i).should("have.attr", "href", link);
      //.and("be.visible");
    });

    cy.get(".nav-container a")
      .last()
      .should("have.css", "background-color", "rgb(1, 33, 58)");
  });

  it("tests home page", () => {
    cy.get("h1").should("be.visible").and("contain", "The future of medicine");

    cy.get(".banner-btns-container a")
      .eq(0)
      .should("be.visible")
      .and("have.attr", "href", "https://discover.molecule.to/");
    cy.get(".banner-btns-container a")
      .eq(1)
      .should("be.visible")
      .and("have.attr", "href", "https://discord.com/invite/uAGW7K4hQU");
  });
});
