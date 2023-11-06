// Defining thunk actions here.

import { setError, setLoading, setToken, setUser } from "./reducer"

export const init = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if(token){
        dispatch(setToken(token));
    }
}

export const login = (email, password) => async (dispatch, getStore) => {
    try {
        if(getStore().token) return;

        dispatch(setLoading(true));
        const response = await fetch('http://localhost:5001/auth/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const data = await response.json();
        dispatch(setLoading(false));

        if(data.success) {
            localStorage.setItem('token', data.token)
            dispatch(setToken(data.token));
            dispatch(setError(null))
        }
        else {
            dispatch(setError(data.message));
        }

        return data;
    }catch(error){
        console.log(error)
        dispatch(setError(error.message));
    }
}

export const signup = (email, password, name, thumbnail) => async (dispatch, getStore) => {
    try{
        dispatch(setToken(null));

        dispatch(setLoading(true));
        const response = await fetch('http://localhost:5001/auth/signup', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({email, password, name, thumbnail})
        })

        const data = await response.json();
        dispatch(setLoading(false));

        if(data.success) {
            localStorage.setItem('token', data.token)
            dispatch(setToken(data.token));
            dispatch(setError(null))
        }
        else {
            dispatch(setError(data.message));
        }

        return data;
    }catch(error){
        console.log(error)
        dispatch(setError(error.message));
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(setToken(null));
    dispatch(setUser(null));
}

