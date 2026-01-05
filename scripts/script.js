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
    "Línea de la empatía: Menciona una situación donde alguien podría sentirse inseguro y cómo acompañarlo.",
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
                else if (casillasEspeciales[i].sub === 'transforma') div.classList.add('casilla-reg-transform');
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
        inputAttributes: {
            autocapitalize: 'characters',
            autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'PROBAR',
        cancelButtonText: 'Rendirnos...',
        background: '#080808',
        color: '#fff',
        customClass: {
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel',
            popup: isReto5 ? 'popup-reto5' : (data.id === 'reto6' ? 'popup-reto6' : '')
        },
        preConfirm: (inputVal) => {
            if (!inputVal) return false;
            return inputVal.trim().toUpperCase();
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            const intento = result.value;
            const objetivo = data.palabra.toUpperCase();

            if (intento === objetivo) {
                // WIN INSTANTLY
                if (isReto5) {
                    animarDesbloqueo(jugador, data);
                } else if (data.id === 'reto6') {
                    animarDesbloqueoEmocion(jugador, data);
                } else {
                    processSuccess(jugador, data);
                }
            } else {
                // PARTIAL CHECK
                let improved = false;
                for (let i = 0; i < objetivo.length; i++) {
                    if (i < intento.length) {
                        if (intento[i] === objetivo[i] && currentMaskArray[i] === '_') {
                            currentMaskArray[i] = objetivo[i];
                            improved = true;
                        }
                    }
                }

                // Check if completed via partials (unlikely if they typed full word correctly but logic holds)
                if (!currentMaskArray.includes('_')) {
                    if (isReto5) {
                        animarDesbloqueo(jugador, data);
                    } else if (data.id === 'reto6') {
                        animarDesbloqueoEmocion(jugador, data);
                    } else {
                        processSuccess(jugador, data);
                    }
                } else {
                    // RECURSE
                    if (improved) {
                        Swal.fire({
                            icon: 'info',
                            title: '¡BUEN PROGRESO!',
                            text: 'Has descubierto algunas letras.',
                            timer: 1500,
                            showConfirmButton: false,
                            background: '#080808',
                            color: '#fff'
                        }).then(() => {
                            gestionarIntentoDesbloqueo(jugador, data, currentMaskArray, attemptsLeft); // No attempt penalty on progress? Or yes? Typically no penalty for progress in Hangman, but yes for partial guess failure? 
                            // Hangman: If you guess a LETTER and it is correct, no life lost. If wrong, life lost.
                            // Here user inputs a WORD. 
                            // Logic: If "improved" is true, arguably no penalty. If false, penalty.
                            // Let's adopt: Attempts decrement on ANY interaction that isn't a full win? 
                            // No, to encourage trying, let's say: 
                            // If improved -> same attempts.
                            // If NOT improved -> decrement attempts.
                        });
                    } else {
                        // Failed to find new letters
                        attemptsLeft--;
                        if (attemptsLeft <= 0) {
                            Swal.fire({
                                icon: 'error',
                                title: '¡SIN INTENTOS!',
                                text: `Te has quedado sin intentos. La palabra era "${objetivo}".`,
                                timer: 3000,
                                showConfirmButton: false,
                                background: '#080808',
                                color: '#fff'
                            }).then(() => {
                                processFailure(jugador);
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'INCORRECTO',
                                text: 'Esa palabra no coincide en ninguna posición nueva.',
                                timer: 1500,
                                showConfirmButton: false,
                                background: '#080808',
                                color: '#fff'
                            }).then(() => {
                                gestionarIntentoDesbloqueo(jugador, data, currentMaskArray, attemptsLeft);
                            });
                        }
                    }
                }
            }
        } else {
            // GIVE UP
            processFailure(jugador);
        }
    });
}

function animarDesbloqueo(jugador, data) {
    // Re-open a purely visual modal for animation
    sonido('powerup');

    Swal.fire({
        title: '¡ENERGÍA RESTAURADA!',
        html: `
            <div style="height: 180px; display: flex; align-items: center; justify-content: center; overflow: visible;">
                <div id="shield-container" class="shield-unlocked">
                    <img src="${data.imagen}" alt="Escudo" class="shield-img">
                </div>
            </div>
            <div style="color: #2ECC71; font-weight: bold; margin-top: 10px; font-size: 1.5em; text-shadow: 0 0 10px #2ECC71; animation: pulse 0.5s infinite alternate;">¡BOOM!</div>
            <p style="color: #fff; opacity: 0.8; margin-top: 5px;">¡LÍMITE SANO DESBLOQUEADO!</p>
        `,
        showConfirmButton: false,
        background: '#080808',
        color: '#fff',
        timer: 4500, // Long enough for boom (1.5s) + savoring
        didOpen: () => {
            // Optional: Shake the popup
            const popup = Swal.getPopup();
            popup.classList.add('shake-effect');
        }
    }).then(() => {
        processSuccess(jugador, data);
    });
}

