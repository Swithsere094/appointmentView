import axios from 'axios'

export const axiosPostRequest = (direccion, parametros, headers) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`http://127.0.0.1:8000/api${direccion}`, parametros, {
                headers: headers
            })
            .then(({ data }) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const axiosGetRequest = (direccion, parametros) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://127.0.0.1:8000/api${direccion}`, {
                params: parametros
            })
            .then(({ data }) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
