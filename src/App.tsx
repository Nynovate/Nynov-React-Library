import { useRoutes } from 'react-router-dom';
import './index.css';
import { routes } from './router/routes';

function App() {
	return useRoutes(routes);
}

export default App