import Swal from 'sweetalert2';

export const validateRegisterForm = (name, email, password, confirmPassword) => {
    // Email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu nombre.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    if (!email) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu correo electrónico.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Correo electrónico inválido',
            text: 'Por favor, ingresa un correo electrónico válido.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
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

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'warning',
            title: 'Contraseñas no coinciden',
            text: 'Por favor, asegúrate de que las contraseñas coincidan.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    return true;
};
