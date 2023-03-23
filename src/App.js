import Home from './pages/Home/Home'; 
import Error from './pages/404/Error';
import Propos from './pages/Propos/Propos';
import Appartement from './pages/Appartement/Appartement';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},					
	{
		path: '/',
		element: <Home />,
	  },
	{
		path: "/accomodation/:id",
		element: <Appartement />
	},
	{
		path: '/about',
		element: <Propos />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			{}
			<RouterProvider router={router}/>
		</>
	);
}

export default App;