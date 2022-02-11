import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import './utils/Button.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/pages/Home';
import ServicePage from './components/pages/ServicePage';
import AboutPage from './components/pages/AboutPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<TopNav />
				<Navbar />
				<Banner />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/services' component={ServicePage} />
					<Route path='/about' component={AboutPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
