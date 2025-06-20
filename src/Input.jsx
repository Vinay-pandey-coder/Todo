import { useEffect, useState } from "react"

const Input = ({ setTodos, todos, editTodo, setEditTodo}) => {
    const [todo, setTodo] = useState('');
    useEffect(() => {
        if (editTodo) {
            setTodo(editTodo.text)
        }
    }, [editTodo])
    return (
        <div className="input-container">
            <input type="text" value={todo} onChange={(e) => {
                setTodo(e.target.value)
            }} />

            <button className="button add" onClick={() => {
                if (editTodo) {
                    setTodos(
                        todos.map((ele) => {
                              return editTodo.key==ele.key?{...ele,text:todo}:ele
                        })
                    )
                    setEditTodo(null)
                }
                else {
                    setTodos([...todos, { key: Date.now(), text: todo }])
                }
                setTodo('')
            }}>Add</button>

            <button className="button reset" onClick={() => {
                setTodos([])
                setEditTodo(null)
                setTodo('')
            }}>Reset</button>
        </div>
    )
}

export default Input