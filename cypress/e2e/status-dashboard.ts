/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-status-dashboard`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the title`, () => {
    cy.get(`h1`).within(() => {
      cy.findByText(/status dashboard - lekoarts/i)
    })
  })
  it(`should render the description`, () => {
    cy.findByText(/showing the statuses of my netlify deploys & circleci tests./i)
  })
  it(`should render the info`, () => {
    cy.findByText(/circleci projects/i)
  })
  it(`should render the repository title`, () => {
    cy.findByText(/chakra-ui-advanced-components/i)
  })
  it.skip(`should render the circleci icon`, () => {
    cy.findByLabelText(/view gatsby-themes on circleci/i)
  })
  it(`should render the github icon`, () => {
    cy.findByLabelText(/view chakra-ui-advanced-components source on github/i)
  })
  it(`should render the netlify status badge`, () => {
    cy.findByAltText(/netlify deploy status of chakra-ui-advanced-components/i)
  })
  it.skip(`should render the circleci status badge`, () => {
    cy.findByAltText(/circleci status of gatsby-themes/i)
  })
  it(`should render the footer`, () => {
    cy.findByTestId(/footer/i).should(`have.text`, `LekoArts`)
  })
})
