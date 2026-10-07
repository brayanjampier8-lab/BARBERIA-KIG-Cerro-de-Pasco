// =====================================================
// KING BARBERS SCHOOL
// JAVASCRIPT - FASE 4
// =====================================================


// =====================================================
// 1. CARRUSEL DEL HERO
// =====================================================

const slides = document.querySelectorAll('.hero-slider .slide');

if (slides.length > 0) {

    let currentSlide = 0;

    // Mostrar la primera imagen
    slides[currentSlide].classList.add('active');

    setInterval(() => {

        slides[currentSlide].classList.remove('active');

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add('active');

    }, 3000);
}


// =====================================================
// 2. MENÚ RESPONSIVE
// =====================================================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

    // Cerrar menú al hacer clic en un enlace
    const enlacesMenu = navLinks.querySelectorAll('a');

    enlacesMenu.forEach(enlace => {

        enlace.addEventListener('click', () => {

            navLinks.classList.remove('active');

        });

    });
}


// =====================================================
// 3. BOTÓN VOLVER ARRIBA
// =====================================================

const btnVolverArriba = document.getElementById('btnVolverArriba');

window.addEventListener('scroll', () => {

    if (!btnVolverArriba) return;

    if (window.scrollY > 300) {

        btnVolverArriba.style.display = 'block';

    } else {

        btnVolverArriba.style.display = 'none';

    }

});

if (btnVolverArriba) {

    btnVolverArriba.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}


// =====================================================
// 4. FORMULARIO DE CONTACTO
// VALIDACIÓN PERSONALIZADA
// =====================================================

const formCita = document.getElementById('formCita');

if (formCita) {

    formCita.addEventListener('submit', (e) => {

        e.preventDefault();

        // Obtener campos
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const mensaje = document.getElementById('mensaje');

        // Buscar mensaje de error
        let errores = [];

        // Validar nombre
        if (nombre && nombre.value.trim() === '') {

            errores.push('Ingresa tu nombre.');

        }

        // Validar correo
        if (email && email.value.trim() === '') {

            errores.push('Ingresa tu correo electrónico.');

        } else if (email) {

            const formatoEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!formatoEmail.test(email.value.trim())) {

                errores.push('Ingresa un correo electrónico válido.');

            }

        }

        // Validar teléfono
        if (telefono && telefono.value.trim() === '') {

            errores.push('Ingresa tu número de teléfono.');

        } else if (telefono) {

            const soloNumeros = /^[0-9]+$/;

            if (!soloNumeros.test(telefono.value.trim())) {

                errores.push('El teléfono debe contener solamente números.');

            }

        }

        // Validar mensaje
        if (mensaje && mensaje.value.trim() === '') {

            errores.push('Escribe un mensaje.');

        }


        // =================================================
        // MOSTRAR ERRORES
        // =================================================

        const mensajeExito =
            document.getElementById('mensajeExito');

        if (errores.length > 0) {

            if (mensajeExito) {

                mensajeExito.innerHTML =
                    '❌ <strong>Revisa los siguientes datos:</strong><br>' +
                    errores.join('<br>');

                mensajeExito.style.display = 'block';

            }

            return;
        }


        // =================================================
        // MENSAJE DE CONFIRMACIÓN
        // =================================================

        if (mensajeExito) {

            mensajeExito.innerHTML =
                '✅ <strong>¡Registro enviado correctamente!</strong><br>' +
                'Gracias por registrarte en King Barbers School. ' +
                'Nos pondremos en contacto contigo pronto.';

            mensajeExito.style.display = 'block';

        }

        // Limpiar formulario
        formCita.reset();


        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {

            if (mensajeExito) {

                mensajeExito.style.display = 'none';
                mensajeExito.innerHTML = '';

            }

        }, 5000);

    });

}


// =====================================================
// 5. EFECTO PARA EVITAR ENVÍO CON CAMPOS VACÍOS
// =====================================================

const inputs = document.querySelectorAll(
    '#formCita input, #formCita textarea'
);

inputs.forEach(input => {

    input.addEventListener('input', () => {

        input.style.borderColor = '';

    });

});


// =====================================================
// FIN DEL JAVASCRIPT
// =====================================================