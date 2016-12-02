---
layout: archive
permalink: /articles/
title: "el pensar"
date: 2014-06-02T12:26:34-04:00
modified: 2016-02-26T10:36:43-05:00
excerpt: "Cuando tu cerebro se da cuenta de cómo funciona se produce el encuentro con lo que ocurre."
subtitle: "Una colección de pensamientos, inspiraciones, ideas, etc sobre todos aquellos temas que me interesan. Todo es mente y luego cualquier otra cosa pero lo primero siempre se manifiesta en lo mental."
author: false
feature:
  visible: false
  headline: ""
  category: articles
image:
  feature: bg-pensar.jpg
  teaser:
  icon_bg: #todh-grafico
---

<div class="archive">
{% for post in site.categories.articles %}
  {% include archive__item.html %}
{% endfor %}
</div>
