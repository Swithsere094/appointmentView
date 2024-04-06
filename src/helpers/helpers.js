import axios from 'axios'

export const axiosPostRequest = async (direccion, parametros, headers) => {
    const response = await axios.post(
        `http://127.0.0.1:8000/api${direccion}`,
        { params: parametros },
        { headers: headers }
    )
    return response.data
}

export const axiosGetRequest = async (direccion, parametros) => {
    const response = await axios.get(`http://127.0.0.1:8000/api${direccion}`, {
        params: parametros
    })

    return response.data
}
