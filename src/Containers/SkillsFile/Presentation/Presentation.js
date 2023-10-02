import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FormControl, Grid, Input, InputLabel, Paper, TextField} from "@mui/material";


const Presentation=({register})=>{

    return(
        <Paper elevation={3} >
        <AccordionDetails>
            <Typography>
                <Grid container spacing={0} columns={24}>

                    <Grid  xs={4}>
                        <TextField
                            variant="outlined"
                            id="outlined-basic" label="Prénom"
                            {...register("firstName", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>
                    <Grid  xs={4}>
                        <TextField
                            variant="outlined"
                            id="outlined-basic" label="Nom de famille"
                            {...register("lastName", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>
                    <Grid  xs={4}>
                        <TextField
                            id="outlined-basic" label="Niveau de diplôme"
                            {...register("Niveau"
                            )}
                        />
                    </Grid>

                    <Grid  xs={4}>
                        <TextField
                            id="outlined-basic" label="Année de naissance"
                            {...register("Annee", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>

                <Grid  xs={4}>
                    <TextField
                        variant="outlined"
                        id="outlined-basic" label="Titre du candidat"
                        {...register("titre")}
                    />
                </Grid>
                </Grid>
            </Typography>
        </AccordionDetails>
        </Paper>
    )
}
export default Presentation;