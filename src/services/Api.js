import axios from "axios";

const Api = axios.create({
    baseURL: "https://suap.ifrn.edu.br/api/v2/",
});

export default Api;