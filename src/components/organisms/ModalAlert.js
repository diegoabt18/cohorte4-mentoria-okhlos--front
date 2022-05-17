import Swal from 'sweetalert'

export const ModalAlert = function success(text) {
    Swal(
        'Good job!',
        'You clicked the button!',
        text
    )
}

