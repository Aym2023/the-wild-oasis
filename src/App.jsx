import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import GlobalStyles from './styles/GlobalStyles';

import Dashboard from './Pages/Dashboard';
import Bookings from './Pages/Bookings';
import Cabins from './Pages/Cabins';
import Users from './Pages/Users';
import Settings from './Pages/Settings';
import Account from './Pages/Account';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';


function App() {
  return (
    <>
    <GlobalStyles/>
      <BrowserRouter>
      <Routes>
      <Route index element={<Navigate replace to='Dashboard' />}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="account" element={<Account/>}/>
      <Route path="bookings" element={<Bookings/>}/>
      <Route path="cabins" element={<Cabins/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="users" element={<Users/>}/>
      <Route path="*" element={<PageNotFound />}/>

      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
