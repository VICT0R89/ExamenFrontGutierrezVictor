/* import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
}; */

import { createContext, useMemo, useReducer } from "react";

// Define las acciones que modificarán el estado global
const actions = {
  CAMBIAR_TEMA: "CAMBIAR_TEMA",
  ACTUALIZAR_DATOS_API: "ACTUALIZAR_DATOS_API",
};

// Define un estado inicial
const initialState = {
  theme: "claro", // Puedes establecer el tema predeterminado como "claro"
  data: [], // Inicialmente, los datos de la API serán un arreglo vacío
};

// Crea un reducer para manejar las acciones
const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.CAMBIAR_TEMA:
      return {
        ...state,
        theme: action.payload,
      };
    case actions.ACTUALIZAR_DATOS_API:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Crea un contexto global
export const ContextGlobal = createContext(undefined);

// Crea el componente Proveedor que envolverá la aplicación
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Utiliza useMemo para evitar que el contexto se vuelva a crear innecesariamente
  const contextValue = useMemo(() => {
    // Proporciona el estado y las acciones a través del contexto
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

