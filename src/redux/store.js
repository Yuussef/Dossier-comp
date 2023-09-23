import { configureStore } from '@reduxjs/toolkit';
import dossierReducer from '../Containers/Dossier/dossierSlice';

export const store = configureStore({
    reducer: {
        dossier: dossierReducer,
    },
});

export default store;