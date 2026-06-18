import { useState } from 'react';
import clsx from 'clsx';
import { Link } from '@tanstack/react-router';
import { CaretRightIcon } from '@/shared/assets';
import { Button } from '@/shared/ui';
import s from './Sidebar.module.css';
import { NAV_CONFIG } from './navConfig';

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <aside className={clsx(s.sidebar, isExpanded && s.expanded)}>
      <nav className={s.menu}>
        <ul>
          {NAV_CONFIG.map(({ title, icon: Icon, route }) => (
            <li key={title} className={s.navElement}>
              <Button icon={Icon} asChild>
                <Link to={route}>{isExpanded && title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        onClick={() => setIsExpanded((prev) => !prev)}
        icon={CaretRightIcon}
        className={s.expandButton}
      />
    </aside>
  );
};
