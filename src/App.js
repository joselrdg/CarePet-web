import { useState } from 'react';
import { AppRouter } from './routers/AppRouter'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
