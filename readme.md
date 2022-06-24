## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
### General Info
***
Pagina web que consume dos apis y muestra una lista de usuarios con su respectiva informacion.
### Screenshot
(https://jherry-ponce.github.io/prueba/)
## Technologies
***
Una lista de tecnologías utilizadas en el proyecto:
* [JavaScript]Vanilla JavaScript
* [CSS3] Cascading Style Sheets, Versión 3
* [HTML5]HyperText Markup Language, Versión 5
## Installation
***
intro about the installation. 
```
$ git clone https://github.com/jherry-Ponce/prueba
```
## Collaboration
***
> Primero  condiciono con un if para comprobar si el localtorage ya existe, de ser asi consuma la data de este, caso contrario accedo a la api para obtener los datos.
>realizamos el consumo de las dos apis con fetch(), para lo cual utilizo un for para consumir las dos apis en dos recorridos. 
> declaro un array y durante cada iteracion con la api guardo la data de estas, para luego almacenarlo en localstorage. una vez dado mando el array como parametro al web component.
> ya en el component utilizo un foreach para acceder a los campos del array objeto e imprimir en pantalla los campos.
> de la misma manera genero el modal, mandando como parametro el id del usuario para compararlo con la almacenada en local... realizo un flitro para esta compracion e imprimo en consola. 
## FAQs
