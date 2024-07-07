
import DashboardDrawer from '@/components/DashboardDrawer/DashboardDrawer';
import Loader from '@/components/Loader';
import React, { ReactNode, Suspense } from 'react';

const DashboardLayout = ({children}:{children:ReactNode}) => {
    return (
       <Suspense fallback={<Loader/>}>
         <DashboardDrawer>
           {children} 
        </DashboardDrawer>
       </Suspense>
    );
};

export default DashboardLayout;