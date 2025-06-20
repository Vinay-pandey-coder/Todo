const List = ({todos,setTodos,setEditTodo}) => {
  return (
       <ul>
          {
            todos.map((ele)=>{  
                return <li key={ele.key}><span className="todo-text">{ele.text}</span>
                   <button className="edit" onClick={()=>{
                      let filterData = todos.filter((item)=>{
                        return item.key!=ele.key
                      })
                      setTodos(filterData)
                   }}>delete</button>
                   
                   <button className="delete" onClick={()=>{
                        setEditTodo(ele)
                   }}>edit</button>
                </li>
            })
          }
       </ul>
  )
}

export default List