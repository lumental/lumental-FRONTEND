import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function AppLayout() {
  const location = useLocation();
  const hideNavOn = [];
  const showNav = !hideNavOn.includes(location.pathname);

  return (
    <div
      className="app-viewport"
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#f8f8f8', 
      }}
    >
      <div
        className="app-container"
        style={{
          maxWidth: '430px',
          width: '100%',
          minHeight: '100vh',
          margin: '0 auto',
          background: '#f8f8f8',
          borderLeft: '1px solid rgba(0,0,0,0.08)',  
          borderRight: '1px solid rgba(0,0,0,0.08)', 
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div className="app-content" style={{ flex: 1 }}>
          <Outlet />
        </div>

        {showNav && <BottomNav />}
      </div>
    </div>
  );
}
