import { render } from 'react-dom';
import './index.css';
import routes from './routes';

const rootEl = document.getElementById('root');
render(routes, rootEl);
