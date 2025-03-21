---
layout: default
---
{% for file in site.pages %}
{% if file.path contains 'content/' %}
<h2>{{ file.name | replace: "-", " " | replace: ".md", "" }}</h2>
{{ file.content }}
{% endif %}
{% endfor %}