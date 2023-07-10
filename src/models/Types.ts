import { Alert, AuthDto, Todo } from ".";

export type ActionType = 
| { type: 'SET_TODOS', payload: Todo  }
| { type: 'CREATE_TODO', payload: Todo }
| { type: 'UPDATE_TODO', payload: { id: string } }
| { type: 'DELETE_TODO', payload: { id: string } }

export type AuthType = 
| { type: 'LOGIN', payload: AuthDto  }
| { type: 'REGISTER', payload: AuthDto }
| { type: 'LOGOUT' }

export type HelperType =
| { type: 'SHOW_LOADER' }
| { type: 'HIDE_LOADER' }
| { type: 'SET_MESSAGE', payload: Alert }
