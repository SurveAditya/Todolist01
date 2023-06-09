import React, {useRef} from 'react'
import "./styles.css"


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }

const InputFeild = ({todo,setTodo,handleAdd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={handleAdd}>
        <input type="input"
         className="input__box" 
         placeholder="Enter a task" 
         value={todo}
         ref={inputRef}
         onChange={(e) => setTodo(e.target.value)}
         />
         
        <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputFeild
