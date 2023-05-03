import { Box, Button, TextField } from "@mui/material";

interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <Box mt={5} sx={{ display: "flex", justifyContent: "center" }}>
      {/* <label> */}
      <TextField
        placeholder="new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
        id="outlined-basic"
        label="New todo"
        variant="outlined"
      />
      {/* <input
          placeholder="new todo"
          value={value}
          onChange={(e) => updateText(e.target.value)}
        /> */}
      <Button
        variant="outlined"
        sx={{ color: "green", marginLeft: 5 }}
        onClick={handleAction}
      >
        Add todo
      </Button>
      {/* </label> */}
    </Box>
  );
};

export default NewTodoForm;
