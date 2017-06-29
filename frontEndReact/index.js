var React = require('react')
var ReactDOM = require('react-dom');
import Main from './src/Components/main.jsx';
import Nav from './src/Components/nav.jsx';
import Home from './src/Components/home.jsx';
import Create from './src/Containers/create.jsx'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
    	<Route path="/" component={Main}>
    		<IndexRoute component={Home}/>
    		<Route path="createproduct" component={Create} />
    	</Route>
  	</Router>
	), document.getElementById('app'));