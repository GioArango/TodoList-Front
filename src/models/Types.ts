import { Alert, Status, Todo, UserAuthenticated } from ".";

export type ActionType = 
| { type: 'SET_TODOS', payload: Todo  }
| { type: 'CREATE_TODO', payload: Todo }
| { type: 'UPDATE_STATUS', payload: Status }
| { type: 'UPDATE_TODO', payload: { id: string } }
| { type: 'DELETE_TODO', payload: { id: string } }

export type AuthType = 
| { type: 'LOGIN', payload: UserAuthenticated  }
| { type: 'REGISTER', payload: { email: string | null } }
| { type: 'LOGOUT' }

export type HelperType =
| { type: 'SHOW_LOADER' }
| { type: 'HIDE_LOADER' }
| { type: 'SET_MESSAGE', payload: Alert }
