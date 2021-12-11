/**
 * (c) Wong Hoi Sing Edison <hswong3i@pantarei-design.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (factory, window) {
    if (typeof define === "function" && define.amd) {
        define(["leaflet"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("leaflet"));
    }

    if (typeof window !== "undefined" && window.L) {
        window.L.Control.ResetView = factory(L);
    }
}(function (L) {
    L.Control.ResetView = L.Control.extend({
        options: {
            position: "topleft",
            title: "Reset view",
        },

        onAdd: function(map) {
            this.map = map;

            this.container = L.DomUtil.create("div", "leaflet-control-resetview leaflet-bar leaflet-control");

            this.link = L.DomUtil.create("a", "leaflet-bar-part leaflet-bar-part-single", this.container);
            this.link.title = this.options.title;
            this.link.href = "#";
            this.link.setAttribute("role", "button");

            this.icon = L.DomUtil.create("span", "leaflet-control-resetview-icon", this.link);

            this.latlng = this.map.getCenter();
            this.zoom = this.map.getZoom();
            L.DomEvent.on(this.link, "click", function(e) {
                this.map.setView(this.latlng, this.zoom);
            }, this);

            return this.container;
        },
    });

    return L.Control.ResetView;
}, window));
