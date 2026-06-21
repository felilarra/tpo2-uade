// ─── MODAL PARA DONAR CON CALCULADORA DE IMPACTO ─────────────────────────

// =====================================
// 1. CREAR EL OVERLAY
// =====================================

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

// =====================================
// 2. DEFINIR EL HTML DEL MODAL
// =====================================

// Se agregan dos divs contenedores (uno para el form, otro para el agradecimiento de la donación)
modalOverlay.innerHTML = `
<div class="modal">
    <button class="close-btn" onclick="closeModal()">
        ✕
    </button>
    
    <div id="contenidoFormulario">
        <h2>Salvá huellas</h2>
        <p>Tu ayuda permite seguir salvando huellas y brindando un hogar a los animales que lo necesitan.</p>
        <form id="formDonar">
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" required>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="correo@email.com" required>
            </div>

            <div class="form-group">
                <label>Monto a donar</label>
                <select id="selectMonto" required>
                    <option value="2000">$2.000</option>
                    <option value="5000">$5.000</option>
                    <option value="15000">$15.000</option>
                    <option value="50000">$50.000</option>
                </select>
                <p id="descripcionMonto" class="descripcion-monto"></p>
            </div>

            <button type="submit" class="submit-btn" style="font-family: 'DM Sans', sans-serif;">
                Donar ahora
            </button>
        </form>
    </div>

    <div id="contenidoExito" style="display: none; text-align: center; padding: 15px 0;">
        <h2 style="color: #198754; margin-bottom: 15px;">¡Gracias por tu donación!</h2>
        <p style="margin-bottom: 25px;">Tu aporte nos permite seguir salvando huellas y brindando un hogar a los animales que lo necesitan.</p>
        <button class="submit-btn" onclick="closeModal()">Volver</button>
    </div>
</div>
`;

// =====================================
// 3. AGREGAR AL DOM
// =====================================

document.body.appendChild(modalOverlay);

// =====================================
// 4. DEFINIR LAS DESCRIPCIONES POR MONTO
// =====================================

const descripciones = {
    "2000": "Cubre una sesión de vacunación para un cachorro recién rescatado.",
    "5000": "Alimenta a un animal durante 30 días mientras espera su familia adoptante.",
    "15000": "Financia la castración completa de un animal.",
    "50000": "Cubre una cirugía de emergencia para un animal accidentado o enfermo."
};

// =====================================
// 5. AGREGAR FUNCIONALIDAD AL SELECT
// =====================================

const selectMonto = document.getElementById('selectMonto');
const descripcionMonto = document.getElementById('descripcionMonto');

// Mostrar descripción al cargar (con el primer valor)
descripcionMonto.textContent = descripciones[selectMonto.value];

// Escuchar cambios en el select
selectMonto.addEventListener('change', function() {
    descripcionMonto.textContent = descripciones[this.value];
});

// =====================================
// 6. MOSTRAR MODAL Y RESTAURAR ESTADO
// =====================================

function openModal() {
    modalOverlay.classList.add('active');
    
    // Cada vez que se abre, nos aseguramos de mostrar el form y esconder el mensaje de éxito
    document.getElementById('contenidoFormulario').style.display = 'block';
    document.getElementById('contenidoExito').style.display = 'none';
    
    // Se restablecen los campos del formulario para que queden vacíos
    document.getElementById('formDonar').reset();
    
    // Se restaura el texto de la descripción al valor inicial del select
    descripcionMonto.textContent = descripciones[selectMonto.value];
}

// =====================================
// 7. OCULTAR MODAL
// =====================================

function closeModal() {
    modalOverlay.classList.remove('active');
}

// =====================================
// 8. ENVIAR FORMULARIO (MOSTRAR ÉXITO)
// =====================================

const formularioDonar = document.getElementById('formDonar');

formularioDonar.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Se oculta el div del formulario y se muestra el div de éxito
    document.getElementById('contenidoFormulario').style.display = 'none';
    document.getElementById('contenidoExito').style.display = 'block';
});