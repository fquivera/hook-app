import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
    
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;
        
        const NewTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo && onNewTodo(NewTodo);
        onResetForm();
    
    }
  


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Que hay que hacer?"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
