// Función reutilizable que guarda objetos en un Array en localStorage
export const saveInStorage = (key, item) => {
  // Conseguir elementos que ya tenemos guardados en el localstorage
  let items = JSON.parse(localStorage.getItem(key))
  // Comprobar si es un array
  if (Array.isArray(items)) {
    // Añadir item
    items.push(item)
  } else {
    // Crear el array
    items = [item]
  }
  // Guardar en localstorage
  // El localstorage sólo guarda strings así que hay que convertirlo con json.stringify
  localStorage.setItem(key, JSON.stringify(items))
  // Devolver item
  return item
}

