import Swal from 'sweetalert2'
import { axiosPostRequest } from './helpers'

export const showSweetLoading = (title = '', timer = 0) => {
    Swal.fire({
        title: title,
        timer: timer,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

export const hideSweetLoading = () => {
    Swal.clickConfirm()
}

export const sweetMessage = (title = '', text = '', icon, timer = 0) => {
    return new Promise((resolve) => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon ?? 'info',
            showConfirmButton: timer == 0,
            confirmButtonColor: '#f63c3f',
            timer: timer
        }).then(() => {
            resolve(true)
        })
    })
}

export const sweetMessageForm = (url = null, title, parameter, type = 'text') => {
    return new Promise((resolve) => {
        Swal.fire({
            title: title,
            input: type,
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: false,
            confirmButtonText: 'Submit',
            confirmButtonColor: '#f63c3f',
            showLoaderOnConfirm: true,
            preConfirm: async (param) => {
                try {
                    if (url) {
                        const data = {
                            [`${parameter}`]: param
                        }
                        const response = await axiosPostRequest(url, data, {})
                        resolve(response)
                    } else {
                        resolve(param)
                    }
                } catch (error) {
                    Swal.showValidationMessage(`
                Request failed: ${error.response.data.message}
            `)
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    })
}

export const sweetChangePassword = (code) => {
    return new Promise((resolve) => {
        Swal.fire({
            title: 'Password Recovery',
            html:
                '<input id="password1" class="swal2-input" type="password" placeholder="Password">' +
                '<input id="password2" class="swal2-input" type="password" placeholder="Confirm password">',
            focusConfirm: false,
            showCancelButton: false,
            confirmButtonText: 'Submit',
            confirmButtonColor: '#f63c3f',
            preConfirm: async () => {
                try {
                    const password1 = Swal.getPopup().querySelector('#password1').value
                    const password2 = Swal.getPopup().querySelector('#password2').value

                    const data = {
                        token: code,
                        password: password1,
                        password_confirmation: password2
                    }
                    const response = await axiosPostRequest('/password/reset', data, {})
                    resolve(response)
                } catch (error) {
                    console.log(error)
                    Swal.showValidationMessage(`
                        Request failed: ${error.response.data.message}
                    `)
                }
            }
        })
    })
}
