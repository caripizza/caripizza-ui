import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      dataCy<E extends Node = HTMLElement>(value: string): Chainable<JQuery<E>>;
    }
  }
}
