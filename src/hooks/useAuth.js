export const useAuth = () => {
  const isLoggedIn = localStorage.getItem('currentUser')
  const isSignUpNotFinished = localStorage.getItem('register_data')
    ? true
    : false

  return { isLoggedIn, isSignUpNotFinished }
}
