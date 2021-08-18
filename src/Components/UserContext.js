import react,{Component} from 'react';
const UserContext=react.createContext('CDAC')
const UserProvider = UserContext.Provider
const UserConsumer =UserContext.Consumer

export{UserProvider,UserConsumer}

export default UserContext