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
                <router-link to="/vuelos" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Vuelos</span>
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
                <router-link to="/aviones" class="nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20"
                        height="20">
                        <path d="M22 16.5H2l4-9h12l4 9z" />
                        <path d="M6 16.5l1.5 3h9l1.5-3" />
                        <path d="M12 7.5V4m0 0l-2 2m2-2l2 2" />
                    </svg>
                    <span v-if="!sidebarCollapsed">Aviones</span>
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
                <h1 class="page-title">Reservas</h1>
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
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="section-title">Gestión de Reservas</h2>
                        <p class="page-subtitle">Reservas registradas en el sistema</p>
                    </div>
                </div>
                <button class="btn-primary" @click="abrirModalCrear">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Nueva Reserva
                </button>
            </div>

            <div class="table-card animate-fade-up">
                <div class="table-responsive">
                    <table id="tablaReservas" class="quetzal-table" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Pasajero</th>
                                <th>Vuelo</th>
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
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                        </div>
                        <h2 class="modal-title">{{ modoEdicion ? 'Editar Reserva' : 'Nueva Reserva' }}</h2>
                        <button class="modal-close" @click="cerrarModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"
                                height="20">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Pasajero</label>
                                <div class="input-wrapper" v-if="!modoEdicion">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <select v-model="form.id_pasajero">
                                        <option value="" disabled>Selecciona un pasajero</option>
                                        <option v-for="p in pasajeros" :key="p.id_pasajeros" :value="p.id_pasajeros">
                                            {{ p.nombre }} {{ p.primer_apellido }} — {{ p.num_pasaporte }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-wrapper input-readonly" v-else>
                                    <span class="readonly-text">{{ pasajeroNombre }}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Vuelo</label>
                                <div class="input-wrapper" v-if="!modoEdicion">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M22 2L11 13" />
                                        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                                    </svg>
                                    <select v-model="form.id_vuelo">
                                        <option value="" disabled>Selecciona un vuelo</option>
                                        <option v-for="v in vuelos" :key="v.id_vuelo" :value="v.id_vuelo">
                                            {{ v.codigo_vuelo }} — {{ formatFecha(v.fecha_salida) }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-wrapper input-readonly" v-else>
                                    <span class="readonly-text">{{ vueloNombre }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-row" v-if="modoEdicion">
                            <div class="form-group">
                                <label>Estado</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <select v-model="form.estado">
                                        <option value="confirmada">Confirmada</option>
                                        <option value="cancelada">Cancelada</option>
                                        <option value="en_espera">En espera</option>
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
                        <button class="btn-primary" @click="guardarReserva" :disabled="loading">
                            <svg v-if="!loading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                width="16" height="16">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {{ loading ? 'Guardando...' : (modoEdicion ? 'Actualizar' : 'Crear Reserva') }}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getReservas, crearReserva, actualizarReserva, eliminarReserva, getPasajeros, getVuelos, logoutUsuario } from '../services/api'

const router = useRouter()
const usuario = ref(null)
const sidebarCollapsed = ref(false)
const reservas = ref([])
const pasajeros = ref([])
const vuelos = ref([])
const mostrarModal = ref(false)
const modoEdicion = ref(false)
const loading = ref(false)
const error = ref('')
const reservaEditandoId = ref(null)
const tiempoSesion = ref('5:00')
const timerWarning = ref(false)
const pasajerosBase = ref([])
const todasReservas = ref([])
const todosVuelos = ref([])

const form = ref({ id_pasajero: '', id_vuelo: '', estado: 'confirmada', id_grupo: '' })

watch(() => form.value.id_vuelo, (vueloId) => {
    if (!vueloId) {
        pasajeros.value = pasajerosBase.value
        return
    }
    const idsConReserva = todasReservas.value
        .filter(r => r.id_vuelo === vueloId && r.estado === 'confirmada')
        .map(r => r.id_pasajero)
    pasajeros.value = pasajerosBase.value.filter(p => !idsConReserva.includes(p.id_pasajeros))
})

const bienvenida = computed(() => {
    if (!usuario.value) return 'Bienvenido'
    return usuario.value.genero === 'femenino' ? 'Bienvenida' : 'Bienvenido'
})

const pasajeroNombre = computed(() => {
    const p = pasajerosBase.value.find(p => p.id_pasajeros === form.value.id_pasajero)
    return p ? `${p.nombre} ${p.primer_apellido}` : '—'
})

const vueloNombre = computed(() => {
    const v = todosVuelos.value.find(v => v.id_vuelo === form.value.id_vuelo)
    return v ? `${v.codigo_vuelo} — ${formatFecha(v.fecha_salida)}` : '—'
})

const formatFecha = (d) => d
    ? new Date(d).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })
    : '—'

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
        tablaInstance = window.$('#tablaReservas').DataTable({
            data: reservas.value,
            columns: [
                { data: 'id_reserva' },
                { data: 'fecha_reserva', render: (d, type) => type === 'display' ? formatFecha(d) : d },
                {
                    data: 'estado',
                    render: d => {
                        const map = {
                            confirmada: { cls: 'badge-confirmada', label: 'Confirmada' },
                            cancelada: { cls: 'badge-cancelada', label: 'Cancelada' },
                            en_espera: { cls: 'badge-espera', label: 'En espera' }
                        }
                        const b = map[d] || { cls: '', label: d }
                        return `<span class="estado-badge ${b.cls}">${b.label}</span>`
                    }
                },
                { data: 'Pasajero', render: p => p ? `${p.nombre} ${p.primer_apellido}` : '—' },
                { data: 'Vuelo', render: v => v ? v.codigo_vuelo : '—' },
                {
                    data: 'id_reserva', orderable: false,
                    render: id => `
                        <div class="action-btns">
                            <button class="btn-boleto" data-id="${id}" title="Ver boleto">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
                                    <path d="M2 9a1 1 0 0 1 0-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a1 1 0 0 1 0 2v2a1 1 0 0 1 0 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a1 1 0 0 1 0-2V9z"/>
                                    <line x1="9" y1="12" x2="15" y2="12"/>
                                    <line x1="12" y1="9" x2="12" y2="15"/>
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
                document.querySelectorAll('.btn-boleto').forEach(btn => {
                    btn.onclick = () => verBoleto(Number(btn.dataset.id))
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

const cargarReservas = async () => {
    try {
        const res = await getReservas()
        reservas.value = res.data
        inicializarTabla()
    } catch { console.error('Error al cargar reservas') }
}

const cargarSelectores = async () => {
    try {
        const [resPasajeros, resVuelos, resReservas] = await Promise.all([
            getPasajeros(), getVuelos(), getReservas()
        ])
        todasReservas.value = resReservas.data
        pasajerosBase.value = resPasajeros.data
        todosVuelos.value = resVuelos.data
        vuelos.value = resVuelos.data.filter(v => v.estado === 'programado')
        pasajeros.value = resPasajeros.data
    } catch { console.error('Error al cargar selectores') }
}

const abrirModalCrear = () => {
    modoEdicion.value = false
    reservaEditandoId.value = null
    form.value = { id_pasajero: '', id_vuelo: '', estado: 'confirmada', id_grupo: '' }
    error.value = ''
    mostrarModal.value = true
}

const abrirModalEditar = (id) => {
    const reserva = reservas.value.find(r => r.id_reserva === id)
    if (!reserva) return
    modoEdicion.value = true
    reservaEditandoId.value = id
    error.value = ''
    form.value = {
        id_pasajero: reserva.id_pasajero,
        id_vuelo: reserva.id_vuelo,
        estado: reserva.estado,
        id_grupo: reserva.id_grupo || ''
    }
    mostrarModal.value = true
}

const cerrarModal = () => { mostrarModal.value = false }

const PRECIOS = {
    nacional: { turista: 2500, ejecutiva: 6000, primera: 9000 },
    eua: { turista: 6500, ejecutiva: 12000, primera: 18000 },
    europa: { turista: 12000, ejecutiva: 17000, primera: 22000 }
}

const BENEFICIOS = {
    turista: `
        <span style="color:#b89a8a;">✦ Asiento estándar</span><br>
        <span style="color:#b89a8a;">✦ 1 maleta de 23kg</span><br>
        <span style="color:#b89a8a;">✦ Snack incluido</span>`,
    ejecutiva: `
        <span style="color:#b89a8a;">✦ Asiento reclinable extra</span><br>
        <span style="color:#b89a8a;">✦ 2 maletas de 23kg</span><br>
        <span style="color:#b89a8a;">✦ Comida caliente incluida</span><br>
        <span style="color:#b89a8a;">✦ Acceso sala VIP</span>`,
    primera: `
        <span style="color:#b89a8a;">✦ Asiento cama con privacidad</span><br>
        <span style="color:#b89a8a;">✦ 3 maletas de 32kg</span><br>
        <span style="color:#b89a8a;">✦ Menú gourmet</span><br>
        <span style="color:#b89a8a;">✦ Kit de amenidades</span><br>
        <span style="color:#b89a8a;">✦ Sala VIP Premium</span><br>
        <span style="color:#b89a8a;">✦ Wi-Fi incluido</span>`
}

const getTipoRuta = (vuelo) => {
    const destino = vuelo.Ruta?.destino?.pais
    if (!destino) return 'nacional'
    if (destino === 'España') return 'europa'
    if (destino === 'Estados Unidos') return 'eua'
    return 'nacional'
}

const getClasesDisponibles = (vuelo) => {
    const modelo = vuelo.Avion?.modelo || ''
    if (modelo === 'Águila Real' || modelo === 'Quetzal Dorado') {
        return ['turista', 'ejecutiva']
    }
    return ['turista', 'ejecutiva', 'primera']
}

const calcularDescuentos = (precio, vuelo, tipoReserva, numPasajeros = 1) => {
    let descuento = 0
    let descuentos = []
    let maleta = false
    const ahora = new Date()
    const salida = new Date(vuelo.fecha_salida)
    const diasAnticipacion = Math.floor((salida - ahora) / (1000 * 60 * 60 * 24))

    if (tipoReserva === 'individual') {
        if (diasAnticipacion >= 30) {
            descuento += 0.15
            descuentos.push('15% por anticipación')
            maleta = true
        }
    } else {
        if (numPasajeros >= 4) {
            descuento += 0.10
            descuentos.push('10% descuento grupal')
        }
    }

    const precioFinal = Math.round(precio * (1 - descuento))
    return { precioFinal, descuentos, maleta }
}

const guardarReserva = async () => {
    if (modoEdicion.value) {
        loading.value = true
        try {
            await actualizarReserva(reservaEditandoId.value, { estado: form.value.estado })
            window.Swal.fire({ icon: 'success', title: '¡Actualizado!', text: 'Reserva actualizada.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
            cerrarModal()
            await cargarReservas()
        } catch (err) {
            error.value = err.response?.data?.message || 'Error al actualizar.'
        } finally { loading.value = false }
        return
    }

    if (!form.value.id_pasajero) { error.value = 'Selecciona un pasajero.'; return }
    if (!form.value.id_vuelo) { error.value = 'Selecciona un vuelo.'; return }

    cerrarModal()
    const vuelo = vuelos.value.find(v => v.id_vuelo === form.value.id_vuelo)
    const clasesDisponibles = getClasesDisponibles(vuelo)
    const tipoRuta = getTipoRuta(vuelo)

    // SweetAlert 0 — Elegir tipo de reserva
    const { value: tipoReserva } = await window.Swal.fire({
        title: '¿Tipo de reserva?',
        html: `
            <div style="display:flex;flex-direction:column;gap:1rem;margin-top:0.5rem;">
                <button id="btn-individual" style="padding:1rem;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:10px;color:#f0e8e0;cursor:pointer;font-family:inherit;text-align:left;display:flex;align-items:center;gap:0.75rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="1.5" width="22" height="22"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                    <div><strong style="color:#c9a84c;font-size:1rem;">Individual</strong><br><small style="color:#b89a8a;">1 pasajero — 15% descuento si compras con 30+ días + maleta extra</small></div>
                </button>
                <button id="btn-familia" style="padding:1rem;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:10px;color:#f0e8e0;cursor:pointer;font-family:inherit;text-align:left;display:flex;align-items:center;gap:0.75rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="1.5" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <div><strong style="color:#c9a84c;font-size:1rem;">Familia</strong><br><small style="color:#b89a8a;">2+ pasajeros — 10% descuento si son 4 o más</small></div>
                </button>
                <button id="btn-amigos" style="padding:1rem;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:10px;color:#f0e8e0;cursor:pointer;font-family:inherit;text-align:left;display:flex;align-items:center;gap:0.75rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="1.5" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                    <div><strong style="color:#c9a84c;font-size:1rem;">Amigos</strong><br><small style="color:#b89a8a;">2+ pasajeros — 10% descuento si son 4 o más</small></div>
                </button>
            </div>`,
        background: '#1a0c10', color: '#f0e8e0',
        showConfirmButton: false, showCancelButton: true,
        cancelButtonText: 'Cancelar', cancelButtonColor: '#4a3020',
        didOpen: () => {
            document.getElementById('btn-individual').addEventListener('click', () => { window.swalTipoReserva = 'individual'; window.Swal.clickConfirm() })
            document.getElementById('btn-familia').addEventListener('click', () => { window.swalTipoReserva = 'familia'; window.Swal.clickConfirm() })
            document.getElementById('btn-amigos').addEventListener('click', () => { window.swalTipoReserva = 'amigos'; window.Swal.clickConfirm() })
        }
    })

    const tipoSeleccionado = window.swalTipoReserva
    if (!tipoSeleccionado) return

    if (tipoSeleccionado !== 'individual') {
        await flujoGrupal(tipoSeleccionado, vuelo, tipoRuta, clasesDisponibles)
        return
    }

    // SweetAlert 1 — Elegir clase (Individual)
    const opcionesClase = clasesDisponibles.map(c => ({
        clase: c,
        label: c.charAt(0).toUpperCase() + c.slice(1),
        precio: PRECIOS[tipoRuta][c]
    }))

    const htmlClases = opcionesClase.map(op => `
        <button class="swal-clase-btn" data-clase="${op.clase}" style="
            display:block; width:100%; margin:0.5rem 0; padding:1rem;
            background:rgba(201,168,76,0.08); border:1px solid rgba(201,168,76,0.3);
            border-radius:10px; color:#f0e8e0; cursor:pointer; text-align:left;
            font-family:inherit; transition:all 0.2s;">
            <strong style="color:#c9a84c; font-size:1rem;">${op.label}</strong>
            <br><small style="color:#b89a8a;">$${op.precio.toLocaleString()} MXN</small>
            <br><small style="color:#b89a8a; line-height:1.8;">${BENEFICIOS[op.clase]}</small>
        </button>
    `).join('')

    const { value: claseElegida } = await window.Swal.fire({
        title: 'Elige tu clase',
        html: htmlClases,
        background: '#1a0c10',
        color: '#f0e8e0',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#4a3020',
        didOpen: () => {
            document.querySelectorAll('.swal-clase-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    window.Swal.clickConfirm()
                    window.swalClaseSeleccionada = btn.dataset.clase
                })
            })
        }
    })

    const claseSeleccionada = window.swalClaseSeleccionada
    if (!claseSeleccionada) return

    const precioBase = PRECIOS[tipoRuta][claseSeleccionada]
    const { precioFinal, descuentos, maleta } = calcularDescuentos(precioBase, vuelo, 'individual')

    // SweetAlert 2 — Mapa de asientos
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    let asientosVuelo = []
    try {
        const resAsientos = await fetch(`${API_URL}/api/vuelos/${form.value.id_vuelo}/asientos`, { credentials: 'include' })
        asientosVuelo = await resAsientos.json()
    } catch { asientosVuelo = [] }

    const asientosFiltrados = asientosVuelo.filter(a => {
        if (claseSeleccionada === 'turista') return a.clase === 'turista'
        if (claseSeleccionada === 'ejecutiva') return a.clase === 'ejecutiva'
        if (claseSeleccionada === 'primera') return a.clase === 'primera_clase'
        return true
    })

    const filas = {}
    asientosFiltrados.forEach(a => {
        const fila = a.numero_asiento.replace(/[A-F]/g, '')
        if (!filas[fila]) filas[fila] = []
        filas[fila].push(a)
    })

    const htmlMapa = `
        <p style="color:#b89a8a;margin-bottom:1rem;">Selecciona tu asiento de <strong style="color:#c9a84c;">${claseSeleccionada}</strong></p>
        <div style="display:flex;gap:0.5rem;justify-content:center;margin-bottom:1rem;flex-wrap:wrap;">
            <span style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#7fd4a0;">
                <span style="width:16px;height:16px;background:rgba(46,155,90,0.3);border:1px solid #7fd4a0;border-radius:4px;display:inline-block;"></span> Disponible
            </span>
            <span style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#f08080;">
                <span style="width:16px;height:16px;background:rgba(155,28,46,0.3);border:1px solid #f08080;border-radius:4px;display:inline-block;"></span> Ocupado
            </span>
            <span style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#f0c96b;">
                <span style="width:16px;height:16px;background:rgba(201,168,76,0.2);border:1px solid #f0c96b;border-radius:4px;display:inline-block;"></span> Bloqueado
            </span>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.4rem;max-height:300px;overflow-y:auto;">
            ${Object.entries(filas).map(([fila, asientos]) => `
                <div style="display:flex;align-items:center;gap:0.4rem;justify-content:center;">
                    <span style="color:#6b5a5a;font-size:0.75rem;width:20px;text-align:right;">${fila}</span>
                    ${asientos.map(a => {
        const color = a.estado === 'disponible' ? '#7fd4a0' : a.estado === 'bloqueado' ? '#f0c96b' : '#f08080'
        const bg = a.estado === 'disponible' ? 'rgba(46,155,90,0.15)' : a.estado === 'bloqueado' ? 'rgba(201,168,76,0.2)' : 'rgba(155,28,46,0.2)'
        return `<button class="swal-asiento-btn"
                            data-id="${a.id_asiento}" data-num="${a.numero_asiento}" data-estado="${a.estado}"
                            ${a.estado !== 'disponible' ? 'disabled' : ''}
                            style="width:36px;height:36px;border-radius:6px;border:1px solid ${color};
                            cursor:${a.estado === 'disponible' ? 'pointer' : 'not-allowed'};
                            font-size:0.7rem;font-weight:700;font-family:inherit;
                            background:${bg};color:${color};"
                            title="${a.numero_asiento} — ${a.estado}">
                            ${a.numero_asiento.replace(fila, '')}
                        </button>`
    }).join('')}
                </div>
            `).join('')}
        </div>
        <p id="asiento-seleccionado-label" style="margin-top:1rem;color:#c9a84c;font-weight:700;min-height:1.5rem;"></p>
    `

    const { isConfirmed: mapaConfirmado } = await window.Swal.fire({
        title: 'Selecciona tu asiento',
        html: htmlMapa,
        background: '#1a0c10', color: '#f0e8e0',
        showConfirmButton: true,
        confirmButtonText: 'Confirmar asiento',
        confirmButtonColor: '#c9a84c',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#4a3020',
        didOpen: () => {
            window.swalAsientoSeleccionado = null
            document.querySelectorAll('.swal-asiento-btn:not([disabled])').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.swal-asiento-btn').forEach(b => {
                        if (!b.disabled) {
                            b.style.background = 'rgba(46,155,90,0.15)'
                            b.style.borderColor = '#7fd4a0'
                            b.style.color = '#7fd4a0'
                        }
                    })
                    btn.style.background = 'rgba(201,168,76,0.3)'
                    btn.style.borderColor = '#c9a84c'
                    btn.style.color = '#c9a84c'
                    window.swalAsientoSeleccionado = { id: btn.dataset.id, num: btn.dataset.num }
                    const label = document.getElementById('asiento-seleccionado-label')
                    if (label) label.textContent = `Asiento seleccionado: ${btn.dataset.num} `
                })
            })
        }
    })

    if (!mapaConfirmado || !window.swalAsientoSeleccionado) return
    const asientoSeleccionado = window.swalAsientoSeleccionado

    // SweetAlert 3 — Método de pago
    const htmlDescuentos = descuentos.length > 0
        ? `<p style="color:#7fd4a0;margin:0.5rem 0;">Descuentos: ${descuentos.join(', ')}</p>`
        : ''

    const { value: metodoPago } = await window.Swal.fire({
        title: 'Método de pago',
        html: `
    <p style="color:#b89a8a;">Clase: <strong style="color:#c9a84c;">${claseSeleccionada}</strong> — Asiento: <strong style="color:#c9a84c;">${asientoSeleccionado.num}</strong></p>
        <p style="color:#b89a8a;">Precio base: <strong>$${precioBase.toLocaleString()} MXN</strong></p>
            ${htmlDescuentos}
            <p style="font-size:1.3rem;color:#c9a84c;font-weight:800;margin:1rem 0;">Total: $${precioFinal.toLocaleString()} MXN</p>
            <div style="display:flex;gap:1rem;justify-content:center;margin-top:1rem;">
                <button id="btn-transferencia" style="padding:0.75rem 1.5rem;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.4);border-radius:8px;color:#c9a84c;cursor:pointer;font-family:inherit;font-weight:700;">Transferencia</button>
                <button id="btn-efectivo" style="padding:0.75rem 1.5rem;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.4);border-radius:8px;color:#c9a84c;cursor:pointer;font-family:inherit;font-weight:700;">Efectivo</button>
                <button id="btn-puntos" style="padding:0.75rem 1.5rem;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.4);border-radius:8px;color:#c9a84c;cursor:pointer;font-family:inherit;font-weight:700;">Puntos</button>
            </div>
`,
        background: '#1a0c10', color: '#f0e8e0',
        showConfirmButton: false, showCancelButton: true,
        cancelButtonText: 'Cancelar', cancelButtonColor: '#4a3020',
        didOpen: () => {
            document.getElementById('btn-transferencia').addEventListener('click', () => {
                window.swalMetodoPago = 'transferencia'; window.Swal.clickConfirm()
            })
            document.getElementById('btn-efectivo').addEventListener('click', () => {
                window.swalMetodoPago = 'efectivo'; window.Swal.clickConfirm()
            })
            document.getElementById('btn-puntos').addEventListener('click', () => {
                window.swalMetodoPago = 'puntos'; window.Swal.clickConfirm()
            })
        }
    })

    const metodoSeleccionado = window.swalMetodoPago
    if (!metodoSeleccionado) return

    loading.value = true
    try {
        await crearReserva({
            id_vuelo: form.value.id_vuelo,
            id_pasajero: form.value.id_pasajero,
            clase: claseSeleccionada,
            metodo_pago: metodoSeleccionado,
            monto: precioFinal,
            id_asiento: asientoSeleccionado.id
        })
        window.Swal.fire({
            icon: 'success', title: '¡Reserva confirmada!',
            html: `<p>Asiento: <strong>${asientoSeleccionado.num}</strong></p><p>Clase: <strong>${claseSeleccionada}</strong></p><p>Total: <strong>$${precioFinal.toLocaleString()} MXN</strong></p><p>Método: <strong>${metodoSeleccionado}</strong></p>`,
            background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c'
        })
        cerrarModal()
        await cargarReservas()
    } catch (err) {
        window.Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response?.data?.message || 'Error al crear la reserva.',
            background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c'
        })
    } finally {
        loading.value = false
        window.swalClaseSeleccionada = null
        window.swalMetodoPago = null
        window.swalAsientoSeleccionado = null
    }
}

const flujoGrupal = async (tipo, vuelo, tipoRuta, clasesDisponibles) => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

    // Pasajeros disponibles para este vuelo
    const pasajerosDisponibles = pasajerosBase.value.filter(p => {
        const tieneReserva = todasReservas.value.some(r => r.id_vuelo === vuelo.id_vuelo && r.id_pasajero === p.id_pasajeros && r.estado === 'confirmada')
        return !tieneReserva && p.id_pasajeros !== form.value.id_pasajero
    })

    // Incluir el pasajero principal ya seleccionado
    const pasajerosPosibles = [
        pasajerosBase.value.find(p => p.id_pasajeros === form.value.id_pasajero),
        ...pasajerosDisponibles
    ].filter(Boolean)

    // Paso 1 — Seleccionar pasajeros adicionales
    const htmlPasajeros = `
        <p style="color:#b89a8a;margin-bottom:1rem;">Selecciona todos los pasajeros del grupo (mín. 2):</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;max-height:250px;overflow-y:auto;">
            ${pasajerosPosibles.map(p => `
                <label style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.2);border-radius:8px;cursor:pointer;">
                    <input type="checkbox" value="${p.id_pasajeros}" ${p.id_pasajeros === form.value.id_pasajero ? 'checked disabled' : ''}
                        style="width:16px;height:16px;accent-color:#c9a84c;">
                    <span style="color:#f0e8e0;">${p.nombre} ${p.primer_apellido} — <small style="color:#b89a8a;">${p.num_pasaporte}</small></span>
                </label>
            `).join('')}
        </div>`

    const { isConfirmed: pasajerosConfirmados } = await window.Swal.fire({
        title: `Reserva ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`,
        html: htmlPasajeros,
        background: '#1a0c10', color: '#f0e8e0',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#c9a84c',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#4a3020'
    })
    if (!pasajerosConfirmados) return

    const checkboxes = document.querySelectorAll('.swal2-html-container input[type=checkbox]:checked')
    const idsSeleccionados = Array.from(checkboxes).map(c => Number(c.value))

    if (idsSeleccionados.length < 2) {
        window.Swal.fire({ icon: 'warning', title: 'Mínimo 2 pasajeros', text: 'Debes seleccionar al menos 2 pasajeros para una reserva grupal.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        return
    }

    const pasajerosSeleccionados = pasajerosPosibles.filter(p => idsSeleccionados.includes(p.id_pasajeros))
    const { precioFinal: precioBase, descuentos, maleta } = calcularDescuentos(
        PRECIOS[tipoRuta]['turista'], vuelo, tipo, pasajerosSeleccionados.length
    )

    // Paso 2 — Clase y asiento para cada pasajero
    const reservasPasajeros = []
    for (const pasajero of pasajerosSeleccionados) {
        // Elegir clase
        window.swalClaseSeleccionada = null
        const opcionesClase = clasesDisponibles.map(c => ({
            clase: c, label: c.charAt(0).toUpperCase() + c.slice(1), precio: PRECIOS[tipoRuta][c]
        }))
        const htmlClases = opcionesClase.map(op => `
            <button class="swal-clase-btn" data-clase="${op.clase}" style="display:block;width:100%;margin:0.5rem 0;padding:1rem;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:10px;color:#f0e8e0;cursor:pointer;text-align:left;font-family:inherit;">
                <strong style="color:#c9a84c;">${op.label}</strong><br>
                <small style="color:#b89a8a;">$${op.precio.toLocaleString()} MXN</small>
            </button>`).join('')

        await window.Swal.fire({
            title: `Clase para ${pasajero.nombre} ${pasajero.primer_apellido}`,
            html: htmlClases,
            background: '#1a0c10', color: '#f0e8e0',
            showConfirmButton: false, showCancelButton: true,
            cancelButtonText: 'Cancelar', cancelButtonColor: '#4a3020',
            didOpen: () => {
                document.querySelectorAll('.swal-clase-btn').forEach(btn => {
                    btn.addEventListener('click', () => { window.swalClaseSeleccionada = btn.dataset.clase; window.Swal.clickConfirm() })
                })
            }
        })
        const claseP = window.swalClaseSeleccionada
        if (!claseP) return

        // Elegir asiento
        window.swalAsientoSeleccionado = null
        let asientosVuelo = []
        try {
            const resA = await fetch(`${API_URL}/api/vuelos/${vuelo.id_vuelo}/asientos`, { credentials: 'include' })
            asientosVuelo = await resA.json()
        } catch { asientosVuelo = [] }

        const asientosFiltrados = asientosVuelo.filter(a => {
            if (claseP === 'turista') return a.clase === 'turista'
            if (claseP === 'ejecutiva') return a.clase === 'ejecutiva'
            if (claseP === 'primera') return a.clase === 'primera_clase'
            return true
        })
        const filas = {}
        asientosFiltrados.forEach(a => {
            const fila = a.numero_asiento.replace(/[A-F]/g, '')
            if (!filas[fila]) filas[fila] = []
            filas[fila].push(a)
        })

        const htmlMapa = `
            <p style="color:#b89a8a;margin-bottom:0.5rem;">Asiento para <strong style="color:#c9a84c;">${pasajero.nombre}</strong> — clase ${claseP}</p>
            <div style="display:flex;flex-direction:column;gap:0.4rem;max-height:260px;overflow-y:auto;">
                ${Object.entries(filas).map(([fila, asientos]) => `
                    <div style="display:flex;align-items:center;gap:0.4rem;justify-content:center;">
                        <span style="color:#6b5a5a;font-size:0.75rem;width:20px;text-align:right;">${fila}</span>
                        ${asientos.map(a => {
            const color = a.estado === 'disponible' ? '#7fd4a0' : a.estado === 'bloqueado' ? '#f0c96b' : '#f08080'
            const bg = a.estado === 'disponible' ? 'rgba(46,155,90,0.15)' : a.estado === 'bloqueado' ? 'rgba(201,168,76,0.2)' : 'rgba(155,28,46,0.2)'
            return `<button class="swal-asiento-btn" data-id="${a.id_asiento}" data-num="${a.numero_asiento}" ${a.estado !== 'disponible' ? 'disabled' : ''}
                                style="width:36px;height:36px;border-radius:6px;border:1px solid ${color};cursor:${a.estado === 'disponible' ? 'pointer' : 'not-allowed'};font-size:0.7rem;font-weight:700;font-family:inherit;background:${bg};color:${color};">
                                ${a.numero_asiento.replace(fila, '')}</button>`
        }).join('')}
                    </div>`).join('')}
            </div>
            <p id="asiento-seleccionado-label" style="margin-top:0.75rem;color:#c9a84c;font-weight:700;min-height:1.2rem;"></p>`

        const { isConfirmed: asientoOk } = await window.Swal.fire({
            title: 'Selecciona asiento',
            html: htmlMapa,
            background: '#1a0c10', color: '#f0e8e0',
            confirmButtonText: 'Confirmar', confirmButtonColor: '#c9a84c',
            showCancelButton: true, cancelButtonText: 'Cancelar', cancelButtonColor: '#4a3020',
            didOpen: () => {
                window.swalAsientoSeleccionado = null
                document.querySelectorAll('.swal-asiento-btn:not([disabled])').forEach(btn => {
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.swal-asiento-btn').forEach(b => { if (!b.disabled) { b.style.background = 'rgba(46,155,90,0.15)'; b.style.borderColor = '#7fd4a0'; b.style.color = '#7fd4a0' } })
                        btn.style.background = 'rgba(201,168,76,0.3)'; btn.style.borderColor = '#c9a84c'; btn.style.color = '#c9a84c'
                        window.swalAsientoSeleccionado = { id: btn.dataset.id, num: btn.dataset.num }
                        const lbl = document.getElementById('asiento-seleccionado-label')
                        if (lbl) lbl.textContent = `Asiento: ${btn.dataset.num}`
                    })
                })
            }
        })
        if (!asientoOk || !window.swalAsientoSeleccionado) return

        const precioP = Math.round(PRECIOS[tipoRuta][claseP] * (descuentos.length > 0 ? 0.90 : 1))
        reservasPasajeros.push({
            id_pasajero: pasajero.id_pasajeros,
            nombre: `${pasajero.nombre} ${pasajero.primer_apellido}`,
            clase: claseP,
            id_asiento: window.swalAsientoSeleccionado.id,
            num_asiento: window.swalAsientoSeleccionado.num,
            monto: precioP
        })
    }

    // Paso 3 — Método de pago
    const montoTotal = reservasPasajeros.reduce((s, p) => s + p.monto, 0)
    const htmlDesc = descuentos.length > 0 ? `<p style="color:#7fd4a0;margin:0.5rem 0;">${descuentos.join(', ')}</p>` : ''
    window.swalMetodoPago = null

    const { isConfirmed: pagoOk } = await window.Swal.fire({
        title: 'Método de pago',
        html: `
            <p style="color:#b89a8a;">${pasajerosSeleccionados.length} pasajeros — ${tipo}</p>
            ${htmlDesc}
            <p style="font-size:1.3rem;color:#c9a84c;font-weight:800;margin:1rem 0;">Total: $${montoTotal.toLocaleString()} MXN</p>
            <div style="display:flex;gap:1rem;justify-content:center;margin-top:1rem;">
                <button id="btn-transferencia" style="padding:0.75rem 1.5rem;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.4);border-radius:8px;color:#c9a84c;cursor:pointer;font-family:inherit;font-weight:700;">Transferencia</button>
                <button id="btn-efectivo" style="padding:0.75rem 1.5rem;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.4);border-radius:8px;color:#c9a84c;cursor:pointer;font-family:inherit;font-weight:700;">Efectivo</button>
                <button id="btn-puntos" style="padding:0.75rem 1.5rem;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.4);border-radius:8px;color:#c9a84c;cursor:pointer;font-family:inherit;font-weight:700;">Puntos</button>
            </div>`,
        background: '#1a0c10', color: '#f0e8e0',
        showConfirmButton: false, showCancelButton: true,
        cancelButtonText: 'Cancelar', cancelButtonColor: '#4a3020',
        didOpen: () => {
            document.getElementById('btn-transferencia').addEventListener('click', () => { window.swalMetodoPago = 'transferencia'; window.Swal.clickConfirm() })
            document.getElementById('btn-efectivo').addEventListener('click', () => { window.swalMetodoPago = 'efectivo'; window.Swal.clickConfirm() })
            document.getElementById('btn-puntos').addEventListener('click', () => { window.swalMetodoPago = 'puntos'; window.Swal.clickConfirm() })
        }
    })
    if (!pagoOk || !window.swalMetodoPago) return

    loading.value = true
    try {
        await fetch(`${API_URL}/api/reservas/grupo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                id_vuelo: vuelo.id_vuelo,
                tipo_grupo: tipo,
                metodo_pago: window.swalMetodoPago,
                pasajeros: reservasPasajeros
            })
        })
        window.Swal.fire({
            icon: 'success', title: '¡Reserva grupal confirmada!',
            html: `<p>${pasajerosSeleccionados.length} pasajeros reservados</p><p>Total: <strong>$${montoTotal.toLocaleString()} MXN</strong></p>`,
            background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c'
        })
        await cargarReservas()
    } catch {
        window.Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo crear la reserva grupal.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    } finally { loading.value = false }
}

