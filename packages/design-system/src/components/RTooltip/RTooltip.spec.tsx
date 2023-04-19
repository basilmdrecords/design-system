import React from 'react';
import { render } from '@testing-library/react';

import RTooltip from './RTooltip';

describe('RTooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RTooltip/>);
    expect(baseElement).toBeTruthy();
  });
});