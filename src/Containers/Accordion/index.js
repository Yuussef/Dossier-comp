import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import Presentation from "../Dossier/Presentation/Presentation";

const Accordions=()=>{
    return(

<div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>Présentation </Typography>
        </AccordionSummary>
   <Presentation/>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Compétences techniques</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion  >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
        >
            <Typography>Langues</Typography>
        </AccordionSummary>
    </Accordion>
    <Accordion  >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
        >
            <Typography>Diplômes</Typography>
        </AccordionSummary>
    </Accordion>
    <Accordion  >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
        >
            <Typography>Certifications</Typography>
        </AccordionSummary>
    </Accordion>
    <Accordion  >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
        >
            <Typography>Expériences</Typography>
        </AccordionSummary>
    </Accordion>
</div>
    )}
export default Accordions;