import { Button } from '@/shared/ui';
import { BrightnessHighIcon, TranslateIcon } from '@/shared/assets';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.breadcrumps}>
        Илья Христофоров / Горячее / Пастуший пирог
      </nav>

      <div className={s.settings}>
        <Button icon={<BrightnessHighIcon height={20} width={20} />} />
        <Button icon={<TranslateIcon height={20} width={20} />} />
        <div className={s.avatar} />
      </div>
    </header>
  );
};
