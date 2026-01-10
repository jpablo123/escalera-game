// Banco de Retos (Misión Cero Violencia)
const retos = [
    "Abrazo con permiso: Elige a alguien del grupo para darle un abrazo. ¡Eso sí! Pídele permiso primero y respeta su respuesta.",
    "Pregunta poderosa: Pregunta a un compañero: “¿Qué necesitas hoy para sentirte mejor?” Escucha sin interrumpir.",
    "Palabra que construye: Dile a un amigo una cualidad positiva que hayas notado en él.",
    "El reto del consentimiento: Inventa un saludo y pregúntale a otro jugador si quiere hacerlo contigo. Respeta el no.",
    "Respira primero: Haz 5 respiraciones profundas y luego comparte qué emoción sientes.",
    "Acto de cuidado: Ofrece ayuda a alguien del grupo en algo sencillo. Reflexiona por qué cuidar también es ser fuerte.",
    "Desafío sin estereotipos: Menciona una habilidad que no se suele asociar a la masculinidad.",
    "No es no: Simula una escena donde alguien dice NO a una actividad. Responde con respeto.",
    "Reto del reconocimiento: Agradece a un compañero por algo que haya hecho.",
    "¿Qué harías tú?: Piensa en una situación de conflicto y menciona dos formas de intervenir sin violencia.",
    "Rompe el mito: Completa: “Ser hombre NO significa…”.",
    "Escucha activa express: Escucha a un compañero 20 segundos sin interrumpir y repite lo que entendiste.",
    "El reto del perdón: Recuerda una situación donde lastimaste sentimientos y cómo habrías podido actuar distinto.",
    "Aliado por un minuto: Di una frase para apoyar a mujeres o niñas.",
    "Corresponsabilidad en acción: Menciona una tarea del hogar que harás esta semana y por qué es justo.",
    "Línea de la empatía: Menciona una situación de conflicto y cómo acompañarlo.",
    "Stop, piensa y elige: Describe una situación de enojo y una alternativa no violenta.",
    "El reto de la vulnerabilidad: Completa: “A veces me cuesta pedir ayuda cuando…”.",
    "Detective de emociones: Pregunta a alguien qué emoción siente hoy y por qué.",
    "Héroe real: Menciona una acción que hace a un hombre realmente valiente."
];

const adivinanzas = [
    {
        pregunta: "Lo que siempre se pregunta:<br>Antes de abrazar o jugar,<br>hay una cosa que debes usar.<br>No es un objeto ni un poder,<br>solo una palabra que debes decir primero.<br>¿Qué es?",
        respuestas: ["puedo", "pedir permiso", "permiso", "el permiso"]
    },
    {
        pregunta: "La fuerza que ayuda:<br>No se ve y no pesa nada,<br>pero hace a la gente sentirse acompañada.<br>No golpea, no grita, no manda,<br>solo escucha y a veces abraza.<br>¿Qué es?",
        respuestas: ["ser amable", "ponerse en el lugar del otro", "amabilidad", "la amabilidad", "empatía", "empatia", "ser empático", "ser empatico"]
    },
    {
        pregunta: "Lo que duele aunque no toca:<br>No tiene manos ni pies,<br>pero puede dejar un moretón.<br>Sale por la boca de alguien<br>que no piensa con el corazón.<br>¿Qué es?",
        respuestas: ["las palabras que lastiman", "palabras que lastiman", "palabras", "insultos", "malas palabras", "groserias", "gritos", "las palabras"]
    },

    {
        pregunta: "En favor de la mujer:<br>Tengo voz y tengo derechos,<br>pienso, decido y sé elegir.<br>Merezco respeto y cuidado,<br>igualdad para poder vivir.<br>¿Quién soy?",
        respuestas: ["la mujer", "una mujer", "mujer", "mujeres", "las mujeres"]
    }
];

// Nuevos Retos de Desbloqueo (Violencia de Género)
const desbloqueos = [
    {
        id: "reto5",
        titulo: "RETO 5: DESBLOQUEA EL LÍMITE SANO",
        pista: "Protegerse no es agredir ni controlar.",
        palabra: "RESPETO",
        mascara: "_ _ _ _ _ _ _",
        imagen: "./assets/sprites/shield_protection.png",
        premioMsg: "¡ESCUDO COMPLETADO!",
        premioDesc: "El escudo completo simboliza el autocuidado y el respeto mutuo. Avanzas 4 casillas.",
        tipoVisual: "escudo"
    },
    {
        id: "reto6",
        titulo: "RETO 6: DESBLOQUEA LA EMOCIÓN",
        pista: "No te hace débil sentirla, te hace humano.",
        palabra: "MIEDO",
        mascara: "_ _ _ _ _",
        imagen: "./assets/sprites/emotion_lock.png",
        premioMsg: "¡COLOR RESTAURADO!",
        premioDesc: "Reconocer tus emociones te da poder. Avanzas 4 casillas.",
        tipoVisual: "emocion"
    },
    {
        id: "reto7",
        titulo: "RETO 7: DESBLOQUEA LA DECISIÓN CONSCIENTE",
        pista: "No todo impulso debe convertirse en acción.",
        palabra: "PAUSA",
        mascara: "_ _ _ _ _",
        imagen: "./assets/sprites/conscious_pause.png",
        premioMsg: "¡RESPIRACIÓN ACTIVADA!",
        premioDesc: "Tomar una pausa evita la violencia. Avanzas 4 casillas.",
        tipoVisual: "pausa"
    }
];

// Casillas Especiales (PORTALES, GUSANOS Y RETOS)
const casillasEspeciales = {
    // Retos distribuidos
    1: { tipo: 'info', id: 1 }, // NEW (Reflexión)
    2: { tipo: 'info', id: 2 }, // NEW (Reflexión)
    3: { tipo: 'info', id: 3 }, // NEW (Reflexión) -> Was Reto (Moved to 57)
    4: { tipo: 'info', id: 4 }, // NEW (Reflexión) -> Was Physio
    5: { tipo: 'info', id: 5 }, // NEW (Reflexión)
    6: { tipo: 'info', id: 6 }, // NEW (Reflexión) -> Was Reto
    7: { tipo: 'info', id: 7 }, // NEW (Reflexión)
    8: { tipo: 'info', id: 8 }, // NEW (Portal Info) -> Was Riddle (Moved to 17)
    9: { tipo: 'info', id: 9 }, // NEW (Dato Curioso) -> Was Physio (Moved to 21)
    10: { tipo: 'info', id: 10 }, // NEW (Portal Info) -> Was Portal (Moved to 29)
    12: { tipo: 'info', id: 12 }, // NEW (Dato Curioso) -> Was Lock (Moved to 32)
    15: { tipo: 'info', id: 15 }, // NEW (Reflexión Final) -> Was Snake (Moved to 34)

    // MOVED MECHANICS (Preserving Gameplay Balance)
    17: { tipo: 'adivinanza' }, // Moved from 8
    21: { tipo: 'retoFisico' }, // Moved from 9
    46: { tipo: 'portal', msg: '¡SALTO DIMENSIONAL!' }, // Moved from 29 (Requested)
    32: { tipo: 'desbloqueo', id: 'reto5' }, // Moved from 12
    34: { tipo: 'gusano', destino: 7, msg: '¡EL GUSANO TE DEVORA!' }, // Moved from 15

    // Existing Mapping (Unchanged)
    11: { tipo: 'reto' },
    13: { tipo: 'retoFisico' },
    16: { tipo: 'retoFisico' },
    18: { tipo: 'reto' },
    19: { tipo: 'retoFisico' },
    20: { tipo: 'reto' },
    22: { tipo: 'adivinanza' },
    23: { tipo: 'retoFisico' },
    24: { tipo: 'reto' },
    26: { tipo: 'retoFisico' },
    27: { tipo: 'reto' },
    28: { tipo: 'desbloqueo', id: 'reto6' },
    31: { tipo: 'retoFisico' },
    33: { tipo: 'reto' },
    37: { tipo: 'retoFisico' },
    38: { tipo: 'adivinanza' },
    39: { tipo: 'reto' },
    42: { tipo: 'desbloqueo', id: 'reto7' },
    43: { tipo: 'retoFisico' },
    44: { tipo: 'reto' },
    48: { tipo: 'adivinanza' },
    57: { tipo: 'reto' },
    47: { tipo: 'reto' },

    // Portales (Remaining)
    14: { tipo: 'portal', msg: '¡AGUJERO DE GUSANO!' }, // Moved from 30 (Requested)
    35: { tipo: 'portal', msg: '¡TELETRANSPORTACIÓN!' },

    // Reto Maestro
    36: { tipo: 'retoMaestro' },

    // Retos de Regulación
    30: { tipo: 'retoRegulacion', sub: 'pausa' }, // Moved from 14 (Swapped)
    25: { tipo: 'retoRegulacion', sub: 'transforma' },
    40: { tipo: 'retoRegulacion', sub: 'termometro' },

    // Gusanos (Remaining)
    45: { tipo: 'gusano', destino: 32, msg: '¡EL GUSANO TE ESCUPE!' }
};

