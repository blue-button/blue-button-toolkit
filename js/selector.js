var data = {};

var main_data = {
    "clinical": {
        "display_name": "Clinical",
        "audience": [
            {
                "display_name": "Retail Pharmacy Chain",
                "data_types": [
                    {
                        "name": "Pharmacy Records",
                        "description": "This is a description for pharmacy records.",
                        "technical_options":[
							{
								"name":"First Option",
								"description":"First Description",
								"filetypes":["",""],
								"view_download_security": ["",""],
								"structure":["",""],
								"vocabulary_set":["",""],
								"content_type":["",""],
								"transport_security":["",""]
							},
							{
								"name":"Second Option",
								"description":"Second Description",
								"filetypes":["",""],
								"view_download_security": ["",""],
								"structure":["",""],
								"vocabulary_set":["",""],
								"content_type":["",""],
								"transport_security":["",""]
							}
						]
					},
                    {
                        "name": "",
                        "description": ""
                    }
                ]
            },
            {
                "display_name": "Lab",
                "data_types": [
                    {
                        "name": "Lab Results",
                        "description": "This is a description for labs."
                    }
                ]
            }
        ]
    },
    "financial": {
        "display_name": "Financial",
        "audience": [
            {
                "display_name": "Health Insurance Company",
                "data_types": [
                    {
                        "name": "",
                        "description": ""
                    },
                    {
                        "name": "",
                        "description": ""
                    }
                ]
            }
        ]
    }
};

var market_data = {
	"market": {
		"display_name": "Marketing",
		"audience": [			
			{
				"display_name":"Data Holder or Non-Data Holder",
				"data_types": [
					{
						"name":"All types",
						"description":"Access to everything your organization will need to help spread the word about Blue Button.  http://www.healthit.gov/patients-families/get-involved"
					}
				]
			}
		]
	}
};
	

$(document).ready(function(){

    var firstSelectBoxId = "what";
    var secondSelectBoxId = "who";
    var thirdSelectBoxId = "how";
    var recommendationsAccordionId = "recommendations";
    $("#"+recommendationsAccordionId).hide();

	$("#"+firstSelectBoxId).change(function(){
		
		resetElement(secondSelectBoxId);
		resetElement(thirdSelectBoxId);
		resetElement(thirdSelectBoxId+"-description");
		$("#"+recommendationsAccordionId).hide();


		var selection = $(this).val();
		switch(selection){
			case 'share':
				data = main_data;
				var options = getAudienceNames();
				populateOptions(firstSelectBoxId, secondSelectBoxId, options);
				$("#"+secondSelectBoxId).trigger("change");
				break;
			case 'build':
				break;
			case 'market':
				data = market_data;
				var options = getAudienceNames();
				populateOptions(firstSelectBoxId, secondSelectBoxId, options);
				$("#"+secondSelectBoxId).trigger("change");
				break;
			default:
				break;
		}
	});

	$("#"+secondSelectBoxId).change(function(){
		
		resetElement(thirdSelectBoxId);
		$("#"+recommendationsAccordionId).hide();

		var selection = $(this).val();
		var options = getDataTypes(selection);
		populateOptions(secondSelectBoxId, thirdSelectBoxId, options);		
		
		$("#"+thirdSelectBoxId).trigger("change");
	});

	$("#"+thirdSelectBoxId).change(function(){
		var selection = $(this).val();
		$("#"+thirdSelectBoxId+"-description").html(getDataTypeDescription($("#"+thirdSelectBoxId).val()));
		var options = getDataTypeRecommendations($("#"+thirdSelectBoxId).val());
		populateTechnicalRecommendations(recommendationsAccordionId,options);
		
	});

});

/**Reset Select Box**/
function resetElement(id){
	$("#"+id).html("");
}

/**Populate Select Box Options**/
function populateOptions(parentId, childId, arrayList){
	console.log(arrayList);
	resetElement(childId);
	$(arrayList).each(function(i){
		$("#"+childId).append("<option value=\""+arrayList[i].value+"\">"+arrayList[i].display_name+"</option>");
	});
}

function populateTechnicalRecommendations(id, arrayList){
	if(typeof arrayList.length === 'undefined'){
		$("#"+id).html("");
	}else{		
	
		var accordionPanelHtml = "";
		
		$(arrayList).each(function(i){
		 accordionPanelHtml += "<div class='accordion' id='nav-section"+ parseInt(i+1) +"'>"+
		 arrayList[i].name+"<span></span></div><div><ul>"+
		 "<li><a href=''>"+arrayList[i].description+"</a></li>"+
		 "</ul></div>";
		});

		$("#"+id).html(accordionPanelHtml);
		$("#"+id).show();
		/**Render Accordion**/
		$('.accordion').accordion({
		    defaultOpen: "nav-section1"
		});
	}

	// <div class="accordion" id="nav-section1">Navigation Section<span></span></div>
	// 	<div>
	// 		<ul>
	// 			<li><a href="#">Navigation Item</a></li>
	// 			<li><a href="#">Navigation Item</a></li>
	// 			<li><a href="#">Navigation Item</a></li>
	// 			<li><a href="#">Navigation Item</a></li>
	// 			<li><a href="#">Navigation Item</a></li>
	// 			<li><a href="#">Navigation Item</a></li>
	// 		</ul>
	// 	</div>
}

/**Get Audience Names**/
function getAudienceNames(){
	var audience_names = [];
	for(var key in data){
		if(data.hasOwnProperty(key) && data[key].hasOwnProperty("audience")){
			for(var audienceKey in data[key].audience){
				audience_names.push({"value":key+"-"+audienceKey, "display_name":data[key].audience[audienceKey].display_name});
			}
			
		}
	}
	return audience_names;
}

/**Get Data Types By Audience Path**/
function getDataTypes(audience_path){
	var data_types = [];
	var audience_path_array = audience_path.split("-");
	var data_types_array = data[audience_path_array[0]].audience[parseInt(audience_path_array[1])].data_types;
	
	for(var key in data_types_array){
		data_types.push({"value":audience_path+"-"+key, "display_name":data_types_array[key].name});
	}

	return data_types;
}

/**Get Data Type Description**/
function getDataTypeDescription(data_type_path){
	var data_type_description = "";
	var data_type_path_array = data_type_path.split("-");
	var data_type_description = data[data_type_path_array[0]].audience[parseInt(data_type_path_array[1])].data_types[parseInt(data_type_path_array[2])].description;
	
	return data_type_description;
}

/**Get Data Type Recommendations**/
function getDataTypeRecommendations(data_type_path){
	var data_type_recommendations = [];
	var data_type_path_array = data_type_path.split("-");
	var data_type_recommendations = data[data_type_path_array[0]].audience[parseInt(data_type_path_array[1])].data_types[parseInt(data_type_path_array[2])].technical_options;
	
	return data_type_recommendations;	
}


