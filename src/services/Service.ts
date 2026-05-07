import axios from "axios";

const api = axios.create ({
    baseURL: "https://blogpessoal-nest-8ryn.onrender.com"
})

//metodo de acesso a api para cadastrar usuario
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

//metodo de acesso a api para logar usuario
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
