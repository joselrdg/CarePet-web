import { AppRouter } from './routers/AppRouter'
import Navbar from './components/nav/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
