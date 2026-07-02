import type { ChangeEvent, ComponentProps, KeyboardEvent } from 'react';
import { Input } from './Input';
import s from './Input.module.css';

interface InputNumberProps extends ComponentProps<'input'> {
  value?: number | '';
  onChangeNumber?: (value: number | '') => void;
  min?: number;
  max?: number;
  allowDecimals?: boolean;
}

export const InputNumber = (props: InputNumberProps) => {
  const {
    value,
    onChangeNumber,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    allowDecimals = true,
    ...restProps
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const enter = e.target.value;

    if (enter === '') {
      onChangeNumber?.('');
      return;
    }

    const numVal = Number(enter);
    if (!isNaN(numVal) && numVal >= min && numVal <= max) {
      onChangeNumber?.(numVal);
    }
  };

  const handleBlur = () => {
    if (value === '') {
      onChangeNumber?.(min !== undefined ? min : 0);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' && allowDecimals) {
      e.preventDefault();

      const input = e.currentTarget;
      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? 0;
      const currentVal = input.value;

      const fixedValue =
        currentVal.substring(0, start) + '.' + currentVal.substring(end);

      input.value = fixedValue;
      input.setSelectionRange(start + 1, start + 1);

      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
      return;
    }

    const bannedSymbols = ['e', 'E', '+'];

    if (min >= 0) {
      bannedSymbols.push('-');
    }

    if (!allowDecimals) {
      bannedSymbols.push('.', ',');
    }

    if (bannedSymbols.includes(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <Input
      type="text"
      inputMode={allowDecimals ? 'decimal' : 'numeric'}
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={s.inputNumber}
      {...restProps}
    />
  );
};
