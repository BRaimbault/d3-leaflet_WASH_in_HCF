function init(){
		
    var base_osm = L.tileLayer(
    		'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',{
			minZoom: 2,
			maxZoom: 18,
			attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
    );

    var watLayer = L.geoJson(worldData,{
        style: watStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.name 
            				+ "</b><br/>Water: " + parseInt(feature.properties.wat_cov*100)
            				+ "%<br/>Sanitation: " + parseInt(feature.properties.san_cov*100)
            				+ "%<br/>Hygene: " + parseInt(feature.properties.hyg_cov*100) + "%");
        }
    });

    var sanLayer = L.geoJson(worldData,{
        style: sanStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.name 
            				+ "</b><br/>Water: " + parseInt(feature.properties.wat_cov*100)
            				+ "%<br/>Sanitation: " + parseInt(feature.properties.san_cov*100)
            				+ "%<br/>Hygene: " + parseInt(feature.properties.hyg_cov*100) + "%");
        }
    });

    var hygLayer = L.geoJson(worldData,{
        style: hygStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.name 
            				+ "</b><br/>Water: " + parseInt(feature.properties.wat_cov*100)
            				+ "%<br/>Sanitation: " + parseInt(feature.properties.san_cov*100)
            				+ "%<br/>Hygene: " + parseInt(feature.properties.hyg_cov*100) + "%");
        }
    });

    var map = L.map('map', {
        center: [30, 9.5],
        zoom: 2,
        layers: [base_osm,watLayer]
    });

    L.control.layers({
        'Water coverage':watLayer,
        'Sanitation coverage':sanLayer,
        'Hygiene coverage':hygLayer
    }).addTo(map);   
    
    var watLegend = L.control({position: 'bottomleft'});
    var sanLegend = L.control({position: undefined});
    var hygLegend = L.control({position: undefined});

    watLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=watLegendContent();
        return div;
    };    

    sanLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=sanLegendContent();
        return div;
    };
    
    hygLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=hygLegendContent();
        return div;
    };    
           
    
    map.on('baselayerchange', function (eventLayer) {
        if(eventLayer.name=="Water coverage"){
        	if(hygLegend.getPosition()==undefined){
        		this.removeControl(sanLegend);
        		sanLegend.setPosition(undefined);
        	} else {
        		this.removeControl(hygLegend);
        		hygLegend.setPosition(undefined);
        	};
       		watLegend.setPosition('bottomleft');
            watLegend.addTo(map);
        };
        if(eventLayer.name=="Sanitation coverage"){
        	if(hygLegend.getPosition()==undefined){
        		this.removeControl(watLegend);
        		watLegend.setPosition(undefined);
        	} else {
        		this.removeControl(hygLegend);
        		hygLegend.setPosition(undefined);
        	}
       		sanLegend.setPosition('bottomleft');           
            sanLegend.addTo(map);
        };
        if(eventLayer.name=="Hygiene coverage"){
        	if(sanLegend.getPosition()==undefined){
        		this.removeControl(watLegend);
        		watLegend.setPosition(undefined);
        	} else {
        		this.removeControl(sanLegend);
        		sanLegend.setPosition(undefined); 
        	};
       		hygLegend.setPosition('bottomleft');
            hygLegend.addTo(map);
        };    
    });
    
    watLegend.addTo(map);
    
    return map;    
}


/*function resize(){
    $('#map').height($(window).height()-$('#header').height()-10);
    map.invalidateSize(false);
}*/

/*$(window).load(function(){
    resize();
});
$(window).resize(function(){
    resize();
});*/

    
var map = init();
