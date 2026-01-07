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
    "Línea de la empatía: Menciona una situación de conflicto y c&oacutemio acompa&ntilde;arlo.",
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
    3: { tipo: 'reto' },
    8: { tipo: 'adivinanza' },
    12: { tipo: 'desbloqueo', id: 'reto5' },
    18: { tipo: 'reto' },
    22: { tipo: 'adivinanza' },
    28: { tipo: 'desbloqueo', id: 'reto6' },
    33: { tipo: 'reto' },
    38: { tipo: 'adivinanza' },
    42: { tipo: 'desbloqueo', id: 'reto7' },
    48: { tipo: 'adivinanza' },
    57: { tipo: 'reto' },

    // Portales
    10: { tipo: 'portal', msg: '¡UN PORTAL MISTERIOSO!' },
    30: { tipo: 'portal', msg: '¡AGUJERO DE GUSANO!' },
    35: { tipo: 'portal', msg: '¡TELETRANSPORTACIÓN!' },

    // Reto Maestro
    36: { tipo: 'retoMaestro' },

    // Retos de Regulación
    14: { tipo: 'retoRegulacion', sub: 'pausa' },
    25: { tipo: 'retoRegulacion', sub: 'transforma' },
    40: { tipo: 'retoRegulacion', sub: 'termometro' },

    // Gusanos (Peligro)
    15: { tipo: 'gusano', destino: 7, msg: '¡EL GUSANO MACABRO TE DEVORA!' },
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

