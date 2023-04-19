describe('badge component contain number', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-badge--badge&args=badgeContent:20'));
  it('badge contain badgeContent', () => {
    cy.get('[data-cy="badge-component"]').should('contain', '20');
  });
});

describe('badge component with red color', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-badge--badge&args=color:red'));
  it('red badge', () => {
    cy.get('[data-cy="badge-component"]').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
