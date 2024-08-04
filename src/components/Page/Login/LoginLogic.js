import Swal from 'sweetalert2';

export const validateLoginForm = (email, password) => {
    if (!email) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu correo electrónico.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff', // Ajuste opcional del color del botón
        });
        return false;
    }

    if (!password) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu contraseña.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    return true;
};
