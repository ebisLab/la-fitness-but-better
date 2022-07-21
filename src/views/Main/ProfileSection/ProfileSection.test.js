import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfileSection from './ProfileSection';
import CardContext from '../../../store/CardContext';
import InputComponent from '../../../components/InputComponent';

function renderUserGreeter(user) {
  return render(
    <CardContext.Provider value={{user, currentUser: []}}>
      <ProfileSection />
    </CardContext.Provider>,
  );
}

it('renders ProfileSection component', () => {
  const {container} = renderUserGreeter({name: 'Giorgio'});
  const sectionElement = container.querySelector('.first-column');
  expect(sectionElement).toBeInTheDocument();
});

describe('Add input', () => {
  it('renders input element', async () => {
    const {container} = renderUserGreeter({name: 'Giorgio'});
    const sectionElement = container.querySelector('#input-barcode');
    expect(sectionElement).toBeInTheDocument();
  });
  it('renders input element', async () => {
    const {getByTestId} = render(<InputComponent />);
    const sectionElement = getByTestId('input-barcode');
    expect(sectionElement).toBeInTheDocument();
  });
  it('should be able to type into input', async () => {
    const {getByTestId} = render(<InputComponent />);
    const inputElement = getByTestId('input-barcode');
    fireEvent.change(inputElement, {target: {value: 'Patrick'}});
    expect(inputElement.value).toBe('Patrick');
  });
});

//see if input is focused
