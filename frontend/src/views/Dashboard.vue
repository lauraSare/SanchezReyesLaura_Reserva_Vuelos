<template>
    <div class="dashboard wrapper">
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
                        <polyline points="10 9 9 9 8 9" />
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
                <h1 class="page-title">Dashboard</h1>
                <div class="session-timer" :class="{ 'timer-warning': timerWarning }">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14"
                        height="14">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {{ tiempoSesion }}
                </div>
                <div class="topbar-right">
                    <span class="welcome-text">
                        {{ bienvenida }}, <strong>{{ usuario?.nombre }}</strong>
                    </span>
                </div>
            </header>

            <div class="stats-grid">
                <div class="stat-card" v-for="stat in stats" :key="stat.label">
                    <div class="stat-icon" v-html="stat.svg"></div>
                    <div class="stat-info">
                        <span class="stat-number">{{ stat.value }}</span>
                        <span class="stat-label">{{ stat.label }}</span>
                    </div>
                </div>
            </div>

            <div class="table-card">
                <div class="table-header">
                    <h2>Reservas Recientes</h2>
                </div>
                <div v-if="reservasRecientes.length === 0" class="table-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48"
                        height="48">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <p>No hay reservas recientes</p>
                    <router-link to="/reservas" class="btn-gold">Ver todas las reservas</router-link>
                </div>
                <div v-else class="table-responsive">
                    <table class="quetzal-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Pasajero</th>
                                <th>Vuelo</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="r in reservasRecientes" :key="r.id_reserva">
                                <td>{{ r.id_reserva }}</td>
                                <td>{{ new Date(r.fecha_reserva).toLocaleString('es-MX', {
                                    dateStyle: 'short',
                                    timeStyle: 'short'
                                }) }}</td>
                                <td>{{ r.nombre }} {{ r.primer_apellido }}</td>
                                <td>{{ r.codigo_vuelo }}</td>
                                <td>
                                    <span class="estado-badge" :class="{
                                        'badge-confirmada': r.estado === 'confirmada',
                                        'badge-cancelada': r.estado === 'cancelada',
                                        'badge-espera': r.estado === 'en_espera'
                                    }">
                                        {{ r.estado === 'en_espera' ? 'En espera' : r.estado.charAt(0).toUpperCase() +
                                            r.estado.slice(1) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="table-footer">
                        <router-link to="/reservas" class="btn-gold">Ver todas las reservas</router-link>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getEstadisticas, logoutUsuario } from '../services/api'

const router = useRouter()
const usuario = ref(null)
const sidebarCollapsed = ref(false)
const reservasRecientes = ref([])
const tiempoSesion = ref('5:00')
const timerWarning = ref(false)

// Mensaje de bienvenida según género
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
            icon: 'warning',
            title: '¡Sesión expirada!',
            text: 'Tu sesión ha terminado. Por favor inicia sesión nuevamente.',
            background: '#1a0c10',
            color: '#f0e8e0',
            confirmButtonColor: '#c9a84c',
            confirmButtonText: 'Ir al login'
        }).then(() => {
            localStorage.removeItem('usuario')
            router.push('/')
        })
    }
}

onUnmounted(() => {
    window.removeEventListener('session-timer', onSessionTimer)
})

const stats = ref([
    {
        label: 'Vuelos Disponibles',
        value: '...',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>`
    },
    {
        label: 'Pasajeros Registrados',
        value: '...',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    {
        label: 'Reservas Activas',
        value: '...',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
    },
    {
        label: 'Tripulación',
        value: '...',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
])

onMounted(async () => {
    const data = localStorage.getItem('usuario')
    if (!data) {
        router.push('/login')
        return
    }
    usuario.value = JSON.parse(data)
    window.addEventListener('session-timer', onSessionTimer)

    try {
        const res = await getEstadisticas()
        stats.value[0].value = res.data.totales.vuelos
        stats.value[1].value = res.data.totales.pasajeros
        stats.value[2].value = res.data.totales.reservas
        stats.value[3].value = res.data.totales.tripulacion
        reservasRecientes.value = res.data.recientes || []
    } catch (error) {
        console.error('Error al cargar estadísticas:', error)
    }
})

const handleLogout = async () => {
    await logoutUsuario()
    localStorage.removeItem('usuario')
    router.push('/')
}
</script>

<style scoped>
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
    text-decoration: none !important;
    color: #c9a84c !important;
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
    overflow-x: hidden;
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

.welcome-text {
    color: #b89a8a;
    font-size: 0.9rem;
}

.welcome-text strong {
    color: #c9a84c;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
}

@media (max-width: 1200px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
}

.stat-card {
    background: #1a0c10;
    border: 1px solid rgba(201, 168, 76, 0.15);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.25s;
}

.stat-card:hover {
    border-color: rgba(201, 168, 76, 0.4);
    transform: translateY(-2px);
}

.stat-icon {
    color: #c9a84c;
    flex-shrink: 0;
}

.stat-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.stat-number {
    font-size: 1.8rem;
    font-weight: 900;
    color: #c9a84c;
    letter-spacing: -1px;
}

.stat-label {
    font-size: 0.85rem;
    color: #b89a8a;
}

.table-card {
    background: #1a0c10;
    border: 1px solid rgba(201, 168, 76, 0.15);
    border-radius: 12px;
    overflow: hidden;
}

.table-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(201, 168, 76, 0.1);
}

.table-header h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.table-empty {
    padding: 3rem;
    text-align: center;
    color: #b89a8a;
}

.table-empty svg {
    color: rgba(201, 168, 76, 0.3);
    margin-bottom: 1rem;
}

.table-empty p {
    margin-bottom: 1rem;
}

.btn-gold {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #c9a84c;
    color: #4a0a12;
    font-weight: 700;
    padding: 0.6rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-gold:hover {
    background: #f0c96b;
    transform: translateY(-1px);
}

.table-responsive {
    overflow-x: auto;
}

.quetzal-table {
    color: #f0e8e0;
    border-collapse: collapse;
    width: 100%;
}

.quetzal-table thead th {
    background: rgba(201, 168, 76, 0.08);
    color: #c9a84c;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(201, 168, 76, 0.2);
    padding: 0.9rem 1rem;
}

.quetzal-table tbody tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.quetzal-table tbody tr:hover td {
    background: rgba(201, 168, 76, 0.05);
}

.quetzal-table tbody td {
    padding: 0.85rem 1rem;
    font-size: 0.9rem;
    color: #f0e8e0;
}

.estado-badge {
    display: inline-block;
    padding: 0.25rem 0.7rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
}

.badge-confirmada {
    background: rgba(46, 155, 90, 0.15);
    color: #7fd4a0;
    border: 1px solid rgba(46, 155, 90, 0.3);
}

.badge-cancelada {
    background: rgba(155, 28, 46, 0.2);
    color: #f08080;
    border: 1px solid rgba(155, 28, 46, 0.4);
}

.badge-espera {
    background: rgba(201, 168, 76, 0.15);
    color: #c9a84c;
    border: 1px solid rgba(201, 168, 76, 0.3);
}

.table-footer {
    padding: 1rem;
    text-align: center;
    border-top: 1px solid rgba(201, 168, 76, 0.1);
    margin-top: 0.5rem;
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
