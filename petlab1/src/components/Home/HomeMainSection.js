import React from 'react';
import {Link} from "react-router-dom";
import FoundOne from "./Entities/Foundations/foundone";
import FoundTwo from "./Entities/Foundations/foundtwo";
import FoundThree from "./Entities/Foundations/foundthree";
import FoundFake from "./Entities/Foundations/foundfake";

const HomeMainSection = () => {

    class TodoApp extends React.Component {
        constructor() {
            super();
            this.state = {
                todos: [<FoundOne/>,<FoundTwo/>,<FoundThree/>,<FoundFake/>,<FoundFake/>,<FoundFake/>,<FoundFake/>,<FoundFake/>,<FoundFake/>],
                currentPage: 1,
                todosPerPage: 3
            };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(event) {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }

        render() {
            const { todos, currentPage, todosPerPage } = this.state;

            // Logic for displaying current todos
            const indexOfLastTodo = currentPage * todosPerPage;
            const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
            const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

            const renderTodos = currentTodos.map((todo, index) => {
                return <li key={index}>{todo}</li>;
            });

            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
                pageNumbers.push(i);
            }

            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </li>
                );
            });

            return (
                <div>
                    <ul>
                        {renderTodos}
                    </ul>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>
            );
        }
    }

    return (
        <div id="who_we_help">
            <h1>Komu pomagamy?</h1>
            <div className="decoration"></div>
            <div className="entities">
                <Link to="/foundation" style={{border: "1px solid black"}}>Fundacjom</Link>
                <Link to="/organizations">Organizacjom pozarz??dowym</Link>
                <Link to="/local_help">Lokalnym zbi??rkom</Link>
            </div>
            <p>W naszej bazie znajdziesz list?? zweryfikowanych Fundacji, z kt??rymi wsp????pracujemy. Mo??esz sprawdzi?? czym
                si?? zajmuj??, komu pomagaj?? i czego potrzebuj??.</p>

            <ul className="entities_all">
                <TodoApp/>
            </ul>

        </div>
    )
}

export default HomeMainSection