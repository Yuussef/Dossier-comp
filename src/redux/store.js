import { configureStore } from "@reduxjs/toolkit";
import dossierReducer from "../features/SkillsFile/dossierSlice";

export const store = configureStore({
  reducer: {
    dossier: dossierReducer,
  },
});

export default store;
