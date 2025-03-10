import type { Preview } from '@storybook/react'
import "../src/assets/css/tailwind.css"
import "../src/assets/css/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;