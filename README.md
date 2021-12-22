# Leaflet.ResetView

[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/drustack/Leaflet.ResetView)](https://github.com/drustack/Leaflet.ResetView/tags)
[![GitHub license](https://img.shields.io/github/license/drustack/Leaflet.ResetView)](https://github.com/drustack/Leaflet.ResetView/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@drustack/leaflet.resetview)](https://www.npmjs.com/package/@drustack/leaflet.resetview)
[![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/drustack/Leaflet.ResetView)](https://www.jsdelivr.com/package/npm/@drustack/leaflet.resetview)

A reset view control for Leaflet.

Design for [Drupal Leaflet Module](https://www.drupal.org/project/leaflet) integration.

## Requirement

  - [Leaflet](https://github.com/Leaflet/Leaflet) 1.7.1+

## Demo

  - <https://drustack.github.io/Leaflet.ResetView/>

## Usage

Provide a button for reset view into its original location:

    <div id="map"></div>
    
    <script>
        var map = L.map("map").setView([51.505, -0.09], 13);
        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
        }).addTo(map);
        
        L.control.resetView({
            position: "topleft",
            title: "Reset view",
            latlng: L.latLng([51.505, -0.09]),
            zoom: 13,
        }).addTo(map);
    </script>

## Include via CDN

Leaflet.ResetView is available through [jsDelivr](https://www.jsdelivr.com/):

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@drustack/leaflet.resetview/dist/L.Control.ResetView.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@drustack/leaflet.resetview/dist/L.Control.ResetView.min.js"></script>

## Development

Install NPM depedencies:

    npm install

Build CSS and JS individually:

    npm run jshint
    npm run uglifyjs
    npm run sass

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
