import { useCallback } from 'react';
import { useAppSelector } from './redux';
import dictionary from '../dictionary';

export const useTranslate = () => {
  const { language } = useAppSelector((state) => state.LanguageReducer);
  const T = useCallback(
    (key: string) => {
      const translate = key
        .split('.')
        .reduce(
          (acc, current) => (acc as Record<string, string>)[current],
          dictionary[language] as unknown
        );
      return translate as string;
    },
    [language]
  );
  return T;
};
