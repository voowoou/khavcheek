import {
  Content,
  Item,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
} from '@radix-ui/react-select';
import { CaretDownFill } from '../../assets';
import s from './Select.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  placeholder?: string;
  options?: SelectOption[];
}

export const Select = (props: SelectProps) => {
  const { placeholder, options } = props;

  return (
    <Root>
      <Trigger className={s.trigger}>
        <Value placeholder={placeholder}></Value>
        <CaretDownFill className={s.icon} />
      </Trigger>

      <Portal>
        <Content
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={s.content}
        >
          {options &&
            options.map(({ value, label }) => (
              <Item key={value} value={value} className={s.item}>
                <ItemText>{label}</ItemText>
              </Item>
            ))}
        </Content>
      </Portal>
    </Root>
  );
};
