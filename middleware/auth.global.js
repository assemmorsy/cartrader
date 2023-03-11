export default defineNuxtRouteMiddleware((to, from) => {
    const needLogin = () => {
        const user = useSupabaseUser()
        if (user.value) {
            return;
        } else {
            return navigateTo("/login")
        }
    }
    const AlreadyLoggedIn = () => {
        const user = useSupabaseUser()
        if (!user.value) {
            return;
        } else {
            return navigateTo("/")
        }
    }
    if (to.path.includes("profile")) {
        return needLogin()
    }
    else if (to.path.includes("login") || to.path.includes("signup")) {
        console.log("i am in already");
        return AlreadyLoggedIn()
    }
    else {
        return;
    }

})