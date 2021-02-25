export interface NavConfig {
  name: string;
  subMenu?: { name: string; };
}

export const NAV_LIST: NavConfig[] = [
  {
    name: 'Angular'
  },
  {
    name: 'JavaScript'
  },
  {
    name: 'HTML'
  },
  {
    name: 'CSS'
  }
];
