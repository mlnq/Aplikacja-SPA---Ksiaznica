import React from 'react';
import { createContext, useContext } from 'react';


// const AuthContext = createContext<AuthContextType>({ isAuthenticated:false ,
//                                                             login:()=> {isAuthenticated:false},
//                                                             logout: ()=>{isAuthenticated:true } });
// export default AuthContextType;


// export default AuthContext;
// // interface ITodo {
// //     id: number
// //     title: string
// //     description: string
// //     status: boolean
// //   }
export const AuthContext = React.createContext({ 
    Authenticated: true,
    login: () => {},
    logout: () => {},
  });



// //   type ContextType = {
// //     todos: ITodo[]
// //     saveTodo: (todo: ITodo) => void
// //     updateTodo: (id: number) => void
// //   }


// type ContextProps = {
//     isAuthenticated:  boolean,  
//     setAuth:(x:any) => {isAuthenticated:x},
//     login: () => void,
//     logout: () => void

// };
// const AuthContext =  React.createContext<Partial<ContextProps>>({});
// export default  AuthContext;


// export const AuthProvider = ({ children }: any) => {
//     const [user, setUser] = useState(null as firebase.User | null);    const [loadingAuthState, setLoadingAuthState] = useState(true);useEffect(() => {
//     firebase.auth().onAuthStateChanged((user: any) => {
//       setUser(user);
//       setLoadingAuthState(false);
//    });
// }, []);