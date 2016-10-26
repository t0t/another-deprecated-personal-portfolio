---
title: "Prototipado Integral"
excerpt: "Como se aplica TODH a un sitio web"
tags: [Jekyll, Prototipado, web development, style guide, Markdown]
image:
  feature: proceso-web-todh.png
  teaser: proceso-web-todh.png
  svg: imagen-post
comments: false
featured: false
modified: 2016-09-09T16:32:07-04:00
---

### El Prototipado Evolutivo, el modelo creativo de la naturaleza

Recomiendo leerse el post "El prototipado reutilizable o evolutivo" de Beatriz Trigero como introducción a este tipo de proceso.

En este post pretendo aportar mi enfoque y experiencia personal de este modelo de desarrollo que al ser circular y holístico no tiene límites. También quiero remarcar que no es para todo el mundo ni se aplica en todos los casos. Implica un tipo de conocimientos generales y al mismo tiempo una mínima base técnica y concreta en varios campos. Implica una actitud muy particular.



### Una simulación de lo más real

El prototipado evolutivo te permite simular y abarcar todo el ciclo completo aquí y ahora, pero no es real... ¿o sí?

Observando la naturaleza, que sabe mucho de "modelos evolutivos", veremos numerosos ejemplos. Los árboles al principio están en forma de una semilla que contiene todo lo necesario para que el árbol pueda desarrollarse en el futuro. La naturaleza integra literalmente dentro de la semilla la esencia del "producto terminado". ¿Podemos tomar los procesos de la naturaleza? Yo creo que sí, somos parte de ella y en muchos aspectos funcionamos igual.

La clave es saber discernir qué es lo importante, qué elementos de cualquier fase del proyecto, caben dentro del prototipo. Hace falta una visión holística y transversal y al mismo tiempo una mínima base técnica y concreta de los requisitos.

Después de varios ciclos de validación con el cliente iterando sobre la UX y el diseño del producto, se logran integrar de forma incremental entornos completos de desarrollo y producción ágil para seguir probando hipótesis y responder ante los cambios.

Los que nos hemos dedicado a la creación de sitios web completos sabemos el tiempo y sufrimiento que cuesta realizar modificaciones estructurales de diseño en proyectos que ya están en desarrollo o en producción. ¿Os imaginais tener que mover nuestro árbol ya adulto de su sitio porque resulta que en el lugar donde está no le da suficientemente el sol?. Arrancar todas esas fuertes raíces, remover toda esa tierra... Es más fácil si puedes acceder a la semilla que aún guarda a su interior.

En los últimos años está habiendo un auge exponencial de empresas que adoptan modelos incrementales, lean, ágiles, etc. Es un indicativo de la naturaleza cambiante de esta era tecnológica en la que las empresas y los emprendedores buscan adaptarse a la contínua incertidumbre reduciendo costes. Son proyectos que buscan innovación, disponen de poco presupuesto y tienen una gran necesidad de puesta en marcha rápida. El producto es el proceso.


### Las fases

Existe una estructura cíclica natural de Transmisión, Observación, Pensamiento y Acción que se ha dado siempre en la realidad sea cual sea su ámbito. El prototipo evolutivo se fusiona con esta estrucura básica y la recorre una y otra vez.

#### 1. Decir

Se generan las preguntas. Se establecen las necesidades. Qué queremos transmitir. Nuestro mensaje, nuestra historia, valores... Al igual que las personas, los diseños también necesitan saber quiénes quieren ser. No tenemos certezas.

#### 2. Sentir

Planteamos hipótesis tanto estructurales como visuales. Desplegamos un abanico enorme de posibilidades rápidamente. Diagramamos la presentación. Sketching. Wireframes. Vamos viendo aquello que sólo estaba en nuestras mentes, captamos su aroma. En las sucesivas pasadas por esta fase vamos viendo y sintiendo qué gamas de colores se llevan mejor, etc.
El output es un prototipo funcional de baja fidelidad.

#### 3. Pensar

Creamos un entorno de semi-desarrollo que variará en función del tipo de proyecto con el que conseguimos planificar y estructurar un prototipo de alta fidelidad con código real.

- Generación de sitio web estático Jekyll con motor de plantillas Liquid
- Tareas básicas de un entorno de desarrollo con Gulp/NPM
  - Preprocesado CSS en Sass
  - Optimizado y combinado de SVG's
  - Livereloading con Browser Sync
  - Se añaden los vendor prefixes para compatibilidad css entre navegadores
  - Concatenado js y css
  - Sourcemaps
  - Minificado CSS y Html

#### 4. Hacer

Prototipo en semi-producción. Se generan respuestas de cliente y/o usuario. Completamos un ciclo. Esa misma idea intangible tiene ya un cuerpo. Hemos creado ya la primera capa de nuestra semilla.

  - Validamos si se cumplen los requisitos.
  - Deployments de 5 segundos con 3 simples líneas de comandos: `gulp build --prod` `gulp cname` `gulp upload`
  - Testamos el proyecto en Github Pages o Netlify...
  - Si hay funcionalidades extra más específicas podemos usar servicios externos gratuítos como:
    - [Forestry](http://www.forestry.io){:target="_blank"} CMS
    - [Formspree](http://www.formspree.io){:target="_blank"} Formularios de contacto
    - [Snip Cart](https://snipcart.com/blog/static-site-e-commerce-part-2-integrating-snipcart-with-jekyll){:target="_blank"} Carritos de compras
  - Control de versiones con Git. Es conveniente no sólo por poder volver a versiones anteriores del proyecto sino tambien porque nos permite tener varias ramas paralelas y simultáneas de nuestro proyecto.


Estas cuatro fases de un PEI no son lineales sino simultáneas pues es un proceso dinámico y abierto a constantes cambios y errores. Y lo más importante es que ofrece una perspectiva mucho más completa del prototipo y, por ende, del producto final.
