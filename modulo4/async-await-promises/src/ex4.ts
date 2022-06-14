import Axios from "axios";
import { baseURL } from "./baseURL";

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await Axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

const main4 = async() =>{
    console.log(await createNews("Jovem atira no rato depois de meses", "O jovem cansou de ser enganado pelo habilidoso bichinho", 1589818936000))
}