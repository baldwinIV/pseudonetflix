import { createContext, useReducer } from "react";
import { LOG_OUT, LOG_IN, QUERYINFO } from "./actionType";

//initial state
//context info what i want to manage.. in this case.. login info and loggined man's default infomation
const initialState = {
    isLogin: false,
    userid: "nonestate",
};

// create context
const LoginContext = createContext({});

// create reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state
            };
        default:
            return state;
    }
};

// create Provider component (High order component)
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

export { LoginContext, Provider };