

export const setLoggedState = (boolean) => {
    window.localStorage.removeItem("isLogged")
    window.localStorage.setItem("isLogged", boolean)
}

export const getLoggedState = () => {
    const state = window.localStorage.getItem("isLogged")
    return state
}

export const logOut = () => {
    window.localStorage.clear()
    window.location.reload()
}