<template>
    <div class="dashboard">
        <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
            <div class="sidebar-header">
                <router-link to="/dashboard" class="sidebar-brand">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24"
                        height="24">
                        <path d="M22 16.5H2l4-9h12l4 9z" />
                        <path d="M6 16.5l1.5 3h9l1.5-3" />
                        <path d="M12 7.5V4m0 0l-2 2m2-2l2 2" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Quetzal</span>
                </router-link>
                <button class="collapse-btn" @click="sidebarCollapsed = !sidebarCollapsed">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            </div>
            <nav class="sidebar-nav">
                <router-link to="/dashboard" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Dashboard</span>
                </router-link>
                <router-link to="/rutas" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <circle cx="6" cy="19" r="3" />
                        <circle cx="18" cy="5" r="3" />
                        <path d="M6 16V7a6 6 0 0 1 6-6" />
                        <path d="M18 8v9a6 6 0 0 1-6 6" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Rutas</span>
                </router-link>
                <router-link to="/aviones" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M22 16.5H2l4-9h12l4 9z" />
                        <path d="M6 16.5l1.5 3h9l1.5-3" />
                        <path d="M12 7.5V4m0 0l-2 2m2-2l2 2" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Aviones</span>
                </router-link>
                <router-link to="/vuelos" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Vuelos</span>
                </router-link>
                <router-link to="/tripulacion" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Tripulación</span>
                </router-link>
                <router-link to="/pasajeros" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Pasajeros</span>
                </router-link>
                <router-link to="/reservas" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Reservas</span>
                </router-link>
                <router-link to="/grupos" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <line x1="19" y1="8" x2="19" y2="14" />
                        <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Grupos</span>
                </router-link>
            </nav>
            <div class="sidebar-footer" v-if="!sidebarCollapsed">
                <div class="user-info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32"
                        height="32">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <div>
                        <span class="user-name">{{ usuario?.nombre }}</span>
                        <span class="user-role">Administrador</span>
                    </div>
                </div>
                <button class="btn-logout" @click="handleLogout">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18"
                        height="18">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Cerrar Sesión
                </button>
            </div>
        </aside>

        <main class="main-content">
            <header class="topbar">
                <h1 class="page-title">Tripulación</h1>
                <div class="session-timer" :class="{ 'timer-warning': timerWarning }">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14"
                        height="14">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {{ tiempoSesion }}
                </div>
                <div class="topbar-right">
                    <span class="welcome-text">{{ bienvenida }}, <strong>{{ usuario?.nombre }}</strong></span>
                </div>
            </header>

            <div class="page-header animate-fade-up">
                <div class="page-header-left">
                    <div class="page-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="26"
                            height="26">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="section-title">Gestión de Tripulación</h2>
                        <p class="page-subtitle">Tripulantes registrados en el sistema</p>
                    </div>
                </div>
                <button class="btn-primary" @click="abrirModalCrear">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Nuevo Tripulante
                </button>
            </div>

            <div class="table-card animate-fade-up">
                <div class="table-responsive">
                    <table id="tablaTripulacion" class="quetzal-table" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Nacionalidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal-overlay" v-if="mostrarModal" @click.self="cerrarModal">
                <div class="modal-box animate-fade-up">
                    <div class="modal-header">
                        <div class="modal-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22"
                                height="22">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                            </svg>
                        </div>
                        <h2 class="modal-title">{{ modoEdicion ? 'Editar Tripulante' : 'Nuevo Tripulante' }}</h2>
                        <button class="modal-close" @click="cerrarModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"
                                height="20">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Nombre readonly en edición -->
                        <div class="form-row" v-if="modoEdicion">
                            <div class="form-group">
                                <label>Nombre <span class="label-readonly">— no editable</span></label>
                                <div class="input-wrapper input-readonly">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <span class="readonly-text">{{ form.nombre }} {{ form.primer_apellido }}{{
                                        form.segundo_apellido ? ' ' + form.segundo_apellido : '' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Campos editables al crear -->
                        <div v-if="!modoEdicion">
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <div class="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            width="16" height="16">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input type="text" v-model="form.nombre" placeholder="Roberto" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Primer Apellido</label>
                                    <div class="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            width="16" height="16">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input type="text" v-model="form.primer_apellido" placeholder="García" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Segundo Apellido</label>
                                    <div class="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            width="16" height="16">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input type="text" v-model="form.segundo_apellido" placeholder="Opcional" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Nacionalidad</label>
                                    <div class="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            width="16" height="16">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path
                                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        <input type="text" v-model="form.nacionalidad" placeholder="Mexicana" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Rol</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M20 21a8 8 0 1 0-16 0" />
                                    </svg>
                                    <select v-model="form.rol">
                                        <option value="" disabled>Selecciona un rol</option>
                                        <option value="piloto">Piloto</option>
                                        <option value="copiloto">Copiloto</option>
                                        <option value="auxiliar">Auxiliar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="error-msg" v-if="error">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16"
                                height="16">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {{ error }}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-secondary" @click="cerrarModal">Cancelar</button>
                        <button class="btn-primary" @click="guardarTripulante" :disabled="loading">
                            <svg v-if="!loading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                width="16" height="16">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {{ loading ? 'Guardando...' : (modoEdicion ? 'Actualizar' : 'Crear Tripulante') }}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getTripulacion, crearTripulacion, actualizarTripulacion, eliminarTripulacion, logoutUsuario } from '../services/api'

const router = useRouter()
const usuario = ref(null)
const sidebarCollapsed = ref(false)
const tripulacion = ref([])
const mostrarModal = ref(false)
const modoEdicion = ref(false)
const loading = ref(false)
const error = ref('')
const editandoId = ref(null)
const tiempoSesion = ref('5:00')
const timerWarning = ref(false)

const bienvenida = computed(() => {
    if (!usuario.value) return 'Bienvenido'
    return usuario.value.genero === 'femenino' ? 'Bienvenida' : 'Bienvenido'
})

const formVacio = () => ({ nombre: '', primer_apellido: '', segundo_apellido: '', nacionalidad: '', rol: '' })
const form = ref(formVacio())

const onSessionTimer = (e) => {
    tiempoSesion.value = e.detail
    const [m, s] = e.detail.split(':').map(Number)
    timerWarning.value = m === 0
    if (m === 0 && s === 0) {
        window.Swal.fire({
            icon: 'warning', title: '¡Sesión expirada!',
            text: 'Tu sesión ha terminado. Por favor inicia sesión nuevamente.',
            background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c'
        }).then(() => { localStorage.removeItem('usuario'); router.push('/') })
    }
}

onUnmounted(() => window.removeEventListener('session-timer', onSessionTimer))

let tablaInstance = null

const inicializarTabla = () => {
    if (tablaInstance) { tablaInstance.destroy(); tablaInstance = null }
    nextTick(() => {
        tablaInstance = window.$('#tablaTripulacion').DataTable({
            data: tripulacion.value,
            columns: [
                { data: 'id_tripulacion' },
                { data: null, render: t => `${t.nombre} ${t.primer_apellido}${t.segundo_apellido ? ' ' + t.segundo_apellido : ''}` },
                { data: 'rol', render: r => r.charAt(0).toUpperCase() + r.slice(1) },
                { data: 'nacionalidad' },
                {
                    data: 'id_tripulacion', orderable: false,
                    render: id => `
                        <div class="action-btns">
                            <button class="btn-view" data-id="${id}" title="Ver vuelos">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </button>
                            <button class="btn-edit" data-id="${id}" title="Editar">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                </svg>
                            </button>
                            <button class="btn-delete" data-id="${id}" title="Eliminar">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
                                    <polyline points="3 6 5 6 21 6"/>
                                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                                    <path d="M10 11v6M14 11v6"/>
                                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                                </svg>
                            </button>
                        </div>`
                }
            ],
            language: { url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-MX.json' },
            pageLength: 10,
            dom: '<"dt-top"lf>rt<"dt-bottom"ip>',
            drawCallback: () => {
                document.querySelectorAll('.btn-view').forEach(btn => {
                    btn.onclick = () => verDetalleTripulante(Number(btn.dataset.id))
                })
                document.querySelectorAll('.btn-edit').forEach(btn => {
                    btn.onclick = () => abrirModalEditar(Number(btn.dataset.id))
                })
                document.querySelectorAll('.btn-delete').forEach(btn => {
                    btn.onclick = () => confirmarEliminar(Number(btn.dataset.id))
                })
            }
        })
    })
}

const verDetalleTripulante = async (id) => {
    const miembro = tripulacion.value.find(t => t.id_tripulacion === id)
    if (!miembro) return
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/vuelos`, { credentials: 'include' })
        const vuelos = await res.json()
        const vuelosMiembro = vuelos.filter(v =>
            (v.Tripulacions || v.Tripulacion || []).some(t => Number(t.id_tripulacion) === Number(id))
        )
        const htmlVuelos = vuelosMiembro.length > 0
            ? vuelosMiembro.map(v => `
                <div style="padding:0.6rem;background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.15);border-radius:8px;margin-bottom:0.5rem;">
                    <strong style="color:#c9a84c;">${v.codigo_vuelo}</strong>
                    <span style="color:#b89a8a;font-size:0.8rem;"> — ${v.Ruta?.origen?.codigo_iata || '?'} → ${v.Ruta?.destino?.codigo_iata || '?'}</span><br>
                    <small style="color:#b89a8a;">Salida: ${new Date(v.fecha_salida).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })}</small>
                    <span style="margin-left:0.5rem;padding:0.15rem 0.5rem;border-radius:10px;font-size:0.7rem;font-weight:700;background:rgba(76,148,201,0.15);color:#7ab8f5;">${v.estado}</span>
                </div>`).join('')
            : '<p style="color:#b89a8a;text-align:center;">Sin vuelos asignados</p>'

        window.Swal.fire({
            title: `${miembro.nombre} ${miembro.primer_apellido}`,
            html: `
                <div style="text-align:left;">
                    <p style="color:#b89a8a;margin-bottom:0.25rem;"><span style="color:#c9a84c;font-weight:700;">Rol:</span> ${miembro.rol.charAt(0).toUpperCase() + miembro.rol.slice(1)}</p>
                    <p style="color:#b89a8a;margin-bottom:1rem;"><span style="color:#c9a84c;font-weight:700;">Nacionalidad:</span> ${miembro.nacionalidad}</p>
                    <p style="color:#c9a84c;font-weight:700;font-size:0.75rem;letter-spacing:1px;text-transform:uppercase;margin-bottom:0.5rem;">Vuelos asignados</p>
                    <div style="max-height:250px;overflow-y:auto;">${htmlVuelos}</div>
                </div>`,
            background: '#1a0c10', color: '#f0e8e0',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#4a3020',
            width: '520px'
        })
    } catch { console.error('Error al cargar detalle') }
}

const cargarTripulacion = async () => {
    try {
        const res = await getTripulacion()
        tripulacion.value = res.data
        inicializarTabla()
    } catch { console.error('Error al cargar tripulación') }
}

const abrirModalCrear = () => {
    modoEdicion.value = false
    editandoId.value = null
    form.value = formVacio()
    error.value = ''
    mostrarModal.value = true
}

const abrirModalEditar = (id) => {
    const miembro = tripulacion.value.find(t => t.id_tripulacion === id)
    if (!miembro) return
    modoEdicion.value = true
    editandoId.value = id
    error.value = ''
    form.value = {
        nombre: miembro.nombre,
        primer_apellido: miembro.primer_apellido,
        segundo_apellido: miembro.segundo_apellido || '',
        nacionalidad: miembro.nacionalidad,
        rol: miembro.rol
    }
    mostrarModal.value = true
}

const cerrarModal = () => { mostrarModal.value = false }

const guardarTripulante = async () => {
    const regexNombre = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+){0,2}$/

    if (!modoEdicion.value) {
        if (!form.value.nombre.trim()) { error.value = 'El nombre es obligatorio.'; return }
        if (!regexNombre.test(form.value.nombre.trim())) { error.value = 'El nombre debe iniciar con mayúscula, solo letras. Ej: Roberto'; return }
        if (!form.value.primer_apellido.trim()) { error.value = 'El primer apellido es obligatorio.'; return }
        if (!regexNombre.test(form.value.primer_apellido.trim())) { error.value = 'El apellido debe iniciar con mayúscula. Ej: García'; return }
        if (form.value.segundo_apellido.trim() && !regexNombre.test(form.value.segundo_apellido.trim())) { error.value = 'El segundo apellido debe iniciar con mayúscula.'; return }
        if (!form.value.nacionalidad.trim()) { error.value = 'La nacionalidad es obligatoria.'; return }
    }

    if (!form.value.rol) { error.value = 'Debes seleccionar un rol.'; return }
    error.value = ''
    loading.value = true
    try {
        if (modoEdicion.value) {
            await actualizarTripulacion(editandoId.value, { rol: form.value.rol })
            window.Swal.fire({ icon: 'success', title: '¡Actualizado!', text: 'Tripulante actualizado correctamente.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        } else {
            await crearTripulacion(form.value)
            window.Swal.fire({ icon: 'success', title: '¡Creado!', text: 'Tripulante creado exitosamente.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        }
        cerrarModal()
        await cargarTripulacion()
    } catch (err) {
        error.value = err.response?.data?.message || 'Error al guardar el tripulante.'
    } finally {
        loading.value = false
    }
}

const confirmarEliminar = async (id) => {
    const result = await window.Swal.fire({
        title: '¿Eliminar tripulante?', text: 'Esta acción no se puede deshacer.',
        icon: 'warning', showCancelButton: true,
        confirmButtonText: 'Sí, eliminar', cancelButtonText: 'Cancelar',
        background: '#1a0c10', color: '#f0e8e0',
        confirmButtonColor: '#9b1c2e', cancelButtonColor: '#4a3020'
    })
    if (!result.isConfirmed) return
    try {
        await eliminarTripulacion(id)
        window.Swal.fire({ icon: 'success', title: 'Eliminado', text: 'El tripulante fue eliminado.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        await cargarTripulacion()
    } catch (err) {
        window.Swal.fire({ icon: 'error', title: 'Error', text: err.response?.data?.message || 'No se pudo eliminar.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    }
}

const handleLogout = async () => {
    await logoutUsuario()
    localStorage.removeItem('usuario')
    router.push('/')
}

onMounted(async () => {
    const data = localStorage.getItem('usuario')
    if (!data) { router.push('/login'); return }
    usuario.value = JSON.parse(data)
    window.addEventListener('session-timer', onSessionTimer)
    await cargarTripulacion()
})
</script>

<style scoped>
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-up {
    animation: fadeUp 0.5s ease forwards;
}

.dashboard {
    display: flex;
    min-height: 100vh;
    background-color: #0f0508;
    color: #f0e8e0;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

.sidebar {
    width: 280px;
    background: #1a0c10;
    border-right: 1px solid rgba(201, 168, 76, 0.15);
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
}

.sidebar.collapsed {
    width: 75px;
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 1.25rem;
    border-bottom: 1px solid rgba(201, 168, 76, 0.1);
}

.sidebar-brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: #c9a84c;
    font-size: 1.4rem;
    font-weight: 800;
}

.collapse-btn {
    background: transparent;
    border: none;
    color: #b89a8a;
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    transition: color 0.2s;
}

.collapse-btn:hover {
    color: #c9a84c;
}

.sidebar-nav {
    flex: 1;
    padding: 1.25rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    overflow-y: auto;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    text-decoration: none;
    color: #b89a8a;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s;
}

.nav-item:hover {
    background: rgba(201, 168, 76, 0.08);
    color: #c9a84c;
}

.nav-item.router-link-active {
    background: rgba(201, 168, 76, 0.12);
    color: #c9a84c;
    font-weight: 700;
}

.nav-item svg {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
}

.sidebar-footer {
    padding: 1.25rem;
    border-top: 1px solid rgba(201, 168, 76, 0.1);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: #c9a84c;
}

.user-name {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
}

.user-role {
    display: block;
    font-size: 0.8rem;
    color: #b89a8a;
}

.btn-logout {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(107, 15, 26, 0.3);
    border: 1px solid rgba(107, 15, 26, 0.5);
    color: #f0a0a0;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.2s;
    font-family: inherit;
}

.btn-logout:hover {
    background: rgba(107, 15, 26, 0.6);
}

.main-content {
    flex: 1;
    padding: 1.5rem;
    overflow-y: auto;
    min-width: 0;
}

.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(201, 168, 76, 0.1);
}

.page-title {
    font-size: 1.6rem;
    font-weight: 800;
    color: #fff;
    margin: 0;
}

.welcome-text {
    color: #b89a8a;
    font-size: 0.9rem;
}

.welcome-text strong {
    color: #c9a84c;
}

.session-timer {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(201, 168, 76, 0.08);
    border: 1px solid rgba(201, 168, 76, 0.2);
    border-radius: 20px;
    padding: 0.3rem 0.8rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: #c9a84c;
    font-family: monospace;
    transition: all 0.3s;
}

.timer-warning {
    background: rgba(155, 28, 46, 0.15);
    border-color: rgba(155, 28, 46, 0.4);
    color: #f08080;
}

.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.75rem;
}

.page-header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.page-icon {
    width: 48px;
    height: 48px;
    background: rgba(201, 168, 76, 0.12);
    border: 1px solid rgba(201, 168, 76, 0.3);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a84c;
}

.section-title {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
    color: #fff;
}

.page-subtitle {
    font-size: 0.85rem;
    color: #b89a8a;
    margin: 0;
}

.btn-primary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #c9a84c;
    color: #4a0a12;
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.7rem 1.25rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
}

.btn-primary:hover:not(:disabled) {
    background: #f0c96b;
    transform: translateY(-1px);
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-secondary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    color: #b89a8a;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.7rem 1.25rem;
    border-radius: 8px;
    border: 1px solid rgba(201, 168, 76, 0.2);
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
}

.btn-secondary:hover {
    border-color: #c9a84c;
    color: #c9a84c;
}

.table-card {
    background: #1a0c10;
    border: 1px solid rgba(201, 168, 76, 0.15);
    border-radius: 14px;
    padding: 1.5rem;
}

.table-responsive {
    overflow-x: auto;
}

:deep(.quetzal-table) {
    color: #f0e8e0 !important;
    border-collapse: collapse;
    width: 100%;
}

:deep(.quetzal-table thead th) {
    background: rgba(201, 168, 76, 0.08) !important;
    color: #c9a84c !important;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(201, 168, 76, 0.2) !important;
    padding: 0.9rem 1rem !important;
}

:deep(.quetzal-table tbody tr) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
}

:deep(.quetzal-table tbody tr:hover td) {
    background: rgba(201, 168, 76, 0.05) !important;
}

:deep(.quetzal-table tbody td) {
    padding: 0.85rem 1rem !important;
    font-size: 0.9rem;
    color: #f0e8e0 !important;
    border: none !important;
}

:deep(.dataTables_wrapper .dataTables_length label),
:deep(.dataTables_wrapper .dataTables_filter label),
:deep(.dataTables_wrapper .dataTables_info),
:deep(.dataTables_wrapper .dataTables_paginate) {
    color: #b89a8a !important;
    font-size: 0.85rem;
}

:deep(.dataTables_wrapper .dataTables_filter input),
:deep(.dataTables_wrapper .dataTables_length select) {
    background: rgba(255, 255, 255, 0.04) !important;
    border: 1px solid rgba(201, 168, 76, 0.2) !important;
    color: #f0e8e0 !important;
    border-radius: 6px;
    padding: 0.3rem 0.6rem;
    outline: none;
}

:deep(.dataTables_wrapper .dataTables_filter input:focus) {
    border-color: #c9a84c !important;
}

:deep(.dt-top) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
}

:deep(.dt-bottom) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
}

:deep(.paginate_button) {
    padding: 0.35rem 0.7rem !important;
    border-radius: 6px !important;
    cursor: pointer;
    color: #b89a8a !important;
    border: none !important;
    background: transparent !important;
}

:deep(.paginate_button.current),
:deep(.paginate_button:hover) {
    background: rgba(201, 168, 76, 0.15) !important;
    color: #c9a84c !important;
}

:deep(.paginate_button.disabled) {
    opacity: 0.3 !important;
    cursor: default !important;
}

:deep(.action-btns) {
    display: flex;
    gap: 0.5rem;
}

:deep(.btn-edit),
:deep(.btn-delete) {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
}

:deep(.btn-view) {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    background: rgba(201, 168, 76, 0.12);
    color: #c9a84c;
}

:deep(.btn-view:hover) {
    background: rgba(201, 168, 76, 0.25);
}

:deep(.btn-edit) {
    background: rgba(201, 168, 76, 0.12);
    color: #c9a84c;
}

:deep(.btn-edit:hover) {
    background: rgba(201, 168, 76, 0.25);
}

:deep(.btn-delete) {
    background: rgba(155, 28, 46, 0.12);
    color: #f08080;
}

:deep(.btn-delete:hover) {
    background: rgba(155, 28, 46, 0.3);
}

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 5, 8, 0.85);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050;
    padding: 1rem;
}

.modal-box {
    background: #1a0c10;
    border: 1px solid rgba(201, 168, 76, 0.2);
    border-radius: 16px;
    width: 100%;
    max-width: 580px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 1.5rem 0;
}

.modal-icon {
    width: 40px;
    height: 40px;
    background: rgba(201, 168, 76, 0.12);
    border: 1px solid rgba(201, 168, 76, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a84c;
    flex-shrink: 0;
}

.modal-title {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
    flex: 1;
}

.modal-close {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #b89a8a;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    padding: 0;
}

.modal-close:hover {
    color: #f08080;
}

.modal-body {
    padding: 1.5rem;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 0 1.5rem 1.5rem;
}

.form-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.form-row .form-group {
    flex: 1;
    margin-bottom: 0;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 0.45rem;
}

.input-wrapper {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(201, 168, 76, 0.2);
    border-radius: 8px;
    padding: 0 0.9rem;
    gap: 0.6rem;
    transition: border-color 0.2s;
}

.input-wrapper:focus-within {
    border-color: #c9a84c;
}

.input-wrapper svg {
    color: #c9a84c;
    flex-shrink: 0;
}

.input-wrapper input,
.input-wrapper select {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #f0e8e0;
    font-size: 0.9rem;
    padding: 0.75rem 0;
    font-family: inherit;
}

.input-wrapper input::placeholder {
    color: #6b5a5a;
}

.input-wrapper select option {
    background: #1a0c10;
}

.input-readonly {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(201, 168, 76, 0.1);
    cursor: default;
}

.readonly-text {
    font-size: 0.9rem;
    color: #b89a8a;
    padding: 0.75rem 0;
}

.label-readonly {
    font-size: 0.65rem;
    color: #6b5a5a;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    margin-left: 0.3rem;
}

.error-msg {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(107, 15, 26, 0.3);
    border: 1px solid rgba(107, 15, 26, 0.5);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: #f0a0a0;
    font-size: 0.88rem;
    margin-top: 0.5rem;
}

@media (max-width: 540px) {
    .form-row {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .dashboard {
        flex-direction: column;
    }

    .sidebar {
        width: 100% !important;
        height: auto;
        position: relative;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .sidebar-header {
        flex: 1;
        padding: 1rem;
        border-bottom: none;
        border-right: 1px solid rgba(201, 168, 76, 0.1);
    }

    .sidebar-nav {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0.5rem;
        gap: 0.25rem;
        flex: 2;
    }

    .nav-item span {
        display: none;
    }

    .nav-item {
        padding: 0.6rem;
        justify-content: center;
    }

    .sidebar-footer {
        display: none;
    }

    .topbar {
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .welcome-text {
        font-size: 0.8rem;
    }

    .page-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .table-card {
        padding: 0.5rem;
    }

    :deep(.quetzal-table) {
        font-size: 0.75rem !important;
    }

    :deep(.quetzal-table thead th) {
        padding: 0.5rem 0.4rem !important;
        font-size: 0.65rem !important;
    }

    :deep(.quetzal-table tbody td) {
        padding: 0.5rem 0.4rem !important;
        font-size: 0.75rem !important;
    }

    :deep(.action-btns) {
        flex-direction: column;
        gap: 0.25rem;
    }

    :deep(.btn-edit),
    :deep(.btn-delete) {
        width: 26px;
        height: 26px;
    }
}
</style>