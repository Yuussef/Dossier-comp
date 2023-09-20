import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "../../../Component/cv-data";
import {DocumentCreator}  from "../../../Component/cv-generator";
const Download =()=>{


    function generate() {
        const documentCreator = new DocumentCreator();
        const doc = documentCreator.create([
            "Youssef chahbi",
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
    }

    return(


        <div>
            <p>
                <button onClick={generate}>Generate CV </button>
            </p>
        </div>
    );}

export default  Download;