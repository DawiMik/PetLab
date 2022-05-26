import React from 'react';
import HomeHeader from "../../HomeHeader";
import HomeThreeColumns from "../../HomeThreeColumns";
import HomeForSteps from "../../HomeForSteps";
import HomeAboutUs from "../../HomeAboutUs";
import HomeContact from "../../HomeContact";
import OrgFakeOne from "./organizationFakeOne";
import OrgFakeTwo from "./organizationFakeTwo";
import OrgFakeThree from "./organizationFakeThree";
import {Link} from "react-router-dom";

const Organizations  = () => {

    class TodoApp extends React.Component {
        constructor() {
            super();
            this.state = {
                todos: [<OrgFakeOne/>,<OrgFakeTwo/>,<OrgFakeThree/>,<OrgFakeTwo/>,<OrgFakeOne/>,<OrgFakeTwo/>,<OrgFakeThree/>,<OrgFakeTwo/>,<OrgFakeOne/>],
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
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeForSteps/>
            <HomeAboutUs/>
            <>
                <div id="who_we_help">
                    <h1>Komu pomagamy?</h1>
                    <div className="decoration"></div>
                    <div className="entities">
                        <Link to="/foundation">Fundacjom</Link>
                        <Link to="/organizations" style={{border: "1px solid black"}}>Organizacjom pozarządowym</Link>
                        <Link to="/local_help">Lokalnym zbiórkom</Link>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym
                        się zajmują, komu pomagają i czego potrzebują.</p>

                    <ul className="entities_all">
                        <TodoApp/>
                    </ul>

                </div>
            </>
            <HomeContact/>
            </>
    )
}


export default Organizations