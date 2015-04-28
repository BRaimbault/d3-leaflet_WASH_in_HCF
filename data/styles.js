var color = ["#ecf4cb","#ffe082","#ffbd13","#ff8053","#ff493d"];

var watStyle = function(feature){
	    if(feature.properties.wat_cov>0.8){
	        return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.wat_cov>0.6){
	        return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.wat_cov>0.4){
	        return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.wat_cov>0.2){
	        return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.wat_cov>0){ 
	    	return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};
		} else {
	    	return {"color": "none","opacity":1};
		}
};

var sanStyle = function(feature){
	    if(feature.properties.san_cov>0.8){
	        return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.san_cov>0.6){
	        return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.san_cov>0.4){
	        return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.san_cov>0.2){
	        return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.san_cov>0){ 
	    	return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};
		} else {
	    	return {"color": "none","opacity":1};
		}
};

var hygStyle = function(feature){
	    if(feature.properties.hyg_cov>0.8){
	        return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.hyg_cov>0.6){
	        return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.hyg_cov>0.4){
	        return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.hyg_cov>0.2){
	        return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
	    } else if(feature.properties.hyg_cov>0){ 
	    	return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};
		} else {
	    	return {"color": "none","opacity":1};
		}
};
