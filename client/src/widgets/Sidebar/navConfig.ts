import type { FileRoutesByPath } from '@tanstack/react-router';
import {
  ClockHistoryIcon,
  CollectionIcon,
  HouseIcon,
  PencilSquareIcon,
  QuestionLgIcon,
  SearchIcon,
} from '@/shared/assets';

interface NavElement {
  icon: SVGComponent;
  title: string;
  route?: keyof FileRoutesByPath;
  child?: React.ReactNode;
}

export const NAV_CONFIG: NavElement[] = [
  {
    icon: PencilSquareIcon,
    title: 'Записать рецепт',
    route: '/recipes/new',
  },
  {
    icon: SearchIcon,
    title: 'Поиск',
  },
  {
    icon: HouseIcon,
    title: 'На главную',
    route: '/',
  },
  {
    icon: CollectionIcon,
    title: 'Мои рецепты',
    route: '/recipes/cookbook',
  },
  {
    icon: ClockHistoryIcon,
    title: 'Недавние рецепты',
    route: '/recipes/recent',
  },
  {
    icon: QuestionLgIcon,
    title: 'О приложении',
    route: '/about',
  },
] as const;
