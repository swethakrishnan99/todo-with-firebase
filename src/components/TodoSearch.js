import React from "react";
import TodoList from "./TodoList";
import { useState } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

export default function TodoSearch(props) {
    const { status, statusHandler, showOption, addInCategory } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log("logout success")
        }).catch(err => { console.log(err) })
    }
    return (
        <div id="listPage" className="box box2">
            <Link to="addPage" spy={true} smooth={true}> <span className="scrollDown"><FontAwesomeIcon icon={faChevronUp} /></span></Link>
            <button className="logout-btn" onClick={handleLogOut}>Log out</button>
            <div>
                <p className="title title-list">TODO LIST</p>
                <form action="">

                    <input
                        type="search"
                        name="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search list-input"
                        placeholder="search"
                    />
                    <select
                        name="filter"
                        onChange={statusHandler}
                        id="filter"
                        className="filter list-input"
                    >
                        <option value="all" className="option">

                        </option>
                        <option value="completed" className="option">
                            Completed
                        </option>
                        <option value="favorite" className="option" >
                            Favorite
                        </option>
                        <option value="deleted" className="option">
                            Deleted
                        </option>
                    </select>
                </form>
                <TodoList
                    status={status}
                    showOption={showOption}
                    addInCategory={addInCategory}
                    searchTerm={searchTerm}
                />
            </div>
        </div>
    );
}
