import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2';

export const useVenderProductoLogic = () => {
    const handleGeneratePDF = (reference, formData) => {
        const doc = new jsPDF();
        doc.text('Recibo de Venta', 20, 20);
        doc.text(`Referencia: ${reference}`, 20, 30);
        doc.text(`Precio: ${formData.price}`, 20, 40);
        doc.text(`ID: ${formData.id}`, 20, 50);
        doc.text(`Nombre: ${formData.name}`, 20, 60);
        doc.text(`Marca: ${formData.brand}`, 20, 70);
        doc.save(`Recibo_${reference}.pdf`);
    };

    const handleConfirm = (setReference, formData) => {
        const generatedReference = `REF-${Math.floor(Math.random() * 1000000)}`;
        setReference(generatedReference);

        Swal.fire({
            title: '¿Qué deseas hacer?',
            text: 'Elige una opción:',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Generar Referencia',
            cancelButtonText: 'Pagar',
            confirmButtonColor: '#00aaff',
            cancelButtonColor: '#0077cc',
        }).then((result) => {
            if (result.isConfirmed) {
                handleGeneratePDF(generatedReference, formData);
            } else {
                // Aquí puedes manejar la lógica de pago
                Swal.fire('Pago', 'Redirigiendo al proceso de pago...', 'info');
            }
        });
    };

    const validateFormData = (formData) => {
        const { price, id, name, brand } = formData;

        if (price.trim() === '' || id.trim() === '' || name.trim() === '' || brand.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos deben estar llenos',
            });
            return false;
        }

        if (parseFloat(price) <= 0 || parseInt(id) <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio y el ID deben ser números positivos',
            });
            return false;
        }

        return true;
    };

    return { handleGeneratePDF, handleConfirm, validateFormData };
};
