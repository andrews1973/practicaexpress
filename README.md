# PRACTICA

## PUESTA EN MARCHA

1 clona el respositorio
```bash
 git clone xxxxx
```
2 instala dependencias
```bash
npm i
```

2 renombra el archivo env.template y susutituye los datos
```javascritp
PORT= 'nombre del puerto'
```
3 ejecuta en la terminal
```bash
npm run dev
```
4 prueba en Postman

GET
add servicio
http://localhost:3000/servicios/5

GET
add producto
http://localhost:3000/productos/5

PUT
update servicio
http://localhost:3000/servicios/5


PUT
update producto
http://localhost:3000/productos/5


DELETE
delete servicio
http://localhost:3000/servicios/5

DELETE
delete producto
http://localhost:3000/productos/5

GET
get product by id
http://localhost:3000/productos/5
Add request description…

GET
get service by id
http://localhost:3000/servicios/5