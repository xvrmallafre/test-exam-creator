import { isBrowser } from '@builder.io/qwik/build';

export const getUser = () => {
    if (isBrowser) {
        return JSON.parse(localStorage.getItem("user") ?? '');
    }
};

export const setUser = (data: object )  => {
    if (isBrowser) {
        localStorage.setItem("user", JSON.stringify(data));
        return true;
    }

    return false;
};

export const isLoggedIn = () => {
    if (isBrowser) {
        return (localStorage.getItem("user")) ? true : false;
    }

    return false;
}
