---
permalink: /contact/
title: "Transmitir"
date: 2015-05-22
modified: 2016-01-05T16:13:31-05:00
excerpt: "Abramos un canal de comunicación"
image:
  feature: manotierra.jpg
  teaser: image1.jpg
ads: false
share: false
author: true

introText:
  - header: "Siempre tengo ganas de trabajar en equipo."
    description: "Decir, sentir, hacer, pensar en coherencia"
    p: "Haz las cosas ya, la creatividad no puede esperar"
    small: "Construyo posibilidades"

  - header: "Evolución contínua"
    description: "Alineación con el propósito"
    p: "Cambio radical"
    small: "Atención plena"
image:
  feature:
  teaser:
  icon_bg: mountain
---

<div class="Contact">

  <form class="Contact__form" id="contactform" method="POST">
  <input type="text" name="name" placeholder="Nombre">
  <input type="email" name="replyto" placeholder="Email">
  <input type="hidden" name="subject" value="sergiofores.es contact form" />
  <textarea name="message" placeholder="Mensaje" class="Contact__textarea"></textarea>

  <input type="submit" value="Enviar" class="btn btn--success">

  <input type="hidden" name="next" value="http://sergiofores.es/" />
  <input type="text" name="gotcha" style="display:none" />

  </form>

</div>
<script>{% include formspree.js %}</script>
