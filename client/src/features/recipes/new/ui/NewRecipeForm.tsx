import { Select } from '@/shared/ui';

export const NewRecipeForm = () => {
  const options = [
    { label: 'Собачка', value: 'Собачка' },
    { label: 'Морская свинка 41', value: 'Морская свинка ' },
    { label: 'Кошка', value: 'Кошка' },
  ];

  return (
    <>
      <Select options={options} placeholder="Десерты и выпечка" />
    </>
  );
};
