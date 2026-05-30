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
                <h1 class="page-title">Grupos</h1>
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
                        <h2 class="section-title">Grupos de Reserva</h2>
                        <p class="page-subtitle">Reservas grupales registradas en el sistema</p>
                    </div>
                </div>
            </div>

            <!-- Tarjetas resumen -->
            <div class="stats-row animate-fade-up">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22"
                            height="22">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div>
                        <p class="stat-label">Total Grupos</p>
                        <p class="stat-value">{{ grupos.length }}</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22"
                            height="22">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                    </div>
                    <div>
                        <p class="stat-label">Reservas Activas</p>
                        <p class="stat-value">{{grupos.filter(g => g.total_reservas > 0).length}}</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22"
                            height="22">
                            <line x1="12" y1="1" x2="12" y2="23" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>
                    <div>
                        <p class="stat-label">Ingresos Totales</p>
                        <p class="stat-value">${{ totalIngresos.toLocaleString() }} MXN</p>
                    </div>
                </div>
            </div>

            <div class="table-card animate-fade-up">
                <div class="table-responsive">
                    <table id="tablaGrupos" class="quetzal-table" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Responsable</th>
                                <th>Vuelo</th>
                                <th>Ruta</th>
                                <th>Reservas</th>
                                <th>Método Pago</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { logoutUsuario } from '../services/api'

const router = useRouter()
const usuario = ref(null)
const sidebarCollapsed = ref(false)
const grupos = ref([])
const tiempoSesion = ref('5:00')
const timerWarning = ref(false)

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const bienvenida = computed(() => {
    if (!usuario.value) return 'Bienvenido'
    return usuario.value.genero === 'femenino' ? 'Bienvenida' : 'Bienvenido'
})

const totalIngresos = computed(() =>
    grupos.value.reduce((sum, g) => sum + (Number(g.monto_total) || 0), 0)
)

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
        tablaInstance = window.$('#tablaGrupos').DataTable({
            data: grupos.value,
            columns: [
                { data: 'id_grupo' },
                { data: null, render: g => `${g.responsable_nombre} ${g.responsable_apellido}` },
                { data: 'codigo_vuelo', render: d => d || '—' },
                { data: null, render: g => g.origen && g.destino ? `${g.origen} → ${g.destino}` : '—' },
                {
                    data: 'total_reservas',
                    render: d => {
                        const n = Number(d)
                        const cls = n > 0 ? 'badge-confirmada' : 'badge-espera'
                        return `<span class="estado-badge ${cls}">${n} reserva${n !== 1 ? 's' : ''}</span>`
                    }
                },
                {
                    data: 'metodo',
                    render: d => d ? `<span class="estado-badge badge-metodo">${d}</span>` : '—'
                },
                {
                    data: 'monto_total',
                    render: d => d ? `<strong style="color:#c9a84c;">$${Number(d).toLocaleString()} MXN</strong>` : '—'
                },
                { data: 'fecha_creacion', render: d => formatFecha(d) },
                {
                    data: 'id_grupo', orderable: false,
                    render: id => `
                        <div class="action-btns">
                            <button class="btn-boleto-grupo" data-id="${id}" title="Boleto grupal">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
                                    <path d="M2 9a1 1 0 0 1 0-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a1 1 0 0 1 0 2v2a1 1 0 0 1 0 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a1 1 0 0 1 0-2V9z"/>
                                    <line x1="9" y1="12" x2="15" y2="12"/>
                                    <line x1="12" y1="9" x2="12" y2="15"/>
                                </svg>
                            </button>
                        </div>`
                }
            ],
            language: { url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-MX.json' },
            pageLength: 10,
            dom: '<"dt-top"lf>rt<"dt-bottom"ip>',
            order: [[0, 'desc']],
            drawCallback: () => {
                document.querySelectorAll('.btn-boleto-grupo').forEach(btn => {
                    btn.onclick = () => verBoletoGrupal(Number(btn.dataset.id))
                })
            }
        })
    })
}

