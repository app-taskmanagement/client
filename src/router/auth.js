module.exports = {
    auth: (to, from, next) => {
        console.log('hey');
      if (!localStorage.getItem('token')) {
        route({name: "login"})
      } else {
        next()
      }
    },
}