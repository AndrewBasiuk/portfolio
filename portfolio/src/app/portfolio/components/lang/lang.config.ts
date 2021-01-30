export enum langType {
  UA = 'ua',
  EN = 'en',
}

export interface LangConfig {
  name: langType;
}


export const LANGS: LangConfig[] = [
  {
    name: langType.EN,
  },
  {
    name: langType.UA,
  }
];
