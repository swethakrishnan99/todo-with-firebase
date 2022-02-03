import React from "react";
import { useState } from "react";
import Logo from "../common/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";


export default function AddTodo(props) {
    const [input, setInput] = useState({ title: "", description: "" });
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNewTodo(input)
        setInput({ title: "", description: "" })
    };

    return (
        <div id="addPage" className="box box1">
            <Logo />
            <p className="title title-todo">TODO</p>
            <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at
                eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
                faucibus nibh dolor dui.
            </p>

            <form>
                <input
                    type="text"
                    name="title"
                    className="input input1"
                    value={input.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="description"
                    className="input input2"
                    value={input.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <button disabled={!input.title} type="submit" onClick={handleSubmit} className="flex-row add-btn">Add</button>
            </form>
            <Link to="listPage" spy={true} smooth={true}> <span className="scrollUp"><FontAwesomeIcon icon={faChevronDown} /></span></Link>
        </div>
    );
}

