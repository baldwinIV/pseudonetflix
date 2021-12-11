// import { createContext, useReducer, useState } from "react";
// import { SETEMAIL, SETLOGIN, SETBIRTH } from "./actiontype";

// //initial state
// //context info what i want to manage.. in this case.. login info and loggined man's default infomation
// const initialState = {
//     user_email: 'default',
//     isLogin: false,
//     user_birthyear: "0000",
//     // setEmail: () => { },
//     // setLogin: () => { },
//     // setBirth: () => { },
// };

// // create context
// const LoginContext = createContext(initialState);

// // create Provider component (High order component)
// const Provider = ({ children }) => {
    
//     const [user_email, setmail ] = useState("default");
//     const [isLogin, setlogin ] = useState(false);
//     const [user_birthyear, setbirth ] = useState("0000");
//     return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
// };

// export { LoginContext, Provider };