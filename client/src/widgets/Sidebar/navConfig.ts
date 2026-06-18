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
  route: string;
  child?: React.ReactNode;
}

export const NAV_CONFIG: NavElement[] = [
  {
    icon: PencilSquareIcon,
    title: 'Записать рецепт',
    route: '',
  },
  {
    icon: SearchIcon,
    title: 'Поиск',
    route: '',
  },
  {
    icon: HouseIcon,
    title: 'На главную',
    route: '',
  },
  {
    icon: CollectionIcon,
    title: 'Кулинарная книга',
    route: '',
  },
  {
    icon: ClockHistoryIcon,
    title: 'Недавние рецепты',
    route: '',
  },
  {
    icon: QuestionLgIcon,
    title: 'О приложении',
    route: '',
  },
] as const;
