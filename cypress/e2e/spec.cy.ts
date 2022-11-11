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

      describe('Emoji', () => {
        it('should render span with the right role and aria-label attributes', () => {
          // given the Emoji Demo story renders
          cy.visit('/iframe.html?id=molecules-emoji--demo');

          // when viewing the Emoji
          const span = `[data-cy="emoji"]`;

          // then it should have the right HTML attributes
          cy.get(span)
            .should('have.attr', 'aria-label')
            .and('equals', 'woman detective: light skin tone');
          cy.get(span).should('have.attr', 'role').and('equals', 'img');
        });
      });
    });
  });
});
