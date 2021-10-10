import de from "../../src/locales/de/translation.json";
import en from "../../src/locales/en/translation.json";

describe('Localization', () => {
  // Header data,x days ago,x days ahead,Tabs text should be shown in german
  it('click on german button', () => {
    cy.visit('/');
    cy.get("header .switch").click();
    cy.contains(de["Manage Campaigns"]);
    cy.contains(de["Live Campaigns"]);
    cy.contains(de["Upcoming Campaigns"]);
    cy.contains(de["Past Campaigns"]);
  });
})

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

describe('Campaign Date change', () => {
  it("Change old campaign date", () => {
    const currentDate = new Date();

    cy.visit("/");
    // initially no live campaigns
    // cy.contains(en["No Live Campaigns Found"]);

    // Go to past campaigns tab
    cy.contains(en["Past Campaigns"]).click();

    // select the first past campaign
    cy.get("table tbody tr td:nth-child(2) p").first().then(($firstCampaign) => {
      const firstCampaignText = $firstCampaign.text();

      // Schedule again the first
      cy.get("table tbody tr").first().contains(en["Schedule Again"]).click();
      cy.get(".react-calendar__navigation__label")
        .click() // go to year
        .click() // go to decade
        .click() // go to century

      // Select Today's Date
      cy.get(".react-calendar")
        .contains("2021 – 2030")
        .click();
      cy.get(".react-calendar__viewContainer")
        .contains(currentDate.getFullYear())
        .click();
      cy.get(".react-calendar__viewContainer")
        .contains(MONTHS[currentDate.getMonth()])
        .click();
      cy.get(".react-calendar__viewContainer")
        .contains(currentDate.getDate())
        .click();

      // Go to Live Campaigns
      cy.contains(en["Live Campaigns"]).click();
      
      // Select the first live campaign
      cy.get("table tbody tr td:nth-child(2) p").first().then(($firstLiveCampaign) => {
        const firstLiveCampaignText = $firstLiveCampaign.text();

        expect(firstLiveCampaignText).eq(firstCampaignText);
      });
    });
  })
});
