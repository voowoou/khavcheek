import { useState } from 'react';
import { DashIcon, PlusIcon } from '@/shared/assets';
import { Button } from '../Button/Button';
import { InputNumber } from '../Input/InputNumber';
import s from './Counter.module.css';

const MIN_VAL = 1;
const MAX_VAL = 9999;

export const Counter = () => {
  const [value, setValue] = useState<number | ''>(MIN_VAL);

  const handleDecr = () => {
    setValue((prev) => Math.max(MIN_VAL, (Number(prev) || 0) - 1));
  };
  const handleIncr = () => {
    setValue((prev) => Math.min(MAX_VAL, (Number(prev) || 0) + 1));
  };

  return (
    <div className={s.container}>
      <Button
        onClick={handleDecr}
        disabled={Number(value) <= MIN_VAL}
        icon={DashIcon}
      />
      <InputNumber
        allowDecimals={false}
        min={MIN_VAL}
        max={MAX_VAL}
        value={value}
        onChangeNumber={setValue}
      />
      <Button
        onClick={handleIncr}
        disabled={Number(value) >= MAX_VAL}
        icon={PlusIcon}
      />
    </div>
  );
};
