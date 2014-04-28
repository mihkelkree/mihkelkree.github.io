var options = {
				projection: new OpenLayers.Projection("EPSG:3301"),
				displayProjection: new OpenLayers.Projection("EPSG:4326"),
				units: 'm',
				maxExtent: new OpenLayers.Bounds(365000, 6375000, 740000, 6635000  ),
				maxResolution: 'auto'
			};

var map = new OpenLayers.Map('map', options);
var wms = new OpenLayers.Layer.WMS(
						'Maa-amet',
						'http://kaart.maaamet.ee/wms/alus?',
						{ layers: 'pohi_vv', 'format': 'image/png' },
						{'tileSize': new OpenLayers.Size(256, 256) }
					);
map.addLayer(wms);
map.addControl(new OpenLayers.Control.MousePosition());

var toomemagi = new OpenLayers.LonLat(659000, 6474200);
map.setCenter(toomemagi,9);