import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';
import { Pagination, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface UserListPageProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserListPage: React.FC<UserListPageProps> = ({ setLoading = () => null }: { setLoading?: (loading: boolean) => void }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers(page, 5);
        setUsers(response.data.users);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers().finally(() => setLoading(false));
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleDetailClick = (id: number) => {
    navigate(`/user-detail`, { state: { id } } );
  };

  return (
    <div>
      <Typography variant="h4">{t('userListTitle')}</Typography>
      <UserList users={users} onDetailClick={handleDetailClick} />
      <Stack spacing={2} alignItems="center" marginTop={2}>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </Stack>
    </div>
  );
};

export default UserListPage;
