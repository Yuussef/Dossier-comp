
import './App.css';
import {Packer} from "docx";
import { saveAs } from "file-saver";
import { experiences, education, skills, achievements } from "./Component/cv-data";
import {DocumentCreator}  from "./Component/cv-generator";
import {useForm} from "react-hook-form";
import Button from '@mui/material/Button';
import CustomizedAccordions from "./Containers/Accordion/CustomizedAccordions";
function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    function generate() {

    }
    const onSubmit = (data) => {
        console.log("data",data)
        const documentCreator = new DocumentCreator();
        const doc = documentCreator.create([
            data?.firstName +" "+ data?.lastName,
            experiences,
            education,
            skills,
            achievements
        ]);
        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "example.docx");
            console.log("Document created successfully");
        });
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
