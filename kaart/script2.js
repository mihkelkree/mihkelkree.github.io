var sc = [1e6, 5e5, 2e5, 1e5, 5e4, 2e4, 1e4, 5e3, 2e3,1e3,5e2];
var options = {
				projection: new OpenLayers.Projection("EPSG:3301"),
				displayProjection: new OpenLayers.Projection("EPSG:4326"),
				units: 'm',
				maxExtent: new OpenLayers.Bounds(365000, 6375000, 740000, 6635000  ),
				maxResolution: 'auto'
			};

var map = new OpenLayers.Map('map', options);
var layer1 = new OpenLayers.Layer.WMS(
						'pohi_vv',
						'http://kaart.maaamet.ee/wms/alus?',
						{ layers: 'pohi_vv', 'format': 'image/png' },
						{'tileSize': new OpenLayers.Size(256, 256),scales: [1e4, 5e3, 2e3,1e3,5e2],isBaseLayer: false }
					);

var layer2 = new OpenLayers.Layer.WMS(
                       'baaskaart',
                       'http://kaart.maaamet.ee/wms/alus?',
                       { layers: 'Baaskaart,MAANTEED,mnt_maanteed_3,KYLAD,joed_1,jarved_2,KUJUNDUSPIIR_G_8374_2,loodusnimed_1,alevid_1,linnad_1,meri_8378_3,BK_MERI',                                       
                         'format': 'image/png'
                       },
                       {'tileSize': new OpenLayers.Size(512, 512), scales: [1e6, 5e5, 2e5, 1e5, 5e4, 2e4], isBaseLayer: false}
               );

var base = new OpenLayers.Layer("blank",{isBaseLayer: true, scales: sc, minScale:5e2, maxScale:5e6});
					
					
map.addLayer(base);
map.addLayer(layer1);
map.addLayer(layer2);

map.addControl(new OpenLayers.Control.MousePosition());
map.addControl(new OpenLayers.Control.ScaleLine({bottomOutUnits: ''}));

var toomemagi = new OpenLayers.LonLat(659000, 6474200);
map.setCenter(toomemagi,8);