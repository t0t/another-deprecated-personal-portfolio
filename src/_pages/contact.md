---
permalink: /contact/
title: "la vida es encuentro"
date: 2015-05-22
modified: 2016-01-05T16:13:31-05:00
excerpt: "El encuentro es transformación. Cuanto más nos encontramos más diferentes nos descubrimos. "
image:
  feature: sistemas.jpg
  teaser:
  icon_bg: #mountain
---

<div class="Contact">

  <form class="Contact__form" id="contactform" method="POST">
  <input type="text" name="name" placeholder="Nombre">
  <input type="email" name="replyto" placeholder="Email">
  <input type="hidden" name="subject" value="sergiofores.es contact form" />
  <textarea name="message" placeholder="Mensaje" class="Contact__textarea"></textarea>

  <input type="submit" value="Enviar" class="btn  btn--default">

  <input type="hidden" name="next" value="http://sergiofores.es/" />
  <input type="text" name="gotcha" style="display:none" />

  </form>

</div>
<script>{% include formspree.js %}</script>
