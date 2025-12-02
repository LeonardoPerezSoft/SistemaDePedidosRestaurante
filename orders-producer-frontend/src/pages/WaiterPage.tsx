import { Link } from 'react-router-dom';
import { WaiterView } from '../components/WaiterView';

export function WaiterPage() {
  return (
    <>
      <div style={{
        padding: '1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0 }}>Vista de Mesero</h2>
        <Link 
          to="/"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'white',
            color: '#4CAF50',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Volver al Inicio
        </Link>
      </div>
      <WaiterView />
    </>
  );
}
