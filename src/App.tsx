import { MainInput } from "./components/InputFieldText";
import Register from "./pages/register";
import { TextField } from "./components/InputFieldText/textField";

const App = () => {
  return (
    <>
    <TextField  type="text" placeholder="Enter your hobby" />
    <TextField asChild  type="submit">
      <button >
        click me
      </button>
    </TextField>
    <TextField asChild  >
      <select >
        <option value="">asdfasdf</option>
        <option value="">asdfasdf</option>
        <option value="">asdfasdf</option>
        <option value="">asdfasdf</option>
      </select>
    </TextField></>
  )
}

export default App;