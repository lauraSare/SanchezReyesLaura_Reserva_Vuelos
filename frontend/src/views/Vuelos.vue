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
                        <circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" />
                        <path d="M6 16V7a6 6 0 0 1 6-6" /><path d="M18 8v9a6 6 0 0 1-6 6" />
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        <line x1="19" y1="8" x2="19" y2="14"/>
                        <line x1="22" y1="11" x2="16" y2="11"/>
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
                <h1 class="page-title">Vuelos</h1>
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
                            <path d="M22 2L11 13" />
                            <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="section-title">Gestión de Vuelos</h2>
                        <p class="page-subtitle">Vuelos programados del sistema</p>
                    </div>
                </div>
                <button class="btn-primary" @click="abrirModalCrear">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Nuevo Vuelo
                </button>
            </div>

            <div class="table-card animate-fade-up">
                <div class="table-responsive">
                    <table id="tablaVuelos" class="quetzal-table" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Código</th>
                                <th>Salida</th>
                                <th>Llegada</th>
                                <th>Estado</th>
                                <th>Ruta</th>
                                <th>Avión</th>
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
                                <path d="M22 2L11 13" />
                                <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                            </svg>
                        </div>
                        <h2 class="modal-title">{{ modoEdicion ? 'Editar Vuelo' : 'Nuevo Vuelo' }}</h2>
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
                                <label>Código de Vuelo</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <rect x="2" y="7" width="20" height="14" rx="2" />
                                        <path d="M16 7V5a2 2 0 0 0-4 0v2" />
                                    </svg>
                                    <input type="text" v-model="form.codigo_vuelo" placeholder="QZ-001"
                                        :readonly="true" />
                                </div>
                                <span style="font-size:0.72rem; color:#6b5a5a; margin-top:0.3rem; display:block;">{{
                                    modoEdicion ? ' No editable' : ' Generado automáticamente' }}</span>
                            </div>
                            <div class="form-group">
                                <label>Estado</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <select v-model="form.estado">
                                        <option value="programado">Programado</option>
                                        <option value="retrasado">Retrasado</option>
                                        <option value="cancelado">Cancelado</option>
                                        <option value="completado">Completado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Fecha de Salida</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <input type="datetime-local" v-model="form.fecha_salida"
                                        :min="modoEdicion ? '' : fechaMinima" @change="calcularLlegada" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Fecha de Llegada</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <input type="datetime-local" v-model="form.fecha_llegada" readonly
                                        style="cursor:not-allowed; opacity:0.7" />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Ruta</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <circle cx="6" cy="19" r="3" />
                                        <circle cx="18" cy="5" r="3" />
                                        <path d="M6 16V7a6 6 0 0 1 6-6" />
                                        <path d="M18 8v9a6 6 0 0 1-6 6" />
                                    </svg>
                                    <select v-model="form.id_ruta" @change="calcularLlegada">
                                        <option value="" disabled>Selecciona una ruta</option>
                                        <option v-for="r in rutas" :key="r.id_ruta" :value="r.id_ruta">
                                            {{ r.origen?.codigo_iata }} → {{ r.destino?.codigo_iata }} ({{
                                                r.distancia_km }} km)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Avión</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M22 16.5H2l4-9h12l4 9z" />
                                    </svg>
                                    <select v-model="form.id_avion">
                                        <option value="" disabled>Selecciona un avión</option>
                                        <option v-for="a in aviones" :key="a.id_avion" :value="a.id_avion">
                                            {{ a.matricula }} — {{ a.modelo }}
                                        </option>
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
                    <!-- Sección Tripulación (solo en editar) -->
                    <div v-if="modoEdicion" class="form-section">
                        <div class="section-divider">
                            <span>Tripulación Asignada</span>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Piloto</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <select v-model="tripForm.piloto">
                                        <option value="" disabled>Selecciona piloto</option>
                                        <option v-for="t in pilotos" :key="t.id_tripulacion" :value="t.id_tripulacion">
                                            {{ t.nombre }} {{ t.primer_apellido }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Copiloto</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <select v-model="tripForm.copiloto">
                                        <option value="" disabled>Selecciona copiloto</option>
                                        <option v-for="t in copilotos" :key="t.id_tripulacion"
                                            :value="t.id_tripulacion">
                                            {{ t.nombre }} {{ t.primer_apellido }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Auxiliar 1</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <select v-model="tripForm.auxiliar1">
                                        <option value="" disabled>Selecciona auxiliar</option>
                                        <option v-for="t in auxiliares" :key="t.id_tripulacion"
                                            :value="t.id_tripulacion">
                                            {{ t.nombre }} {{ t.primer_apellido }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Auxiliar 2</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        width="16" height="16">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <select v-model="tripForm.auxiliar2">
                                        <option value="" disabled>Selecciona auxiliar</option>
                                        <option v-for="t in auxiliares" :key="t.id_tripulacion"
                                            :value="t.id_tripulacion">
                                            {{ t.nombre }} {{ t.primer_apellido }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-trip-footer">
                            <button class="btn-primary" @click="guardarTripulacion" :disabled="loadingTrip">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"
                                    height="16">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {{ loadingTrip ? 'Guardando...' : 'Guardar Tripulación' }}
                            </button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-secondary" @click="cerrarModal">Cancelar</button>
                        <button class="btn-primary" @click="guardarVuelo" :disabled="loading">
                            <svg v-if="!loading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                width="16" height="16">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {{ loading ? 'Guardando...' : (modoEdicion ? 'Actualizar' : 'Crear Vuelo') }}
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
import { getVuelos, crearVuelo, actualizarVuelo, eliminarVuelo, logoutUsuario } from '../services/api'
import axios from 'axios'

const router = useRouter()
const usuario = ref(null)
const sidebarCollapsed = ref(false)
const vuelos = ref([])
const rutas = ref([])
const aviones = ref([])
const mostrarModal = ref(false)
const modoEdicion = ref(false)
const loading = ref(false)
const error = ref('')
const tripulacionLista = ref([])
const tripForm = ref({ piloto: '', copiloto: '', auxiliar1: '', auxiliar2: '' })
const loadingTrip = ref(false)
const pilotos = computed(() => tripulacionLista.value.filter(t => t.rol === 'piloto'))
const copilotos = computed(() => tripulacionLista.value.filter(t => t.rol === 'copiloto'))
const auxiliares = computed(() => tripulacionLista.value.filter(t => t.rol === 'auxiliar'))
const vueloEditandoId = ref(null)
const tiempoSesion = ref('5:00')
const timerWarning = ref(false)

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const bienvenida = computed(() => {
    if (!usuario.value) return 'Bienvenido'
    return usuario.value.genero === 'femenino' ? 'Bienvenida' : 'Bienvenido'
})

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

const formVacio = () => ({
    codigo_vuelo: '', fecha_salida: '', fecha_llegada: '',
    estado: 'programado', id_ruta: '', id_avion: ''
})
const form = ref(formVacio())

let tablaInstance = null

const formatFecha = (d) => d
    ? new Date(d).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })
    : '—'

const inicializarTabla = () => {
    if (window.$.fn.DataTable.isDataTable('#tablaVuelos')) {
        window.$('#tablaVuelos').DataTable().destroy()
    }
    tablaInstance = null
    nextTick(() => {
        tablaInstance = window.$('#tablaVuelos').DataTable({
            data: vuelos.value,
            columns: [
                { data: 'id_vuelo' },
                { data: 'codigo_vuelo' },
                { data: 'fecha_salida', render: (d, type) => type === 'display' ? formatFecha(d) : d },
                { data: 'fecha_llegada', render: (d, type) => type === 'display' ? formatFecha(d) : d },
                {
                    data: 'estado',
                    render: d => {
                        const map = {
                            programado: { cls: 'badge-programado', label: 'Programado' },
                            retrasado: { cls: 'badge-retrasado', label: 'Retrasado' },
                            cancelado: { cls: 'badge-cancelado', label: 'Cancelado' },
                            completado: { cls: 'badge-completado', label: 'Completado' }
                        }
                        const b = map[d] || { cls: '', label: d }
                        return `<span class="estado-badge ${b.cls}">${b.label}</span>`
                    }
                },
                { data: 'ruta_display' },
                { data: 'avion_display' },
                {
                    data: 'id_vuelo', orderable: false,
                    render: id => `
                        <div class="action-btns">
                            <button class="btn-seats" data-id="${id}" title="Gestionar asientos" style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;border:none;cursor:pointer;background:rgba(76,148,201,0.12);color:#7ab8f5;transition:all 0.2s;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
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
                document.querySelectorAll('.btn-seats').forEach(btn => {
                    btn.onclick = () => gestionarAsientos(Number(btn.dataset.id))
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

const cargarVuelos = async () => {
    try {
        const res = await getVuelos()
        vuelos.value = res.data.map(v => ({
            ...v,
            ruta_display: v.Ruta?.origen && v.Ruta?.destino
                ? `${v.Ruta.origen.codigo_iata} → ${v.Ruta.destino.codigo_iata}`
                : '—',
            avion_display: v.Avion?.modelo || '—'
        }))
        inicializarTabla()
    } catch { console.error('Error al cargar vuelos') }
}

const cargarSelectores = async () => {
    try {
        const [resRutas, resAviones] = await Promise.all([
            axios.get(`${API_URL}/api/rutas`, { withCredentials: true }),
            axios.get(`${API_URL}/api/aviones`, { withCredentials: true })
        ])
        rutas.value = resRutas.data
        aviones.value = resAviones.data
    } catch { console.error('Error al cargar selectores') }
}

const abrirModalCrear = () => {
    modoEdicion.value = false
    vueloEditandoId.value = null
    form.value = formVacio()
    // Generar código automático
    const maxId = vuelos.value.length > 0
        ? Math.max(...vuelos.value.map(v => parseInt(v.codigo_vuelo?.split('-')[1] || 0)))
        : 0
    form.value.codigo_vuelo = `QZ-${String(maxId + 1).padStart(3, '0')}`
    error.value = ''
    mostrarModal.value = true
}

const abrirModalEditar = async (id) => {
    const vuelo = vuelos.value.find(v => v.id_vuelo === id)
    if (!vuelo) return
    modoEdicion.value = true
    vueloEditandoId.value = id
    error.value = ''
    form.value = {
        codigo_vuelo: vuelo.codigo_vuelo,
        fecha_salida: vuelo.fecha_salida ? vuelo.fecha_salida.slice(0, 16) : '',
        fecha_llegada: vuelo.fecha_llegada ? vuelo.fecha_llegada.slice(0, 16) : '',
        estado: vuelo.estado,
        id_ruta: vuelo.id_ruta,
        id_avion: vuelo.id_avion
    }
    mostrarModal.value = true
    await cargarTripulacionDisponible()
    try {
        const res = await axios.get(`${API_URL}/api/vuelos/${id}/tripulacion`, { withCredentials: true })
        const asignados = res.data
        tripForm.value.piloto = asignados.find(t => t.rol === 'piloto')?.id_tripulacion || ''
        tripForm.value.copiloto = asignados.find(t => t.rol === 'copiloto')?.id_tripulacion || ''
        const aux = asignados.filter(t => t.rol === 'auxiliar')
        tripForm.value.auxiliar1 = aux[0]?.id_tripulacion || ''
        tripForm.value.auxiliar2 = aux[1]?.id_tripulacion || ''
    } catch { }
}

const fechaMinima = computed(() => {
    const d = new Date()
    d.setHours(d.getHours() + 24)
    return d.toISOString().slice(0, 16)
})

const cerrarModal = () => { mostrarModal.value = false }

const calcularLlegada = () => {
    if (!form.value.fecha_salida || !form.value.id_ruta) return
    const ruta = rutas.value.find(r => r.id_ruta === form.value.id_ruta)
    if (!ruta) return
    const salida = new Date(form.value.fecha_salida)
    salida.setMinutes(salida.getMinutes() + ruta.duracion_estimada)
    form.value.fecha_llegada = salida.toISOString().slice(0, 16)
}

const cargarTripulacionDisponible = async () => {
    try {
        const res = await axios.get(`${API_URL}/api/tripulacion`, { withCredentials: true })
        tripulacionLista.value = res.data
    } catch { console.error('Error al cargar tripulación') }
}

const guardarTripulacion = async () => {
    if (!tripForm.value.piloto || !tripForm.value.copiloto || !tripForm.value.auxiliar1 || !tripForm.value.auxiliar2) {
        window.Swal.fire({ icon: 'warning', title: 'Incompleto', text: 'Debes seleccionar piloto, copiloto y 2 auxiliares.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        return
    }
    const ids = [tripForm.value.piloto, tripForm.value.copiloto, tripForm.value.auxiliar1, tripForm.value.auxiliar2]
    if (new Set(ids).size !== 4) {
        window.Swal.fire({ icon: 'warning', title: 'Tripulante repetido', text: 'No puedes asignar el mismo tripulante dos veces.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        return
    }
    loadingTrip.value = true
    try {
        await axios.post(`${API_URL}/api/vuelos/${vueloEditandoId.value}/tripulacion`, {
            tripulacion: [tripForm.value.piloto, tripForm.value.copiloto, tripForm.value.auxiliar1, tripForm.value.auxiliar2]
        }, { withCredentials: true })
        window.Swal.fire({ icon: 'success', title: '¡Tripulación asignada!', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    } catch (err) {
        window.Swal.fire({ icon: 'error', title: 'Error', text: err.response?.data?.message || 'Error al asignar tripulación.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    } finally { loadingTrip.value = false }
}

const guardarVuelo = async () => {
    if (!form.value.codigo_vuelo.trim()) { error.value = 'El código de vuelo es obligatorio.'; return }
    if (!form.value.fecha_salida) { error.value = 'La fecha de salida es obligatoria.'; return }
    if (!form.value.fecha_llegada) { error.value = 'La fecha de llegada es obligatoria.'; return }
    if (!form.value.id_ruta) { error.value = 'Debes seleccionar una ruta.'; return }
    if (!form.value.id_avion) { error.value = 'Debes seleccionar un avión.'; return }

    error.value = ''
    loading.value = true
    try {
        if (modoEdicion.value) {
            await actualizarVuelo(vueloEditandoId.value, form.value)
            window.Swal.fire({ icon: 'success', title: '¡Actualizado!', text: 'Vuelo actualizado correctamente.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        } else {
            await crearVuelo(form.value)
            window.Swal.fire({ icon: 'success', title: '¡Creado!', text: 'Vuelo creado exitosamente.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        }
        cerrarModal()
        await cargarVuelos()
    } catch (err) {
        error.value = err.response?.data?.message || 'Error al guardar el vuelo.'
    } finally {
        loading.value = false
    }
}

const gestionarAsientos = async (idVuelo) => {
    let asientosVuelo = []
    try {
        const res = await axios.get(`${API_URL}/api/vuelos/${idVuelo}/asientos`, { withCredentials: true })
        asientosVuelo = res.data
    } catch { asientosVuelo = [] }

    const vuelo = vuelos.value.find(v => v.id_vuelo === idVuelo)
    const codigoVuelo = vuelo?.codigo_vuelo || `Vuelo #${idVuelo}`

    const renderMapa = (asientos) => {
        const clases = ['primera_clase', 'ejecutiva', 'turista']
        const etiquetas = { primera_clase: 'Primera', ejecutiva: 'Ejecutiva', turista: 'Turista' }
        return clases.map(clase => {
            const asientosClase = asientos.filter(a => a.clase === clase)
            if (!asientosClase.length) return ''
            const filasClase = {}
            asientosClase.forEach(a => {
                const fila = a.numero_asiento.replace(/[A-F]/g, '')
                if (!filasClase[fila]) filasClase[fila] = []
                filasClase[fila].push(a)
            })
            return `
                <div style="margin-bottom:1rem;">
                    <p style="color:#c9a84c;font-size:0.75rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:0.5rem;">${etiquetas[clase]}</p>
                    ${Object.entries(filasClase).map(([fila, asientosF]) => `
                        <div style="display:flex;align-items:center;gap:0.4rem;justify-content:center;margin-bottom:0.3rem;">
                            <span style="color:#6b5a5a;font-size:0.75rem;width:20px;text-align:right;">${fila}</span>
                            ${asientosF.map(a => {
                                const color = a.estado === 'disponible' ? '#7fd4a0' : a.estado === 'ocupado' ? '#f08080' : '#f0c96b'
                                const bg = a.estado === 'disponible' ? 'rgba(46,155,90,0.15)' : a.estado === 'ocupado' ? 'rgba(155,28,46,0.2)' : 'rgba(201,168,76,0.2)'
                                const clickable = a.estado !== 'ocupado'
                                return `<button class="swal-seat-manage"
                                    data-id="${a.id_asiento}" data-num="${a.numero_asiento}" data-estado="${a.estado}"
                                    ${!clickable ? 'disabled' : ''}
                                    style="width:36px;height:36px;border-radius:6px;border:1px solid ${color};
                                    cursor:${clickable ? 'pointer' : 'not-allowed'};font-size:0.7rem;font-weight:700;font-family:inherit;
                                    background:${bg};color:${color};"
                                    title="${a.numero_asiento} — ${a.estado}">
                                    ${a.numero_asiento.replace(fila, '')}
                                </button>`
                            }).join('')}
                        </div>
                    `).join('')}
                </div>
            `
        }).join('')
    }

    await window.Swal.fire({
        title: `Asientos — ${codigoVuelo}`,
        html: `
            <div style="display:flex;gap:0.5rem;justify-content:center;margin-bottom:1rem;flex-wrap:wrap;">
                <span style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#7fd4a0;"><span style="width:12px;height:12px;background:rgba(46,155,90,0.3);border:1px solid #7fd4a0;border-radius:3px;display:inline-block;"></span>Disponible</span>
                <span style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#f08080;"><span style="width:12px;height:12px;background:rgba(155,28,46,0.3);border:1px solid #f08080;border-radius:3px;display:inline-block;"></span>Ocupado</span>
                <span style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#f0c96b;"><span style="width:12px;height:12px;background:rgba(201,168,76,0.2);border:1px solid #f0c96b;border-radius:3px;display:inline-block;"></span>Bloqueado</span>
            </div>
            <p style="color:#b89a8a;font-size:0.8rem;margin-bottom:1rem;">Clic en disponible para bloquear, en bloqueado para desbloquear.</p>
            <div style="max-height:350px;overflow-y:auto;">${renderMapa(asientosVuelo)}</div>
        `,
        background: '#1a0c10', color: '#f0e8e0',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#4a3020',
        width: '500px',
        didOpen: () => {
            document.querySelectorAll('.swal-seat-manage:not([disabled])').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const estadoActual = btn.dataset.estado
                    const nuevoEstado = estadoActual === 'disponible' ? 'bloqueado' : 'disponible'
                    try {
                        await axios.post(`${API_URL}/api/vuelos/${idVuelo}/asientos/estado`, {
                            id_asiento: btn.dataset.id, estado: nuevoEstado
                        }, { withCredentials: true })
                        btn.dataset.estado = nuevoEstado
                        const color = nuevoEstado === 'disponible' ? '#7fd4a0' : '#f0c96b'
                        const bg = nuevoEstado === 'disponible' ? 'rgba(46,155,90,0.15)' : 'rgba(201,168,76,0.2)'
                        btn.style.borderColor = color
                        btn.style.background = bg
                        btn.style.color = color
                    } catch { console.error('Error al cambiar estado') }
                })
            })
        }
    })
}

const confirmarEliminar = async (id) => {
    const result = await window.Swal.fire({
        title: '¿Eliminar vuelo?', text: 'Esta acción no se puede deshacer.',
        icon: 'warning', showCancelButton: true,
        confirmButtonText: 'Sí, eliminar', cancelButtonText: 'Cancelar',
        background: '#1a0c10', color: '#f0e8e0',
        confirmButtonColor: '#9b1c2e', cancelButtonColor: '#4a3020'
    })
    if (!result.isConfirmed) return
    try {
        await eliminarVuelo(id)
        window.Swal.fire({ icon: 'success', title: 'Eliminado', text: 'El vuelo fue eliminado.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
        await cargarVuelos()
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
    await cargarSelectores()
    await cargarVuelos()
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

:deep(.badge-programado) {
    background: rgba(76, 148, 201, 0.15);
    color: #7ab8f5;
    border: 1px solid rgba(76, 148, 201, 0.3);
}

:deep(.badge-retrasado) {
    background: rgba(201, 168, 76, 0.15);
    color: #c9a84c;
    border: 1px solid rgba(201, 168, 76, 0.3);
}

:deep(.badge-cancelado) {
    background: rgba(155, 28, 46, 0.2);
    color: #f08080;
    border: 1px solid rgba(155, 28, 46, 0.4);
}

:deep(.badge-completado) {
    background: rgba(46, 155, 90, 0.15);
    color: #7fd4a0;
    border: 1px solid rgba(46, 155, 90, 0.3);
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

.section-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    color: #c9a84c;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.section-divider::before,
.section-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(201, 168, 76, 0.2);
}

.modal-trip-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    padding: 0 1.5rem 1rem;
}

.form-section {
    padding: 0 1.5rem;
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