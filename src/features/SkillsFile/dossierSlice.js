// src/features/exampleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../redux/api';
import axios from "axios";

export const fetchData = createAsyncThunk('dossier/fetchData', async () => {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:8080/api/reports/word',
            responseType: 'blob'
        });
    if(response.data) {
        const blob = new Blob([response.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'mon-fichier.docx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }

});

const dossierSlice = createSlice({
    name: 'dossier',
    initialState: {
        data: {},
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default dossierSlice.reducer;
