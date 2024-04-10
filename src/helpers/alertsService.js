import Swal from 'sweetalert2'

export const showSweetLoading = (time = false) => {
    Swal.showLoading()

    if (time) {
        setTimeout(() => {
            Swal.clickConfirm()
        }, time)
    }
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
            timer: timer
        }).then(() => {
            resolve(true)
        })
    })
}