function animarRespiracion(jugador, data) {
    let count = 4;
    sonido('powerup');

    Swal.fire({
        title: '¡PAUSA ACTIVADA!',
        html: `
            <div id="reloj-respiracion" style="font-size: 4em; color: #3498DB; font-weight: bold; margin: 20px 0;">
                INHARA
            </div>
            <div style="width: 100%; height: 10px; background: #333; border-radius: 5px; margin-top: 10px;">
                <div id="barra-respiracion" style="width: 0%; height: 100%; background: #3498DB; transition: width 4s linear;"></div>
            </div>
            <p style="color: #aaa; margin-top: 10px;">Tomar aire te devuelve el control.</p>
        `,
        showConfirmButton: false,
        background: '#080808',
        color: '#fff',
        didOpen: () => {
            const label = document.getElementById('reloj-respiracion');
            const bar = document.getElementById('barra-respiracion');

            // Simple Animation Sequence
            // Inhale (0-2s) -> Hold/Exhale (2-4s)
            // Or just countdown 4s

            if (label && bar) {
                // Inhala
                label.innerText = "INHALA";
                bar.style.width = "100%";

                setTimeout(() => {
                    label.innerText = "EXHALA";
                    bar.style.background = "#2ECC71";
                    bar.style.width = "0%";
                }, 2000);

                setTimeout(() => {
                    Swal.close();
                }, 4000);
            }
        }
    }).then(() => {
        processSuccess(jugador, data);
    });
}

function animarDesbloqueoEmocion(jugador, data) {
    sonido('powerup');
    Swal.fire({
        title: '¡EMOCIÓN DESBLOQUEADA!',
        html: `
            <div style="height: 180px; display: flex; align-items: center; justify-content: center;">
                <div style="width: 150px; height: 150px; border-radius: 50%; border: 5px solid #F1C40F; box-shadow: 0 0 50px #F1C40F; background: #fff; display: flex; align-items: center; justify-content: center; animation: pulse 1s infinite alternate;">
                    <img src="${data.imagen}" style="max-width: 80%; max-height: 80%; filter: none;">
                </div>
            </div>
            <p style="color: #F1C40F; font-size: 1.2em; font-weight: bold; margin-top: 20px;">¡Sentir es humano!</p>
        `,
        showConfirmButton: false,
        background: '#080808',
        color: '#fff',
        timer: 4000,
        didOpen: () => {
            const popup = Swal.getPopup();
            popup.classList.add('shake-effect');
        }
    }).then(() => {
        processSuccess(jugador, data);
    });
}



// RETO MAESTRO 2 DATA
const retoMaestroData = [
    {
        bg: "linear-gradient(135deg, #2c3e50, #000)",
        icon: "⚠️",
        situation: "Estás molesto porque sientes que no te toman en cuenta en la relación.",
        options: [
            { text: "Decir lo que piensas sin filtro", correct: false, risk: "Alto" },
            { text: "Tomar distancia para calmarte", correct: true, risk: "Bajo" },
            { text: "Guardar silencio para evitar problemas", correct: false, risk: "Medio" },
            { text: "Pedir explicaciones de inmediato", correct: false, risk: "Medio" }
        ],
        feedback: "Regularte primero previene respuestas impulsivas que pueden vulnerar derechos."
    },
    {
        bg: "linear-gradient(135deg, #4a235a, #000)",
        icon: "❓",
        situation: "La otra persona no responde y empiezas a imaginar escenarios negativos.",
        options: [
            { text: "Escribir para aclarar lo que sientes", correct: false, risk: "Medio" },
            { text: "Revisar redes para entender qué pasa", correct: false, risk: "Alto" },
            { text: "Esperar a sentirte más tranquilo", correct: true, risk: "Bajo" },
            { text: "Preguntar con insistencia", correct: false, risk: "Alto" }
        ],
        feedback: "Esperar regula el impulso y evita conductas invasivas."
    }
];

