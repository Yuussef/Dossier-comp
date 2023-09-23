
import './App.css';
import {Packer} from "docx";
import { saveAs } from "file-saver";
import { experiences, education, skills, achievements } from "./Component/cv-data";
import {DocumentCreator}  from "./Component/cv-generator";
import {useForm} from "react-hook-form";
import Button from '@mui/material/Button';
import CustomizedAccordions from "./Containers/Accordion/CustomizedAccordions";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./Containers/Dossier/dossierSlice";
function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

        const dispatch = useDispatch();
        const { data, status } = useSelector((state) => state.dossier);

    const onSubmit = (data) => {
        console.log("data",data)

            dispatch(fetchData());

    };

    return (
    <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
<CustomizedAccordions register={register}/>
<br/>

            <Button type="submit" variant="outlined">Télécharger  CV </Button>
        </form>
    </div>
  );
}

export default App;
