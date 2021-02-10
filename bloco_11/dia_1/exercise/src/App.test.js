import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const taskJavaScript = screen.getByText(/JavaScript/i);
  expect(taskJavaScript).toBeInTheDocument();

  const taskReact = screen.getByText(/React/i);
  expect(taskReact).toBeInTheDocument();

  const taskJest = screen.getByText(/Jest/i);
  expect(taskJest).toBeInTheDocument();
});
