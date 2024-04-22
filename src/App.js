import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllRoutes />
      <Footer></Footer>
    </div>
  );
}

export default App;