const confirmarEliminar = async (id) => {
    const reserva = reservas.value.find(r => r.id_reserva === id)
    if (!reserva) return

    if (reserva.estado !== 'cancelada') {
        window.Swal.fire({
            icon: 'warning',
            title: 'No se puede eliminar',
            text: 'Solo se pueden eliminar reservas canceladas. Cancela la reserva primero.',
            background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c'
        })
        return
    }

    const result = await window.Swal.fire({
        title: '¿Eliminar reserva?', text: 'Esta acción no se puede deshacer.',

        icon: 'warning', showCancelButton: true,
        confirmButtonText: 'Sí, eliminar', cancelButtonText: 'Cancelar',
        background: '#1a0c10', color: '#f0e8e0',
        confirmButtonColor: '#9b1c2e', cancelButtonColor: '#4a3020'
    })
    if (!result.isConfirmed) return
    try {
        await eliminarReserva(id)
        window.Swal.fire({ icon: 'success', title: 'Eliminada', text: 'La reserva fue eliminada.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        await cargarReservas()
    } catch (err) {
        window.Swal.fire({ icon: 'error', title: 'Error', text: err.response?.data?.message || 'No se pudo eliminar.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    }
}

const verBoleto = async (id) => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    try {
        const res = await fetch(`${API_URL}/api/reservas/${id}/boleto`, { credentials: 'include' })
        const data = await res.json()
        if (!res.ok) {
            const mensajes = {
                asiento: '<strong>Asiento:</strong> Ve a <em>Vuelos → Asientos</em> y asigna un asiento al vuelo.',
                pago: '💳 <strong>Pago:</strong> La reserva no tiene un grupo de pago registrado.',
                tripulación: '<strong>Tripulación:</strong> Ve a <em>Tripulación</em> y asigna pilotos al vuelo de esta reserva.'
            }
            const faltantes = data.faltantes || []
            const htmlFaltantes = faltantes.length > 0
                ? `<div style="text-align:left;margin-top:1rem;">
                    <p style="color:#b89a8a;margin-bottom:0.75rem;">Para generar el boleto necesitas completar:</p>
                    ${faltantes.map(f => `<p style="margin:0.4rem 0;color:#f0e8e0;">${mensajes[f] || f}</p>`).join('')}
                   </div>`
                : `<p style="color:#b89a8a;">${data.message}</p>`
            window.Swal.fire({
                icon: 'warning',
                title: 'Boleto incompleto',
                html: htmlFaltantes,
                background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c'
            })
            return
        }
        const { reserva, tripulacion } = data
        const piloto = tripulacion.find(t => t.rol === 'piloto')
        const copiloto = tripulacion.find(t => t.rol === 'copiloto')
        const resultBoleto = await window.Swal.fire({
            title: `Boleto #${reserva.id_reserva}`,
            html: `
                <div style="text-align:center;margin-bottom:1.25rem;padding-bottom:1rem;border-bottom:1px solid rgba(201,168,76,0.2);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="1.5" width="52" height="52">
                        <path d="M22 16.5H2l4-9h12l4 9z"/>
                        <path d="M6 16.5l1.5 3h9l1.5-3"/>
                        <path d="M12 7.5V4m0 0l-2 2m2-2l2 2"/>
                    </svg>
                    <p style="color:#c9a84c;font-size:0.75rem;letter-spacing:2px;text-transform:uppercase;margin:0.5rem 0 0;">Aerolínea Quetzal</p>
                </div>
                <div style="text-align:left;font-size:0.9rem;line-height:2;">
                    <p><span style="color:#c9a84c;font-weight:700;">Pasajero:</span> ${reserva.nombre} ${reserva.primer_apellido} ${reserva.segundo_apellido || ''}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Pasaporte:</span> ${reserva.num_pasaporte}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Vuelo:</span> ${reserva.codigo_vuelo}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Origen:</span> ${reserva.origen_ciudad} (${reserva.origen_iata})</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Destino:</span> ${reserva.destino_ciudad} (${reserva.destino_iata})</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Salida:</span> ${formatFecha(reserva.fecha_salida)}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Llegada:</span> ${formatFecha(reserva.fecha_llegada)}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Asiento:</span> ${reserva.numero_asiento} — ${reserva.clase_asiento}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Avión:</span> ${reserva.modelo} (${reserva.matricula})</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Pago:</span> ${reserva.metodo} — $${Number(reserva.monto_total).toLocaleString()} ${reserva.moneda}</p>
                    ${piloto ? `<p><span style="color:#c9a84c;font-weight:700;">Piloto:</span> ${piloto.nombre} ${piloto.primer_apellido}</p>` : ''}
                    ${copiloto ? `<p><span style="color:#c9a84c;font-weight:700;">Copiloto:</span> ${copiloto.nombre} ${copiloto.primer_apellido}</p>` : ''}
                </div>`,
            background: '#1a0c10', color: '#f0e8e0',
            confirmButtonText: '📄 Descargar PDF',
            confirmButtonColor: '#c9a84c',
            showCancelButton: true,
            cancelButtonText: 'Cerrar',
            cancelButtonColor: '#4a3020'
        })
        if (resultBoleto.isConfirmed) {
            await generarPDF(reserva, tripulacion)
        }
    } catch {
        window.Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo cargar el boleto.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    }
}

const cargarFuenteCinzel = async () => {
    const url = 'https://raw.githubusercontent.com/google/fonts/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf'
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
}

const generarPDF = async (reserva, tripulacion) => {
    const { jsPDF } = window.jspdf
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [210, 175] })

    const W = doc.internal.pageSize.getWidth()
    const H = doc.internal.pageSize.getHeight()

    // Cargar Cinzel al inicio
    const cinzelBase64 = await cargarFuenteCinzel()
    doc.addFileToVFS('Cinzel.ttf', cinzelBase64)
    doc.addFont('Cinzel.ttf', 'Cinzel', 'normal')

    // Fondo vino oscuro
    doc.setFillColor(15, 5, 8)
    doc.rect(0, 0, W, H, 'F')

    // Doble borde dorado
    doc.setDrawColor(90, 60, 10)
    doc.setLineWidth(2)
    doc.rect(5, 5, W - 10, H - 10)
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.6)
    doc.rect(5, 5, W - 10, H - 10)
    doc.setDrawColor(255, 215, 106)
    doc.setLineWidth(0.25)
    doc.rect(7.5, 7.5, W - 15, H - 15)

    // Header con degradado vino rojizo
    for (let i = 0; i < 18; i++) {
        const t = i / 18
        const r = Math.round(80 + (18 - 80) * t)
        const g = Math.round(10 + (3 - 10) * t)
        const b = Math.round(20 + (8 - 20) * t)
        doc.setFillColor(r, g, b)
        doc.rect(5, 5 + i, W - 10, 1.1, 'F')
    }

    // Nombre aerolínea
    doc.setFont('Cinzel', 'normal')
    doc.setFontSize(13)
    doc.setTextColor(255, 215, 106)
    doc.text('AEROLINEA QUETZAL', W / 2, 17, { align: 'center' })

    // Línea dorada separadora
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.4)
    doc.line(12, 24, W - 12, 24)

    // BOARDING PASS
    doc.setFontSize(8)
    doc.setTextColor(180, 154, 138)
    doc.setFont('Cinzel', 'normal')
    doc.text('BOARDING PASS', W / 2, 30, { align: 'center' })

    // Nombre pasajero
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(240, 232, 224)
    doc.text(`${reserva.nombre} ${reserva.primer_apellido} ${reserva.segundo_apellido || ''}`.trim(), W / 2, 40, { align: 'center' })

    // Ruta MTY ——✈—— MEX
    doc.setFontSize(30)
    doc.setTextColor(90, 60, 10)
    doc.text(reserva.origen_iata, W / 2 - 38.4, 54.4, { align: 'center' })
    doc.text(reserva.destino_iata, W / 2 + 38.4, 54.4, { align: 'center' })
    doc.setTextColor(255, 215, 106)
    doc.text(reserva.origen_iata, W / 2 - 38, 54, { align: 'center' })
    doc.setTextColor(201, 168, 76)
    doc.text(reserva.destino_iata, W / 2 + 38, 54, { align: 'center' })

    doc.setFontSize(8)
    doc.setTextColor(180, 154, 138)
    doc.text(reserva.origen_ciudad, W / 2 - 38, 59, { align: 'center' })
    doc.text(reserva.destino_ciudad, W / 2 + 38, 59, { align: 'center' })

    // Flecha
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.3)
    doc.line(W / 2 - 22, 52, W / 2 + 22, 52)
    doc.setFillColor(201, 168, 76)
    doc.triangle(W / 2 + 22, 52, W / 2 + 18, 50, W / 2 + 18, 54, 'F')

    // Línea separadora
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.2)
    doc.line(12, 63, W - 12, 63)

    // Datos en 3 columnas
    const col1 = 20, col2 = W / 2, col3 = W - 20
    const labelY = 70, valueY = 75

    // Col 1 — Salida
    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('SALIDA', col1, labelY)
    doc.setFontSize(9)
    doc.setTextColor(240, 232, 224)
    doc.setFont('helvetica', 'bold')
    doc.text(formatFecha(reserva.fecha_salida), col1, valueY)

    // Col 2 — Vuelo / Clase
    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('VUELO / CLASE', col2, labelY, { align: 'center' })
    doc.setFontSize(9)
    doc.setTextColor(240, 232, 224)
    doc.setFont('helvetica', 'bold')
    doc.text(`${reserva.codigo_vuelo}  •  ${reserva.clase_asiento.toUpperCase()}`, col2, valueY, { align: 'center' })

    // Col 3 — Asiento
    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('ASIENTO', col3, labelY, { align: 'right' })
    doc.setFontSize(14)
    doc.setTextColor(201, 168, 76)
    doc.setFont('helvetica', 'bold')
    doc.text(reserva.numero_asiento, col3, valueY + 2, { align: 'right' })

    // Línea separadora
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.2)
    doc.line(12, 82, W - 12, 82)

    // Piloto y avión
    const piloto = tripulacion.find(t => t.rol === 'piloto')
    const copiloto = tripulacion.find(t => t.rol === 'copiloto')

    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('PILOTO', col1, 88)
    doc.setFontSize(8)
    doc.setTextColor(240, 232, 224)
    doc.setFont('helvetica', 'bold')
    doc.text(piloto ? `${piloto.nombre} ${piloto.primer_apellido}` : '—', col1, 93)

    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('AVIÓN', col2, 88, { align: 'center' })
    doc.setFontSize(8)
    doc.setTextColor(240, 232, 224)
    doc.setFont('helvetica', 'bold')
    doc.text(`${reserva.modelo} (${reserva.matricula})`, col2, 93, { align: 'center' })

    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('PAGO', col3, 88, { align: 'right' })
    doc.setFontSize(8)
    doc.setTextColor(240, 232, 224)
    doc.setFont('helvetica', 'bold')
    doc.text(`${reserva.metodo} — $${Number(reserva.monto_total).toLocaleString()} ${reserva.moneda}`, col3, 93, { align: 'right' })

    // Línea dorada final (una sola)
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.4)
    doc.line(12, 98, W - 12, 98)

    // Línea separadora antes del slogan
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(0.3)
    doc.line(12, 106, W - 12, 106)

    // Pasaporte
    doc.setFontSize(7)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text(`PASAPORTE: ${reserva.num_pasaporte}   •   LLEGADA: ${formatFecha(reserva.fecha_llegada)}`, W / 2, 104, { align: 'center' })

    // Slogan línea 1
    doc.setFontSize(13)
    doc.setTextColor(255, 215, 106)
    doc.setFont('Cinzel', 'normal')
    doc.text('QUETZAL: PRECISION, CONFORT Y DESTINO.', W / 2, 113, { align: 'center' })

    // Slogan línea 2
    doc.setFontSize(9)
    doc.setTextColor(201, 168, 76)
    doc.setFont('Cinzel', 'normal')
    doc.text('SU EXPERIENCIA DE VUELO, NUESTRA MAYOR DISTINCION.', W / 2, 121, { align: 'center' })

    // QR — escanea para acceder al sistema web
    const qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=c9a84c&bgcolor=0f0508&data=${encodeURIComponent('https://TU-LINK.onrender.com')}`
    const qrRes = await fetch(qrDataUrl)
    const qrBlob = await qrRes.blob()
    const qrBase64 = await new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.readAsDataURL(qrBlob)
    })
    doc.addImage(qrBase64, 'PNG', W / 2 - 9, 125, 18, 18)
    doc.setFontSize(5.5)
    doc.setTextColor(180, 154, 138)
    doc.setFont('helvetica', 'normal')
    doc.text('Escanea para acceder al sistema', W / 2, 145, { align: 'center' })

    // Guardar
    doc.save(`boleto-quetzal-${reserva.id_reserva}.pdf`)
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
    await cargarSelectores()
    await cargarReservas()
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

:deep(.estado-badge) {
    display: inline-block;
    padding: 0.25rem 0.7rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
}

:deep(.badge-confirmada) {
    background: rgba(46, 155, 90, 0.15);
    color: #7fd4a0;
    border: 1px solid rgba(46, 155, 90, 0.3);
}

:deep(.badge-cancelada) {
    background: rgba(155, 28, 46, 0.2);
    color: #f08080;
    border: 1px solid rgba(155, 28, 46, 0.4);
}

:deep(.badge-espera) {
    background: rgba(201, 168, 76, 0.15);
    color: #c9a84c;
    border: 1px solid rgba(201, 168, 76, 0.3);
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

:deep(.btn-boleto) {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    background: rgba(46, 155, 90, 0.12);
    color: #7fd4a0;
}

:deep(.btn-boleto:hover) {
    background: rgba(46, 155, 90, 0.28);
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

.input-wrapper select option {
    background: #1a0c10;
}

.input-readonly {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(201, 168, 76, 0.1);
}

.readonly-text {
    font-size: 0.9rem;
    color: #b89a8a;
    padding: 0.75rem 0;
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