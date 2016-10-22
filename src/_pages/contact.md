---
permalink: /contact/
title: "Contacto"
date: 2015-05-22
modified: 2016-01-05T16:13:31-05:00
excerpt: "Cuéntame lo que se te ocurre"
image:
  feature: manotierra.jpg
  teaser: image1.jpg
ads: false
share: false
author: true
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

Siempre tengo ganas de trabajar en equipo.
