import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider,  } from "@tanstack/react-query";
import { ReactQueryDevtools }  from "@tanstack/react-query-devtools";

import GlobalStyles from './styles/GlobalStyles';
import {Toaster}  from 'react-hot-toast';

import Dashboard from './Pages/Dashboard';
import Bookings from './Pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './Pages/Users';
import Settings from './Pages/Settings';
import Account from './Pages/Account';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions:{
   queries:{
    // staleTime: 60 * 1000,
    staleTime: 0,

   }, 
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools intialIsOpen={false} />

    <GlobalStyles/>
      <BrowserRouter>
      <Routes>

      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to='Dashboard' />}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="account" element={<Account/>}/>
      <Route path="bookings" element={<Bookings/>}/>
      <Route path="cabins" element={<Cabins/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="users" element={<Users/>}/>
      </Route>

      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound />}/>

      </Routes>
      </BrowserRouter>

      <Toaster 
      position={'top-center'}
      gather={12}
      containerStyle={{ margin : '8px'}}
      toastOptins={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style:{
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: 'var(--color-grey-0)',
          color: 'var(--color-grey-700)',
        }
      }}
       />
      </QueryClientProvider>
  )
}

export default App;
