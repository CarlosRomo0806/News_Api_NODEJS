declare let axios;
const API_KEY = process.env.API_KEY;

export class News{
    getAll(){
        const url: string = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
        return axios.get(url);
    }
};