# Modelo de ecommerce
Proyecto de tienda de bebidas hecho con React JS y Firebase.

## Características
Filtrado por categorías, búsqueda con sugerencias de productos.
Alberga el carrito de compras en el LocalStorage, durante 10 minutos.
Componente de frases aleatorias

### Hooks personalizados
useLocalStorage reemplaza al useState generando un caché en LocalStorage que dura 20 minutos
useForm facilita la validación de formularios

## Dependencias
Se usó React-bootstrap para dar estilo a los componentes.
Se usó Firebase para albergar la base de datos

Requiere las colecciones:
categories{category,idCategory}
products{description, descriptionLowercase, idCategory, idProduct, image, price, stock}

## Instalación:
Clonar el repositorio

Crear un archivo .env.local con las credenciales de acceso a Firebase:
`REACT_APP_FIREBASE_CONFIG={"apiKey":"","authDomain":"","projectId":"","storageBucket":"","messagingSenderId":"","appId":""}`

### `pnpm install`
### `pnpm start`