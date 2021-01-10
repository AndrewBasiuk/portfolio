export enum langType {
  UA = 'ua',
  EN = 'en',
}

export interface LangConfig {
  name: langType;
  className?: string;
}


export const LANGS: LangConfig[] = [
  {
    name: langType.UA,
  },
  {
    name: langType.EN
  }
];