const cargarGrupos = async () => {
    try {
        const res = await fetch(`${API_URL}/api/reservas/grupos/todos`, { credentials: 'include' })
        grupos.value = await res.json()
        inicializarTabla()
    } catch { console.error('Error al cargar grupos') }
}

const verBoletoGrupal = async (id) => {
    try {
        const res = await fetch(`${API_URL}/api/reservas/grupos/${id}/pasajeros`, { credentials: 'include' })
        const data = await res.json()
        const { pasajeros, tripulacion } = data
        if (!pasajeros || pasajeros.length === 0) {
            window.Swal.fire({ icon: 'warning', title: 'Sin datos', text: 'No se encontraron pasajeros en este grupo.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
            return
        }
        const piloto = tripulacion?.find(t => t.rol === 'piloto')
        const copiloto = tripulacion?.find(t => t.rol === 'copiloto')
        const p0 = pasajeros[0]
        const tipo = p0.tipo_grupo ? (p0.tipo_grupo.charAt(0).toUpperCase() + p0.tipo_grupo.slice(1)) : 'Grupo'

        const htmlPasajeros = pasajeros.map((p, i) => `
            <div style="padding:0.75rem;background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.15);border-radius:8px;margin-bottom:0.5rem;text-align:left;">
                <strong style="color:#c9a84c;">${i + 1}. ${p.nombre} ${p.primer_apellido}</strong>
                <span style="color:#b89a8a;font-size:0.8rem;"> — ${p.num_pasaporte}</span><br>
                <small style="color:#b89a8a;">Asiento: <strong style="color:#f0e8e0;">${p.numero_asiento || '—'}</strong> | Clase: <strong style="color:#f0e8e0;">${p.clase || '—'}</strong></small>
            </div>`).join('')

        const resultBoleto = await window.Swal.fire({
            title: `Boleto Grupal — ${tipo}`,
            html: `
                <div style="text-align:center;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid rgba(201,168,76,0.2);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="1.5" width="42" height="42">
                        <path d="M22 16.5H2l4-9h12l4 9z"/><path d="M6 16.5l1.5 3h9l1.5-3"/><path d="M12 7.5V4m0 0l-2 2m2-2l2 2"/>
                    </svg>
                    <p style="color:#c9a84c;font-size:0.75rem;letter-spacing:2px;margin:0.5rem 0 0;">AEROLÍNEA QUETZAL</p>
                </div>
                <div style="text-align:left;font-size:0.85rem;margin-bottom:1rem;">
                    <p><span style="color:#c9a84c;font-weight:700;">Vuelo:</span> ${p0.codigo_vuelo}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Ruta:</span> ${p0.origen_ciudad} (${p0.origen_iata}) → ${p0.destino_ciudad} (${p0.destino_iata})</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Salida:</span> ${formatFecha(p0.fecha_salida)}</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Avión:</span> ${p0.modelo} (${p0.matricula})</p>
                    <p><span style="color:#c9a84c;font-weight:700;">Pago:</span> ${p0.metodo} — $${Number(p0.monto_total).toLocaleString()} MXN</p>
                    ${piloto ? `<p><span style="color:#c9a84c;font-weight:700;">Piloto:</span> ${piloto.nombre} ${piloto.primer_apellido}</p>` : ''}
                </div>
                <p style="color:#c9a84c;font-weight:700;margin-bottom:0.5rem;">Pasajeros (${pasajeros.length}):</p>
                ${htmlPasajeros}`,
            background: '#1a0c10', color: '#f0e8e0',
            confirmButtonText: '📄 Descargar PDF Grupal',
            confirmButtonColor: '#c9a84c',
            showCancelButton: true, cancelButtonText: 'Cerrar', cancelButtonColor: '#4a3020',
            width: '600px'
        })

        if (resultBoleto.isConfirmed) {
            await generarPDFGrupal(pasajeros, tripulacion, tipo)
        }
    } catch (err) {
        console.error(err)
        window.Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo cargar el boleto grupal.', background: '#1a0c10', color: '#f0e8e0', confirmButtonColor: '#c9a84c' })
    }
}

const cargarFuenteCinzel = async () => {
    const url = 'https://raw.githubusercontent.com/google/fonts/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf'
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
    return btoa(binary)
}

const generarPDFGrupal = async (pasajeros, tripulacion, tipo) => {
    const { jsPDF } = window.jspdf
    const p0 = pasajeros[0]
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [210, 175] })
    const W = doc.internal.pageSize.getWidth()
    const H = doc.internal.pageSize.getHeight()

    const cinzelBase64 = await cargarFuenteCinzel()
    doc.addFileToVFS('Cinzel.ttf', cinzelBase64)
    doc.addFont('Cinzel.ttf', 'Cinzel', 'normal')

    doc.setFillColor(15, 5, 8)
    doc.rect(0, 0, W, H, 'F')
    doc.setDrawColor(90, 60, 10); doc.setLineWidth(2); doc.rect(5, 5, W - 10, H - 10)
    doc.setDrawColor(201, 168, 76); doc.setLineWidth(0.6); doc.rect(5, 5, W - 10, H - 10)
    doc.setDrawColor(255, 215, 106); doc.setLineWidth(0.25); doc.rect(7.5, 7.5, W - 15, H - 15)

    for (let i = 0; i < 18; i++) {
        const t = i / 18
        doc.setFillColor(Math.round(80 + (18 - 80) * t), Math.round(10 + (3 - 10) * t), Math.round(20 + (8 - 20) * t))
        doc.rect(5, 5 + i, W - 10, 1.1, 'F')
    }

    doc.setFont('Cinzel', 'normal'); doc.setFontSize(13); doc.setTextColor(255, 215, 106)
    doc.text('AEROLINEA QUETZAL', W / 2, 17, { align: 'center' })
    doc.setFontSize(8); doc.setTextColor(180, 154, 138)
    doc.text(`BOLETO GRUPAL — ${tipo.toUpperCase()}`, W / 2, 23, { align: 'center' })

    doc.setDrawColor(201, 168, 76); doc.setLineWidth(0.4); doc.line(12, 26, W - 12, 26)

    doc.setFontSize(36); doc.setTextColor(90, 60, 10)
    doc.text(p0.origen_iata, W / 2 - 40.4, 45.4, { align: 'center' })
    doc.text(p0.destino_iata, W / 2 + 40.4, 45.4, { align: 'center' })
    doc.setTextColor(255, 215, 106); doc.text(p0.origen_iata, W / 2 - 40, 45, { align: 'center' })
    doc.setTextColor(201, 168, 76); doc.text(p0.destino_iata, W / 2 + 40, 45, { align: 'center' })
    doc.setFontSize(9); doc.setTextColor(180, 154, 138)
    doc.text(p0.origen_ciudad, W / 2 - 40, 51, { align: 'center' })
    doc.text(p0.destino_ciudad, W / 2 + 40, 51, { align: 'center' })
    doc.setDrawColor(201, 168, 76); doc.setLineWidth(0.3)
    doc.line(W / 2 - 24, 43, W / 2 + 24, 43)
    doc.setFillColor(201, 168, 76); doc.triangle(W / 2 + 24, 43, W / 2 + 20, 41, W / 2 + 20, 45, 'F')

    doc.setDrawColor(201, 168, 76); doc.setLineWidth(0.2); doc.line(12, 56, W - 12, 56)

    doc.setFontSize(8); doc.setTextColor(180, 154, 138); doc.setFont('helvetica', 'normal')
    doc.text('VUELO', 20, 63); doc.text('SALIDA', W / 2, 63, { align: 'center' }); doc.text('AVIÓN', W - 20, 63, { align: 'right' })
    doc.setFontSize(10); doc.setTextColor(240, 232, 224); doc.setFont('helvetica', 'bold')
    doc.text(p0.codigo_vuelo, 20, 70)
    doc.text(formatFecha(p0.fecha_salida), W / 2, 70, { align: 'center' })
    doc.text(`${p0.modelo} (${p0.matricula})`, W - 20, 70, { align: 'right' })

    doc.setDrawColor(201, 168, 76); doc.setLineWidth(0.2); doc.line(12, 75, W - 12, 75)

    // Pasajeros
    doc.setFontSize(8); doc.setTextColor(180, 154, 138); doc.setFont('helvetica', 'normal')
    doc.text(`PASAJEROS DEL GRUPO (${pasajeros.length})`, 20, 81)
    let y = 89
    pasajeros.forEach((p, i) => {
        doc.setFontSize(9); doc.setTextColor(240, 232, 224); doc.setFont('helvetica', 'bold')
        doc.text(`${i + 1}. ${p.nombre} ${p.primer_apellido}`, 20, y)
        doc.setFont('helvetica', 'normal'); doc.setTextColor(180, 154, 138); doc.setFontSize(8)
        doc.text(`Pasaporte: ${p.num_pasaporte}  |  Asiento: ${p.numero_asiento || '—'}  |  Clase: ${p.clase || '—'}`, 20, y + 5)
        y += 13
    })

    doc.setDrawColor(201, 168, 76); doc.setLineWidth(0.3); doc.line(12, y + 2, W - 12, y + 2)

    const piloto = tripulacion?.find(t => t.rol === 'piloto')
    doc.setFontSize(7); doc.setTextColor(180, 154, 138); doc.setFont('helvetica', 'normal')
    doc.text('PAGO', 20, y + 8)
    doc.text(piloto ? 'PILOTO' : '', W / 2, y + 8, { align: 'center' })
    doc.setFontSize(7.5); doc.setTextColor(240, 232, 224); doc.setFont('helvetica', 'bold')
    doc.text(`${p0.metodo} — $${Number(p0.monto_total).toLocaleString()} MXN`, 20, y + 13)
    if (piloto) doc.text(`${piloto.nombre} ${piloto.primer_apellido}`, W / 2, y + 13, { align: 'center' })

    doc.setFontSize(9); doc.setTextColor(255, 215, 106); doc.setFont('Cinzel', 'normal')
    doc.text('QUETZAL: PRECISION, CONFORT Y DESTINO.', W / 2, H - 15, { align: 'center' })

    const qrRes = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=c9a84c&bgcolor=0f0508&data=${encodeURIComponent('https://sanchezreyeslaura-reserva-vuelos-frontend.onrender.com')}`)
    const qrBlob = await qrRes.blob()
    const qrBase64 = await new Promise(resolve => { const r = new FileReader(); r.onload = () => resolve(r.result); r.readAsDataURL(qrBlob) })
    doc.addImage(qrBase64, 'PNG', W - 30, H - 30, 18, 18)

    doc.save(`boleto-grupal-${tipo}-${p0.codigo_vuelo}.pdf`)
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
    await cargarGrupos()
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

.stats-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.75rem;
    flex-wrap: wrap;
}

.stat-card {
    flex: 1;
    min-width: 160px;
    background: #1a0c10;
    border: 1px solid rgba(201, 168, 76, 0.15);
    border-radius: 12px;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.stat-icon {
    width: 44px;
    height: 44px;
    background: rgba(201, 168, 76, 0.1);
    border: 1px solid rgba(201, 168, 76, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a84c;
    flex-shrink: 0;
}

.stat-label {
    font-size: 0.75rem;
    color: #b89a8a;
    margin: 0 0 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stat-value {
    font-size: 1.4rem;
    font-weight: 800;
    color: #c9a84c;
    margin: 0;
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

:deep(.badge-espera) {
    background: rgba(201, 168, 76, 0.15);
    color: #c9a84c;
    border: 1px solid rgba(201, 168, 76, 0.3);
}

:deep(.badge-metodo) {
    background: rgba(100, 120, 200, 0.15);
    color: #a0b4f0;
    border: 1px solid rgba(100, 120, 200, 0.3);
}

:deep(.action-btns) {
    display: flex;
    gap: 0.5rem;
}

:deep(.btn-boleto-grupo) {
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

:deep(.btn-boleto-grupo:hover) {
    background: rgba(46, 155, 90, 0.28);
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

    .stats-row {
        flex-direction: column;
    }
}
</style>