describe("home page tests", () => {
  beforeEach("open application", () => {
    cy.visit("https://www.molecule.to/about-us");
  });

  it.only("tests social links", () => {
    const socialLinks = [
      "https://github.com/moleculeprotocol",
      "https://discord.com/invite/uAGW7K4hQU",
      "https://www.youtube.com/channel/UCWYW5ho3L_d0EO_a619E7RQ",
      "https://twitter.com/molecule_dao",
      "https://www.linkedin.com/company/molecule-protocol",
      "https://medium.com/molecule-blog",
      "https://app.dework.xyz/molecule",
    ];

    socialLinks.forEach((link, i) => {
      cy.get(".social-item a").eq(i).should("have.attr", "href", link);
    });
  });
});
