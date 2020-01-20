import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { ToolButton } from '../ToolButton';
import docs from './README.md';

export default { title: 'ToolButton', component: ToolButton, parameters: { info: docs } };

export const Basic = () => (
  <ToolButton disabled={boolean('disabled', false)} onClick={action('onClick')}>
    {text('children', '💥')}
  </ToolButton>
);
