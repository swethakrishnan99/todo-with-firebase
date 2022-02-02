import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../Firebase";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import AddTodo from "../components/AddTodo";
import TodoSearch from "../components/TodoSearch";

export default function Dashboard() {
    const [todo, setTodo] = useState([]);
    const [status, setStatus] = useState(todo);
    const navigate = useNavigate();

    // get todo
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const docRef = doc(db, "users", `${auth.currentUser.uid}`);
                getDoc(docRef).then((snapshot) => setTodo([...snapshot.data().todo]));
            } else {
                navigate("/");
            }
        });
    }, []);
    // update todo
    useEffect(() => {
        return () =>
            auth.onAuthStateChanged((user) => {
                if (user) {
                    const docRef = doc(db, "users", `${auth.currentUser.uid}`);
                    updateDoc(docRef, { todo: todo })
                        .then(console.log("successfully updated"))
                        .catch((err) => console.log(err));
                }
            });
    });

    const addNewTodo = (input) => {
        const { title, description } = input;
        const newTodo = {
            id: todo.length + 1,
            title,
            description,
            option: false,
            completed: false,
            favorite: false,
            deleted: false,
        };
        setTodo([...todo, newTodo]);
    };
    // show options on todos
    const showOption = (element) => {
        setTodo(
            todo.map((ele) => {
                if (ele.id === element.id) {
                    return { ...ele, option: !ele.option };
                }
                return ele;
            })
        );
    };
    // add to a category
    const addInCategory = (e, element) => {
        const category = e.target.id;
        setTodo(
            todo.map((ele) => {
                if (ele.id === element.id) {
                    return { ...ele, [category]: !element[category], option: false };
                }
                return ele;
            })
        );
    };
    useEffect(() => setStatus(todo), [todo]);
    const statusHandler = (e) => {
        if (e.target.value === "all") {
            setStatus(todo);
        } else {
            setStatus(todo.filter((ele) => ele[e.target.value] === true));
        }
    };
    return (
        <div className="flex-row dashboard-page">
            <button className="logout-btn">Log out</button>
            <AddTodo addNewTodo={addNewTodo} />
            <TodoSearch
                status={status}
                statusHandler={statusHandler}
                showOption={showOption}
                addInCategory={addInCategory}
            />
        </div>
    );
}


