import Axios from "axios";
import { baseURL } from "./baseURL";


type user = {
	id: string;
	name: string;
	email: string;
}

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return Axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };

const main = async() =>{
    console.log(await sendNotifications([{ id: "001", name: "Bruno", email: "brunosp49@gmailc.om"}], "oi cara de boi"))
}