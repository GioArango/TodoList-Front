import { Todo } from ".";
import { AuthLoginDto, AuthRegisterDto } from "./Auth";

export type ActionType = 
| { type: 'SET_TODOS', payload: Todo  }
| { type: 'CREATE_TODO', payload: Todo }
| { type: 'UPDATE_TODO', payload: { id: string } }
| { type: 'DELETE_TODO', payload: { id: string } }

export type AuthType = 
| { type: 'LOGIN', payload: AuthLoginDto  }
| { type: 'REGISTER', payload: AuthRegisterDto }
| { type: 'LOGOUT' }
