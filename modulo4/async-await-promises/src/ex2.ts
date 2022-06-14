import { baseURL } from './baseURL';
import Axios from "axios";

const getSubscribers = async (): Promise<any[]> => {
    const response = await Axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

const main2 = async() =>{
    console.log(await getSubscribers())
}

main2()