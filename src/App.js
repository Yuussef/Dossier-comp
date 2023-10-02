import "./App.css";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CustomizedAccordions from "./components/Accordion/CustomizedAccordions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/SkillsFile/dossierSlice";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.dossier);

  const onSubmit = (data) => {
    dispatch(fetchData());
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomizedAccordions register={register} />
        <br />

        <Button type="submit" variant="outlined">
          Télécharger CV{" "}
        </Button>
      </form>
    </div>
  );
}

export default App;
