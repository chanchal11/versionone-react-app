import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface UserListProps {
  users: any[];
  onDetailClick: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDetailClick }) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('userID')}</TableCell>
            <TableCell>{t('userName')}</TableCell>
            <TableCell>{t('services')}</TableCell>
            <TableCell>{t('countOfServices')}</TableCell>
            <TableCell>{t('viewDetails')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length ? users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user?.services?.join(', ')|| '-'}</TableCell>
              <TableCell>{user?.services?.length || 0}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => onDetailClick(user.id)}>
                  {t('viewDetails')}
                </Button>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} align="center">{t('noData')}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
