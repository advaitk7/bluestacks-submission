import { render, screen, fireEvent, act } from './test-utils';
import App from './App';

test('renders App', () => {
  render(<App />);
  const element = screen.getByText(/Manage Campaigns/i);
  expect(element).toBeInTheDocument();
});

test("Click on German button to change language", () => {
  act(() => {
    render(<App />);
  })
  // const element = ;
  act(() => {
    fireEvent(
      screen.getByText(/de/i),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
  });

  screen.debug();
});
