import React from "react";
import axios from "../services/api/axios_conf";
import {useEffect} from "react";
import {useState} from "react";
import {setChatInfo} from "../store/actions/chat";
import { useDispatch } from 'react-redux';

function Join(props){
  const dispatch = useDispatch()
  const [chatTypes, setchatTypes] = useState([]);
  useEffect(() => {
      // Обновляем заголовок документа с помощью API браузера
      axios.get('/chat-types')
      .then(res => {
        const chatTypes = res.data;
        setchatTypes( chatTypes );
      });
    }, []);

const handleCLick = (e) => {
  axios.post('/client/chat/join', {type:e.target.id}).then(data => {
      dispatch(setChatInfo(data));

     props.history.push('/chat');
    //
  }).catch(err =>{
    console.log("Response error");
  })

};

return (
<div>
{
    chatTypes.map((type) => {
        return <button
        name={type.name}
         id={type._id} onClick={handleCLick}>
         {type.name}
         </button>
    })
}
</div>
);
}

export default Join;
