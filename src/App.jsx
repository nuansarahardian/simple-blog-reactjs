import './App.css'
// import Article from './components/Article'
import Home from './pages/Index'
import { GlobalContext } from './context'
import { router } from './routers'
import { RouterProvider } from 'react-router-dom'



function App() {
  const user = {
    username: 'nuansa'
  }
  const detail = {
    year: '2024'
  }
  const contextValue = {
    user,
    detail
  };

  return (
    <div className='App'>
      <GlobalContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>

    </div >
  );


}

export default App;
