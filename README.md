# Leaflet.ResetView

A reset view control for Leaflet.

## Usage

To provide a button for reset view into its original location:

    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
    }).addTo(map);
    map.addControl(new L.Control.ResetView());

## Localization

To change reset view control position or title:

    map.addControl(new L.Control.ResetView({
        position: "topleft",
        title: "Review view"
    }));

## Including via CDN

Leaflet.ResetView is available through [jsDelivr](https://www.jsdelivr.com/):

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hswong3i/leaflet.resetview@0.0.1/dist/L.Control.ResetView.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@hswong3i/leaflet.resetview@0.0.1/dist/L.Control.ResetView.min.js"></script>

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
