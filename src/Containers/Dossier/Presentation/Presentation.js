import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FormControl, Grid, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

const Presentation=()=>{
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <AccordionDetails>
            <Typography>
                <Grid container spacing={0} columns={24}>

                    <Grid  xs={4}>
                        <TextField
                            id="outlined-basic" label="Prénom"
                            {...register("firstName", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>
                    <Grid  xs={6}>
                        <TextField
                            id="outlined-basic" label="Nom de famille"
                            {...register("firstName", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>
                    <Grid  xs={6}>
                        <TextField
                            id="outlined-basic" label="Niveau de diplôme"
                            {...register("firstName", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>

                    <Grid  xs={6}>
                        <TextField
                            id="outlined-basic" label="Année de naissance"
                            {...register("firstName", {
                                validate: (value) => value !== "bill"
                            })}
                        />
                    </Grid>

                </Grid>
                <br/>
                <Grid container spacing={0} columns={10}>
                <Grid  xs={4}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Titre du candidat</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                       
                        />
                    </FormControl>
                </Grid>
                </Grid>
            </Typography>
        </AccordionDetails>
        </form>
    )
}
export default Presentation;