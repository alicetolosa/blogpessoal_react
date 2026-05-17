import axios from "axios";

const api = axios.create ({
    baseURL: import.meta.env.VITE_API_URL
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

//  responsável por executar todas as operações de busca de recursos na aplicação, como Temas, Postagens
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

//Cadastrar novos objetos 
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

//Atualizar objetos existentes 
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

//deletar tema 
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}