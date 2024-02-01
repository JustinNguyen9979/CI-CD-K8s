import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello ReactJS With Docker!/i);
  expect(linkElement).toBeInTheDocument();
});
