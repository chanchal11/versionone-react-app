import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Stack } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Stack className='lang-btns' direction="row" spacing={2}>
      <Button variant={i18n.language === 'en' ? 'contained' : 'outlined'} onClick={() => changeLanguage('en')}>
        English
      </Button>
      <Button variant={i18n.language === 'ar' ? 'contained' : 'outlined'} onClick={() => changeLanguage('ar')}>
        العربية
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
