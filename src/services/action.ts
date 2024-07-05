'use server'

import { cookies } from 'next/headers';
import decode from 'jwt-decode';
import { decodedToken } from '@/utils/jwt';

interface DecodedToken {
  role: string;
  username?: string;
  email?: string;
  // Add other fields as necessary
}

export const getUserInfo = async () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get('mui-token')?.value;
  
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase()
    };
  }

  return null;
};