function iniciarJuego(num) {
    jugadores = [];
    for (let i = 1; i <= num; i++) {
        jugadores.push({
            id: i,
            nombre: `JUGADOR ${i}`,
            color: `p${i}`,
            posicion: 1
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
    if (avatarDisplay) {
        avatarDisplay.style.backgroundImage = `url('./assets/avatars/avatar${actual.id}.png')`;
        avatarDisplay.style.borderColor = `var(--${actual.color}-color)`;
    }
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
                Yo, <b>${jugador.nombre}</b>, prometo:<br><br>
                1. No usar la violencia para resolver conflictos.<br>
                2. Respetar a todas las personas por igual.<br>
                3. Ser valiente para pedir ayuda y ayudar a otros.<br>
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
    const maxAttempts = 5;

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
        customClass: {
            confirmButton: 'swal2-confirm-blue', // Need to style this if not existing, or just standard
            denyButton: 'swal2-confirm-green'
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
                    Swal.fire({
                        icon: 'error',
                        title: '¡BLOQUEADO!',
                        text: 'La palabra es incorrecta. Inténtalo de nuevo.',
                        background: '#080808',
                        color: '#C0392B',
                        timer: 1500,
                        showConfirmButton: false
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
    if (btnLanzar) {
        btnLanzar.disabled = false;
        btnLanzar.innerText = `LANZAR (${jugadores[turnoActual].nombre})`;
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
function lanzarReto(jugador) {
    const reto = retos[Math.floor(Math.random() * retos.length)];
    Swal.fire({
        title: '¡RETO DE VALENTÍA!',
        text: reto,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '¡RETO COMPLETADO!',
        cancelButtonText: 'No pude hacerlo...',
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
    const adivinanza = adivinanzas[Math.floor(Math.random() * adivinanzas.length)];
    Swal.fire({
        title: 'ADIVINANZA SABIA',
        html: `<p style="font-size: 1.1em; line-height: 1.5;">${adivinanza.pregunta}</p>`,
        input: 'text',
        inputPlaceholder: 'Tu respuesta...',
        background: '#080808',
        color: '#F39C12',
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
        } else {
            cambiarTurno();
        }
    });
}

// Reto Maestro 2.0 Logic
const retoMaestroData = [
    {
        bg: 'url("./assets/sprites/tile_maestro.png")',
        msg: "Un amigo insiste en que bebas alcohol aunque dijiste que no. ¿Qué haces?",
        optA: "Beber para que no se burlen",
        optB: "Mantener mi 'No' con firmeza",
        correct: "B"
    },
    {
        bg: 'url("./assets/sprites/tile_maestro.png")',
        msg: "Ves que molestan a alguien en el chat del grupo. ¿Qué haces?",
        optA: "Quedarme callado",
        optB: "Escribir que eso no está bien",
        correct: "B"
    }
];

function lanzarRetoMaestro2(jugador) {
    const reto = retoMaestroData[Math.floor(Math.random() * retoMaestroData.length)];
    let timeLeft = 10;
    let timerInterval;

    Swal.fire({
        title: '¡RETO MAESTRO!',
        html: `
            <div style="margin-bottom: 20px;">
                <img src="./assets/sprites/tile_maestro.png" style="width: 100px; height: 100px; animation: pulse 1s infinite;">
            </div>
            <p style="font-size: 1.2em;">${reto.msg}</p>
            <div id="maestro-timer" style="font-size: 2em; color: #E74C3C; font-weight: bold; margin: 15px;">${timeLeft}s</div>
        `,
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: reto.optA, // Option A
        denyButtonText: reto.optB,    // Option B
        showCancelButton: false,
        background: '#080808',
        color: '#fff',
        allowOutsideClick: false,
        didOpen: () => {
            const timerDisplay = document.getElementById('maestro-timer');
            timerInterval = setInterval(() => {
                timeLeft--;
                if (timerDisplay) timerDisplay.innerText = timeLeft + "s";
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    Swal.clickCancel(); // Auto-fail
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.isDismissed && result.dismiss === Swal.DismissReason.cancel) {
            // Time out
            Swal.fire('¡TIEMPO AGOTADO!', 'Debes pensar rápido.', 'error').then(() => processFailure(jugador));
        } else {
            // Selected something
            let choice = result.isConfirmed ? "A" : "B";
            if (choice === reto.correct) {
                processSuccess(jugador, { premioMsg: "¡DOMINIO TOTAL!", premioDesc: "Has tomado la decisión correcta bajo presión. Avanzas 5 casillas." });
            } else {
                Swal.fire('ERROR DE JUICIO', 'Esa no era la mejor opción.', 'error').then(() => processFailure(jugador));
            }
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
                if (result.value === 'B') {
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
        const launchMinigame = () => {
            let energy = 0;
            let stability = 100;
            let interval;
            let isHolding = false;
            let isOverheated = false;

            Swal.fire({
                title: '¡ACCIÓN CORRECTA!',
                html: `
                    <style>
                        .energy-container { width: 80%; height: 20px; background: #222; border-radius: 10px; margin: 10px auto; overflow: hidden; border: 2px solid #555; position: relative; }
                        .energy-bar { width: 0%; height: 100%; background: linear-gradient(90deg, #E74C3C, #9B59B6); transition: width 0.1s; }
                        .stability-container { width: 80%; height: 10px; background: #222; border-radius: 5px; margin: 5px auto; overflow: hidden; }
                        .stability-bar { width: 100%; height: 100%; background: #3498DB; transition: width 0.1s, background 0.2s; }
                        .transform-icon { width: 100px; height: 100px; margin: 0 auto; transition: all 0.1s; filter: grayscale(100%) brightness(0.5); }
                        .hold-btn { 
                            background: #fff; color: #000; border: none; padding: 15px 30px; 
                            font-size: 1.2em; font-weight: bold; border-radius: 50px; cursor: pointer;
                            box-shadow: 0 0 10px #fff; user-select: none; transition: all 0.2s;
                        }
                        .hold-btn:active { transform: scale(0.95); }
                        .hold-btn:disabled { background: #555; color: #888; cursor: not-allowed; box-shadow: none; }
                        .status-text { min-height: 20px; color: #aaa; font-size: 0.9em; margin-bottom: 10px; }
                        @keyframes shake {
                            0% { transform: translate(1px, 1px) rotate(0deg); }
                            10% { transform: translate(-1px, -2px) rotate(-1deg); }
                            20% { transform: translate(-3px, 0px) rotate(1deg); }
                            30% { transform: translate(3px, 2px) rotate(0deg); }
                        }
                        @keyframes overheat {
                            0% { background-color: #3498DB; }
                            50% { background-color: #E74C3C; }
                            100% { background-color: #3498DB; }
                        }
                    </style>
                    <div style="margin-bottom: 20px;">
                        <img src="./assets/sprites/emotion_lock.png" id="t-icon" class="transform-icon">
                    </div>
                    <p>Ahora canaliza esa decisión.<br>Mantén presionado para transformar la emoción.<br><span style="color: #E74C3C; font-size: 0.8em;">¡Cuidado con sobrecalentar!</span></p>
                    
                    <div class="energy-container">
                        <div id="energy-bar" class="energy-bar"></div>
                    </div>
                    
                    <div class="stability-container">
                        <div id="stability-bar" class="stability-bar"></div>
                    </div>
                    <div id="status-msg" class="status-text">Estabilidad: 100%</div>

                    <button id="btn-transform" class="hold-btn">⚡ TRANSFORMAR ⚡</button>
                `,
                showConfirmButton: false,
                allowOutsideClick: false,
                background: '#080808',
                color: '#fff',
                didOpen: () => {
                    const btn = document.getElementById('btn-transform');
                    const eBar = document.getElementById('energy-bar');
                    const sBar = document.getElementById('stability-bar');
                    const status = document.getElementById('status-msg');
                    const icon = document.getElementById('t-icon');

                    const loop = setInterval(() => {
                        if (isOverheated) {
                            stability += 2;
                            if (stability >= 100) {
                                stability = 100;
                                isOverheated = false;
                                btn.disabled = false;
                                btn.innerText = "⚡ TRANSFORMAR ⚡";
                                status.innerText = "Sistema Re-establecido";
                                status.style.color = "#2ECC71";
                            }
                        } else if (isHolding) {
                            energy += 0.8;
                            stability -= 2.5;

                            if (stability <= 0) {
                                stability = 0;
                                triggerOverheat();
                            }
                        } else {
                            energy -= 0.5;
                            stability += 1.5;
                        }

                        if (energy < 0) energy = 0;
                        if (energy >= 100) { energy = 100; completeTransformation(); }
                        if (stability > 100) stability = 100;

                        updateUI();
                    }, 30);

                    const triggerOverheat = () => {
                        isOverheated = true;
                        isHolding = false;
                        btn.disabled = true;
                        btn.innerText = "¡SOBRECALENTADO!";
                        energy = Math.max(0, energy - 20);
                        status.innerText = "¡ALERTA! Soltaste demasiada energía.";
                        status.style.color = "#E74C3C";
                        icon.style.animation = 'none';
                        swal.getPopup().classList.add('swal2-shake');
                        setTimeout(() => swal.getPopup().classList.remove('swal2-shake'), 500);
                    };

                    const updateUI = () => {
                        eBar.style.width = energy + '%';
                        sBar.style.width = stability + '%';

                        if (!isOverheated) {
                            sBar.style.backgroundColor = stability < 30 ? '#E74C3C' : '#3498DB';
                            status.style.color = '#aaa';
                            if (isHolding) status.innerText = "Transformando...";
                            else status.innerText = "Esperando...";
                        }

                        const progress = energy / 100;
                        icon.style.filter = `grayscale(${1 - progress}) brightness(${0.5 + progress}) drop-shadow(0 0 ${energy / 2}px #9B59B6)`;
                    };

                    const completeTransformation = () => {
                        clearInterval(loop);
                        btn.disabled = true;
                        btn.innerText = "¡ÉXITO!";
                        icon.style.filter = "grayscale(0) brightness(1.5) drop-shadow(0 0 30px #9B59B6)";
                        icon.src = "./assets/sprites/butterfly.png";
                        icon.style.animation = "pulseIce 1s infinite";

                        setTimeout(() => {
                            Swal.close();
                            processSuccess(jugador, { premioMsg: "¡MAESTRÍA EMOCIONAL!", premioDesc: "Has regulado tu energía perfectamente. Avanzas 3 casillas." });
                        }, 1500);
                    };

                    btn.addEventListener('mousedown', () => { if (!isOverheated) { isHolding = true; icon.style.animation = 'shake 0.5s infinite'; } });
                    btn.addEventListener('touchstart', (e) => { e.preventDefault(); if (!isOverheated) { isHolding = true; icon.style.animation = 'shake 0.5s infinite'; } });

                    window.addEventListener('mouseup', () => { isHolding = false; icon.style.animation = 'none'; });
                    window.addEventListener('touchend', () => { isHolding = false; icon.style.animation = 'none'; });
                }
            });
        };

        // QUIZ PHASE (GAMIFIED UI)
        Swal.fire({
            title: 'TRANSFORMA LA EMOCIÓN',
            html: `
                <style>
                    .opt-container { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
                    .game-opt-btn {
                        background: rgba(20, 20, 30, 0.9);
                        border: 2px solid #555;
                        color: #fff;
                        padding: 15px;
                        border-radius: 12px;
                        cursor: pointer;
                        text-align: left;
                        font-family: 'Segoe UI', sans-serif;
                        font-size: 1em;
                        transition: all 0.2s;
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                    }
                    .game-opt-btn:hover {
                        transform: translateX(5px);
                        border-color: #9B59B6; /* Purple for Transform theme */
                        background: #2a2a40;
                        box-shadow: -4px 0 15px rgba(155, 89, 182, 0.4);
                    }
                    .game-opt-btn .icon { font-size: 1.5em; margin-right: 15px; min-width: 30px; text-align: center; }
                    .game-opt-btn:active { transform: scale(0.98); border-color: #fff; }
                </style>

                <div style="margin-bottom: 20px; text-align: center;">
                    <img src="./assets/sprites/emotion_lock.png" style="width: 80px; height: 80px; animation: float 3s infinite;">
                    <p style="font-size: 1.1em; color: #ccc; margin-top: 10px;">
                        Completa la frase: <br>
                        <span style="color: #9B59B6; font-weight: bold; font-size: 1.2em;">"Cuando siento CELOS, una forma sana de actuar es..."</span>
                    </p>
                </div>

                <div class="opt-container">
                    <button class="game-opt-btn" onclick="Swal.clickConfirm(); window.selectedOpt='control'">
                        <span class="icon">🕵️</span>
                        <span>Revisar su celular a escondidas</span>
                    </button>
                    <button class="game-opt-btn" onclick="Swal.clickConfirm(); window.selectedOpt='space'">
                        <span class="icon">🧘</span>
                        <span>Pedir un momento para calmarme</span>
                    </button>
                    <button class="game-opt-btn" onclick="Swal.clickConfirm(); window.selectedOpt='sarcasm'">
                        <span class="icon">😒</span>
                        <span>Hacer comentarios sarcásticos</span>
                    </button>
                </div>
            `,
            showConfirmButton: false, // Hidden, we use custom buttons
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            background: '#080808',
            color: '#fff',
            didOpen: () => {
                window.selectedOpt = null; // Reset selection
            }
        }).then((result) => {
            if (result.isConfirmed || window.selectedOpt) {
                const choice = window.selectedOpt;

                if (choice === 'space') {
                    launchMinigame();
                } else if (choice) {
                    Swal.fire({
                        icon: 'error',
                        title: 'CONDUCTA NO SANA',
                        html: '<p>Esa acción busca controlar o herir.</p><p style="color: #E74C3C; font-weight: bold;">GAME OVER - PIERDES TURNO</p>',
                        background: '#080808', color: '#fff'
                    }).then(() => processFailure(jugador));
                }
            } else {
                processFailure(jugador);
            }
        });
    }
    else if (subTipo === 'termometro') {
        let intensity = 10;

        Swal.fire({
            title: '¡BAJA LA INTENSIDAD!',
            html: `
                <p>Estás en nivel <span id="temp-val" style="color: red; font-weight: bold;">10</span> de enojo.</p>
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
