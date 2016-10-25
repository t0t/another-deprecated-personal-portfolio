---
layout: archive
permalink: /articles/
title: "Discernir, decidir, diferenciar"
date: 2014-06-02T12:26:34-04:00
modified: 2016-02-26T10:36:43-05:00
excerpt: "Una colección de pensamientos 'confesables', inspiraciones, ideas, planes y procesos que me encuentro en mi dia a dia."
subtitle: "Una colección de pensamientos, inspiraciones, ideas, etc sobre todos aquellos temas que me interesan. Todo es mente y luego cualquier otra cosa pero lo primero siempre se manifiesta en lo mental."
feature:
  visible: false
  headline: ""
  category: articles
---

{% for post in site.categories.articles %}
  {% if post.featured != true %}
  {% include archive__item.html %}
  {% endif %}
{% endfor %}
