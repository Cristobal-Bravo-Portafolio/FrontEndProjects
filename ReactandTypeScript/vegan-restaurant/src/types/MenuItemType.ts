// Exporta una interfaz que define el tipo de un elemento del menú
export interface MenuItemType {
  id?: number; // El identificador único (id) del elemento del menú. Es opcional porque no siempre es necesario que esté presente (por ejemplo, al agregar un nuevo elemento que aún no tenga id asignado en una base de datos).
  name: string; // El nombre del platillo o ítem del menú. Es obligatorio porque cada elemento del menú debe tener un nombre para ser identificado por los usuarios.
  description: string; // La descripción del platillo. También es obligatorio para dar detalles sobre qué contiene el platillo o qué lo hace especial.
  price: number; // El precio del platillo. Es obligatorio y se espera que sea un número para poder mostrar y procesar el costo del ítem en la interfaz de usuario.
  image: string; // El nombre o la ruta de la imagen asociada con el platillo. Es obligatorio, ya que cada elemento del menú tiene una imagen asociada que se mostrará en la interfaz.
  category?: string; // La categoría a la que pertenece el ítem del menú (por ejemplo, 'Postres', 'Platillos principales', 'Bebestibles'). Es opcional porque algunos ítems podrían no estar categorizados al principio o no necesitarlo.
}




  