import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function TodoList(props) {
    const { status, showOption, addInCategory, searchTerm } = props;

    return (
        <div className="scroll">
            <ul className="todo-list">
                {status.filter(element => {
                    if (searchTerm === "") {
                        return element
                    }
                    else {
                        return element.title.includes(searchTerm)
                    }
                }).map((element, index) => {
                    return (
                        <li key={index} className="todo-items flex-row">
                            <div className="flex-column">
                                <span className="item-title title">{element.title}</span>
                                <span className="item-description">{element.description}</span>
                            </div>
                            <div className="selector">
                                <span onClick={() => showOption(element)}>
                                    <FontAwesomeIcon icon={faEllipsisV} className="icon" />
                                </span>
                                {element.option && (
                                    <div
                                        className="option-div flex-column"
                                        onClick={(e) => addInCategory(e, element)}
                                    >
                                        <span className="option" id="favorite">
                                            Favorite
                                        </span>
                                        <span className="option" id="completed">
                                            Complete
                                        </span>
                                        <span className="option" id="deleted">
                                            Delete
                                        </span>
                                    </div>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
