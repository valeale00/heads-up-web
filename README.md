# ¡Adivina! — Heads Up Web

Juego de adivinanzas por equipos optimizado para móviles. Cada equipo describe la palabra que la persona con el teléfono en la frente debe adivinar.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Para probar sensores desde un teléfono, sirve la aplicación en HTTPS (o en localhost del propio dispositivo); los navegadores suelen restringir DeviceOrientation en HTTP.

## Mecánica

- Dos o más equipos, jugadores opcionales, rotación de quien adivina y alternancia de equipos.
- 90 segundos, tres pases y un punto por acierto de forma predeterminada. Se puede ajustar duración (30–180 s) y rondas (1–10).
- El tiempo se calcula a partir de una marca de fin y continúa correctamente al volver de segundo plano o recargar.
- Una partida activa se conserva en `localStorage`; al recargar sigue el turno y el temporizador original.
- El mazo combinado se baraja y no repite palabras hasta agotar las disponibles. Los bancos están separados por categoría en `src/data/words/`.

## Sensores móviles

El listener toma la inclinación beta al comenzar como posición neutral, cuenta una inclinación relativa superior a 38° como acierto e inferior a −38° como pase; exige volver a menos de 12° de neutral y bloquea movimientos repetidos. En Safari iOS, DeviceOrientation requiere permiso iniciado por un gesto del usuario; por eso los botones táctiles son el respaldo principal. En Android Chrome el permiso normalmente no se muestra, aunque se requiere HTTPS.

La orientación física cambia según el dispositivo, la rotación de pantalla y cómo se sostenga el teléfono. La calibración automática reduce esa diferencia, pero no puede garantizar que «abajo» corresponda a la misma dirección de beta en todos los modelos. Valida el signo y los umbrales en los teléfonos concretos antes de jugar; los controles táctiles siempre están disponibles. Prueba iOS desde Safari y Android desde Chrome con el teléfono en la posición de juego.

## Organización

- `src/app/`: App Router, estilos y pantallas.
- `src/hooks/useMatch.ts`: flujo de partida, puntuación, turnos y persistencia.
- `src/hooks/useTilt.ts`: permiso y detección de inclinación.
- `src/lib/`: tipos y utilidades del juego/mazo.
- `src/data/words/`: diez bancos JSON independientes (50 palabras cada uno y 117 en Palabras aleatorias).

La interfaz usa Next.js App Router, TypeScript, Tailwind CSS y Lucide React. Está lista para desplegarse en Vercel.
