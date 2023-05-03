import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../store/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        width: "33%",
        height: 50,
        // backgroundColor: "gray",
        // opacity: 0.5,
        backgroundColor: "#DCDCDC",
        borderRadius: 3,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color={"black"}>{title}</Typography>
      </Box> */}
      {/* <span onClick={() => dispatch(removeTodo(id))}>&times;</span> */}
      <Button onClick={() => dispatch(removeTodo(id))}>
        <DeleteIcon sx={{ color: "red" }}></DeleteIcon>
      </Button>
    </Box>
  );
};

export default TodoItem;
