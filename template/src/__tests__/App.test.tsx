import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

test('renders logo', () => {
  render(<App />);
  const logo = screen.getByRole('img', { name: 'logo' });
  expect(logo).toBeInTheDocument();
});
