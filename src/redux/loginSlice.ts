import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface AuthState {
  userLogged: string
}


const initialState: AuthState = {
  userLogged: ''
}

export const logInSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    isLogged(state, { payload }: PayloadAction<string>) {
      state.userLogged = payload
    },

  }
})

// Action creators are generated for each case reducer function
export const logFromAuth = logInSlice.reducer // usado na criação do store
export const { isLogged } = logInSlice.actions // chame para gravar estado
export const useloginSlice = (state: RootState) => state.useAuth // chame para ler estado


// como usar os dados e gravar

// como gravar os dados no estado
/*
*
import { useDispatch } from "react-redux";

*
const dispatch = useDispatch();

*dispatch(nome-do-slice.actions-exportado(nome-do-objeto-modificado));
*/

// como ler os dados do estado
/*
*import { useSelector } from "react-redux";

*const islogged = useSelector(nome-do-slice.state exportado)

*console.log(islogged)

 */