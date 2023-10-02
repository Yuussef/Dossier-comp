import { configureStore } from "@reduxjs/toolkit";
import dossierReducer from "../Containers/SkillsFile/dossierSlice";

export const store = configureStore({
  reducer: {
    dossier: dossierReducer,
  },
});

export default store;
