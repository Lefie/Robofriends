import React, {Component} from 'react';
import CardList from '../Components/CardList';
//import {robots} from './robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import ErrorBoundary from '../Components/error_boundary';



class App extends Component {

    constructor(){
        super()
        this.state = {
            robo:[],
            searchfield :''
        }
    }

    //because it's react, we don't have to use arrow function
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json();
        })
        .then(users=>{
            this.setState({robo :users})
        });

    }

    //a madeup function that bridges together search box and robots
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
        
        console.log(event.target.value);

    }




    render(){
        const filterRobo = this.state.robo.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        });

        if (this.state.robo.length === 0){
            return <h1>Loading</h1>
        }else{

        
            return(
                <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robot={filterRobo} />
                    </ErrorBoundary>
                </Scroll>
                </div>
        
            
            );
        }

    }
    
}

export default App;