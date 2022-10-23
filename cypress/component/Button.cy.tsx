import React from 'react';
import { Button } from '../../src';

describe('Button', () => {
  let count = 0;
  const btn = 'button';
  const primaryBtn = (
    <Button data-cy={btn} text='Submit' onClick={() => count++} />
  );

  describe('Primary button', () => {
    beforeEach(() => {
      cy.mount(primaryBtn);
    });

    it('mounts', () => {
      cy.dataCy(btn).should('have.text', 'Submit');
    });

    it('should be clickable', () => {
      cy.dataCy(btn)
        .click()
        .then(() => expect(count).to.equal(1));
    });
  });

  it('supports `selected` prop to set styles', () => {
    cy.mount(<Button data-cy={btn} text='View more' selected />);
    cy.document().then((doc) => {
      const turquoiseColor = window
        .getComputedStyle(doc.querySelector(btn))
        .getPropertyValue('--color-turquoise');
      const turquoiseRGB = turquoiseColor
        .split(' ')
        .filter((val) => val)
        .join(', ');
      cy.dataCy(btn)
        .should('have.css', 'background-color')
        .and('contains', turquoiseRGB);
    });
  });
});
