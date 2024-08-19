import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import s from './AppBar.module.css'


export const AppBar = () => {

  return (
    <header className={s.header}>
          <Navigation />
          <UserMenu />
          <AuthNav />
    </header>
  );
};