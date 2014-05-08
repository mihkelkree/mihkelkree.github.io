var sc = [1e6, 5e5, 2e5, 1e5, 5e4, 1.6e4,8e3, 4e3, 2e3,1e3,5e2];
var scClose = [1.6e4, 8e3,4e3, 2e3,1e3,5e2];
var scFar = [1e6, 5e5, 2e5, 1e5, 5e4];

var options = {
				projection: new OpenLayers.Projection("EPSG:3301"),
				displayProjection: new OpenLayers.Projection("EPSG:4326"),
				units: 'm',
				maxExtent: new OpenLayers.Bounds(365000, 6375000, 740000, 6635000  ),
				scales: sc
			   };



var map = new OpenLayers.Map('map', options);

var layerPohi = new OpenLayers.Layer.WMS(
                       'pohi',
                       'http://kaart.maaamet.ee/wms/alus?',
                       { layers: 'pohi_vv',                                       
                         'format': 'image/png'
                       },
                       {
							'tileSize': new OpenLayers.Size(512, 512),
							scales: scClose,
							isBaseLayer: false
                       }
               );


var layerOrto = new OpenLayers.Layer.WMS(
                       'orto',
                       'http://kaart.maaamet.ee/wms/alus?',
                       { layers: 'of10000',                                       
                         'format': 'image/png'
                       },
                       {
							'tileSize': new OpenLayers.Size(512, 512),
							scales: scClose,
							isBaseLayer: false
                       }
               );



var layer2 = new OpenLayers.Layer.WMS(
                       'baaskaart',
                       'http://kaart.maaamet.ee/wms/alus?',
                       { layers: 'Baaskaart,MAANTEED,mnt_maanteed_3,KYLAD,joed_1,jarved_2,KUJUNDUSPIIR_G_8374_2,loodusnimed_1,alevid_1,linnad_1,meri_8378_3,BK_MERI',                                       
                         'format': 'image/png'
                       },
                       {
							'tileSize': new OpenLayers.Size(512, 512),
							scales: scFar,
							isBaseLayer: false
                       }
               );

var base = new OpenLayers.Layer("",{isBaseLayer: true, scales: sc, minScale:5e2, maxScale:5e6});

map.addLayer(base);
map.addLayer(layerPohi);
layerOrto.setVisibility(false);
map.addLayer(layerOrto);
map.addLayer(layer2);

var state = 0;

var button1 = new OpenLayers.Control.Button({
    displayClass: "button1", trigger: function(){ 
		console.log('tere');
		orto=map.getLayersByName('orto')[0];
		orto.setVisibility(false);
		pohi=map.getLayersByName('pohi')[0];
		pohi.setVisibility(true);	
	
	}
});

var button2 = new OpenLayers.Control.Button({
    displayClass: "button2", trigger: function(){ 	
		orto=map.getLayersByName('orto')[0];
		orto.setVisibility(true);
		pohi=map.getLayersByName('pohi')[0];
		pohi.setVisibility(false);
	}	
});

var hpanel = new OpenLayers.Control.TextButtonPanel({
                additionalClass: "hpanel"
});

hpanel.addControls([button1,button2]);

map.addControl(new OpenLayers.Control.MousePosition());
map.addControl(new OpenLayers.Control.ScaleLine({bottomOutUnits: ''}));
map.addControl(hpanel);


function myFunction(){
	console.log("tere")
}


var toomemagi = new OpenLayers.LonLat(659000, 6474200);
map.setCenter(toomemagi,7);





