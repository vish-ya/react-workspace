import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/userCard/userCard';
import Header from './components/header/header';

class App extends Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			      show:true,
            user:true,
            
		}
  }

  
    
	
	render(){
		return (
			<div className='App'>		
    
          <Header /> 
          <h3>or contact a representative below</h3>    
          <UserCard /> 
				
	  	</div>
		);

  }
}


export default App;
