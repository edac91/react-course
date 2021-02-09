import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 'asfa1', name: 'Max', age: 28},
            {id: 'vasdf1', name: 'Manu', age: 29},
            {id: 'asdf12', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push('red');
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push('bold');
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                    className={btnClass}
                    // alt={this.state.showPersons}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
