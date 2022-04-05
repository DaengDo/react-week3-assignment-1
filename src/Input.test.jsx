import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  function getElement() {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const container = render(<Input onChange={onChange} onClick={onClick} />);
    const input = container.getByLabelText('할 일');
    const button = container.getByText('추가');

    return {
      ...container, input, button, onChange, onClick,
    };
  }

  it('renders input, button', () => {
    const { input, button } = getElement();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('changes input value', () => {
    const { input } = getElement();
    const inputValue = '운동 하기';

    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  it('calls onchange when change input value', () => {
    const { input, onChange } = getElement();
    const inputValue = '운동 하기';

    expect(input.value).toBe('');
    expect(onChange).not.toBeCalled();

    fireEvent.change(input, { target: { value: inputValue } });
    expect(onChange).toBeCalled();
  });
});
