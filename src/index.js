import ReactDOM from 'react-dom/client';
import List from './components/List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
        <>
        <nav className='navbar sticky-top navbar-light bg-dark justify-content-center mb-4'>
            <h1 className='navbar-brand text-light mb-0'>Rick and Morty</h1>
        </nav>
        <div className='container'>
            < List />
        </div>
        </>
    )
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);