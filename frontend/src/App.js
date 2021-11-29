import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Header, Footer } from './layouts';
import { HomeScreen, ListDataStaff } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/listdata/staff" element={<ListDataStaff/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;