function lanzarRetoMaestro2(jugador) {
    const scenario = retoMaestroData[Math.floor(Math.random() * retoMaestroData.length)];
    let timeLeft = 12;
    let timerInterval;

    Swal.fire({
        title: '¡RETO MAESTRO: CUENTA REGRESIVA!',
        html: `
            <div style="background: ${scenario.bg}; padding: 15px; border-radius: 10px; border: 1px solid #555; margin-bottom: 20px;">
                <div style="font-size: 3em; margin-bottom: 10px;">${scenario.icon}</div>
                <div style="font-size: 1.1em; margin-bottom: 15px;">${scenario.situation}</div>
                <div id="rm-timer" style="font-family: 'Press Start 2P'; font-size: 2em; color: #E74C3C; text-shadow: 0 0 10px red;">
                    ${timeLeft}
                </div>
            </div>
            <div id="rm-options" style="display: flex; flex-direction: column; gap: 10px;">
                <!-- Generated dynamically -->
            </div>
        `,
        showConfirmButton: false,
        background: '#080808',
        color: '#fff',
        allowOutsideClick: false,
        didOpen: () => {
            const container = document.getElementById('rm-options');
            const timerEl = document.getElementById('rm-timer');

            // Shuffle options
            const shuffled = scenario.options.sort(() => Math.random() - 0.5);

            shuffled.forEach(opt => {
                const btn = document.createElement('button');
                btn.innerText = opt.text;
                btn.className = 'swal2-confirm swal2-styled';
                btn.style.width = '100%';
                btn.style.margin = '0';
                btn.style.backgroundColor = '#333';
                btn.onclick = () => {
                    clearInterval(timerInterval);
                    Swal.close();
                    resolverRetoMaestro(jugador, opt, scenario);
                };
                container.appendChild(btn);
            });

            timerInterval = setInterval(() => {
                timeLeft--;
                if (timerEl) timerEl.innerText = timeLeft;
                if (timeLeft <= 5) timerEl.style.color = (timeLeft % 2 === 0) ? '#fff' : '#E74C3C';

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    Swal.close();
                    resolverRetoMaestro(jugador, { correct: false, risk: "TIMEOUT" }, scenario);
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    });
}

function resolverRetoMaestro(jugador, choice, scenario) {
    if (choice.correct) {
        // Success
        Swal.fire({
            title: '¡DECISIÓN MAESTRA!',
            html: `
                <div style="font-size: 3em;">🛡️⚖️✨</div>
                <p style="margin: 15px 0; color: #2ECC71;">${scenario.feedback}</p>
                <div style="display: flex; justify-content: space-around; font-size: 0.9em; margin-top: 20px; color: #aaa;">
                    <span>Legal: ✅ OK</span>
                    <span>Riesgo: 🔽 Bajo</span>
                </div>
            `,
            icon: 'success',
            background: '#080808',
            color: '#fff',
            confirmButtonText: 'AVANZAR'
        }).then(() => {
            processSuccess(jugador, { premioMsg: "¡MAESTRÍA DEMOSTRADA!", premioDesc: "Avanzas 5 casillas." });
        });
    } else {
        // Failure
        Swal.fire({
            title: '¡RIESGO DETECTADO!',
            html: `
                <div style="font-size: 3em;">⚠️🛑🔥</div>
                 <p style="margin: 15px 0; color: #E74C3C;">Esa decisión podría escalar el conflicto.</p>
                 <p style="font-size: 0.9em;"><em>${scenario.feedback}</em></p>
                 <div style="margin-top: 15px; border: 1px solid #E74C3C; padding: 5px; color: #E74C3C;">
                    Riesgo: ${choice.risk}
                 </div>
            `,
            icon: 'error',
            background: '#080808',
            color: '#fff',
            confirmButtonText: 'REFLEXIONAR'
        }).then(() => {
            processFailure(jugador);
        });
    }
}

function lanzarReto(jugador) {
    const r = retos[Math.floor(Math.random() * retos.length)];

    // PASO 1: Aceptar o Rechazar
    Swal.fire({
        title: '¡RETO DE MISIÓN!',
        text: r,
        imageUrl: './assets/sprites/reto.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Reto',
        showCancelButton: true,
        confirmButtonText: '¡ACEPTO EL RETO!',
        cancelButtonText: 'No quiero hacerlo...',
        background: '#080808',
        color: '#fff',
        confirmButtonColor: '#27AE60', // BUTTON STYLE OVERRIDDEN BY CSS
        cancelButtonColor: '#C0392B',
        backdrop: `rgba(0,0,0,0.8)`,
        allowOutsideClick: false,
        customClass: {
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // PASO 2: Verificar Cumplimiento
            Swal.fire({
                title: '¿LO LOGRASTE?',
                text: 'Sé honesto, ¿cumpliste el reto?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: '¡SÍ, LO HICE!',
                cancelButtonText: 'No pude...',
                background: '#080808',
                color: '#fff',
                allowOutsideClick: false,
                customClass: {
                    confirmButton: 'swal2-confirm',
                    cancelButton: 'swal2-cancel'
                }
            }).then((res2) => {
                if (res2.isConfirmed) {
                    // PREMIO
                    const premio = Math.floor(Math.random() * 6) + 1;
                    Swal.fire({
                        title: '¡VALIENTE!',
                        text: `¡Tu valentía tiene recompensa! Avanzas ${premio} casillas.`,
                        icon: 'success',
                        background: '#080808',
                        color: '#F1C40F',
                        timer: 2000,
                        showConfirmButton: false
                    }).then(() => {
                        avanzar(jugador, premio);
                        // RECURSIVE CHECK AFTER REWARD MOVE
                        setTimeout(() => verificarCasilla(jugador), 500);
                    });
                } else {
                    // PENALIZACIÓN
                    const castigo = 2;
                    Swal.fire({
                        title: '¡INTÉNTALO LUEGO!',
                        text: `La honestidad es clave. Retrocedes ${castigo} casillas por no cumplirlo.`,
                        icon: 'warning',
                        background: '#080808',
                        color: '#fff',
                        timer: 2000,
                        showConfirmButton: false
                    }).then(() => {
                        retroceder(jugador, castigo);
                        // RECURSIVE CHECK AFTER PENALTY MOVE
                        setTimeout(() => verificarCasilla(jugador), 500);
                    });
                }
            });
        } else {
            // PENALIZACIÓN POR RECHAZAR
            const castigoRandom = Math.floor(Math.random() * 6) + 1;
            Swal.fire({
                title: '¡RETIRADA!',
                text: `Rechazar un reto tiene consecuencias... Retrocedes ${castigoRandom} casillas.`,
                icon: 'error',
                background: '#080808',
                color: '#C0392B',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                retroceder(jugador, castigoRandom);
                // RECURSIVE CHECK AFTER PENALTY MOVE
                setTimeout(() => verificarCasilla(jugador), 500);
            });
        }
    });
}


function processSuccess(jugador, data) {
    sonido('powerup');
    Swal.fire({
        title: data.premioMsg,
        text: data.premioDesc,
        icon: 'success',
        background: '#080808',
        color: '#fff',
        confirmButtonText: 'AVANZAR'
    }).then(() => {
        const avanzarCant = 4;
        avanzar(jugador, avanzarCant);
        setTimeout(() => verificarCasilla(jugador), 500);
    });
}

function processFailure(jugador) {
    const retro = 2;
    Swal.fire({
        title: 'BLOQUEO NO SUPERADO',
        text: `No has logrado desbloquear el límite. Retrocedes ${retro} pasos.`,
        icon: 'error',
        background: '#080808',
        color: '#fff'
    }).then(() => {
        retroceder(jugador, retro);
        setTimeout(() => verificarCasilla(jugador), 500);
    });
}

function avanzar(jugador, cantidad) {
    jugador.posicion += cantidad;
    if (jugador.posicion > TOTAL_CASILLAS) jugador.posicion = TOTAL_CASILLAS;
    actualizarPosicionesVisuales();
    sonido('powerup');
}

function retroceder(jugador, cantidad) {
    jugador.posicion -= cantidad;
    if (jugador.posicion < 1) jugador.posicion = 1;
    actualizarPosicionesVisuales();
    sonido('hit');
}

function cambiarTurno() {
    turnoActual = (turnoActual + 1) % jugadores.length;
    actualizarTurnoUI();
    if (btnLanzar) btnLanzar.disabled = false; // RE-ENABLE BUTTON
    logSystem(`TURNO: ${jugadores[turnoActual].nombre}`);
}

function logSystem(msg) {
    const line = document.createElement('div');
    line.classList.add('log-line');
    line.innerText = `> ${msg}`;
    if (logContainer) logContainer.prepend(line);
}

function lanzarAdivinanza(jugador) {
    const adivinanza = adivinanzas[Math.floor(Math.random() * adivinanzas.length)];

    Swal.fire({
        title: '¡ADIVINANZA!',
        html: `<div style="text-align: left; font-size: 1.1em; line-height: 1.5;">${adivinanza.pregunta}</div>`,
        imageUrl: './assets/sprites/adivinanza.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Adivinanza',
        input: 'text',
        inputLabel: 'Tu respuesta:',
        inputPlaceholder: 'Escribe aquí...',
        showCancelButton: false, // REMOVED "PASAR" OPTION AS REQUESTED
        confirmButtonText: 'RESPONDER',
        allowOutsideClick: false,
        background: '#080808',
        color: '#fff',
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off'
        },
        customClass: {
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel',
            input: 'swal2-input-custom'
        },
        preConfirm: (respuesta) => {
            if (!respuesta) {
                Swal.showValidationMessage('¡Debes escribir una respuesta!');
            }
            return respuesta;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const respuestaUsuario = result.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            // Check normalized answers
            const esCorrecta = adivinanza.respuestas.some(resp => {
                const respNorm = resp.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return respuestaUsuario === respNorm || respuestaUsuario.includes(respNorm);
            });

            if (esCorrecta) {
                const premio = 3;
                Swal.fire({
                    title: '¡CORRECTO!',
                    text: `¡Muy bien! Avanzas ${premio} casillas.`,
                    icon: 'success',
                    background: '#080808',
                    color: '#27AE60',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    avanzar(jugador, premio);
                    setTimeout(() => verificarCasilla(jugador), 500);
                });
            } else {
                const castigo = 1;
                Swal.fire({
                    title: '¡INCORRECTO!',
                    text: `La respuesta no es correcta. Retrocedes ${castigo} casilla.`,
                    icon: 'error',
                    background: '#080808',
                    color: '#C0392B',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    retroceder(jugador, castigo);
                    setTimeout(() => verificarCasilla(jugador), 500);
                });
            }
        } else {
            // Cancelled/Passed
            const castigo = 1;
            Swal.fire({
                title: '¡PASASTE!',
                text: `Al no intentar, retrocedes ${castigo} casilla.`,
                icon: 'warning',
                background: '#080808',
                color: '#E67E22',
                confirmButtonText: 'ACEPTAR'
            }).then(() => {
                retroceder(jugador, castigo);
            });
        }
    });
}

// ==========================================
// RETOS DE REGULACIÓN
// ==========================================
function lanzarRetoRegulacion(jugador, subTipo) {
    if (subTipo === 'pausa') {
        const segundos = 15;
        let timeLeft = segundos;

        Swal.fire({
            title: '¡ALERTA EMOCIONAL!',
            html: `
                <div style="font-size: 4em; margin-bottom: 20px;">🔥😡📱</div>
                <p style="font-size: 1.1em; margin-bottom: 20px;">"Tu pareja no responde tu mensaje por horas. Sientes enojo."</p>
                <div style="background: #222; padding: 20px; border-radius: 10px; border: 2px solid #E67E22;">
                    <p style="color: #E67E22; font-weight: bold;">ACCIÓN REQUERIDA: REGULAR</p>
                    <p>Respira profundo durante <span id="reg-timer" style="font-size: 1.5em; color: #fff;">${timeLeft}</span> segundos.</p>
                </div>
            `,
            showConfirmButton: false,
            allowOutsideClick: false,
            background: '#080808',
            color: '#fff',
            didOpen: () => {
                const timerEl = document.getElementById('reg-timer');
                const interval = setInterval(() => {
                    timeLeft--;
                    if (timerEl) timerEl.innerText = timeLeft;
                    if (timeLeft <= 0) {
                        clearInterval(interval);
                        Swal.update({ showConfirmButton: true, confirmButtonText: 'YA ESTOY TRANQUILO' });
                        Swal.clickConfirm();
                    }
                }, 1000);
            }
        }).then(() => {
            // Step 2: Choose Action
            Swal.fire({
                title: '¿QUÉ HACES AHORA?',
                input: 'radio',
                inputOptions: {
                    'A': 'Escribirle reclamando por qué me ignora',
                    'B': 'Esperar y preguntar luego si todo está bien'
                },
                inputValidator: (value) => {
                    if (!value) return 'Debes elegir una opción';
                },
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
        Swal.fire({
            title: 'TRANSFORMA LA EMOCIÓN',
            text: 'Completa la frase: "Cuando siento CELOS, una forma sana de actuar es..."',
            imageUrl: './assets/sprites/emotion_lock.png',
            imageWidth: 80,
            imageHeight: 80,
            input: 'select',
            inputOptions: {
                'control': 'Revisar su celular a escondidas',
                'space': 'Pedir un momento para calmarme y luego hablar',
                'sarcasm': 'Hacer comentarios sarcásticos'
            },
            inputPlaceholder: 'Selecciona una acción...',
            background: '#080808',
            color: '#fff',
            showCancelButton: true
        }).then((result) => {
            if (result.value === 'space') {
                processSuccess(jugador, { premioMsg: "¡TRANSFORMACIÓN COMPLETADA!", premioDesc: "Excelente gestión emocional. Avanzas 3 casillas." });
            } else if (result.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'CONDUCTA NO SANA',
                    text: 'Esa acción busca controlar o herir, no gestionar.',
                    background: '#080808', color: '#fff'
                }).then(() => processFailure(jugador));
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
