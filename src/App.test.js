import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Testing button', () => {
  const user = userEvent.setup()
  

  it('Button has correct initial color', () => {
      render(<App />)
      const button = screen.getByRole('button', {name: 'Change to blue'})
      expect(button).toHaveStyle({background: 'red'})
  });

  it('Should click button and change color background and text', async () => {
    render(<App />)
    const button = screen.getByRole('button', {name: 'Change to blue'})
    await user.click(button)
    expect(button).toHaveStyle({background: 'blue'})
    expect(button).toHaveTextContent('Change to red')
  })

  it('Should click on checkbox', async () => {
    render(<App />)
    const button = screen.getByRole('button')
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
    
    expect(button).not.toBeDisabled()
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(button).toBeDisabled()

  })
})

