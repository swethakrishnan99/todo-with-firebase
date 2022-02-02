import React from "react";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoSearch(props) {
    const { status, statusHandler, showOption, addInCategory } = props;
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <div className="box">
            <form action="">
                <p className="title title-list">TODO LIST</p>
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
    );
}
