import axios from "../axios_conf";

const login = (credentionals) => {
  return axios.post('/auth/login' ,credentionals ).then(data => {
     const { access_token } = data.data;
     window.localStorage.TOKEN = access_token;

     return axios.get('/user').then(data => {
          const { id } = data.data;
          //put in storage user data. (redux)
          return id;
     });

     //
     // console.log(   window.localStorage.TOKEN);
  }).catch(err => {
      console.log(err);
  });
}

export { login };
// alert(`Submitting Name ${mail}`)