// ==========================================
// GAME CONSTANTS & STATE
// ==========================================
const FILAS = 7;
const COLUMNAS = 7;
const TOTAL_CASILLAS = FILAS * COLUMNAS; // 49
let jugadores = [];
let turnoActual = 0;

// ==========================================
// VIDEO CROSSFADE MANAGER
// ==========================================
const video1 = document.getElementById('bg-video-1');
const video2 = document.getElementById('bg-video-2');
let activeVideo = video1;
let nextVideo = video2;
const CROSSFADE_TIME = 2;

function startVideoLoop() {
    activeVideo.play().catch(e => console.log("Video play failed", e));
    activeVideo.ontimeupdate = () => {
        if (activeVideo.duration - activeVideo.currentTime <= CROSSFADE_TIME) {
            activeVideo.ontimeupdate = null;
            swapVideos();
        }
    };
}

function swapVideos() {
    nextVideo.currentTime = 0;
    nextVideo.play();
    nextVideo.style.opacity = 1;
    activeVideo.style.opacity = 0;
    const temp = activeVideo;
    activeVideo = nextVideo;
    nextVideo = temp;
    startVideoLoop();
}

if (video1) video1.onloadedmetadata = startVideoLoop;

// ==========================================
// DOM ELEMENTS
// ==========================================
const tablero = document.getElementById('tablero');
const btnLanzar = document.getElementById('btn-lanzar');
const infoJugador = document.getElementById('nombre-jugador');
const avatarDisplay = document.getElementById('jugador-activo-avatar');
const logContainer = document.getElementById('log-juego');
const startScreen = document.getElementById('start-screen');
const loadingScreen = document.getElementById('loading-screen');
const gameContainer = document.getElementById('game-container');
const listaJugadoresDiv = document.getElementById('lista-jugadores');
const dadoVisual = document.getElementById('dado-visual');
const audioIntro = document.getElementById('audio-intro');
const audioGameplay = document.getElementById('audio-gameplay');
const volumeSlider = document.getElementById('volume-slider');

// ==========================================
// AUDIO MANAGER
// ==========================================
document.addEventListener('click', () => {
    if (audioIntro && audioIntro.paused && audioGameplay && audioGameplay.paused) {
        audioIntro.play().catch(e => console.log("Audio play failed", e));
        if (activeVideo) activeVideo.play();
    }
}, { once: true });

if (volumeSlider) {
    if (audioIntro) audioIntro.volume = volumeSlider.value;
    if (audioGameplay) audioGameplay.volume = volumeSlider.value;
    volumeSlider.addEventListener('input', (e) => {
        const vol = e.target.value;
        if (audioIntro) audioIntro.volume = vol;
        if (audioGameplay) audioGameplay.volume = vol;
    });
}

// ==========================================
// LOADING SCREEN LOGIC
// ==========================================
window.addEventListener('load', () => {
    showLoading(() => {
        if (startScreen) {
            startScreen.style.display = 'flex';
            startScreen.style.opacity = '1';
        }
    });
});

function showLoading(callback) {
    if (!loadingScreen) return;
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';

    const bar = loadingScreen.querySelector('.loading-bar');
    if (bar) {
        bar.style.animation = 'none';
        bar.offsetHeight;
        bar.style.animation = 'loadBar 3s forwards';
    }

    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            if (callback) callback();
        }, 1000);
    }, 3000);
}

// ==========================================
// GAME START LOGIC
// ==========================================
document.querySelectorAll('.btn-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const numPlayers = parseInt(e.target.dataset.players);
        startScreen.style.display = 'none';
        showLoading(() => {
            iniciarJuego(numPlayers);
        });
    });
});

// CHARACTER DATA (NUEVAS MASCULINIDADES)
const PERSONAJES = {
    1: { name: "TOMÁS", img: "./assets/avatars/char_tomas.png", role: "Aprender a sentir", bio: "Tomás aprendió que expresar emociones no lo hace débil. Reconocer lo que siente le ayuda a no reaccionar con violencia.", msg: "Sentir es humano." },
    2: { name: "MATEO", img: "./assets/avatars/char_mateo.png", role: "Cuestionar lo aprendido", bio: "Mateo se pregunta si algunas ideas sobre el amor y el poder realmente son correctas. Cuestionar lo aprendido le permite elegir relaciones más sanas.", msg: "Cuestionar también es valentía." },
    3: { name: "SEBASTIÁN", img: "./assets/avatars/char_sebastian.png", role: "Respetar límites", bio: "Sebastián entiende que querer a alguien implica escuchar y aceptar límites. El respeto guía sus decisiones.", msg: "El respeto incluye decir y aceptar un “no”." },
    4: { name: "LUCAS", img: "./assets/avatars/char_lucas.png", role: "Elegir no dañar", bio: "Lucas sabe manejar sus emociones sin lastimar a otros. Elegir respeto es su forma de ser fuerte.", msg: "La verdadera fuerza es no dañar." }
};

function iniciarJuego(num) {
    jugadores = [];
    for (let i = 1; i <= num; i++) {
        const pData = PERSONAJES[i] || PERSONAJES[1]; // Fallback
        jugadores.push({
            id: i,
            nombre: pData.name, // Use Character Name
            color: `p${i}`,
            posicion: 1,
            bioData: pData // Store bio data
        });
    }

    gameContainer.style.display = 'flex';
    gameContainer.classList.add('active-game');

    crearTablero();
    actualizarListaJugadores();
    actualizarTurnoUI();
    logSystem("JUEGO INICIADO. JUGADORES: " + num);

    if (audioIntro) {
        audioIntro.pause();
        audioIntro.currentTime = 0;
    }
    if (audioGameplay) {
        audioGameplay.currentTime = 0;
        audioGameplay.play().catch(e => console.log("Gameplay audio failed", e));
    }
}

// ==========================================
// CORE GAME FUNCTIONS
// ==========================================
function crearTablero() {
    tablero.innerHTML = '';
    for (let i = TOTAL_CASILLAS; i >= 1; i--) {
        const div = document.createElement('div');
        div.classList.add('casilla');
        div.id = `casilla-${i}`;
        div.innerText = i;

        if (casillasEspeciales[i]) {
            if (casillasEspeciales[i].tipo === 'portal') {
                div.classList.add('casilla-portal');
            } else if (casillasEspeciales[i].tipo === 'gusano') {
                div.classList.add('casilla-gusano');
            } else if (casillasEspeciales[i].tipo === 'reto') {
                div.classList.add('casilla-reto');
            } else if (casillasEspeciales[i].tipo === 'adivinanza') {
                div.classList.add('casilla-adivinanza');
            } else if (casillasEspeciales[i].tipo === 'desbloqueo') {
                div.classList.add('casilla-desbloqueo');
            } else if (casillasEspeciales[i].tipo === 'info') {
                div.classList.add('casilla-info');
                let icon = 'tile_reflection.png';
                if ([8, 10, 11].includes(i)) icon = 'tile_info_portal.png';
                else if ([9, 12, 13].includes(i)) icon = 'tile_fact.png';
                // Fallback or specific logic
                if (i === 8 || i === 10) icon = 'tile_info_portal.png';
                else if (i === 9 || i === 12) icon = 'tile_fact.png';

                div.style.backgroundImage = `url('./assets/sprites/${icon}')`;
                div.style.backgroundSize = "cover";
                div.style.boxShadow = "inset 0 0 10px #9B59B6";
            } else if (casillasEspeciales[i].tipo === 'retoMaestro') {
                div.classList.add('casilla-maestro');
            } else if (casillasEspeciales[i].tipo === 'retoRegulacion') {
                if (casillasEspeciales[i].sub === 'pausa') div.classList.add('casilla-reg-pausa');
                else if (casillasEspeciales[i].sub === 'transforma') {
                    div.classList.add('casilla-reg-transform');
                    // FORCE STYLE JS
                    div.style.backgroundImage = "url('./assets/sprites/butterfly.png')";
                    div.style.backgroundSize = "cover";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                }
                else if (casillasEspeciales[i].sub === 'termometro') div.classList.add('casilla-reg-termo');
                else div.classList.add('casilla-regulacion'); // Fallback
            } else if (casillasEspeciales[i].tipo === 'retoFisico') {
                div.classList.add('casilla-fisico');
                div.style.backgroundImage = "url('./assets/sprites/tile_physio.png')";
                div.style.backgroundSize = "cover";
                div.style.boxShadow = "inset 0 0 10px #2ECC71";
            }
        }

        // Asignar clases de Inicio y Fin
        if (i === 1) div.classList.add('casilla-inicio');
        if (i === TOTAL_CASILLAS) div.classList.add('casilla-fin');

        tablero.appendChild(div);
    } // END LOOP

    actualizarPosicionesVisuales();
    crearDebugUI(); // Initialize Debug UI
}

