import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';





function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/test" element={<Home />} />
      <Route exact path="/new" element={<Home />} />
      {/* other routes and components */}

    </Routes>
  </BrowserRouter>
  );
}

export default App;
