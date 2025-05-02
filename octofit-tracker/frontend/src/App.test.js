import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OctoFit Tracker heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /OctoFit Tracker/i });
  expect(heading).toBeInTheDocument();
});
