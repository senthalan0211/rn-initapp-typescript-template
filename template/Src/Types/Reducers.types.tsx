import reducers from "../Store/Reducers";

export interface AuthState{
    userToken:string | undefined
    //Here add types of initial authstate parameters in authReducer.tsx file
  }

  export interface HomeState{
   
    //Here add types of initial homeState parameters in homeReducer.tsx file
  }

export interface AuthAction{
    type:string,
    payload:AuthState
  }

  export interface HomeAction{
    type:string,
    payload:HomeState
  }

  // Define the Reducer Types Here

  export type ReducerState = ReturnType<typeof reducers>;

  
