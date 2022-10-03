import { black, white } from 'tailwindcss/colors';
import '../dist/output.css';

export const parameters = {
  layout: 'centered',
  backgrounds: {
    disable: true
  },
  themes: {
    clearable: false,
    list: [
        {
          name: 'Light mode',
          class: [],
          color: white,
          default: true
        },
        {
          name: 'Dark mode',
          class: ['dark'],
          color: black,
        }
    ]
  }
};
