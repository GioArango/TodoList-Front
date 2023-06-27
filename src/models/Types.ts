import { Todo } from ".";

export type ActionType = 
| { type: 'SET_TODOS', payload: Todo  }
| { type: 'CREATE_TODO', payload: Todo }
| { type: 'UPDATE_TODO', payload: { id: string } }
| { type: 'DELETE_TODO', payload: { id: string } }
