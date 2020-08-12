import React, { useState } from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

// import AuthContext from '../contexts/auth.context';

export default function Routes() {

    const [ signed ] = useState(false);    
    return signed ? <AppRoutes /> : <AuthRoutes />;
    
}