import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';


function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />

          </Routes>
        </BrowserRouter>


      </Provider>





    </>
  );
}

export default App;