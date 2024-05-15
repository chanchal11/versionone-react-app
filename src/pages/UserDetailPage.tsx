import React, { useState, useEffect } from 'react';
import { getUserById } from '../services/api';
import UserDetail from '../components/UserDetail';
import { useNavigate, useLocation } from 'react-router-dom';

interface UserDetailPageProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ setLoading = () => null  }: { setLoading?: (loading: boolean) => void } ) => {
  const { id } = useLocation()?.state as { id: string } || { id: '' };
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if(!id) {
            navigate('/');
        }else {   
            const response = await getUserById(parseInt(id));
            setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        navigate('/');
      }
    };

    fetchUser().finally(() => setLoading(false));
  }, [id, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserDetail user={user} />
    </div>
  );
};

export default UserDetailPage;
