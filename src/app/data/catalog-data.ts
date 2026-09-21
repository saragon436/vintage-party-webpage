export interface CategoryCard {
  key: string;
  label: string;
  desc: string;
  img: string;
}

export interface CatalogProduct {
  id: number;
  name: string;
  categoryKey: string;
  categoryLabel: string;
  img: string;
  /**
   * Precio referencial de EJEMPLO (placeholder) por día de alquiler, en soles.
   * Solo lo tienen los productos de Cilindros y Paneles; el resto se cotiza
   * a medida ("Precio a cotizar"). Reemplazar por el tarifario real.
   */
  price?: number;
}

export interface GalleryImage {
  img: string;
  alt: string;
}

export interface Faq {
  q: string;
  a: string;
}

export const CATEGORIES: CategoryCard[] = [
  { key: 'sociales', label: 'Sociales', desc: 'Bodas, aniversarios y celebraciones elegantes', img: 'categoria/SOCIALES/SALAS LOUNGE/WhatsApp Image 2024-07-25 at 2.13.08 PM.jpeg' },
  { key: 'infantiles', label: 'Infantiles', desc: 'Cumpleaños, baby showers y fiestas temáticas', img: 'categoria/INFANTILES/MESITAS/WhatsApp Image 2024-07-05 at 10.32.02 AM.jpeg' },
  { key: 'corporativos', label: 'Corporativos', desc: 'Activaciones de marca y eventos empresariales', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-02-08 at 11.17.41 AM.jpeg' },
  { key: 'carretas', label: 'Carretas', desc: 'Carretas temáticas para servicio y decoración', img: 'categoria/CARRETAS/WhatsApp Image 2024-08-21 at 11.00.39 AM.jpeg' },
  { key: 'cilindros', label: 'Cilindros', desc: 'Pedestales tipo plinth, distintas alturas', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-03-20 at 12.34.33 PM.jpeg' },
  { key: 'paneles', label: 'Paneles', desc: 'Backdrops y divisores decorativos', img: 'categoria/SOCIALES/INGRESO/WhatsApp Image 2023-11-17 at 3.11.05 PM.jpeg' }
];

export const PRODUCTS: CatalogProduct[] = [
  { id: 1, name: 'Barra de caoba vintage', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/BARRAS/barra caoba.jpg' },
  { id: 2, name: 'Barra rústica para cóctel', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/BARRAS/WhatsApp Image 2023-05-26 at 4.47.21 PM.jpeg' },
  { id: 3, name: 'Mesa decorativa vintage', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/MESAS DECORATIVAS/WhatsApp Image 2024-06-06 at 8.51.54 AM.jpeg' },
  { id: 4, name: 'Mesa auxiliar de centro', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/MESAS DECORATIVAS/WhatsApp Image 2023-07-07 at 2.34.50 PM.jpeg' },
  { id: 5, name: 'Sala lounge vintage', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/SALAS LOUNGE/WhatsApp Image 2023-11-25 at 12.14.36 PM.jpeg' },
  { id: 6, name: 'Set de sala lounge premium', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/SALAS LOUNGE/WhatsApp Image 2024-11-02 at 5.09.54 PM.jpeg' },
  { id: 7, name: 'Barra móvil de bar', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/BARRAS/WhatsApp Image 2024-08-20 at 11.05.13 PM.jpeg' },
  { id: 8, name: 'Barra de bar dorada', categoryKey: 'sociales', categoryLabel: 'Sociales', img: 'categoria/SOCIALES/BARRAS/WhatsApp Image 2025-05-08 at 10.59.59 AM.jpeg' },
  { id: 9, name: 'Mesita infantil decorada', categoryKey: 'infantiles', categoryLabel: 'Infantiles', img: 'categoria/INFANTILES/MESITAS/WhatsApp Image 2022-02-07 at 1.20.51 PM.jpeg' },
  { id: 10, name: 'Set de mesitas para dulces', categoryKey: 'infantiles', categoryLabel: 'Infantiles', img: 'categoria/INFANTILES/MESITAS/WhatsApp Image 2022-02-07 at 1.20.50 PM (2).jpeg' },
  { id: 11, name: 'Fondo temático infantil', categoryKey: 'infantiles', categoryLabel: 'Infantiles', img: 'categoria/INFANTILES/FONDOS/WhatsApp Image 2022-02-08 at 12.58.05 PM.jpeg' },
  { id: 12, name: 'Fondo decorativo para candy bar', categoryKey: 'infantiles', categoryLabel: 'Infantiles', img: 'categoria/INFANTILES/FONDOS/WhatsApp Image 2021-05-10 at 8.56.22 AM.jpeg' },
  { id: 13, name: 'Set decorativo corporativo', categoryKey: 'corporativos', categoryLabel: 'Corporativos', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-02-08 at 11.17.41 AM.jpeg' },
  { id: 14, name: 'Ambientación para activación de marca', categoryKey: 'corporativos', categoryLabel: 'Corporativos', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-03-20 at 12.34.33 PM.jpeg' },
  { id: 15, name: 'Decoración corporativa premium', categoryKey: 'corporativos', categoryLabel: 'Corporativos', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-05-08 at 11.50.16 AM.jpeg' },
  { id: 16, name: 'Carreta temática vintage', categoryKey: 'carretas', categoryLabel: 'Carretas', img: 'categoria/CARRETAS/WhatsApp Image 2024-08-21 at 11.00.39 AM.jpeg' },
  { id: 17, name: 'Carreta de servicio decorativa', categoryKey: 'carretas', categoryLabel: 'Carretas', img: 'categoria/CARRETAS/WhatsApp Image 2025-01-10 at 3.12.48 PM (1).jpeg' },
  // Cilindros y paneles: precios de EJEMPLO (placeholder), no son tarifas reales del negocio.
  { id: 18, name: 'Set de cilindros negros (alturas mixtas)', categoryKey: 'cilindros', categoryLabel: 'Cilindros', img: 'categoria/SOCIALES/MESAS DECORATIVAS/WhatsApp Image 2024-08-29 at 9.09.59 PM.jpeg', price: 45 },
  { id: 19, name: 'Cilindros blancos acanalados', categoryKey: 'cilindros', categoryLabel: 'Cilindros', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-03-20 at 12.34.33 PM.jpeg', price: 40 },
  { id: 20, name: 'Mesa cilíndrica acanalada (dúo)', categoryKey: 'cilindros', categoryLabel: 'Cilindros', img: 'categoria/SOCIALES/MESAS DECORATIVAS/WhatsApp Image 2024-08-20 at 11.40.13 PM.jpeg', price: 50 },
  { id: 21, name: 'Panel enrejado blanco (juego x4)', categoryKey: 'paneles', categoryLabel: 'Paneles', img: 'categoria/SOCIALES/INGRESO/WhatsApp Image 2023-11-17 at 3.11.05 PM.jpeg', price: 60 },
  { id: 22, name: 'Panel divisor blanco doble', categoryKey: 'paneles', categoryLabel: 'Paneles', img: 'categoria/SOCIALES/MESAS DECORATIVAS/258815368_3167159216847199_7517832037705172976_n.jpg', price: 55 },
  { id: 23, name: 'Backdrop dorado para marca', categoryKey: 'paneles', categoryLabel: 'Paneles', img: 'categoria/SOCIALES/FONDOS/269882598_1528040820916527_7967621048858470869_n.jpg', price: 70 },
  { id: 24, name: 'Panel expositor con repisas', categoryKey: 'paneles', categoryLabel: 'Paneles', img: 'categoria/CORPORTATIVOS/DECORATIVOS/WhatsApp Image 2025-02-17 at 2.44.19 PM.jpeg', price: 50 }
];

export const GALLERY: GalleryImage[] = [
  { img: 'categoria/SOCIALES/SALAS LOUNGE/WhatsApp Image 2023-11-25 at 12.14.36 PM.jpeg', alt: 'Sala lounge vintage' },
  { img: 'categoria/SOCIALES/MESAS DECORATIVAS/WhatsApp Image 2024-06-06 at 8.51.54 AM.jpeg', alt: 'Mesa decorativa' },
  { img: 'categoria/INFANTILES/MESITAS/WhatsApp Image 2022-02-07 at 1.20.51 PM.jpeg', alt: 'Mesita infantil' },
  { img: 'images/gallery_corporativo.jpeg', alt: 'Evento corporativo' },
  { img: 'categoria/CARRETAS/WhatsApp Image 2024-08-21 at 11.00.39 AM.jpeg', alt: 'Carreta temática' },
  { img: 'categoria/SOCIALES/SALAS LOUNGE/WhatsApp Image 2024-11-02 at 5.09.54 PM.jpeg', alt: 'Sala lounge premium' }
];

// IDs de PRODUCTS que se muestran en el carrusel "Recién llegado"
export const NEW_ARRIVAL_IDS = [18, 6, 5, 9, 16];

// Respuestas de EJEMPLO: confirmar/editar las politicas reales antes de publicar
export const FAQS: Faq[] = [
  {
    q: '¿A qué zonas hacen entregas?',
    a: 'Entregamos sin costo adicional en San Juan de Miraflores y distritos aledaños de Lima. Para el resto de Lima Metropolitana y provincias coordinamos el flete según la distancia y el volumen del pedido.'
  },
  {
    q: '¿Cuál es la forma de pago y el anticipo?',
    a: 'Pedimos un anticipo del 50% para reservar la fecha (Yape, Plin, transferencia o efectivo); el saldo se cancela el día de la entrega, antes de iniciar el montaje.'
  },
  {
    q: '¿Cuál es el tiempo mínimo de alquiler?',
    a: 'Cotizamos por evento, no por días. Normalmente entregamos el día anterior o el mismo día del evento y recogemos al día siguiente, sin costo adicional por el tiempo de montaje.'
  },
  {
    q: '¿Cuál es la política de cancelación?',
    a: 'Puedes reprogramar tu fecha sin costo hasta 7 días antes del evento. Cancelaciones con menos de 7 días de anticipación no dan derecho a devolución del anticipo.'
  },
  {
    q: '¿El montaje y desmontaje están incluidos?',
    a: 'Sí, el precio de alquiler incluye la instalación y el retiro del mobiliario el día acordado con tu equipo o proveedor de catering.'
  }
];
