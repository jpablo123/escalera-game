# Informe Técnico de Desarrollo
## Proyecto: Juego de Escaleras "Misión Cero Violencia"

### 1. Resumen Ejecutivo
Este documento detalla el proceso de desarrollo, tecnologías utilizadas y decisiones de diseño implementadas en el videojuego web "Misión Cero Violencia". El objetivo fue transformar una dinámica de tablero tradicional en una experiencia digital interactiva ("Phygital") que incluye mecánicas de gamificación moderna para enseñar regulación emocional y prevención de violencia.

---

### 2. Stack Tecnológico
Para garantizar la máxima compatibilidad, rendimiento y facilidad de despliegue (sin necesidad de compiladores o servidores complejos), se eligió un stack nativo robusto:

*   **HTML5 Semántico**: Estructura base del tablero y contenedores de juego.
*   **CSS3 Moderno**:
    *   Uso de **Variables CSS (`var(--color)`)** para tematización dinámica de jugadores.
    *   **Flexbox y Grid** para el diseño responsivo del tablero (7x7).
    *   **Animaciones Keyframes** para efectos visuales (brillo, pulso, sacudidas en minijuegos).
*   **JavaScript (ES6+)**: Lógica central del juego, manejo de estados y DOM.
*   **Librerías Externas**:
    *   **SweetAlert2**: Motor principal para la interfaz de usuario (UI) de los retos. Permitió crear modales interactivos complejos (con HTML/CSS inyectado) que reemplazan las ventanas emergentes nativas del navegador.

---

### 3. Arquitectura del Software

El proyecto sigue una arquitectura orientada a eventos y manipulación directa del DOM:

#### A. Estructura de Archivos
*   `index.html`: Punto de entrada. Contiene los contenedores vacíos que JS rellena.
*   `css/style.css`: Hoja de estilos única. Maneja desde la grilla del tablero hasta los efectos de partículas de los minijuegos.
*   `scripts/script.js`: "Cerebro" del juego. Contiene toda la lógica de negocio.

#### B. Lógica de Negocio (`script.js`)
El código está modularizado en funciones clave:
1.  **Generación Procedural**: `crearTablero()` genera las 49 casillas dinámicamente, asignando clases CSS según el tipo de casilla (Reto, Portal, Gusano) definido en un objeto de configuración `casillasEspeciales`.
2.  **Motor de Turnos**: Sistema de semáforos (flags) y Promesas (`async/await`) para manejar la secuencia: *Tirar Dado -> Animación Ficha -> Verificar Casilla -> Ejecutar Evento -> Siguiente Turno*.
3.  **Sistema de Encadenamiento ("Combos")**: Implementado en `processSuccess`. Si un jugador gana un reto y avanza a otra casilla especial, el sistema detecta recursivamente la nueva posición y ejecuta el siguiente evento en lugar de terminar el turno.

---

### 4. Implementación de Funcionalidades Clave

#### A. Retos Híbridos (Gamificación Cognitiva-Visceral)
Para la **Casilla 25 (Regulación Emocional)**, desarrollamos una mecánica en dos fases para evitar que el aprendizaje fuera pasivo:
1.  **Fase Cognitiva (UI de Juego)**:
    *   Sustituimos los `select` nativos por **Tarjetas de Decisión Interactivas**.
    *   Implementación de botones HTML inyectados en SweetAlert con estilos `hover` de neón.
    *   El jugador debe discernir intelectualmente la respuesta sana.
2.  **Fase Visceral (Minijuego "Sobrecarga")**:
    *   Diseñamos un minijuego de *press-and-hold*.
    *   **Lógica**: Balancear dos barras de progreso (Energía vs. Estabilidad).
    *   **Feedback**: Si el jugador mantiene pulsado mucho tiempo, el sistema "sobrecalienta" (vibración de pantalla, alertas rojas), simulando la pérdida de control emocional.

#### B. Retos de Desbloqueo (Ahorcado Temático)
Implementamos minijuegos tipo "Ahorcado" para conceptos clave (RESPETO, MIEDO, PAUSA):
*   **Feedback Visual**: Al desbloquear letras, las imágenes (Escudo, Candado) cambian de escala de grises a color (`filter: grayscale()`) y ganan brillo (`drop-shadow`), dando sensación de progreso real.

#### C. Sistema de "Reto Maestro 2" (Toma de Decisiones)
*   Incorpora un **Temporizador Regresivo (Countdown)** real usando `setInterval`.
*   Añade presión de tiempo para simular situaciones de estrés real donde se debe decidir rápido (ej. presión social).

---

### 5. Desafíos y Soluciones Técnicas

| Desafío | Solución Implementada |
| :--- | :--- |
| **Sincronización de Animaciones** | Uso de `await delay(ms)` para esperar a que la ficha termine de moverse antes de abrir un modal. |
| **Interfaz Aburrida** | Inyección de CSS (`<style>`) dentro de los popups de SweetAlert para crear interfaces únicas por cada minijuego sin ensuciar el CSS global. |
| **Experiencia de Usuario (UX) en Móvil** | Áreas de toque (Touch Targets) ampliadas en los botones de decisión y prevención del comportamiento por defecto en eventos `touchstart` para evitar zoom indeseado en el minijuego de mantener pulsado. |

---

### 6. Conclusión
El desarrollo ha resultado en una aplicación web ligera (Single Page Application - SPA) pero rica en interacciones. La combinación de lógica de tablero tradicional con minijuegos de habilidad (timing, balance) eleva la experiencia de usuario, manteniendo el foco pedagógico en la prevención de violencia.

---
*Documento generado para documentación interna del proyecto.*
