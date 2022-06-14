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
          for (const user of users) {
          await Axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

const main = async() =>{
    console.log(await sendNotifications([{ id: "001", name: "Bruno", email: "brunosp49@gmailc.om"}], "oi cara de boi"))
}