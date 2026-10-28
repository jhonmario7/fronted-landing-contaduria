# IUS COUNTER CONSULTING — Landing page

Sitio web de **IUS COUNTER CONSULTING SAS**, firma de asesoría contable, tributaria y legal de Neiva (Colombia).
Una landing de una sola página, rápida y accesible, que presenta a la firma, su equipo y sus 11 líneas de servicio, y lleva al visitante a WhatsApp.

**En línea:** [iuscounterconsulting.com](https://iuscounterconsulting.com)

![Angular](https://img.shields.io/badge/Angular-22-dd0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-tokens-cc6699?logo=sass&logoColor=white)
![SSG](https://img.shields.io/badge/render-SSG%20%2B%20hidratación%20incremental-0d3154)
![Cloudflare Pages](https://img.shields.io/badge/deploy-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white)

---

## Qué tiene

- **Secciones**: inicio, quiénes somos, equipo, servicios, nuestro compromiso, modalidades de trabajo y contacto, más la página de política de tratamiento de datos.
- **Servicios en carrusel**: avanza solo con un desplazamiento suave, se puede deslizar con el dedo y se pausa al pasar el cursor, al enfocar o con su botón (WCAG 2.2.2). Cada tarjeta abre un `<dialog>` nativo con el detalle; en celular el detalle ocupa toda la pantalla.
- **Nuestro compromiso con pestañas**: patrón ARIA completo (flechas, Inicio y Fin), todos los paneles prerenderizados y la pestaña activa centrada en celular.
- **Formulario → WhatsApp**: validación con Signal Forms, casilla de autorización de datos (Ley 1581 de 2012) y mensaje prellenado. No hay backend ni base de datos.
- **Animaciones con criterio**: iconos animados al pasar el cursor ([animateicons](https://animateicons.in)) y apariciones al hacer scroll solo donde suman. Se respeta `prefers-reduced-motion` y, sin JavaScript, todo el contenido se ve.
- **Responsive** desde 300 px, sin scroll horizontal (verificado de 300 a 1440 px).

## Stack y decisiones técnicas

| Tema | Decisión |
|---|---|
| Framework | **Angular 22** con componentes standalone, signals, control de flujo `@if`/`@for` y **Signal Forms** (`@angular/forms/signals`). |
| Render | **SSG puro**: `outputMode: "static"` y `RenderMode.Prerender`. El build entrega HTML/CSS/JS estático, sin servidor. |
| Carga | **Hidratación incremental**: `@defer (hydrate on viewport)` por sección. El HTML llega completo desde el inicio y el JS de cada sección se activa al entrar en pantalla. |
| Estilos | **SCSS + variables CSS** (tokens de marca en `src/styles.scss`), sin frameworks de UI. Contrastes WCAG medidos. |
| Contenido | **Un solo archivo tipado**: todo el texto vive en `src/app/data/site-content.ts` (modelo en `site-content.model.ts`). Ningún componente escribe texto a mano. |
| Imágenes | `NgOptimizedImage`, WebP y dimensiones explícitas (sin saltos de diseño). |
| Animación | Desplazamiento del carrusel con `requestAnimationFrame` y *easing* propio; apariciones con `data-reveal`, sin librerías de animación. |
| Pruebas | **Vitest** + jsdom. |
| Deploy | **Cloudflare Pages** conectado a GitHub: `develop` genera la vista previa y `main` publica en producción. |

## Estructura

```
src/
├── styles.scss               tokens, utilidades y animaciones globales
└── app/
    ├── core/                 utilidades sin UI (enlaces de WhatsApp, aparición al hacer scroll)
    ├── data/                 site-content.ts (todo el texto) + modelo tipado + test
    ├── shared/ui/            button, icon, section-header, whatsapp-fab, back-to-top
    ├── sections/             header, hero, about, team, services, why-us, process, contact, footer
    └── pages/                home, privacy-policy
public/
└── images/                   imágenes del sitio (WebP)
```

## Cómo correrlo

Requiere **Node 24.15.0** (ver `.nvmrc`).

```bash
npm install
```

```bash
npm start
```

Servidor de desarrollo en `http://localhost:4200`.

```bash
npm run build
```

Genera el sitio estático en `dist/fronted-landing-contaduria/browser/`.

```bash
npm test
```

## Editar contenido

Textos, servicios, equipo, enlaces y datos de contacto se cambian en `src/app/data/site-content.ts`. TypeScript avisa si falta un campo o si un icono no existe (`IconName`). Al hacer push a `main`, Cloudflare Pages publica el cambio en cerca de un minuto.

## Accesibilidad y rendimiento

- HTML semántico con un solo `<h1>`, foco visible y navegación completa por teclado (menú, carrusel, pestañas, diálogos y formulario).
- Contraste AA en texto y controles; el dorado de marca se usa como adorno, nunca como texto sobre fondo claro.
- Diálogos nativos (`<dialog>`), con Esc y devolución del foco.
- Sitio estático, imágenes optimizadas y JavaScript cargado por sección.

## Créditos

- Iconos: [animateicons](https://github.com/Avijit07x/animateicons) (MIT), basados en Lucide (ISC) y Hugeicons.
- Tipografías: Cormorant Garamond y Montserrat (Google Fonts, OFL).
- Desarrollo: [Jhon Mario Rodríguez Ramírez](https://github.com/jhonmario7).

## Licencia

Proyecto desarrollado para IUS COUNTER CONSULTING SAS. El diseño, los textos y las imágenes pertenecen a la firma; el código se muestra como ejemplo de trabajo y no se autoriza su reutilización sin permiso.
