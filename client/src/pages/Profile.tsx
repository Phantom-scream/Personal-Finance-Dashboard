import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  email: string;
  createdAt: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found');
          return;
        }
        const res = await api.get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  if (error) {
    return <div className="text-red-600 mt-10 text-center">{error}</div>;
  }

  if (!user) {
    return <div className="mt-10 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div><strong>Email:</strong> {user.email}</div>
      <div><strong>User ID:</strong> {user.id}</div>
      <div><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}</div>
    </div>
  );
};

export default Profile;