function crearDebugUI() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar || document.getElementById('debug-panel')) return;

    const debugPanel = document.createElement('div');
    debugPanel.id = 'debug-panel';
    debugPanel.style.marginTop = '20px';
    debugPanel.style.borderTop = '1px solid #444';
    debugPanel.style.paddingTop = '10px';
    debugPanel.innerHTML = `
        <h3 style="font-size: 14px; text-transform: uppercase;">Debug Zone</h3>
        <input type="number" id="debug-pos" placeholder="Casilla (1-49)" style="width: 80px; padding: 5px; background: #222; color: #fff; border: 1px solid #555;">
        <button id="btn-teleport" class="btn-action" style="margin-top: 5px; font-size: 10px;">Teleport</button>
    `;
    sidebar.appendChild(debugPanel);

    document.getElementById('btn-teleport').addEventListener('click', () => {
        const val = parseInt(document.getElementById('debug-pos').value);
        if (val >= 1 && val <= TOTAL_CASILLAS) {
            teleportarJugador(val);
        }
    });
}

function teleportarJugador(destino) {
    const jugador = jugadores[turnoActual];
    // Animate roughly
    jugador.posicion = destino;
    actualizarPosicionesVisuales();
    logSystem(`DEBUG: ${jugador.nombre} -> ${destino}`);

    // Check if we teleported to >49 (Win scenario handled manually if entering 49)
    if (destino === TOTAL_CASILLAS) {
        verificarFinalEvento(jugador);
    } else {
        verificarCasilla(jugador);
    }
}

function actualizarPosicionesVisuales() {
    document.querySelectorAll('.ficha').forEach(e => e.remove());
    jugadores.forEach(j => {
        const casillaDiv = document.getElementById(`casilla-${j.posicion}`);
        if (casillaDiv) {
            const ficha = document.createElement('div');
            ficha.classList.add('ficha', j.color);
            const others = jugadores.filter(p => p.posicion === j.posicion && p.id !== j.id);
            if (others.length > 0) {
                const offset = (j.id - 1) * 5;
                ficha.style.transform = `translate(${offset}px, ${offset}px)`;
            }
            casillaDiv.appendChild(ficha);
        }
    });
}

function actualizarListaJugadores() {
    if (!listaJugadoresDiv) return;
    listaJugadoresDiv.innerHTML = '';
    jugadores.forEach((j, index) => {
        const card = document.createElement('div');
        card.classList.add('player-card');
        if (index === turnoActual) card.classList.add('active');

        const avatar = document.createElement('div');
        avatar.classList.add('mini-avatar');
        avatar.style.backgroundImage = `url('./assets/avatars/avatar${j.id}.png')`;

        const name = document.createElement('span');
        name.classList.add('player-name'); // Class for responsive hiding
        name.innerText = j.nombre;
        name.style.color = `var(--${j.color}-color)`;

        card.appendChild(avatar);
        card.appendChild(name);
        listaJugadoresDiv.appendChild(card);
    });
}

function actualizarTurnoUI() {
    const actual = jugadores[turnoActual];
    if (infoJugador) {
        infoJugador.innerText = actual.nombre;
        infoJugador.style.color = `var(--${actual.color}-color)`;
    }

    // Update Avatar (Full Body)
    const avatarContainer = document.getElementById('jugador-activo-avatar');
    if (avatarContainer) {
        avatarContainer.style.backgroundImage = `url('${actual.bioData.img}')`;
        avatarContainer.style.backgroundSize = 'contain';
        avatarContainer.style.backgroundRepeat = 'no-repeat';
        avatarContainer.style.backgroundPosition = 'center';
        avatarContainer.style.height = '120px'; // Taller for full body
    }

    // Bio Removed per User Request (Step 1717)
    // Only Credits remain in HTML.

    actualizarListaJugadores();
}

// ==========================================
// TURN & MOVEMENT LOGIC
// ==========================================
if (btnLanzar) {
    btnLanzar.addEventListener('click', async () => {
        if (btnLanzar.disabled) return;
        btnLanzar.disabled = true;

        const jugador = jugadores[turnoActual];
        let rolls = 0;
        const interval = setInterval(() => {
            const randomFace = Math.floor(Math.random() * 6) + 1;
            if (dadoVisual) {
                dadoVisual.innerText = randomFace;
                dadoVisual.className = 'dado-numero';
            }
            rolls++;
            if (rolls > 10) {
                clearInterval(interval);
                finalizarTirada(jugador);
            }
        }, 80);
    });
}

async function finalizarTirada(jugador) {
    const dado = Math.floor(Math.random() * 6) + 1;
    if (dadoVisual) {
        dadoVisual.innerText = dado;
        dadoVisual.className = 'dado-numero';
    }
    logSystem(`${jugador.nombre} SACÓ [${dado}]`);

    // Movement Loop
    for (let i = 0; i < dado; i++) {
        jugador.posicion++;
        if (jugador.posicion > TOTAL_CASILLAS) {
            jugador.posicion = TOTAL_CASILLAS;
        }
        actualizarPosicionesVisuales();
        sonido('step');
        await delay(300);

        if (jugador.posicion === TOTAL_CASILLAS) break;
    }

    // Final Verification
    if (jugador.posicion >= TOTAL_CASILLAS) {
        verificarFinalEvento(jugador);
    } else {
        verificarCasilla(jugador);
    }
}

