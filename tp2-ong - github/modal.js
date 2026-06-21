// ─── MODAL PARA DONAR CON CALCULADORA DE IMPACTO ─────────────────────────

// =====================================
// 1. CREAR EL OVERLAY
// =====================================

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

// =====================================
// 2. DEFINIR EL HTML DEL MODAL
// =====================================

modalOverlay.innerHTML = `

<div class="modal" style>
    <button class="close-btn" onclick="closeModal()">
        ✕
    </button>
    <h2>Salvá huellas</h2>
    <p>Tu ayuda permite seguir salvando huellas y brindando un hogar a los animales que lo necesitan.</p>
    <form>

        <div class="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="correo@email.com">
        </div>

        <div class="form-group">
            <label>Monto a donar</label>
            <select id="selectMonto">
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
// 6. MOSTRAR MODAL
// =====================================

function openModal() {
    modalOverlay.classList.add('active');
}

// =====================================
// 7. OCULTAR MODAL
// =====================================

function closeModal() {
    modalOverlay.classList.remove('active');
}