# Proyecto Final - Cotizador de Seguros

## Descripción

Este proyecto consiste en un sistema de cotización de seguros desarrollado en JavaScript. 
El programa calcula el costo de un seguro tomando en cuenta diferentes factores personales del asegurado.

## Funcionamiento del Programa

El sistema solicita los siguientes datos:

- Edad del asegurado
- Estado civil
- Edad del cónyuge (si aplica)
- Cantidad de hijos
- Número de propiedades
- Salario mensual

Con base en estos datos se aplican diferentes recargos:

- 10%, 20% o 30% según rango de edad.
- 20% por cada hijo.
- 35% por cada propiedad.
- 5% del salario mensual.

El programa permite realizar múltiples cotizaciones hasta que el usuario escriba la palabra **"Salir"**.

## Consideraciones del Problema

- No se pueden asegurar menores de edad.
- Los datos ingresados deben ser numéricos.
- El recargo total debe reiniciarse en cada nueva cotización.
- El sistema funciona mediante consola del navegador usando prompt().

## Posibles Mejoras

- Agregar validación para evitar datos negativos.
- Crear una interfaz gráfica más amigable.
- Guardar historial de cotizaciones.
- Convertir el sistema en una aplicación web completa.
- Mejorar el control de errores en entradas incorrectas.

## Archivos del Proyecto

- descripcion.txt
- algoritmo.txt
- proyecto.js
- index.html
