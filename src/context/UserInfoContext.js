import {createContext} from 'react';

const UserInfoContext = createContext({user:"Guest", isAdmin:false })

export default UserInfoContext;