import { createContext, useMemo, useReducer } from "react"

const actions = {
  CAMBIAR_TEMA: "CAMBIAR_TEMA",
  ACTUALIZAR_DATOS_API: "ACTUALIZAR_DATOS_API",
}

const initialState = {
  theme: "claro",
  data: [],
}

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
      return state
  }
};

export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  )
}

