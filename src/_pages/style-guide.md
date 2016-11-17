---
layout: style-guide
permalink: /style-guide/
title: "Guía de estilo"
date: 2015-01-28T12:05:57-05:00
modified: 2016-10-26T10:32:14-05:00
excerpt: "Realizo artesanalmente Sistemas Web y Patrones de Diseño"
ads: false
share: false
---

<!-- {{ page.excerpt }} -->

{% assign entries = site.colors %}
{% assign componentsByType = site.components | group_by:"type" %}

<nav id="component-selector" class="component-selector">
  <form>
    <select name="newurl" id="component-select" onChange="window.location.replace(this.options[this.selectedIndex].value)">
      <option value="">Select a Component</option>
      <option value="#guide-color-palettes">Colors</option>
      {% for type in componentsByType %}
      <option value="#guide-{{ type.name }}">{{ type.name | capitalize }}</option>
        {% for entry in type.items %}
        <option value="#guide-{{ entry.title | slugify }}">&nbsp;&nbsp;&nbsp;{{ entry.title }}</option>
        {% endfor %}
      {% endfor %}
    </select>
  </form>
</nav>

<h2 id="guide-color-palettes" class="styleguide__header">Colors</h2>

{% for entry in entries %}
  {% include component-color.html %}
{% endfor %}


{% for type in componentsByType %}
  <article class="component">
    <h2 id="guide-{{ type.name }}" class="styleguide__header">{{ type.name | capitalize }}</h2>
    {% for entry in type.items %}
      {% include component.html %}
    {% endfor %}
  </article>
{% endfor %}
