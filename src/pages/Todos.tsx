import { useTodos } from "../features/todos/useTodos";

import TodoList from "../features/todos/TodoList";
import TodosTitle from "../features/todos/TodosTitle";
import AddTodoForm from "../features/todos/AddTodoForm";
import FullPageSpinner from "../ui/FullPageSpinner";

function Todos() {
    const { isLoading } = useTodos();

    if (isLoading) return <FullPageSpinner />;

    return (
        <div className="m-4 flex justify-center">
            <div className="flex w-[40rem] flex-col gap-4">
                <TodosTitle />
                <TodoList />
                <AddTodoForm />
            </div>
        </div>
    );
}

export default Todos;
