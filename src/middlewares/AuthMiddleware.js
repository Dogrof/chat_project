const AuthMiddleware = async (component) => {
  // if(!window.localStorage.get('TOKEN')) {
  //     // props.history.push('/');
  //     // console.log(props);
  // }

  return component;

  // console.log(window.localStorage.get('TOKEN'));
};

export { AuthMiddleware };
