import React from 'react';

export default React.createContext({
    login: () => {},
    logout: (token, userid, tokenExpiration) => {},
    token: null,
    userid: null,
});
