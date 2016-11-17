---
layout: archive
permalink: /sitemap/
title: Mapa de este sitio
date: 2014-12-26
modified: 2016-02-19
excerpt: "No hay mapa más exacto y detallado que la montaña"
fullwidth: true
share: false
ads: false
---

Un desglose jerárquico de todas las secciones y las páginas que se encuentran en este sitio web. Para los robots esta es la versión XML disponible.  [XML version]({{ site.url }}/sitemap.xml)

<ul id="primaryNav" class="sitemap">

  <li id="home"><a href="{{ site.url }}/">Home</a></li>

  <li><a href="{{ site.url }}/about/">About</a>

    <ul>
      <li><a href="{{ site.url }}/contact/">Contact</a></li>
      <li><a href="{{ site.url }}/terms/">Terms</a></li>
      <li><a href="{{ site.url }}/style-guide/">Style Guide</a></li>
    </ul>
  </li>
  
  <li><a href="{{ site.url }}/tag/">Archives by Tag</a>
    <ul>
      {% assign tags_list = site.tags | sort %}  
      {% for tag in tags_list %}
        <li><a href="{{ site.url }}/tag/{{ tag[0] | replace:' ','-' | downcase }}/">{{ tag[0] }}</a></li>
      {% endfor %}
    </ul>
  </li>
  <li><a href="{{ site.url }}/articles/">Blog Articles</a>
    <ul>
      {% for post in site.categories.articles %}
        {% include post-list.html %}
      {% endfor %}
    </ul>
  </li>
  <li><a href="{{ site.url }}/work/">Work</a>
    <ul>
      {% for post in site.categories.work %}
        {% include post-list.html %}
      {% endfor %}
    </ul>
  </li>
</ul><!-- /.col5 -->
