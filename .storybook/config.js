import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/ionic.js');
}

configure(loadStories, module);
