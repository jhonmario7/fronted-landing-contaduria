// Aparición al hacer scroll, al estilo AOS de la plantilla de referencia: los elementos con
// data-reveal="up|left|right|zoom" entran cuando llegan a la pantalla (estilos en styles.scss).
// Vive en el shell de la app para no depender de cuándo se hidrata cada sección (@defer).
// Se vuelven a buscar los elementos en cada revisión: la hidratación puede reemplazar nodos y un
// IntersectionObserver los perdería. El contenido solo se oculta cuando esto arranca: sin JS se ve.
export function startScrollReveal(doc: Document): () => void {
  const win = doc.defaultView!;
  let frame = 0;

  const check = () => {
    frame = 0;
    const limit = win.innerHeight * 0.88;
    doc.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)').forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Sin tamaño = oculto (pestaña inactiva): se revisa cuando aparezca.
      if (rect.height && rect.top < limit && rect.bottom > 0) el.classList.add('is-revealed');
    });
  };
  const schedule = () => {
    if (!frame) frame = win.requestAnimationFrame(check);
  };

  // Cambios del DOM (hidratación, pestañas que se muestran) también disparan la revisión.
  const changes = new MutationObserver(schedule);
  changes.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
  win.addEventListener('scroll', schedule, { passive: true });
  win.addEventListener('resize', schedule, { passive: true });

  doc.documentElement.classList.add('reveal-ready');
  schedule();

  return () => {
    changes.disconnect();
    win.removeEventListener('scroll', schedule);
    win.removeEventListener('resize', schedule);
    win.cancelAnimationFrame(frame);
  };
}