function verificarFinalEvento(jugador) {
    Swal.fire({
        title: '¡MISIÓN CASI CUMPLIDA!',
        text: 'Para completar tu entrenamiento como Agente de Cambio, debes hacer el Juramento Final.',
        icon: 'info',
        confirmButtonText: '¡ESTOY LISTO!',
        background: '#080808',
        color: '#fff'
    }).then(() => {
        Swal.fire({
            title: 'JURAMENTO',
            html: `
                <p style="text-align: left; line-height: 1.6;">
                Asumo el compromiso de cuidar mis palabras y mis acciones,<br>
                reconociendo que pueden afectar a otras personas.<br>
                Elijo respetar los límites, escuchar y relacionarme sin causar daño,<br>
                incluso cuando me siento molesto o frustrado.<br><br>
                <b>☑️ Acepto este compromiso</b>
                </p>
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡LO PROMETO!',
            cancelButtonText: 'No estoy seguro...',
            background: '#080808',
            color: '#F1C40F',
            confirmButtonColor: '#27AE60',
            cancelButtonColor: '#C0392B'
        }).then((result) => {
            if (result.isConfirmed) {
                // WIN!
                sonido('powerup'); // Victory sound placeholder
                Swal.fire({
                    title: '¡VICTORIA COMPLETADA!',
                    text: `¡Felicidades Agente ${jugador.nombre}! Has completado la Misión Cero Violencia.`,
                    imageUrl: './assets/sprites/tile_finish.png',
                    imageWidth: 200,
                    imageHeight: 200,
                    background: '#080808',
                    color: '#FFD700',
                    confirmButtonText: 'JUGAR DE NUEVO'
                }).then(() => location.reload());
            } else {
                // Backtrack
                const retro = 5;
                Swal.fire({
                    title: '¡AÚN NO ESTÁS LISTO!',
                    text: `La duda es parte del camino. Retrocede ${retro} pasos y reflexiona.`,
                    icon: 'error',
                    background: '#080808',
                    color: '#fff'
                }).then(() => {
                    retroceder(jugador, retro);
                    setTimeout(() => verificarCasilla(jugador), 500);
                });
            }
        });
    });
}

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function verificarCasilla(jugador) {
    const evento = casillasEspeciales[jugador.posicion];

    if (evento) {
        if (evento.tipo === 'portal') {
            sonido('powerup');

            let destinoRandom;
            do {
                destinoRandom = Math.floor(Math.random() * TOTAL_CASILLAS) + 1;
            } while (destinoRandom === jugador.posicion || casillasEspeciales[destinoRandom]);
            // NOTE: We allowed landing on special squares for chain reactions!

            await Swal.fire({
                title: evento.msg,
                text: `¡Te teletransportas a la casilla ${destinoRandom}!`,
                imageUrl: './assets/sprites/portal.png',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Portal',
                background: '#080808',
                color: '#ecf0f1',
                timer: 3000,
                showConfirmButton: false
            });

            jugador.posicion = destinoRandom;
            actualizarPosicionesVisuales();

            // RECURSIVE CHECK
            setTimeout(() => verificarCasilla(jugador), 500);

        } else if (evento.tipo === 'gusano') {
            sonido('hit');
            await Swal.fire({
                title: '¡PELIGRO!',
                text: evento.msg,
                imageUrl: './assets/sprites/gusano-macabro.png',
                imageWidth: 120,
                imageHeight: 120,
                imageAlt: 'Gusano Macabro',
                background: '#2c0000',
                color: '#ff0000',
                timer: 3000,
                showConfirmButton: false
            });

            jugador.posicion = evento.destino;
            actualizarPosicionesVisuales();

            // RECURSIVE CHECK
            setTimeout(() => verificarCasilla(jugador), 500);

        } else if (evento.tipo === 'reto') {
            lanzarReto(jugador);
        } else if (evento.tipo === 'adivinanza') {
            lanzarAdivinanza(jugador);
        } else if (evento.tipo === 'desbloqueo') {
            lanzarDesbloqueo(jugador, evento.id);
        } else if (evento.tipo === 'retoMaestro') {
            lanzarRetoMaestro2(jugador);
        } else if (evento.tipo === 'retoRegulacion') {
            lanzarRetoRegulacion(jugador, evento.sub);
        } else if (evento.tipo === 'retoFisico') {
            lanzarRetoFisico(jugador);
        } else if (evento.tipo === 'info') {
            lanzarInfoModal(jugador, evento.id);
        }
    } else {
        cambiarTurno();
    }
}

function lanzarDesbloqueo(jugador, retoId) {
    const data = desbloqueos.find(d => d.id === retoId);
    if (!data) {
        cambiarTurno();
        return;
    }

    // Initialize mask based on actual length if not already set correctly
    // We use data.mascara initially, but for logic we might want an array.
    // Let's assume data.mascara is " _ _ _ " string. We'll build a state.
    // If it's the first attempt, we use the default mask.
    // BUT we need to persist state during recursion.
    // Argument 'currentMaskArray' will be used in helper.

    // Create initial mask array matching target length
    const initialMask = Array(data.palabra.length).fill('_');
    const maxAttempts = 2; // Updated: Limit to 2 attempts

    if (retoId === 'reto7') {
        iniciarMicroSituacionesReto7(jugador, data, initialMask);
    } else {
        gestionarIntentoDesbloqueo(jugador, data, initialMask, maxAttempts);
    }
}

// RETO 7 LOGIC: MICRO-SITUACIONES
const microSituaciones = [
    {
        p: "Alguien te insulta en un juego online. Tu impulso es insultar de vuelta. ¿Qué decides?",
        opts: { A: "Insultarlo más fuerte", B: "Respirar y bloquearlo" },
        correct: "B",
        reveal: [0, 1] // P, A
    },
    {
        p: "Tu hermano rompió tu juguete favorito. Sientes mucha rabia en los puños. ¿Qué haces?",
        opts: { A: "Apretar una almohada fuerte", B: "Empujar a tu hermano" },
        correct: "A",
        reveal: [2, 3] // U, S
    },
    {
        p: "Te culpan de algo que no hiciste. ¿Cómo reaccionas?",
        opts: { A: "Gritar que son mentirosos", B: "Explicar con calma lo que pasó" },
        correct: "B",
        reveal: [4] // A (Final)
    }
];

function iniciarMicroSituacionesReto7(jugador, data, currentMaskArray, step = 0) {
    const totalSteps = microSituaciones.length;
    const maskString = currentMaskArray.join(' ');

    if (step >= totalSteps) {
        // FINISHED
        animarRespiracion(jugador, data);
        return;
    }

    const situacion = microSituaciones[step];

    Swal.fire({
        title: `DECISIÓN CONSCIENTE (${step + 1}/${totalSteps})`,
        html: `
            <div style="font-size: 1.5em; letter-spacing: 5px; color: #3498DB; margin-bottom: 20px; font-family: 'Press Start 2P';">
                ${maskString}
            </div>
            <div style="font-size: 1.1em; margin-bottom: 20px; text-align: left; background: #222; padding: 15px; border-radius: 10px;">
                ${situacion.p}
            </div>
        `,
        imageUrl: data.imagen,
        imageWidth: 100,
        imageHeight: 100,
        showCancelButton: true,
        showDenyButton: true, // We use Deny as Option B
        confirmButtonText: `A) ${situacion.opts.A}`,
        denyButtonText: `B) ${situacion.opts.B}`,
        cancelButtonText: 'No sé qué hacer...',
        background: '#080808',
        color: '#fff',
        allowOutsideClick: false,
        confirmButtonColor: '#2ECC71',
        denyButtonColor: '#2ECC71',
        customClass: {
            // confirmButton: 'swal2-confirm-blue', // Removed specific color class
            // denyButton: 'swal2-confirm-green'
        }
    }).then((result) => {
        let choice = '';
        if (result.isConfirmed) choice = 'A';
        else if (result.isDenied) choice = 'B';

        if (choice === situacion.correct) {
            // Correct logic
            situacion.reveal.forEach(idx => {
                currentMaskArray[idx] = data.palabra[idx];
            });

            Swal.fire({
                icon: 'success',
                title: '¡DECISIÓN SANA!',
                text: 'Has mantenido la calma. Desbloqueas letras.',
                background: '#080808',
                color: '#2ECC71',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                iniciarMicroSituacionesReto7(jugador, data, currentMaskArray, step + 1);
            });
        } else if (choice) {
            // Incorrect
            Swal.fire({
                icon: 'error',
                title: 'IMPULSO TÓXICO',
                text: 'Esa reacción genera más violencia. Intenta elegir mejor.',
                background: '#080808',
                color: '#C0392B',
                confirmButtonText: 'REINTENTAR'
            }).then(() => {
                // Retry same step
                iniciarMicroSituacionesReto7(jugador, data, currentMaskArray, step);
            });
        } else {
            // Cancelled
            processFailure(jugador);
        }
    });
}

function gestionarIntentoDesbloqueo(jugador, data, currentMaskArray, attemptsLeft) {
    const isReto5 = (data.id === 'reto5');
    const maskString = currentMaskArray.join(' ');

    let attemptsHtml = `<div style="color: #E74C3C; font-weight: bold; margin-bottom: 5px;">Intentos restantes: ${attemptsLeft}</div>`;

    let customHtml = '';
    if (isReto5) {
        // Calculate Progress Visuals
        const totalChars = currentMaskArray.length;
        const revealedChars = currentMaskArray.filter(c => c !== '_').length;
        const progressPct = revealedChars / totalChars;

        // Dynamic Styles: 
        // Grayscale: 100% -> 0% (inversely proportional to progress)
        // Brightness: 50% -> 100% (proportional)
        const grayVal = 100 - (progressPct * 100);
        const brightVal = 50 + (progressPct * 50); // 50% start, 100% end
        const glowOpacity = progressPct; // 0 to 1

        const shieldStyle = `
            filter: grayscale(${grayVal}%) brightness(${brightVal}%);
            box-shadow: 0 0 ${progressPct * 20}px rgba(46, 204, 113, ${glowOpacity});
            border-color: rgba(46, 204, 113, ${progressPct});
            border-style: ${progressPct > 0 ? 'solid' : 'dashed'};
        `;

        customHtml = `
            <div id="shield-container" class="shield-locked" style="${shieldStyle}">
                <img src="${data.imagen}" alt="Escudo" class="shield-img">
            </div>
            ${attemptsHtml}
            <div style="font-size: 1.1em; margin-bottom: 10px;">${data.pista}</div>
            <div class="word-mask">${maskString}</div>
            <p style="font-size: 0.8em; color: #aaa;">Escribe la palabra completa para restaurar el escudo:</p>
        `;
    } else if (data.id === 'reto6') { // RETO 6: EMOTION UNLOCK
        const totalChars = currentMaskArray.length;
        const revealedChars = currentMaskArray.filter(c => c !== '_').length;
        const progressPct = revealedChars / totalChars;

        // Visuals: Grayscale to Color + Hue Shift (Red->Green)
        const grayVal = 100 - (progressPct * 100);
        const hueVal = progressPct * 120; // 0=Red, 120=Green

        const emotionStyle = `
            filter: grayscale(${grayVal}%);
            box-shadow: 0 0 ${20 + (progressPct * 30)}px hsl(${hueVal}, 80%, 50%);
            border: 3px solid hsl(${hueVal}, 80%, 50%);
            border-radius: 20px;
            padding: 10px;
            transition: all 0.5s ease;
            width: 120px; height: 120px; margin: 0 auto 15px; 
            display: flex; align-items: center; justify-content: center;
        `;

        customHtml = `
            <div id="emotion-container" style="${emotionStyle}">
                <img src="${data.imagen}" alt="Emoción" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            ${attemptsHtml}
            <div style="font-size: 1.1em; margin-bottom: 10px;">${data.pista}</div>
            <div class="word-mask">${maskString}</div>
            <p style="font-size: 0.8em; color: #aaa;">Identifica la emoción para desbloquearla:</p>
        `;
    } else {
        customHtml = `
            ${attemptsHtml}
            <div style="font-size: 1.2em; margin-bottom: 20px;">${data.pista}</div>
            <div class="word-mask">${maskString}</div>
            <p style="font-size: 0.9em; opacity: 0.8;">Escribe la palabra secreta para desbloquear:</p>
        `;
    }

    Swal.fire({
        title: data.titulo,
        html: customHtml,
        imageUrl: isReto5 ? null : data.imagen,
        imageWidth: 120,
        imageHeight: 120,
        imageAlt: 'Desbloqueo',
        input: 'text',
        inputPlaceholder: 'Escribe tu respuesta...',
        background: '#080808',
        color: '#fff',
        confirmButtonText: 'DESBLOQUEAR TRAMO',
        showCancelButton: true,
        cancelButtonText: 'Saltar turno'
    }).then((result) => {
        if (result.isConfirmed) {
            const respuesta = result.value.toUpperCase().trim();
            if (respuesta === data.palabra) {
                // Correct!
                currentMaskArray.fill(0).forEach((_, i) => currentMaskArray[i] = data.palabra[i]); // Fill all

                // Final Success Visuals
                Swal.fire({
                    title: data.premioMsg,
                    text: data.premioDesc,
                    icon: 'success',
                    background: '#080808',
                    color: '#2ECC71',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    processSuccess(jugador, { premioMsg: "¡DESBLOQUEO!", premioDesc: "Avanzas 4 casillas." });
                });

            } else {
                // Incorrect
                attemptsLeft--;
                if (attemptsLeft > 0) {
                    let hintHtml = '';
                    if (attemptsLeft === 1 && data.pista) {
                        hintHtml = `<div style="margin-top:10px; padding:10px; background:#333; border-radius:5px; color:#F1C40F; font-size: 0.9em;">💡 PISTA: ${data.pista}</div>`;
                    }

                    Swal.fire({
                        icon: 'error',
                        title: '¡BLOQUEADO!',
                        html: `<p>La palabra es incorrecta. Inténtalo de nuevo.</p>${hintHtml}`,
                        background: '#080808',
                        color: '#C0392B',
                        confirmButtonText: 'REINTENTAR'
                    }).then(() => {
                        gestionarIntentoDesbloqueo(jugador, data, currentMaskArray, attemptsLeft);
                    });
                } else {
                    // Fail completely
                    processFailure(jugador);
                }
            }
        } else {
            // Cancelled
            cambiarTurno();
        }
    });
}

function animarRespiracion(jugador, data) {
    let count = 4;
    Swal.fire({
        title: '¡EXCELENTE!',
        html: `<h3>Ahora respira...</h3><div style="font-size: 4em; margin: 20px;" id="breath-count">${count}</div>`,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        background: '#080808',
        color: '#3498DB',
        didOpen: () => {
            const el = document.getElementById('breath-count');
            const interval = setInterval(() => {
                count--;
                if (count > 0) el.innerText = count;
            }, 1000);
        }
    }).then(() => {
        processSuccess(jugador, { premioMsg: data.premioMsg, premioDesc: data.premioDesc });
    });
}

// ==========================================
// GENERIC SUCCESS / FAILURE HANDLERS
// ==========================================
function processSuccess(jugador, premio) {
    if (!premio) premio = { premioMsg: "¡BIEN HECHO!", premioDesc: "Avanzas 2 casillas." };

    // Check for explicit advance amount (some challenges give 4, others 2, etc)
    // We will parse it or default to 2.
    let avance = 2;
    if (premio.premioDesc.includes("4 casillas")) avance = 4;
    else if (premio.premioDesc.includes("3 casillas")) avance = 3;

    Swal.fire({
        title: premio.premioMsg,
        text: premio.premioDesc,
        icon: 'success',
        background: '#080808',
        color: '#2ECC71',
        confirmButtonText: 'AVANZAR'
    }).then(async () => {

        // AWARD MEDAL
        awardMedal(jugador); // Visual incentive

        const newPos = Math.min(jugador.posicion + avance, TOTAL_CASILLAS);
        // Move player forward
        for (let i = 0; i < avance; i++) {
            jugador.posicion++;
            if (jugador.posicion > TOTAL_CASILLAS) jugador.posicion = TOTAL_CASILLAS;
            actualizarPosicionesVisuales();
            sonido('step');
            await delay(300);
        }

        if (jugador.posicion >= TOTAL_CASILLAS) {
            verificarFinalEvento(jugador);
        } else {
            // CHAIN REACTION FIX: Check if we landed on another special tile!
            // If the new tile is a challenge/portal, play it.
            // If it's a normal tile, verifyCasilla will call cambiarTurno().
            setTimeout(() => verificarCasilla(jugador), 500);
        }
    });
}

function processFailure(jugador) {
    sonido('error');
    Swal.fire({
        title: '¡FALLASTE!',
        text: 'Pierdes tu turno. Reflexiona para la próxima.',
        icon: 'error',
        background: '#080808',
        color: '#C0392B',
        confirmButtonText: 'ACEPTAR'
    }).then(() => {
        cambiarTurno();
    });
}

function retroceder(jugador, pasos) {
    jugador.posicion -= pasos;
    if (jugador.posicion < 1) jugador.posicion = 1;
    actualizarPosicionesVisuales();
}

function cambiarTurno() {
    turnoActual++;
    if (turnoActual >= jugadores.length) turnoActual = 0;
    actualizarTurnoUI();

    // Enable button for next player
    // Enable button for next player
    if (btnLanzar) {
        btnLanzar.disabled = false;
        btnLanzar.innerText = "🎲"; // Icon only per user request
    }

    logSystem(`Turno de ${jugadores[turnoActual].nombre}`);
}

function logSystem(msg) {
    if (logContainer) {
        const p = document.createElement('div');
        p.innerText = `> ${msg}`;
        logContainer.appendChild(p);
        logContainer.scrollTop = logContainer.scrollHeight;
    }
    console.log(msg);
}

// ==========================================
// ADDITIONAL CHALLENGE FUNCTIONS
// ==========================================


// DEDUPING LOGIC
if (!window.usedRetos) window.usedRetos = new Set();

function lanzarReto(jugador) {
    // Filter available challenges
    let available = retos.filter(r => !window.usedRetos.has(r));
    if (available.length === 0) {
        window.usedRetos.clear(); // Reset if all used
        available = retos;
    }

    const reto = available[Math.floor(Math.random() * available.length)];
    window.usedRetos.add(reto); // Mark as used

    Swal.fire({
        title: '¡RETO DE VALENTÍA!',
        text: reto,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '¡RETO COMPLETADO!',
        cancelButtonText: 'No pude hacerlo...',
        confirmButtonColor: '#2ECC71', // User Request: Both Green
        cancelButtonColor: '#2ECC71',
        background: '#080808',
        color: '#fff'
    }).then((result) => {
        if (result.isConfirmed) {
            processSuccess(jugador, { premioMsg: "¡VALENTÍA DEMOSTRADA!", premioDesc: "Avanzas 2 casillas." });
        } else {
            processFailure(jugador);
        }
    });
}

function lanzarAdivinanza(jugador) {
    // Deduping for Riddles
    if (!window.usedAdivinanzas) window.usedAdivinanzas = new Set();

    // We store INDEXES for objects or JSON stringify
    // Let's use referencing by object since Set supports it
    let available = adivinanzas.filter(r => !window.usedAdivinanzas.has(r));
    if (available.length === 0) {
        window.usedAdivinanzas.clear();
        available = adivinanzas;
    }

    const adivinanza = available[Math.floor(Math.random() * available.length)];
    window.usedAdivinanzas.add(adivinanza);

    Swal.fire({
        title: 'ADIVINANZA SABIA',
        html: `<p style="font-size: 1.1em; line-height: 1.5;">${adivinanza.pregunta}</p>`,
        input: 'text',
        inputPlaceholder: 'Tu respuesta...',
        background: '#080808',
        color: '#F39C12',
        confirmButtonColor: '#2ECC71',
        confirmButtonText: 'RESPONDER'
    }).then((result) => {
        if (result.value) {
            const resp = result.value.toLowerCase().trim();
            if (adivinanza.respuestas.includes(resp)) {
                processSuccess(jugador, { premioMsg: "¡SABIDURÍA PURA!", premioDesc: "Avanzas 2 casillas." });
            } else {
                Swal.fire({
                    title: 'INCORRECTO',
                    text: `La respuesta era: ${adivinanza.respuestas[0]}`,
                    icon: 'error',
                    background: '#080808',
                    color: '#fff'
                }).then(() => cambiarTurno());
            }
        }
    });
}

// =======================
// RETOS FÍSICO-EMOCIONALES
// =======================
const retoFisicoData = [
    {
        q: "Cuando sientes enojo, tu cuerpo suele:",
        opts: ["Tensarse", "Acelerarse", "Quedarse quieto", "No lo notas"],
        feedback: "¡Muy común! El cuerpo reacciona para la acción.",
        reto: "Respira profundo 3 veces llevando el aire al abdomen. Luego di: “Puedo calmarme sin dañar a nadie.”"
    },
    {
        q: "Si algo te incomoda, tú normalmente:",
        opts: ["Te quedas callado", "Reaccionas fuerte", "Te alejas", "Lo dices con dificultad"],
        feedback: "Reconocer la incomodidad es el primer paso.",
        reto: "Coloca una mano en el pecho y otra en el abdomen. Nombra una emoción que hayas sentido hoy."
    },
    {
        q: "Cuando alguien dice algo que te molesta, tu primer impulso es:",
        opts: ["Responder agresivamente", "Ignorar", "Bromear", "Pensar antes de actuar"],
        feedback: "Pensar antes de actuar es el ideal de un Agente.",
        reto: "Cuenta lentamente hasta 5 antes de hablar. Imagina una respuesta respetuosa."
    },
    {
        q: "Cuando estás triste, tu cuerpo te pide:",
        opts: ["Movimiento", "Silencio", "Compañía", "Distracción"],
        feedback: "Escuchar lo que pide tu cuerpo es vital.",
        reto: "Estira brazos y hombros durante 10 segundos. Nombra algo que te ayude cuando estás triste."
    },
    {
        q: "Si ves una situación injusta, tú sueles:",
        opts: ["Mirar a otro lado", "Sentir nervios", "Querer ayudar", "No saber qué hacer"],
        feedback: "Ese impulso de ayudar es tu valentía interior.",
        reto: "Da un paso hacia adelante simbólico y di: “Pedir ayuda también es una forma de actuar.”"
    },
    {
        q: "Cuando te equivocas, tu emoción principal es:",
        opts: ["Vergüenza", "Enojo", "Culpa", "Miedo"],
        feedback: "Errar es humano, sentir miedo es normal.",
        reto: "Coloca la mano en el corazón y di: “Equivocarme no me hace una mala persona.”"
    },
    {
        q: "Si alguien te pide que te detengas, tú:",
        opts: ["Insistes", "Te molestas", "Te detienes", "Te confundes"],
        feedback: "Detenerse muestra un respeto enorme.",
        reto: "Da un paso atrás y respira profundo una vez."
    },
    {
        q: "Cuando estás muy alterado, tu cuerpo:",
        opts: ["Se acelera", "Se endurece", "Se agota", "No lo notas"],
        feedback: "Esa aceleración es energía que necesita canalizarse.",
        reto: "Sacude suavemente manos y brazos por 10 segundos para soltar tensión."
    },
    {
        q: "Si sientes celos, eso significa que:",
        opts: ["Falta control", "Hay inseguridad", "Hay amor", "Es normal sentirlo"],
        feedback: "A menudo señala una necesidad no satisfecha o miedo.",
        reto: "Nombra una cualidad positiva tuya en voz alta."
    },
    {
        q: "Cuando necesitas calmarte, lo más efectivo para ti es:",
        opts: ["Respirar", "Moverte", "Hablar", "Estar solo"],
        feedback: "Conocer tu propia medicina es poder.",
        reto: "¡Prueba tu método ahora mismo por 10 segundos!"
    }
];

function lanzarRetoFisico(jugador) {
    const data = retoFisicoData[Math.floor(Math.random() * retoFisicoData.length)];

    // Construct Options HTML
    let optsHtml = '<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">';
    data.opts.forEach(opt => {
        optsHtml += `<button class="game-opt-btn aesthetic-btn" onclick="Swal.clickConfirm()">${opt}</button>`;
    });
    optsHtml += '</div>';

    Swal.fire({
        title: 'ESCANEO EMOCIONAL',
        html: `
            <div style="margin-bottom: 10px;">
                <img src="./assets/sprites/tile_physio.png" style="width: 80px; height: 80px; animation: pulse 2s infinite;">
            </div>
            <p style="font-size: 1.1em; color: #2ECC71; font-family: 'Press Start 2P'; margin-bottom: 20px;">SISTEMA BIOLÓGICO DETECTADO</p>
            <p style="font-size: 1.2em; color: #fff;">"${data.q}"</p>
            ${optsHtml}
        `,
        showConfirmButton: false, // Buttons handle click
        background: '#0a0a0a',
        color: '#fff',
        allowOutsideClick: false,
        width: 600
    }).then(() => {
        // Phase 2: The Challenge
        Swal.fire({
            title: '¡SINCRO COMPLETADA!',
            html: `
                <p style="color: #F1C40F; font-style: italic; margin-bottom: 20px;">${data.feedback}</p>
                <div style="background: #222; padding: 20px; border: 2px dashed #2ECC71; border-radius: 10px;">
                    <h3 style="color: #2ECC71; margin-top: 0;">RETO DE ACTIVACIÓN</h3>
                    <p style="font-size: 1.3em;">${data.reto}</p>
                </div>
            `,
            icon: 'success',
            background: '#0a0a0a',
            color: '#fff',
            confirmButtonText: '¡HECHO!',
            confirmButtonColor: '#2ECC71'
        }).then(() => {
            processSuccess(jugador, { premioMsg: "CONEXIÓN MENTE-CUERPO", premioDesc: "Has reforzado tu inteligencia emocional. Avanzas 2 casillas." });
        });
    });
}


// Reto Maestro 2.0 Logic (Supports A/B or Multiple Choice)
const retoMaestroData = [
    {
        bg: 'url("./assets/sprites/tile_maestro.png")',
        msg: "Si una persona que quieres evita ciertas situaciones para “proteger” la relación, ¿qué tan apropiado es que tú intervengas en sus decisiones?",
        options: [
            { id: "A", text: "Es normal intervenir si lo hago por su bien." },
            { id: "B", text: "Puedo opinar, pero la decisión final siempre es suya." },
            { id: "C", text: "Es necesario intervenir para evitar que se equivoque." },
            { id: "D", text: "Si me ama, debería aceptar mi intervención." }
        ],
        correct: "B"
    },
    {
        bg: 'url("./assets/sprites/tile_maestro.png")',
        msg: "Ves que molestan a alguien en el chat del grupo. ¿Qué haces?",
        options: [
            { id: "A", text: "Quedarme callado" },
            { id: "B", text: "Escribir que eso no está bien" }
        ],
        correct: "B"
    }
];

function lanzarRetoMaestro2(jugador) {
    const reto = retoMaestroData[Math.floor(Math.random() * retoMaestroData.length)];
    let timeLeft = 20; // Increased time
    let timerInterval;
    let userChoice = null; // Closure variable to track choice

    // Build Option Buttons HTML
    let buttonsHtml = '<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px; width: 100%;">';

    if (reto.options) {
        reto.options.forEach(opt => {
            // Using a unique ID for each button to bind click events later if needed, 
            // but inline onclick is easier here for Swal handling.
            // We pass the ID ('A', 'B', etc) to clickConfirm logic or direct close.
            // But Swal.close() with value is cleaner.
            // We'll mimic Swal.clickConfirm() logic by resolving with value.
            buttonsHtml += `
                <button 
                    class="aesthetic-btn" 
                    style="
                        background: #2ECC71; 
                        border: 2px solid #27AE60; 
                        padding: 15px; 
                        font-family: 'Press Start 2P', cursive; 
                        font-size: 0.9em; 
                        text-align: left;
                        line-height: 1.4;
                        color: #000;
                        transition: transform 0.1s;
                    "
                    onmouseover="this.style.background='#27AE60'"
                    onmouseout="this.style.background='#2ECC71'"
                    onclick="window.resolverRetoMaestro('${opt.id}')"
                >
                    <span style="font-weight: bold;">${opt.id})</span> ${opt.text}
                </button>
            `;
        });
    }
    buttonsHtml += '</div>';

    // Global Resolver Helper
    window.resolverRetoMaestro = (val) => {
        userChoice = val;
        Swal.clickConfirm();
    };

    Swal.fire({
        title: '¡RETO MAESTRO!',
        html: `
            <div style="margin-bottom: 20px;">
                <img src="./assets/sprites/tile_maestro.png" style="width: 80px; height: 80px; animation: pulse 1s infinite;">
            </div>
            <p style="font-size: 1.1em; color: #F1C40F; line-height: 1.6;">${reto.msg}</p>
            ${buttonsHtml}
            <div id="maestro-timer" style="font-size: 1.5em; color: #E74C3C; font-weight: bold; margin-top: 20px;">${timeLeft}s</div>
        `,
        showConfirmButton: false, // Hidden, we use custom buttons
        showDenyButton: false,
        showCancelButton: false,
        background: '#080808',
        color: '#fff',
        allowOutsideClick: false,
        width: 700,
        didOpen: () => {
            const timerDisplay = document.getElementById('maestro-timer');
            timerInterval = setInterval(() => {
                timeLeft--;
                if (timerDisplay) timerDisplay.innerText = timeLeft + "s";
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    window.resolverRetoMaestro('TIMEOUT');
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
        preConfirm: () => {
            // Retrieve variable from closure
            return userChoice || 'TIMEOUT';
        }
    }).then((result) => {
        let choice = result.value || 'TIMEOUT';

        if (choice === 'TIMEOUT') {
            Swal.fire({
                title: '¡TIEMPO AGOTADO!',
                text: 'La indecisión también es una respuesta... pero aquí te cuesta el turno.',
                icon: 'error',
                background: '#080808',
                color: '#fff',
                confirmButtonColor: '#E74C3C'
            }).then(() => processFailure(jugador));
            return;
        }

        if (choice === reto.correct) {
            processSuccess(jugador, { premioMsg: "¡DOMINIO TOTAL!", premioDesc: "Has tomado la decisión correcta bajo presión. Avanzas 5 casillas." });
        } else {
            Swal.fire({
                title: 'ERROR DE JUICIO',
                text: 'Esa no era la mejor opción en este contexto.',
                icon: 'error',
                background: '#080808',
                color: '#fff',
                confirmButtonColor: '#E74C3C'
            }).then(() => processFailure(jugador));
        }
    });
}

function lanzarRetoRegulacion(jugador, subTipo) {
    if (subTipo === 'pausa') {
        let timeLeft = 10; // Reduced for gameplay, doc says 30, but 10 is better UX
        Swal.fire({
            title: '¡PAUSA DE REGULACIÓN!',
            html: `
                <div style="margin-bottom: 20px;">
                    <img src="./assets/sprites/conscious_pause.png" style="width: 80px; height: 80px;">
                </div>
                <p>Estás en una situación tensa. Antes de actuar, debes parar.</p>
                <h1 id="pausa-timer" style="color: #3498DB; font-size: 3em;">${timeLeft}</h1>
                <p>Respira profundo...</p>
            `,
            timer: 10000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            background: '#080808',
            color: '#fff',
            didOpen: () => {
                const el = document.getElementById('pausa-timer');
                const interval = setInterval(() => {
                    timeLeft--;
                    if (timeLeft > 0) el.innerText = timeLeft;
                }, 1000);
            }
        }).then(() => {
            // After pause, ask for action
            Swal.fire({
                title: 'AHORA ELIGE',
                text: '¿Cómo vas a responder ahora que estás más calmado?',
                showDenyButton: true,
                confirmButtonText: 'A) Con insultos',
                denyButtonText: 'B) Hablando tranquilo',
                background: '#080808',
                color: '#fff'
            }).then((result) => {
                if (result.isDenied) {
                    processSuccess(jugador, { premioMsg: "¡REGULACIÓN EXITOSA!", premioDesc: "Avanzas 3 casillas." });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'RESPUESTA IMPULSIVA',
                        text: 'Actuar desde el enojo suele dañar relaciones.',
                        background: '#080808', color: '#fff'
                    }).then(() => processFailure(jugador));
                }
            });
        });
    }
    else if (subTipo === 'transforma') {
        // NEW MECHANIC: POWER BAR BALANCE (Channeling Energy)
        let position = 0;
        let direction = 1;
        let speed = 3; // Slightly faster for challenge
        let intervalId;
        let isStopped = false;

        Swal.fire({
            title: 'CANALIZA TU ENERGÍA',

            html: `
                <div style="margin-bottom: 20px;">
                    <img src="./assets/sprites/butterfly.png" style="width: 100px; height: 100px; animation: pulseIce 2s infinite; filter: drop-shadow(0 0 10px #9B59B6);">
                </div>
                <div style="font-family: 'Press Start 2P', cursive; letter-spacing: 1px;">
                    <p style="margin-bottom: 20px; font-size: 0.9em; color: #ddd; line-height: 1.5;">
                        Tu emoción es intensa...<br>
                        ¡Detén la barra en el <strong style="color: #2ECC71;">CENTRO</strong>!
                    </p>
                
                <div style="
                    width: 100%; height: 50px; background: #222; border-radius: 25px; 
                    position: relative; overflow: hidden; border: 3px solid #555;
                    box-shadow: inset 0 0 20px #000; margin: 0 auto;">
                    
                    <!-- ZONES -->
                    <div style="position: absolute; left: 0; width: 30%; height: 100%; background: repeating-linear-gradient(45deg, #C0392B, #C0392B 10px, #E74C3C 10px, #E74C3C 20px); opacity: 0.3;"></div>
                    <div style="position: absolute; right: 0; width: 30%; height: 100%; background: repeating-linear-gradient(-45deg, #C0392B, #C0392B 10px, #E74C3C 10px, #E74C3C 20px); opacity: 0.3;"></div>
                    <div style="position: absolute; left: 30%; width: 40%; height: 100%; background: rgba(46, 204, 113, 0.2); border-left: 2px solid #2ECC71; border-right: 2px solid #2ECC71; box-shadow: 0 0 15px #2ECC71 inset;"></div>
                    
                    <!-- CURSOR -->
                    <div id="energy-cursor" style="
                        position: absolute; left: 0%; top: 0; width: 12px; height: 100%; 
                        background: #fff; box-shadow: 0 0 15px #fff, 0 0 30px #9B59B6; z-index: 10; border-radius: 2px;">
                    </div>
                </div>

                <div id="energy-msg" style="height: 30px; margin-top: 15px; font-weight: bold; color: #9B59B6; text-shadow: 0 0 5px #9B59B6;">...</div>
                
                <button id="btn-channel" class="aesthetic-btn" style="
                    margin-top: 20px; 
                    padding: 20px 40px; 
                    font-size: 1.5em; 
                    width: 100%; 
                    background: linear-gradient(45deg, #8E44AD, #9B59B6);
                    border: 2px solid #fff;
                    box-shadow: 0 0 20px rgba(155, 89, 182, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-family: 'Press Start 2P', cursive; 
                ">⚡ CANALIZAR ⚡</button>
            </div>
            `,
            showConfirmButton: false,
            background: '#080808',
            color: '#fff',
            allowOutsideClick: false,
            didOpen: () => {
                const cursor = document.getElementById('energy-cursor');
                const btn = document.getElementById('btn-channel');
                const msg = document.getElementById('energy-msg');

                // Animation Loop
                intervalId = setInterval(() => {
                    if (isStopped) return;

                    position += direction * speed;
                    if (position >= 96 || position <= 0) direction *= -1; // Bounce

                    cursor.style.left = position + '%';
                }, 16); // ~60fps

                // Click Handler
                if (btn) btn.onclick = () => {
                    if (isStopped) return;
                    isStopped = true;
                    clearInterval(intervalId);

                    // Check Zone (Green is 30% to 70%)
                    if (position >= 30 && position <= 70) {
                        // SUCCESS
                        cursor.style.background = '#2ECC71';
                        cursor.style.boxShadow = '0 0 20px #2ECC71';
                        msg.innerText = "¡ENERGÍA ESTABILIZADA!";
                        msg.style.color = "#2ECC71";
                        btn.innerText = "¡LO LOGRASTE!";
                        btn.style.borderColor = "#2ECC71";
                        btn.style.color = "#2ECC71";

                        setTimeout(() => {
                            Swal.close();
                            processSuccess(jugador, {
                                premioMsg: "¡TRANSFORMACIÓN COMPLETA!",
                                premioDesc: "Has convertido el enojo en determinación. Avanzas 3 casillas."
                            });
                        }, 1500);

                    } else {
                        // FAIL
                        cursor.style.background = '#E74C3C';
                        msg.innerText = "¡DESBORDAMIENTO!";
                        msg.style.color = "#E74C3C";
                        btn.innerText = "INTENTA DE NUEVO...";
                        btn.style.borderColor = "#E74C3C";
                        btn.style.color = "#E74C3C";
                        btn.disabled = true;

                        setTimeout(() => {
                            Swal.close();
                            processFailure(jugador);
                        }, 1500);
                    }
                };
            },
            willClose: () => {
                clearInterval(intervalId);
            }
        });
    }
    else if (subTipo === 'termometro') {
        let intensity = 10;

        Swal.fire({
            title: '¡BAJA LA INTENSIDAD!',
            html: `
            < p > Estás en nivel < span id = "temp-val" style = "color: red; font-weight: bold;" > 10</span > de enojo.</p >
                <p>Bájalo a menos de 4 para continuar.</p>
                <div style="width: 80%; height: 300px; background: #333; margin: 20px auto; position: relative; border-radius: 10px; overflow: hidden; border: 2px solid #555;">
                    <div id="thermometer-bar" style="width: 100%; height: 100%; background: linear-gradient(to top, #2ECC71, #F1C40F, #E74C3C); position: absolute; bottom: 0; transition: height 0.5s;"></div>
                    <div style="position: absolute; top: 50%; left: 0; width: 100%; border-top: 2px dashed #fff; opacity: 0.5;">META (Nivel 4)</div>
                </div>
                <button id="btn-breathe" class="swal2-confirm swal2-styled" style="background: #3498DB;">🌬️ RESPIRAR PROFUNDO</button>
            `,
            showConfirmButton: false,
            background: '#080808',
            color: '#fff',
            didOpen: () => {
                const valEl = document.getElementById('temp-val');
                const bar = document.getElementById('thermometer-bar');
                const btn = document.getElementById('btn-breathe');

                if (btn) btn.onclick = () => {
                    intensity -= 2;
                    if (intensity < 0) intensity = 0;

                    valEl.innerText = intensity;
                    bar.style.height = (intensity * 10) + '%';

                    if (intensity <= 4) {
                        valEl.style.color = '#2ECC71';
                        btn.disabled = true;
                        btn.innerText = "¡CALMA ALCANZADA!";
                        setTimeout(() => {
                            Swal.close();
                            processSuccess(jugador, { premioMsg: "¡CALMA RECUPERADA!", premioDesc: "Has vuelto a tu centro. Avanzas 3 casillas." });
                        }, 1000);
                    }
                };
            }
        });
    }
}



function sonido(tipo) {
    if (audioGameplay && !audioGameplay.paused) {
        // Simple sfx placeholder - in a real app better sfx management
    }
}

// =======================
// CASILLAS INFORMATIVAS (REFLEXIÓN, DATO, PORTAL)
// =======================
const infoData = {
    1: { title: "REFLEXIÓN", msg: "La violencia no siempre golpea.<br>A veces controla, humilla o hace sentir miedo.", icon: "tile_reflection.png", sub: "Visibilizar formas de violencia no física." },
    2: { title: "REFLEXIÓN", msg: "Si alguien te hace sentir menos, eso no es respeto.", icon: "tile_reflection.png", sub: "Diferenciar relaciones sanas." },
    3: { title: "REFLEXIÓN", msg: "Amar nunca debería doler, asustar ni hacer sentir culpa.", icon: "tile_reflection.png", sub: "Cuestionar creencias erróneas." },
    4: { title: "REFLEXIÓN", msg: "Ser fuerte también es detenerse antes de hacer daño.", icon: "tile_reflection.png", sub: "Fortaleza es autorregulación." },
    5: { title: "REFLEXIÓN", msg: "Las emociones no son malas.<br>Lo peligroso es no saber manejarlas.", icon: "tile_reflection.png", sub: "Educación emocional." },
    6: { title: "REFLEXIÓN", msg: "Controlar a otra persona también es una forma de violencia.", icon: "tile_reflection.png", sub: "Desnaturalizar el control." },
    7: { title: "REFLEXIÓN", msg: "Si alguien tiene miedo de decir lo que piensa, algo no está bien.", icon: "tile_reflection.png", sub: "Comunicación segura." },
    8: { title: "PORTAL DE DERECHOS", msg: "La ONU reconoce la violencia de género como una violación de los derechos humanos.", icon: "tile_info_portal.png", sub: "Estándares internacionales." },
    9: { title: "DATO CURIOSO", msg: "Muchas conductas violentas se aprenden.<br>Eso significa que también se pueden desaprender.", icon: "tile_fact.png", sub: "Mensaje esperanzador." },
    10: { title: "LEY INTERNACIONAL", msg: "La Convención CEDAW protege el derecho de las mujeres a vivir sin violencia.", icon: "tile_info_portal.png", sub: "Instrumentos legales." },
    12: { title: "ESTADÍSTICA GLOBAL", msg: "Según la OMS, 1 de cada 3 mujeres en el mundo ha vivido violencia.", icon: "tile_fact.png", sub: "Conciencia global." },
    15: { title: "REFLEXIÓN FINAL", msg: "Cada decisión cuenta. La meta es cero violencia.", icon: "tile_reflection.png", sub: "Mensaje central." }
};

function lanzarInfoModal(jugador, id) {
    const data = infoData[id] || { title: "INFO", msg: "Mensaje no encontrado", icon: "tile_reflection.png" };
    Swal.fire({
        title: data.title,
        html: `
            < div style = "margin-bottom: 15px;" >
                <img src="./assets/sprites/${data.icon}" style="width: 80px; height: 80px; filter: drop-shadow(0 0 5px #fff); animation: float 3s infinite ease-in-out;">
            </div>
            <p style="font-size: 1.3em; margin-bottom: 20px; line-height: 1.4;">"${data.msg}"</p>
            <p style="color: #F1C40F; font-size: 0.9em; font-style: italic;">💡 ${data.sub}</p>
        `,
        confirmButtonText: 'ENTENDIDO',
        background: '#0a0a0a',
        color: '#fff',
        allowOutsideClick: false,
        customClass: { confirmButton: 'game-opt-btn aesthetic-btn' } // Use new styles for button
    }).then(() => {
        cambiarTurno();
    });
}


function awardMedal(jugador) {
    // Only current player gets the visual in sidebar locally?
    // Actually sidebar is shared locally in this simple version
    // Check if container exists
    const container = document.getElementById('medals-row');
    if (!container) return;

    // Create medal element
    const medal = document.createElement('div');
    medal.innerText = "🏅";
    medal.style.fontSize = "20px";
    medal.style.filter = "drop-shadow(0 0 5px gold)";
    medal.style.animation = "float 1s ease-in-out";
    medal.title = `Medalla de ${jugador.nombre}`;

    // Add to container
    container.appendChild(medal);

    // Optional: Limit number of medals shown to avoid overflow
    if (container.children.length > 8) {
        container.removeChild(container.firstChild);
    }
}

// START SCREEN CAROUSEL LOGIC
function startMenuCarousel() {
    const leftContainer = document.getElementById('carousel-left');
    const rightContainer = document.getElementById('carousel-right');
    if (!leftContainer || !rightContainer) return;

    // Pairs to cycle: Left [1,2], Right [3,4] (or mixed)
    // Let's do: Left cycles 1->2->1... Right cycles 3->4->3...

    let leftIdx = 1;
    let rightIdx = 3;

    function renderCard(container, id) {
        const char = PERSONAJES[id];
        container.style.opacity = 0;

        setTimeout(() => {
            container.innerHTML = `
                <div class="carousel-role">${char.role}</div>
                <div class="carousel-img" style="background-image: url('${char.img}');"></div>
                <div class="carousel-name">${char.name}</div>
                <div class="carousel-bio">${char.bio}</div>
            `;
            container.style.opacity = 1;
        }, 500);
    }

    // Initial Render
    renderCard(leftContainer, leftIdx);
    renderCard(rightContainer, rightIdx);

    // Loop
    setInterval(() => {
        leftIdx = leftIdx === 1 ? 2 : 1;
        rightIdx = rightIdx === 3 ? 4 : 3;
        renderCard(leftContainer, leftIdx);
        renderCard(rightContainer, rightIdx);
    }, 6000); // 6 seconds
}

// Initialize on Load
window.addEventListener('load', () => {
    // Other load logic exists, just ensuring this runs
    setTimeout(startMenuCarousel, 1000); // Small delay to allow fade-in
});

// DEBUG FUNCTIONS (Existing below)

window.teleportarManual = async function () {
    const { value: casilla } = await Swal.fire({
        title: 'TELEPORT DEBUG',
        input: 'number',
        inputLabel: 'Casilla destino (1-63)',
        inputAttributes: { min: 1, max: 63, step: 1 },
        background: '#000', color: '#0f0'
    });

    if (casilla) {
        const jugador = jugadores[turnoActual];
        const oldPos = jugador.posicion;
        jugador.posicion = parseInt(casilla);
        logSystem(`DEBUG: ${jugador.nombre} teleported to ${jugador.posicion}`);

        // 1. Force Visual Update Immediately
        actualizarPosicionesVisuales();

        // 2. Wait for visual "jump" before triggering logic
        setTimeout(() => {
            verificarCasilla(jugador);
        }, 500);
    }
}
