import { Link } from 'react-router-dom';
import { KitchenView } from '../components/KitchenView';

export function KitchenPage() {
  return (
    <>
      <div style={{
        padding: '1rem',
        backgroundColor: '#FF9800',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0 }}>Vista de Cocina</h2>
        <Link 
          to="/"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'white',
            color: '#FF9800',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Volver al Inicio
        </Link>
      </div>
      <KitchenView />
    </>
  );
}
