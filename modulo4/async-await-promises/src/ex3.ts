import Axios from "axios";
import { baseURL } from "./baseURL";

type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await Axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

const main3 = async() =>{
    console.log(await getSubscribers())
}