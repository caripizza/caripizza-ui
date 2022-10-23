describe('component library', () => {
  describe('base for development', () => {
    it('starts up', () => {
      cy.visit('/');
    });
  });

  describe('components', () => {
    const element = 'primary-btn';

    describe('molecules', () => {
      describe('Button', () => {
        it('should render clickable Button with focus styles', () => {
          // given the Primary story renders
          cy.visit('/iframe.html?args=&id=molecules-button--primary');

          // when clicking the Button
          const btn = `[data-cy="${element}"]`;
          cy.get(btn).click();

          // then it should have focus styles
          cy.get(btn)
            .should('have.css', 'background-color')
            .and('equals', 'rgba(0, 176, 201, 0.75)'); // turquoise-75
          cy.get(btn)
            .should('have.css', 'border-color')
            .and('equals', 'rgb(37, 99, 235)'); // blue-600
        });
      });
    });
  });
});
