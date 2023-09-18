import CardList from "../components/CardList";
import React from "react";
import SearchBox from "../components/SearchBox";
import CreateCard from "../components/CreateCard";
import "../css/App.css";
import Scroll from "../components/Scroll";

class App extends React.Component {
    // this is the state
    // you will always need super()
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    };

    // this is a react component
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                this.setState({robots: users})
            }
        )
    }
    
    onSearchChange = (event) => {
        // created an event works like dom manipulation
        // Note: When creating a instance method always do it in a function based component
        // for example in this onSearchEvent.
        // Can also do that in the robots instance and searchField instance
        // but for now it is still working.
        // using the setState comes from the React.Component class
        this.setState( {searchField: event.target.value} )
    };
    
    render() {
        // used destructuring/unpacking for readability.
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            // robot.name comes from the robots name attribute in https://jsonplaceholder.typicode.com/users
            // refer to the CardList component
            const value = robot?.name.toLowerCase();
            const searchValue = searchField.toLowerCase();

            return value.includes(searchValue);
        });
        
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className="tc">
                    <h1 className="title">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CreateCard />
                    <Scroll>
                        <CardList robotProp={filteredRobots}/>
                    </Scroll>
            </div>
        )
    };
}

export default App;