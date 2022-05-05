# API de Thinking API

<p>Hola que tal el dia hoy realizamos una api de la base Thinking API  

<p>Este proyecto esta echo con javaScript Express y con "nodejs en su version 16.14.0"
<p>Adicionalmente se realizaron pruebas unitarias con Jest en su version 26. Se realizo con  esta version por la compatibilidad de automatizacion  en github. 

<p>Los puntos claves para este proyecto son los siguientes.
<li> Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
<li> Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación
<li> Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500

**Nos basaremos en el siguiente diagrama para realizar el proyecto**

```mermaid
  graph TD;
    StudentsService.js-->Controller.js;
    Controller.js-->Server.js
```

<img>
