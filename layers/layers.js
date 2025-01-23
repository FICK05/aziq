var wms_layers = [];


        var lyr_EsriPhysical_0 = new ol.layer.Tile({
            'title': 'Esri Physical',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_NUMBEROFDOMESTICTOURISTS2022_1 = new ol.format.GeoJSON();
var features_NUMBEROFDOMESTICTOURISTS2022_1 = format_NUMBEROFDOMESTICTOURISTS2022_1.readFeatures(json_NUMBEROFDOMESTICTOURISTS2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUMBEROFDOMESTICTOURISTS2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUMBEROFDOMESTICTOURISTS2022_1.addFeatures(features_NUMBEROFDOMESTICTOURISTS2022_1);
var lyr_NUMBEROFDOMESTICTOURISTS2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NUMBEROFDOMESTICTOURISTS2022_1, 
                style: style_NUMBEROFDOMESTICTOURISTS2022_1,
                popuplayertitle: 'NUMBER OF DOMESTIC TOURISTS 2022',
                interactive: true,
    title: 'NUMBER OF DOMESTIC TOURISTS 2022<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_0.png" /> 244000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_1.png" /> 1306000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_2.png" /> 1669000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_3.png" /> 6627000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_4.png" /> 10003000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_5.png" /> 10233000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_6.png" /> 11186000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_7.png" /> 11490000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_8.png" /> 11757000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_9.png" /> 12376000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_10.png" /> 12589000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_11.png" /> 13189000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_12.png" /> 14567000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_13.png" /> 15465000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_14.png" /> 16913000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_15.png" /> 21990000<br />\
    <img src="styles/legend/NUMBEROFDOMESTICTOURISTS2022_1_16.png" /> <br />'
        });
var format_HIKING_2 = new ol.format.GeoJSON();
var features_HIKING_2 = format_HIKING_2.readFeatures(json_HIKING_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIKING_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIKING_2.addFeatures(features_HIKING_2);
var lyr_HIKING_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIKING_2, 
                style: style_HIKING_2,
                popuplayertitle: 'HIKING',
                interactive: true,
                title: '<img src="styles/legend/HIKING_2.png" /> HIKING'
            });

lyr_EsriPhysical_0.setVisible(true);lyr_NUMBEROFDOMESTICTOURISTS2022_1.setVisible(true);lyr_HIKING_2.setVisible(true);
var layersList = [lyr_EsriPhysical_0,lyr_NUMBEROFDOMESTICTOURISTS2022_1,lyr_HIKING_2];
lyr_NUMBEROFDOMESTICTOURISTS2022_1.set('fieldAliases', {'ADM1_EN': 'REGION', 'ADM0_EN': 'STATE', '2022': 'TOTAL OF DOMESTIC TOURISTS 2022', });
lyr_HIKING_2.set('fieldAliases', {'NAME': 'NAME', 'HILL HEIGHT': 'HILL HEIGHT', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_NUMBEROFDOMESTICTOURISTS2022_1.set('fieldImages', {'ADM1_EN': 'TextEdit', 'ADM0_EN': 'TextEdit', '2022': 'TextEdit', });
lyr_HIKING_2.set('fieldImages', {'NAME': 'TextEdit', 'HILL HEIGHT': 'TextEdit', 'LATITUDE': 'Hidden', 'LONGITUDE': 'Hidden', });
lyr_NUMBEROFDOMESTICTOURISTS2022_1.set('fieldLabels', {'ADM1_EN': 'inline label - always visible', 'ADM0_EN': 'inline label - always visible', '2022': 'inline label - always visible', });
lyr_HIKING_2.set('fieldLabels', {'NAME': 'inline label - always visible', 'HILL HEIGHT': 'inline label - always visible', });
lyr_HIKING_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});