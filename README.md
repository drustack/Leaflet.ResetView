# Leaflet.ResetView

[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/hswong3i/Leaflet.ResetView)](https://github.com/hswong3i/Leaflet.ResetView/tags)
[![GitHub license](https://img.shields.io/github/license/hswong3i/Leaflet.ResetView)](https://github.com/hswong3i/Leaflet.ResetView/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@hswong3i/leaflet.resetview)](https://www.npmjs.com/package/@hswong3i/leaflet.resetview)
[![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/hswong3i/Leaflet.ResetView)](https://www.jsdelivr.com/package/npm/@hswong3i/leaflet.resetview)

A reset view control for Leaflet.

Design for [Drupal Leaflet Module](https://www.drupal.org/project/leaflet) integration.

## Demo

<https://hswong3i.github.io/Leaflet.ResetView/>

## Usage

To provide a button for reset view into its original location:

    var map = L.map("map").setView([51.505, -0.09], 13);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
    }).addTo(map);
    
    map.addControl(new L.Control.ResetView());

## Customization

To change reset view control position or title:

    map.addControl(new L.Control.ResetView({
        position: "topleft",
        title: "Review view"
    }));

## Include via CDN

Leaflet.ResetView is available through [jsDelivr](https://www.jsdelivr.com/):

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hswong3i/leaflet.resetview/dist/L.Control.ResetView.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@hswong3i/leaflet.resetview/dist/L.Control.ResetView.min.js"></script>

## Development

Install NPM depedencies:

    npm install

Build CSS and JS individually:

    npm run jshint
    npm run sass
    npm run uglifyjs

Or simply build everything once together:

    npm run build

## License

  - Code released under [Apache License 2.0](LICENSE)
  - Docs released under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
  - SVG released under [CC BY 4.0](https://fontawesome.com/license/free)

## Author Information

  - Wong Hoi Sing Edison
      - <https://twitter.com/hswong3i>
      - <https://github.com/hswong3i>
