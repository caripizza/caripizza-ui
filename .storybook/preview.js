import { black, white } from 'tailwindcss/colors';
import { initializeRTL } from 'storybook-addon-rtl';
import '../dist/output.css';

initializeRTL();

export const parameters = {
  layout: 'padded',
  backgrounds: {
    disable: true
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  },
  backgrounds: {
    default: 'light gray',
    values: [
      {
        name: 'light gray',
        value: '#eef2f2',
      },
      {
        name: 'medium gray',
        value: '#e1e4e4',
      },
      {
        name: 'dark gray',
        value: '#afb2b2',
      },
    ],
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
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Atoms',
        'Theme',
          ['Dark mode'],
        'Molecules',
          ['Button']
      ],
    },
  },
};
