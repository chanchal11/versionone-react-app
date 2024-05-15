import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import i18next from 'i18next';

interface UserDetailProps {
  user: any;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  const { t, i18n } = useTranslation();

  const getClassForArabic = () => i18n.language !== 'en' ? 'rtl': '';

  return (
    <Card>
      <CardContent>
        <Typography className={`${getClassForArabic()}`} variant="h5">{t('userDetailTitle')}</Typography>
        <Typography className={`${getClassForArabic()}`} variant="body1"><strong>{t('userID')}:</strong> {user.id}</Typography>
        <Typography className={`${getClassForArabic()}`} variant="body1"><strong>{t('userName')}:</strong> {user.name}</Typography>
        <Typography className={`${getClassForArabic()}`} variant="body1"><strong>{t('homeAddress')}:</strong> {user.addresses[0]}</Typography>
        <Typography className={`${getClassForArabic()}`} variant="body1"><strong>{t('workAddress')}:</strong> {user.addresses[1]}</Typography>
        <Typography className={`${getClassForArabic()}`} variant="h6">{t('services')}</Typography>
        <List>
          {user.services.map((service: any, index: number) => (
            <ListItem key={index}>
              <ListItemText className={`${getClassForArabic()}`} primary={`${t('typeOfService')}: ${service.typeOfService}`} secondary={`${t('startDate')}: ${new Date(service.startDate).toLocaleDateString()} - ${t('expDate')}: ${new Date(service.expDate).toLocaleDateString()}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserDetail;
