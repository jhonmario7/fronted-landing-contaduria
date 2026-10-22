import { MediaAsset, SiteContent } from './site-content.model';

// Fuente: portafolio de la cliente (public/portafolio/, diapositivas 01–19), transcrito literal.
// Todo lo marcado [PENDIENTE] espera el material del Anexo 1 del contrato (ver documentacion/PLAN.md).
// Nunca reemplazar un [PENDIENTE] con un valor inventado. Lo marcado BORRADOR es copy nuestro
// para que la cliente lo apruebe en las rondas de ajustes.

const SITE_URL = 'https://iuscounterconsulting.com';

// Imágenes de servicio: bodegones generados con IA (1024×572). Decorativas (alt vacío):
// el nombre del servicio ya va en el título de la tarjeta.
const img = (name: string): MediaAsset => ({
  src: `/images/ia/${name}.webp`,
  alt: '',
  width: 1024,
  height: 572,
  aiGenerated: true,
});

export const SITE_CONTENT: SiteContent = {
  identity: {
    businessName: 'IUS COUNTER CONSULTING',
    legalName: 'IUS COUNTER CONSULTING SAS',
    nit: '902102537-3',
    city: 'Neiva, Huila',
    headline: 'Asesoría contable, tributaria y legal',
    tagline: 'Tu tranquilidad, nuestra prioridad.',
    subtitle: 'Soluciones contables, tributarias y legales para el crecimiento de tu empresa.',
    practiceAreas: [
      { icon: 'calculator', title: 'Contabilidad' },
      { icon: 'receipt', title: 'Tributación' },
      { icon: 'scale', title: 'Derecho' },
      { icon: 'search', title: 'Auditoría' },
      { icon: 'briefcase', title: 'Gestión empresarial' },
    ],
    slogans: [
      'Tu aliado en el crecimiento de tu empresa',
      'Comprometidos con tu tranquilidad y tu crecimiento',
      'Más que asesoría, somos tu apoyo',
      'Tu negocio en manos de expertos',
      'Tu aliado estratégico en cada paso',
      'Asesoría que impulsa tu futuro',
    ],
    // Monograma "IC" del logo recibido el 22 oct 2026 (fuente en docs/, no versionada).
    logo: {
      src: '/images/logo-monogram.webp',
      alt: 'IUS COUNTER CONSULTING',
      width: 262,
      height: 160,
    },
  },

  // Anclas a las secciones del contrato (cláusula 2: inicio, quiénes somos, servicios, por qué
  // elegirnos, proceso de trabajo, contacto). Etiquetas BORRADOR.
  navigation: {
    links: [
      { label: 'Quiénes somos', fragment: 'quienes-somos' },
      { label: 'Servicios', fragment: 'servicios' },
      { label: 'Por qué elegirnos', fragment: 'por-que-elegirnos' },
      { label: 'Cómo trabajamos', fragment: 'como-trabajamos' },
      { label: 'Contacto', fragment: 'contacto' },
    ],
    ctaLabel: 'Escríbenos',
    homeLabel: 'IUS COUNTER CONSULTING, ir al inicio',
    openMenuLabel: 'Abrir menú',
    closeMenuLabel: 'Cerrar menú',
    backToTopLabel: 'Volver arriba',
  },

  // BORRADOR (etiquetas de botones).
  hero: {
    primaryCtaLabel: 'Agenda tu asesoría',
    secondaryCtaLabel: 'Conoce nuestros servicios',
    practiceAreasLabel: 'Nuestras áreas',
  },

  // Títulos y etiquetas tomados del portafolio (diapositivas 02 y 03).
  about: {
    eyebrow: 'Quiénes somos',
    title: 'Más que asesoría, somos tu apoyo',
    labels: {
      valueProposition: 'Nuestra propuesta de valor',
      mission: 'Nuestra misión',
      vision: 'Nuestra visión',
      values: 'Nuestros valores',
    },
    photo: {
      src: '/images/ia/quienes-somos.webp',
      alt: 'Manos revisando un documento sobre un escritorio con libreta, calculadora y portátil',
      width: 823,
      height: 1024,
      aiGenerated: true,
    },
    intro: [
      'Somos una firma de consultoría y asesoría integral que combina conocimientos contables, tributarios, jurídicos, financieros y administrativos para brindar soluciones a personas naturales, profesionales independientes, comerciantes, emprendedores, fundaciones y empresas de diferentes sectores económicos.',
      'Nuestro equipo integra profesionales de la Contaduría Pública y el Derecho, con experiencia en cumplimiento normativo, gestión de impuestos, auditoría, defensa jurídica, organización empresarial y operación de procesos contables y administrativos.',
    ],
    valueProposition:
      'Acompañar al cliente desde la organización de su información y el cumplimiento de sus obligaciones hasta la prevención de riesgos, la defensa de sus intereses y el fortalecimiento de su negocio.',
    mission:
      'Brindar asesoría contable, tributaria y legal de manera oportuna, confiable y personalizada, contribuyendo al crecimiento y fortalecimiento de las empresas, emprendedores y personas naturales, a través de un equipo de profesionales comprometidos con la excelencia y la ética.',
    vision:
      'Ser un referente en el sector de la asesoría contable, tributaria y legal a nivel regional y nacional, reconocidos por nuestra calidad, innovación y compromiso con el desarrollo sostenible de nuestros clientes, construyendo relaciones a largo plazo basadas en la confianza y el profesionalismo.',
    values: [
      {
        icon: 'handshake',
        title: 'Compromiso',
        description:
          'Nos esforzamos cada día por cumplir con responsabilidad y dedicación los objetivos de nuestros clientes.',
      },
      {
        icon: 'shield-check',
        title: 'Integridad',
        description:
          'Actuamos con honestidad, transparencia y ética en cada una de nuestras decisiones y procesos.',
      },
      {
        icon: 'users',
        title: 'Trabajo en equipo',
        description:
          'Creemos en el poder de la unión y la colaboración para lograr grandes resultados.',
      },
      {
        icon: 'lightbulb',
        title: 'Innovación',
        description:
          'Buscamos constantemente nuevas soluciones para ofrecer un servicio más eficiente y efectivo.',
      },
      {
        icon: 'award',
        title: 'Excelencia',
        description:
          'Nos respaldan la experiencia, la formación continua y el deseo permanente de mejorar.',
      },
      {
        icon: 'sprout',
        title: 'Responsabilidad social',
        description: 'Contribuimos al desarrollo de un entorno empresarial más justo y sostenible.',
      },
    ],
  },

  // Diapositivas 01 y 04. Las tarjetas profesionales no se publican (decisión de la cliente).
  team: {
    eyebrow: 'Nuestro equipo',
    title: 'Nuestro equipo profesional',
    labels: { credentials: 'Formación', leadershipAreas: 'Áreas de liderazgo' },
    tagline: 'Más que un equipo, son personas comprometidas con tu éxito',
    members: [
      {
        id: 'yury-vera',
        name: 'Yury Vera Plazas',
        role: 'Contadora Pública | Especialista en Gerencia Tributaria',
        summary:
          'Con más de 17 años de experiencia en el ejercicio contable, tributario y financiero.',
        credentials: [
          'Contadora Pública',
          'Especialista en Gerencia Tributaria',
          'Diplomado en NIIF – Información Financiera',
          'Diplomado en Normas Internacionales de Auditoría',
          'Diplomado en Docencia Universitaria',
        ],
        leadershipAreas: [
          'Contabilidad y estados financieros.',
          'Asesoría y planeación tributaria.',
          'Declaraciones tributarias nacionales y territoriales.',
          'Defensa y fiscalización tributaria.',
          'Organización contable y financiera.',
          'Consultoría empresarial.',
          'Supervisión y revisión de procesos contables.',
        ],
        photo: null, // [PENDIENTE: foto real; las del portafolio parecen ilustrativas]
      },
      {
        id: 'carlos-fierro',
        name: 'Carlos Andrés Fierro González',
        role: 'Abogado y Contador Público',
        summary:
          'Especialista en Revisoría Fiscal y Auditoría, y en Derecho Laboral y Seguridad Social.',
        credentials: [
          'Abogado',
          'Contador Público',
          'Especialista en Revisoría Fiscal y Auditoría',
          'Especialista en Derecho Laboral y Seguridad Social',
          'Diplomado en NIIF – Información Financiera',
          'Diplomado en Normas Internacionales de Auditoría',
        ],
        leadershipAreas: [
          'Asesoría y representación jurídica.',
          'Derecho laboral, empresarial y de familia.',
          'Actuaciones administrativas y judiciales.',
          'Defensa jurídica en asuntos tributarios.',
          'Auditoría y revisoría fiscal.',
          'Evaluación del cumplimiento normativo.',
          'Consultoría jurídica y contable integral.',
        ],
        photo: {
          src: '/images/team/carlos-fierro.webp',
          alt: 'Carlos Andrés Fierro González, abogado y contador público, de traje azul',
          width: 600,
          height: 800,
        },
      },
      {
        id: 'rosi-cujinos',
        // Nombre y cargo confirmados por la cliente (22 oct 2026).
        name: 'Rosi Angélica Cujiños Gómez',
        role: 'Asistente Contable',
        summary:
          'Con experiencia en soporte técnico, implementación de sistemas contables, asistencia contable y ejecución de procesos empresariales.',
        credentials: [],
        leadershipAreas: [
          'Implementación y soporte de SysCafé.',
          'Organización y procesamiento contable.',
          'Facturación y documentos electrónicos.',
          'Compras, cartera y proveedores.',
          'Nómina electrónica.',
          'Control documental y administrativo.',
          'Acompañamiento al personal operativo.',
          'Implementación de procedimientos empresariales.',
        ],
        note: 'Su función permite que los servicios de asesoría no se limiten a entregar recomendaciones, sino que también incluyan acompañamiento en la ejecución de los procesos administrativos y contables.',
        photo: null, // [PENDIENTE: foto real]
      },
    ],
  },

  // Diapositiva 05: "Soluciones integrales para tus necesidades" / "Tu negocio en manos de expertos".
  servicesSection: {
    eyebrow: 'Servicios',
    title: 'Soluciones integrales para tus necesidades',
    subtitle: 'Tu negocio en manos de expertos',
    viewMoreLabel: 'Ver detalle', // BORRADOR
    closeLabel: 'Cerrar',
    ctaLabel: 'Consultar por WhatsApp', // BORRADOR
    whatsappMessage: 'Hola, quisiera información sobre el servicio: {servicio}.', // BORRADOR
  },

  // Orden y agrupación según la diapositiva 05 "Nuestros servicios" (11 tarjetas).
  services: [
    {
      id: 'contable-financiero',
      icon: 'calculator',
      image: img('contable'),
      name: 'Contable y financiero',
      title: 'Servicios contables y financieros',
      summary:
        'Llevamos el control de tu información financiera para que tomes mejores decisiones.',
      groups: [
        {
          items: [
            'Contabilidad integral para personas naturales y jurídicas.',
            'Contabilidad por prestación de servicios y outsourcing contable.',
            'Organización, reconstrucción, actualización y depuración contable.',
            'Elaboración y presentación de estados financieros.',
            'Certificaciones contables y financieras.',
            'Conciliaciones bancarias y depuración de cuentas.',
            'Revisión de cuentas por cobrar y por pagar.',
            'Análisis de cartera, proveedores y obligaciones financieras.',
            'Cierres contables mensuales y anuales.',
            'Análisis de costos, gastos y rentabilidad.',
            'Elaboración de presupuestos y flujos de caja.',
            'Evaluación de indicadores financieros.',
            'Supervisión y acompañamiento al personal contable de las empresas.',
            'Preparación de información financiera para entidades financieras y terceros.',
          ],
        },
      ],
      closingLine: 'Tu información financiera en manos expertas.',
    },
    {
      id: 'tributario',
      icon: 'receipt',
      image: img('tributario'),
      name: 'Tributario',
      title: 'Asesoría, consultoría, defensa y representación tributaria',
      // BORRADOR: el portafolio no trae una línea de resumen para este servicio.
      summary:
        'Cumplimiento de tus obligaciones tributarias nacionales y territoriales, y defensa ante la DIAN y demás autoridades.',
      groups: [
        {
          title: 'Impuestos nacionales',
          items: [
            'Declaraciones de renta de personas naturales y jurídicas.',
            'Declaraciones de IVA.',
            'Retención en la fuente.',
            'Impuesto nacional al consumo.',
            'Régimen Simple de Tributación.',
            'Análisis de residencia fiscal y tributación internacional.',
            'Planeación tributaria.',
            'Anticipos, saldos a favor e imputaciones tributarias.',
            'Corrección de declaraciones tributarias.',
            'Información exógena nacional.',
            'Actualización, inscripción y modificación del RUT.',
            'Facturación electrónica y demás documentos electrónicos.',
            'Análisis de beneficios, deducciones, descuentos y exenciones.',
          ],
        },
        {
          title: 'Impuestos territoriales',
          items: [
            'Industria y Comercio (ICA).',
            'Retención y autorretención de ICA.',
            'Declaraciones municipales y distritales.',
            'Información exógena municipal.',
            'Análisis de territorialidad de los ingresos.',
            'Registro y actualización de contribuyentes ante Hacienda.',
            'Revisión de sanciones, intereses y obligaciones municipales.',
            'Defensa en emplazamiento para declarar.',
          ],
        },
        {
          title: 'Defensa y representación tributaria',
          intro:
            'Te acompañamos en la defensa de tus derechos ante la DIAN y demás autoridades tributarias.',
          items: [
            'Atención y respuesta a requerimientos de la DIAN.',
            'Respuestas a emplazamientos para declarar o corregir.',
            'Revisión de liquidaciones oficiales.',
            'Recursos contra actos administrativos tributarios.',
            'Análisis de sanciones tributarias y procedimientos sancionatorios.',
            'Solicitudes de devolución o compensación de saldos a favor.',
            'Solicitudes de devolución por pagos en exceso o de lo no debido.',
            'Estudio de prescripción de obligaciones tributarias.',
            'Acompañamiento en procesos de cobro coactivo.',
            'Solicitud y negociación de facilidades de pago.',
            'Atención de fiscalizaciones tributarias nacionales y territoriales.',
            'Defensa administrativa y judicial en controversias tributarias, según la naturaleza del asunto.',
          ],
        },
      ],
      closingLine: 'Cumplimiento hoy, tranquilidad mañana.',
    },
    {
      id: 'juridico',
      icon: 'scale',
      image: img('juridico'),
      name: 'Jurídico',
      title: 'Servicios jurídicos',
      // BORRADOR: el portafolio no trae una línea de resumen para este servicio.
      summary:
        'Asesoría y representación en derecho empresarial y comercial, laboral y de seguridad social, de familia y administrativo.',
      groups: [
        {
          title: 'Derecho empresarial y comercial',
          items: [
            'Constitución de sociedades S.A.S.',
            'Elaboración y reforma de estatutos.',
            'Reformas de capital, representación legal y objeto social.',
            'Elaboración y revisión de contratos comerciales.',
            'Asesoría jurídica a comerciantes y empresas.',
            'Contratos de prestación de servicios y arrendamiento.',
            'Actas y documentos societarios.',
            'Trámites ante cámaras de comercio.',
            'Cumplimiento de obligaciones societarias.',
          ],
        },
        {
          title: 'Derecho laboral y seguridad social',
          items: [
            'Contratos laborales.',
            'Liquidación y revisión de prestaciones sociales.',
            'Salarios, jornada, vacaciones y recargos.',
            'Seguridad social y aportes.',
            'Terminación de contratos.',
            'Reglamentos y documentos laborales.',
            'Reclamaciones y controversias laborales.',
            'Fiscalización de aportes y UGPP.',
          ],
        },
        {
          title: 'Derecho de familia',
          items: [
            'Fijación, aumento, disminución y exoneración de cuota alimentaria.',
            'Procesos ejecutivos de alimentos.',
            'REDAM.',
            'Demandas, contestaciones, memoriales y recursos.',
            'Audiencias judiciales.',
            'Pruebas económicas y financieras.',
          ],
        },
        {
          title: 'Derecho administrativo',
          items: [
            'Derechos de petición.',
            'Recursos administrativos.',
            'Solicitudes ante entidades públicas.',
            'Tutelas y seguimiento.',
            'Actuaciones administrativas.',
            'Reclamaciones frente a decisiones públicas.',
          ],
        },
      ],
      closingLine: 'Protección jurídica para tu tranquilidad y crecimiento.',
    },
    {
      id: 'auditoria-revisoria-fiscal',
      icon: 'search',
      image: img('auditoria-y-revision-fiscal'),
      name: 'Auditoría y revisoría fiscal',
      title: 'Auditoría y revisoría fiscal',
      // BORRADOR: el portafolio no trae una línea de resumen para este servicio.
      summary:
        'Revisoría fiscal y auditorías financieras, tributarias y de cumplimiento para dar confianza a tus decisiones.',
      groups: [
        {
          items: [
            'Servicios de revisoría fiscal cuando exista obligación legal o designación voluntaria.',
            'Auditoría financiera.',
            'Auditoría contable y tributaria.',
            'Auditoría de cumplimiento.',
            'Evaluación de control interno.',
            'Revisión de procedimientos administrativos y contables.',
            'Evaluación de riesgos financieros y tributarios.',
            'Informes de auditoría y recomendaciones correctivas.',
            'Revisión de soportes contables, pagos y obligaciones.',
            'Acompañamiento en procesos de mejoramiento y saneamiento contable.',
          ],
        },
      ],
      note: 'Los encargos se ejecutarán de acuerdo con las normas profesionales aplicables y los requisitos de independencia.',
    },
    {
      id: 'creacion-empresas',
      icon: 'building',
      image: img('creacion-y-formalizacion-de-empresas'),
      name: 'Creación y formalización de empresas',
      title: 'Creación y formalización de empresas',
      summary:
        'Te acompañamos en cada paso para que tu negocio nazca, crezca y se fortalezca con bases sólidas.',
      groups: [
        {
          items: [
            'Asesoría para iniciar y formalizar negocios.',
            'Constitución de sociedades y empresas.',
            'Análisis de conveniencia entre persona natural y persona jurídica.',
            'Transformación de negocios de persona natural a S.A.S.',
            'Definición de actividades económicas y códigos CIIU.',
            'Inscripciones y actualizaciones en Cámara de Comercio y DIAN.',
            'Selección y evaluación del régimen tributario.',
            'Organización contable y administrativa de nuevas empresas.',
            'Implementación de procesos de facturación y nómina.',
            'Acompañamiento en el inicio de operaciones.',
            'Asesoría para comerciantes que desean expandir sus negocios.',
          ],
        },
      ],
      closingLine:
        'Convierte tu idea en un negocio real y con respaldo legal, contable y tributario.',
    },
    {
      id: 'fundaciones-esal',
      icon: 'heart',
      image: img('fundaciones-esal'),
      name: 'Fundaciones y entidades sin ánimo de lucro',
      title: 'Fundaciones y entidades sin ánimo de lucro',
      summary:
        'Apoyamos la gestión social y el cumplimiento normativo de las entidades que generan un impacto positivo.',
      groups: [
        {
          items: [
            'Constitución y formalización de fundaciones y ESAL.',
            'Elaboración y reforma de estatutos.',
            'Revisión del objeto social y patrimonio fundacional.',
            'Acompañamiento en trámites de registro.',
            'Contabilidad y estados financieros.',
            'Asesoría tributaria para entidades sin ánimo de lucro.',
            'Revisión de requisitos del Régimen Tributario Especial.',
            'Asesoría en obligaciones de información y cumplimiento.',
            'Auditoría y revisoría fiscal cuando corresponda.',
            'Organización de documentos y procedimientos administrativos.',
            'Calificación y actualización al Régimen Tributario Especial.',
          ],
        },
      ],
      closingLine: 'Contribuimos al fortalecimiento de entidades que transforman vidas.',
    },
    {
      id: 'gestion-operativa',
      icon: 'briefcase',
      image: img('gestion-operativa-administrativa'),
      name: 'Gestión operativa y administrativa',
      title: 'Gestión operativa y administrativa',
      summary:
        'Área de acompañamiento a cargo de Rosi Angélica Cujiños Gómez, bajo coordinación profesional cuando corresponda.',
      groups: [
        {
          items: [
            'Organización y actualización de contabilidades.',
            'Registro y causación de documentos contables.',
            'Procesamiento de facturas de compra y venta.',
            'Facturación electrónica.',
            'Gestión de documentos soporte.',
            'Apoyo en nómina y nómina electrónica.',
            'Organización de documentos y soportes de seguridad social.',
            'Conciliaciones y revisión operativa de bancos.',
            'Seguimiento de cuentas por cobrar y cuentas por pagar.',
            'Organización y control de cartera.',
            'Gestión de información de proveedores.',
            'Control y archivo documental.',
            'Elaboración de reportes operativos y administrativos.',
            'Seguimiento de actividades contables y obligaciones periódicas.',
            'Apoyo en implementación de procedimientos internos.',
            'Atención y acompañamiento a usuarios de sistemas contables.',
          ],
        },
      ],
      closingLine: 'Tu aliado en la gestión eficiente de tu negocio.',
    },
    {
      id: 'software-contable',
      icon: 'laptop',
      image: img('software-contable-transformacion-digital'),
      name: 'Software contable y transformación digital',
      title: 'Software contable y transformación digital',
      summary:
        'Tecnología y procesos que facilitan la gestión de tu negocio con el respaldo de un equipo experto.',
      groups: [
        {
          items: [
            'Implementación y parametrización de software contable.',
            'Acompañamiento en el manejo de SysCafé.',
            'Apoyo operativo en Siigo, World Office y otros sistemas, previa evaluación del alcance técnico.',
            'Configuración de procesos de facturación.',
            'Organización de cuentas, terceros, productos y conceptos.',
            'Migración y actualización de información contable.',
            'Configuración de inventarios, compras, ventas y cartera.',
            'Capacitación operativa a auxiliares y personal administrativo.',
            'Identificación y corrección de inconsistencias operativas.',
            'Apoyo en integración de procesos comerciales con la contabilidad.',
          ],
        },
      ],
      closingLine: 'La tecnología también es parte de tu crecimiento.',
    },
    {
      id: 'comerciantes-negocios',
      icon: 'store',
      image: img('consultoria-para-comerciantes'),
      name: 'Consultoría para comerciantes y negocios',
      title: 'Consultoría para comerciantes y negocios',
      summary:
        'Te ayudamos a fortalecer, organizar y hacer crecer tu negocio con un acompañamiento práctico y personalizado.',
      groups: [
        {
          items: [
            'Diagnóstico administrativo, contable y tributario de establecimientos de comercio.',
            'Organización y control de inventarios.',
            'Revisión de faltantes, sobrantes y pérdidas.',
            'Análisis de costos y precios de venta.',
            'Cálculo de márgenes de utilidad y rentabilidad.',
            'Evaluación de gastos fijos y punto de equilibrio.',
            'Control de caja, ventas y recaudos.',
            'Revisión de compras y proveedores.',
            'Diseño de procedimientos de apertura y cierre de caja.',
            'Capacitación al personal encargado de operaciones.',
            'Implementación de controles para prevenir pérdidas.',
            'Organización de documentación y comprobantes.',
            'Mejoramiento de procesos y reportes de gestión.',
            'Acompañamiento para mejorar la rentabilidad del negocio.',
          ],
        },
      ],
      closingLine: 'Tu negocio en buenas manos, para un futuro más rentable.',
    },
    {
      id: 'cartera-cobranza',
      icon: 'money',
      image: img('cartera-cobranzas-acuerdos-de-pagos'),
      name: 'Cartera, cobranza y acuerdos de pago',
      title: 'Cartera, cobranza y acuerdos de pago',
      summary:
        'Gestionamos y recuperamos tu cartera con estrategias efectivas, facilitando acuerdos que protegen tu negocio.',
      groups: [
        {
          items: [
            'Diagnóstico y organización de cartera.',
            'Conciliación de saldos con clientes.',
            'Seguimiento y recuperación administrativa de cartera.',
            'Elaboración de comunicaciones de cobro.',
            'Propuestas y elaboración de acuerdos de pago.',
            'Asesoría para negociación de obligaciones.',
            'Gestión de reclamaciones por incumplimiento contractual.',
            'Cobro prejurídico y judicial cuando corresponda.',
          ],
        },
      ],
      closingLine: 'Recupera lo que es tuyo, con nuestro acompañamiento.',
    },
    {
      id: 'capacitacion',
      icon: 'graduation',
      image: img('capacitacion-empresarial-servicios'),
      name: 'Capacitación y acompañamiento empresarial',
      title: 'Capacitación y acompañamiento empresarial',
      summary:
        'Impulsamos el crecimiento de tu negocio con formación práctica y acompañamiento continuo.',
      groups: [
        {
          items: [
            'Capacitación en temas contables, tributarios y legales.',
            'Formación en gestión empresarial y liderazgo.',
            'Talleres prácticos y personalizados según las necesidades de tu negocio.',
            'Acompañamiento en la implementación de buenas prácticas.',
            'Actualización permanente en normativas y cambios legales.',
            'Asesoría en desarrollo organizacional y fortalecimiento empresarial.',
            'Entrenamiento en herramientas contables y administrativas.',
            'Programas de formación para equipos de trabajo.',
            'Seguimiento y evaluación de resultados.',
            'Apoyo continuo para la toma de decisiones estratégicas.',
          ],
        },
      ],
      closingLine: 'Formación y acompañamiento para un futuro más sólido.',
    },
  ],

  // Diapositiva 18. La cliente confirmó (22 oct 2026) que el contenido sale del portafolio:
  // estas modalidades son la sección "Proceso de trabajo".
  processSection: {
    eyebrow: 'Cómo trabajamos',
    title: 'Modalidades de servicio',
    photo: {
      src: '/images/ia/como-trabajamos.webp',
      alt: 'Persona de espaldas en una videollamada de trabajo desde un escritorio en casa',
      width: 1024,
      height: 687,
      aiGenerated: true,
    },
  },
  modalities: [
    {
      icon: 'chat',
      title: 'Asesoría puntual',
      description:
        'Atención de consultas, elaboración de documentos, declaraciones, trámites y soluciones específicas.',
    },
    {
      icon: 'calendar',
      title: 'Acompañamiento mensual',
      description:
        'Servicio continuo para empresas y comerciantes en sus procesos contables, tributarios y administrativos.',
    },
    {
      icon: 'gear',
      title: 'Consultoría por proyectos',
      description:
        'Constitución de empresas, reconstrucción contable, implementación de software, auditorías, reformas y reorganización de procesos.',
    },
    {
      icon: 'scale',
      title: 'Representación y defensa',
      description:
        'Acompañamiento jurídico y tributario en requerimientos, controversias, procedimientos administrativos y procesos judiciales.',
    },
    {
      icon: 'users',
      title: 'Outsourcing integral',
      description:
        'Acompañamiento contable, tributario y administrativo, con apoyo operativo especializado y supervisión profesional.',
    },
  ],

  // Diapositiva 18 "Nuestro compromiso". `benefits` (franja repetida en las diapositivas de
  // servicios) queda en datos pero no se muestra: repetiría lo de pilares y promesas.
  whyUs: {
    eyebrow: 'Por qué elegirnos',
    title: 'Nuestro compromiso',
    background: {
      src: '/images/ia/por-que-elegirnos.webp',
      alt: '',
      width: 1024,
      height: 432,
      aiGenerated: true,
    },
    intro:
      'En IUS COUNTER CONSULTING entendemos que una empresa necesita más que cumplir sus obligaciones tributarias.',
    pillars: [
      { icon: 'info', title: 'Información confiable' },
      { icon: 'gear', title: 'Procesos organizados' },
      { icon: 'shield-check', title: 'Protección jurídica' },
      { icon: 'chart', title: 'Control financiero' },
      { icon: 'users', title: 'Acompañamiento permanente' },
    ],
    closing:
      'No solo asesoramos: organizamos, prevenimos, acompañamos y defendemos los intereses de nuestros clientes.',
    promises: [
      { icon: 'handshake', title: 'Compromiso', description: 'con tu negocio.' },
      { icon: 'target', title: 'Experiencia', description: 'que genera resultados.' },
      { icon: 'shield-check', title: 'Confianza', description: 'en cada proceso.' },
      { icon: 'chart', title: 'Soluciones', description: 'a tu medida.' },
    ],
    benefits: [
      { icon: 'document', title: 'Orden', description: 'en tus registros.' },
      { icon: 'shield-check', title: 'Confianza', description: 'en tus cifras.' },
      { icon: 'chart', title: 'Decisiones', description: 'más acertadas.' },
      { icon: 'target', title: 'Crecimiento', description: 'para tu negocio.' },
      { icon: 'handshake', title: 'Respaldo', description: 'profesional.' },
    ],
    legalNotice:
      'Los servicios que requieran tarjeta profesional, representación judicial, firma de estados financieros, dictámenes o funciones reservadas por ley serán prestados exclusivamente por los profesionales legalmente habilitados.',
  },

  contact: {
    heading: '¡Escríbenos!',
    form: {
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      phoneLabel: 'Teléfono o WhatsApp',
      phonePlaceholder: '300 000 0000',
      serviceLabel: 'Servicio de interés',
      servicePlaceholder: 'Elige una opción',
      otherServiceLabel: 'Otro / No estoy seguro',
      messageLabel: 'Cuéntanos qué necesitas',
      messageOptional: '(opcional)',
      messagePlaceholder: 'Ej.: horario en que prefieres que te escribamos',
      consentBefore: 'Autorizo el tratamiento de mis datos personales conforme a la',
      consentLink: 'política de tratamiento de datos',
      submitLabel: 'Enviar por WhatsApp',
      privacyNote:
        'Solo usamos tus datos para responder tu consulta. No incluyas información financiera ni documentos.',
      successTitle: '¡Tu mensaje está listo!',
      successText: 'Se abrió WhatsApp con tus datos. Solo confírmalo para enviarlo.',
      reopenLabel: 'Abrir WhatsApp de nuevo',
      backLabel: 'Volver al formulario',
      whatsappIntro: 'Hola, quisiera recibir asesoría de IUS COUNTER CONSULTING.',
      errors: {
        name: 'Ingresa tu nombre.',
        nameShort: 'El nombre es muy corto.',
        phone: 'Ingresa tu número de teléfono.',
        phoneInvalid: 'Ingresa un teléfono válido.',
        service: 'Elige un servicio.',
        messageMax: 'Máximo 300 caracteres.',
        consent: 'Debes autorizar el tratamiento de datos para continuar.',
      },
      // Foto IA (docs/imagenes-ia/contacto): mano con el teléfono, pantalla desenfocada.
      photo: {
        src: '/images/ia/contacto.webp',
        alt: 'Mano sosteniendo un teléfono sobre un escritorio junto a una libreta y una pluma dorada',
        width: 823,
        height: 1023,
        aiGenerated: true,
      },
    }, // textos del formulario: BORRADOR
    lead: 'Estaremos encantados de brindarte la asesoría que necesitas y resolver todas tus dudas.',
    closing: '¡Tu tranquilidad también es nuestro compromiso!',
    // [PENDIENTE: cuál es la línea principal para el botón flotante y el formulario]
    whatsapp: [
      { phoneE164: '573178224883', display: '317 822 4883' },
      { phoneE164: '573194975125', display: '319 497 5125' },
    ],
    email: 'iuscounter2026@gmail.com',
    whatsappMessage: 'Hola, quisiera recibir asesoría de IUS COUNTER CONSULTING.', // BORRADOR
    whatsappLabel: 'Escríbenos por WhatsApp',
    // Sin oficina física: la firma trabaja de forma remota (cliente, 22 oct 2026).
    hours: '[PENDIENTE: horarios de atención]',
  },

  social: {}, // [PENDIENTE: redes sociales]

  seo: {
    siteUrl: SITE_URL,
    defaultTitle: 'IUS COUNTER CONSULTING | Asesoría contable, tributaria y legal en Neiva',
    // BORRADOR
    defaultDescription:
      'Firma de asesoría contable, tributaria y legal en Neiva. Contadores públicos y abogados que acompañan a personas, comerciantes, emprendedores, fundaciones y empresas.',
    ogImage: {
      src: '/images/og-image.jpg',
      alt: 'Emblema de IUS COUNTER CONSULTING: monograma IC dorado y el lema Tu tranquilidad, nuestra prioridad',
      width: 1200,
      height: 630,
    },
  },

  legal: {
    footer: {
      portfolioLabel: 'Portafolio de servicios',
      portfolioPath: '/portafolio/',
      policyLabel: 'Política de tratamiento de datos',
      navTitle: 'Navegación',
      servicesTitle: 'Servicios',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
    policyPage: {
      title: 'Política de tratamiento de datos personales',
      backLabel: 'Volver al inicio',
      // El texto legal lo entrega la cliente (Anexo 1, Ley 1581 de 2012); no se redacta aquí.
      pendingNotice:
        'Estamos preparando este documento. Si tienes dudas sobre el tratamiento de tus datos, escríbenos por WhatsApp o al correo de contacto.',
    },
    dataPolicyPath: '/politica-de-tratamiento-de-datos',
    dataPolicyLastUpdated: '[PENDIENTE]',
    dataPolicySections: [], // [PENDIENTE: política de tratamiento de datos (Ley 1581 de 2012)]
  },
};
