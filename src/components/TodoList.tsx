import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";
import { Box } from "@mui/material";
const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: 10,
        flexWrap: "wrap",
        rowGap: 5,
      }}
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export default TodoList;
