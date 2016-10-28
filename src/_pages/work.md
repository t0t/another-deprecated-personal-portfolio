---
layout: archive
permalink: /work/
title: "Hacer"
date: 2014-06-02T15:05:16-04:00
modified: 2016-01-04T16:38:17-05:00
excerpt: "Poner a funcionar ya, y de forma combinada, todo aquello que he aprendido"
ads: false
tiles: false
feature:
  visible: false
  headline: ""
  category: work
---

{% for post in site.categories.work %}
  {% if post.featured != true %}
  {% include archive__item.html %}
  {% endif %}
{% endfor %}
