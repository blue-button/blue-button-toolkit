var data = {};

var main_data = {
    "clinical": {
        "display_name": "Clinical",
        "audience": [
            {
                "display_name": "Retail Pharmacy",
                "data_types": [
                    {
                        "name": "Pharmacy Records - CCDA",
                        "description": "Retail pharmacies will provide customers with their pharmacy records through a secure portal that includes the ability to view, download and electronically share their data their pharmacy records securely with others and third party apps/services.",
                        "link": "",
                        "recommendations": {
                            "view": {
                                "file_type": [
                                    {
                                        "name": "TXT",
                                        "link": "#",
                                        "description": "Description for file type goes here",
                                        "example": {
                                            "name": "HTTPS",
                                            "link": "#",
                                            "description": "View/Download via Authenticated Web Portal"
                                        }
                                    },{
                                        "name": "HTML",
                                        "link": "#",
                                        "description": "Description for file type goes here",
                                        "example": {
                                            "name": "HTTPS",
                                            "link": "#",
                                            "description": "View/Download via Authenticated Web Portal"
                                        }
                                    }
                                ],
                                "security": {
                                    "name": "TLS/SSL",
                                    "link": "#",
                                    "description": "Description for security goes here"
                                }
                            },
                            "download": {
                                "file_type": [
                                    {
                                        "name": "PDF",
                                        "link": "#",
                                        "description": "Description for file type goes here",
                                        "example": {
                                            "name": "HTTPS",
                                            "link": "#",
                                            "description": "Description for example goes here"
                                        }
                                    },{
                                        "name": "XML",
                                        "link": "#",
                                        "description": "Description for file type goes here",
                                        "example": {
                                            "name": "HTTPS",
                                            "link": "#",
                                            "description": "Description for example goes here"
                                        }
                                    }
                                ],
                                "security": {
                                    "name": "TLS/SSL",
                                    "link": "",
                                    "description": "Description for security goes here"
                                }
                            },
                            "transmit": {
                                "content_structure": [
                                    {
                                        "name": "FHIR Resources",
                                        "link": "http://www.hl7.org/implement/standards/fhir/clinical.html#medications&immunizations",
                                        "description": "FHIR Resources - Medications & Immunizations"
                                    },
                                    {
                                    	"name": "FHIR",
                                    	"link":"http://www.hl7.org/implement/standards/fhir/clinical.html#medications&immunizations",
                                    	"description":"FHIR Specification"
                                    },
                                    {
                                        "name": "SITE CCDA",
                                        "link": "http://ccda.sitenv.org/Medications+Section",
                                        "description": "CCDA on SITE Knowledge Base, Medication Section Template"
                                    },
                                    {
                                    	"name":"HL7 CCDA",
                                    	"link":"https://www.hl7.org/implement/standards/product_brief.cfm?product_id=258",
                                    	"description":"HL7 Specification"
                                    }
                                ],
                                "vocabulary_code_sets": [
                                    {
                                        "name": "RxNorm - NIH",
                                        "link": "https://www.nlm.nih.gov/research/umls/rxnorm/",
                                        "description": "RxNorm Vocabulary Set from NIH"
                                    },
                                    {
                                        "name": "",
                                        "link": "",
                                        "description": ""
                                    }
                                ],
                                "transport": [
                                    {
                                        "name": "RESTful",
                                        "link": "",
                                        "description": "This is a description of RESTful",
                                        "example": {
                                                    "name": "Blue Button API",
                                                    "link": "http://blue-button.github.io/blue-button-plus-pull/",
                                                    "description": "A FHIR-based API"
                                                },
                                        "content_type": [
                                            {
                                                "name": "JSON",
                                                "link": "",
                                                "description": "This is a description of JSON"
                                            },{
                                                "name": "XML",
                                                "link": "",
                                                "description": "This is a description of XML"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "OAuth",
                                                "link": "",
                                                "description": "This is a description of OAuth"
                                                
                                            },{
                                                "name": "SAML",
                                                "link": "",
                                                "description": "This is a description of SAML"
                                            }
                                        ]
                                    },{
                                        "name": "Direct",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "Blue Button Trust Bundles",
                                                    "link": "https://secure.bluebuttontrust.org",
                                                    "description": "Open source Direct Trust Bundles"
                                                },
                                        "content_type": [
                                            {
                                                "name": "S/MIME",
                                                "link": "",
                                                "description": "This is a description of S/MIME"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "X.509",
                                                "link": "",
                                                "description": "This is a description of OAuth"
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "display_name": "Diagnostic Lab",
                "data_types": [
                    {
                        "name": "Lab Results - CCDA",
                        "description": "As of Oct 2014, HIPAA covered medical labs will be responsible for delivering lab results directly to patients. We encourage labs to be able to provide patients with the ability to view, download and securely share their lab results.",
                        "link": "",
                        "options": {
                            "view": [
                                {}
                            ],
                            "download": [
                                {}
                            ],
                            "transmit": [
                                {}
                            ]
                        }
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
                        "description": "",
                        "link": ""
                    },
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    }
                ]
            }
        ]
    },
    "aggregator": {
        "display_name": "Aggregators",
        "audience": [
            {
                "display_name": "State Health Information Exchange",
                "data_types": [
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    },
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    }
                ]
            },
            {
                "display_name": "State Immunization Registry",
                "data_types": [
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    },
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    }
                ]
            }
        ]
    },
    "consumer": {
        "display_name": "Consumer Reported",
        "audience": [
            {
                "display_name": "Developer",
                "data_types": [
                    {
                        "name": "Consumer Generated Health Data",
                        "description": "Appls/tools should be able to securely ingest structured health data into your application and also have the ability to export their data in an electronic format.",
                        "link": ""
                    },
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    }
                ]
            }
        ]
    }
};

var market_data = {
    "market": {
        "display_name": "Marketing Resources",
        "audience": [
            {
                "display_name": "Data Holder or Non Data-Holder",
                "description":"Audience level objective statement",
                "data_types": [
                    {
                        "name": "The Blue Button PSAs",
                        "description": ":30-:60 sec Blue Button PSAs",
                        "link": "",
                        "resources": [
                            {
                                "name": ":60 sec Blue Button PSA for Cancer Patients and Survivors",
                                "description": ":60 sec Blue Button PSA for Cancer Patients and Survivors",
                                "link": "http://www.healthit.gov/patients-families/video/60-sec-latina-woman-her-forties-who-living-cancer"
                            },
                            {
                                "name": ":60 sec Blue Button PSA for Seniors 65+ with chronic conditions ",
                                "description": ":60 sec Blue Button PSA for Seniors 65+ with chronic conditions ",
                                "link": "http://www.healthit.gov/patients-families/video/60-seconds-blue-button-psa-senior-65-chronic-condition"
                            }
                        ]
                    },{
                        "name": "The Blue Button Web Banner Ads",
                        "description": "The description of Web Banner Ads",
                        "link": "",
                        "resources": [
                            {
                                "name": "The Blue Button Web Banner Ads",
                                "description": "Print PSAs feature various images of the Blue Button that can be used in electronic or hard copy magazines, newsletters, and newspapers. Downloadable photos and graphics, including the print PSAs, are available in the Image Library.",
                                "link": "hhttp://www.healthit.gov/sites/default/files/document_fonts.zip"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

var developer_data = {
    "developer": {
         "display_name": "Developer Resources",         
        "audience": [
            {
                "display_name": "Data Holder or Non Data-Holder",
                "description":"Audience level objective statement",
                "data_types": [
                    {
                        "name": "GitHub Blue Button Project Page",
                        "description": "Various open source development projects that support Blue Button ",
                        "link": "https://github.com/blue-button",
                        "resources": [                    
                        ]
                    },{
                        "name": "Standards Implementation &amp; Testing Environment",
                        "description": "The SITE aims to provide a central collaboration environment for developers and the standards community, and thus facilitate the rapid adoption of those standards in EHRs.  The SITE is divided into sandboxes, one for each standard supported by the SITE.",
                        "link": "http://sitenv.org/",
                        "resources": [
                        ]
                    }
                ]
            }
        ]
    }
};
	
var firstSelectBoxId = "what";
var secondSelectBoxId = "who";
var thirdSelectBoxId = "how";
var recommendationsId = "recommendations";

$(document).ready(function(){

    $("#"+recommendationsId).hide();


	$('.intro-section').accordion({
	    defaultOpen: "intro-section1"
	});

	$("#"+firstSelectBoxId).change(function(){
		
		resetElement(secondSelectBoxId);
		resetElement(thirdSelectBoxId);
		resetElement(thirdSelectBoxId+"-description");
		$("#"+recommendationsId).hide();


		var selection = $(this).val();
		switch(selection){
			case 'share':
				data = main_data;
				var options = getAudienceNames();
				populateOptions(firstSelectBoxId, secondSelectBoxId, options);
				$("#"+secondSelectBoxId).trigger("change");
				break;
			case 'build':
				data = developer_data;
				var options = getAudienceNames();
				populateOptions(firstSelectBoxId, secondSelectBoxId, options);
				$("#"+secondSelectBoxId).trigger("change");
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
		$("#"+recommendationsId).hide();

		var selection = $(this).val();
		var options = getDataTypePair(selection);
		populateOptions(secondSelectBoxId, thirdSelectBoxId, options);		
		
		$("#"+thirdSelectBoxId).trigger("change");
	});

	$("#"+thirdSelectBoxId).change(function(){
		var selection = $(this).val();
		


		var keyword = $("#"+firstSelectBoxId).val();
		switch(keyword){
			case 'share':
				var options = getDataTypeRecommendations($("#"+thirdSelectBoxId).val());		
				populateRecommendations(recommendationsId, options, keyword);		
				$("#"+thirdSelectBoxId+"-description").html(getDataTypeDescription($("#"+thirdSelectBoxId).val())+"<br><br>");
				break;
			case 'build':	
				var data_types = getDataTypeObject($("#"+thirdSelectBoxId).val());		
				populateDeveloperResources(recommendationsId, data_types);		
				$("#"+thirdSelectBoxId+"-description").html(getAudienceDescription($("#"+thirdSelectBoxId).val())+"<br><br>");
				break;
			case 'market':	
				var resources = getDataTypeResources($("#"+thirdSelectBoxId).val()); 
				populateMarketingResources(recommendationsId, resources);
				$("#"+thirdSelectBoxId+"-description").html(getAudienceDescription($("#"+thirdSelectBoxId).val())+"<br><br>");
				break;
			default:
				break;		
		}

	});
});

/**Reset Select Box**/
function resetElement(id){
	$("#"+id).html("");
}

/**Populate Select Box Options**/
function populateOptions(parentId, childId, arrayList){
	resetElement(childId);
	$(arrayList).each(function(i){
		$("#"+childId).append("<option value=\""+arrayList[i].value+"\">"+arrayList[i].display_name+"</option>");
	});
}

function populateRecommendations(id, recommendations, keyword){


	switch(keyword){
		case 'share':
			var guidePanelHtml = "<h2> Standards for a "+ $("#"+secondSelectBoxId+ " :selected").text().toLowerCase() 
			+ " sharing "+ $("#"+thirdSelectBoxId+ " :selected").text() +"</h2>";
			break;
		case 'build':
			var guidePanelHtml = "<h2> Standards for a "+ $("#"+secondSelectBoxId+ " :selected").text().toLowerCase() 
			+ " building apps for "+ $("#"+thirdSelectBoxId+ " :selected").text() +"</h2>";
			break;
		case 'market':
			var guidePanelHtml = "<h2> Standards for a "+ $("#"+secondSelectBoxId+ " :selected").text().toLowerCase()
			+ " marketing to "+ $("#"+thirdSelectBoxId+ " :selected").text() +"</h2>";
			break;
		default:
			break;
	}

	/**VIEW**/
	guidePanelHtml += "<h3>View</h3>";
	guidePanelHtml += "<table><tr><th>File Type </th>";
	$(recommendations.view.file_type).each(function(k){		
		guidePanelHtml += "<td>" + recommendations.view.file_type[k].name + "</td>";
	}); 
	guidePanelHtml += "</tr><tr><th>Security </th>"
	
	guidePanelHtml += "<td>" + recommendations.view.security.name + "</td>"
	
	guidePanelHtml += "</tr></table>";
	
	/**DOWNLOAD**/
	guidePanelHtml += "<h3>Download</h3>";
	
	guidePanelHtml += "<table><tr><th>File Type </th>";
	$(recommendations.download.file_type).each(function(i){		
		guidePanelHtml += "<td>" + recommendations.download.file_type[i].name + "</td>";
	}); 
	guidePanelHtml += "</tr><tr><th>Security </th>"
	
	guidePanelHtml += "<td>" + recommendations.download.security.name + "</td>"
	
	guidePanelHtml += "</tr></table>";
	
	/**TRANSMIT**/
	guidePanelHtml += "<h3>Transmit</h3>";
	guidePanelHtml += "<table><tr><th> Structure </th>";
	$(recommendations.transmit.content_structure).each(function(j){		
		guidePanelHtml += "<td>" + recommendations.transmit.content_structure[j].name + "</td>";
	}); 
	guidePanelHtml += "</tr><tr><th>Vocabulary Code Sets</th>"
	$(recommendations.transmit.vocabulary_code_sets).each(function(f){
		guidePanelHtml += "<td>" + recommendations.transmit.vocabulary_code_sets[f].name + "</td>"
	});
	
	guidePanelHtml += "</tr></table>";

	/**TRANSPORT**/
	$(recommendations.transmit.transport).each(function(g){		
		guidePanelHtml += "<table><tr><th> " + parseInt(g+1) + ". "+ recommendations.transmit.transport[g].name + "<br />" + 
		recommendations.transmit.transport[g].description + "</th></tr><tr><th>Content Type</th>";
		$(recommendations.transmit.transport[g].content_type).each(function(f){
			guidePanelHtml += "<td>" + recommendations.transmit.transport[g].content_type[f].name + "</td>"
		});
		guidePanelHtml += "</tr><tr><th>Security</th>"
		$(recommendations.transmit.transport[g].security).each(function(c){
			guidePanelHtml += "<td>" + recommendations.transmit.transport[g].security[c].name + "</td>"
		});
		guidePanelHtml += "</tr><tr><th>Example</th>"
		guidePanelHtml += "<td><a target='_blank' href='"+ recommendations.transmit.transport[g].link + "'>" + recommendations.transmit.transport[g].example.name + "</a><br />" + recommendations.transmit.transport[g].example.description + "</td>";
		guidePanelHtml += "</tr></table>";
	}); 

	

	$("#"+id).html(guidePanelHtml);
	$("#"+id).show();

}

function populateMarketingResources(id, resources){
	populateResources(id, resources, false);
}

function populateDeveloperResources(id, resources){
	populateResources(id, resources, true);
}

function populateResources(id, resources, developer_flag){
	var guidePanelHtml = "";
	
	if(developer_flag){
		
		guidePanelHtml += "<h3>" + resources.name + "</h3>";
		guidePanelHtml += "<p>" + resources.description + "</p>";
		guidePanelHtml += "<a target='_blank' href='" + resources.link + "'>View</a>";
		
	}else{
		$(resources).each(function(a){
			guidePanelHtml += "<h3>" + resources[a].name + "</h3>";
			guidePanelHtml += "<p>" + resources[a].description + "</p>";
			guidePanelHtml += "<a target='_blank' href='" + resources[a].link + "'>View</a>";
		});	
	}	


	$("#"+id).html(guidePanelHtml);
	$("#"+id).show();
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

/**Get Data Type Pair By Audience Path**/
function getDataTypePair(audience_path){
	var data_type_pair = [];
	var audience_path_array = audience_path.split("-");
	var data_types_array = data[audience_path_array[0]].audience[parseInt(audience_path_array[1])].data_types;
	
	for(var key in data_types_array){
		data_type_pair.push({"value":audience_path+"-"+key, "display_name":data_types_array[key].name});
	}

	return data_type_pair;
}

/**Get Data Type By Audience Path**/
function getDataTypes(audience_path){	
	
	var audience_path_array = audience_path.split("-");
	var data_types_array = data[audience_path_array[0]].audience[parseInt(audience_path_array[1])].data_types;
	
	return data_types_array;
}

/**Get Audience Description**/
function getAudienceDescription(data_type_path){
	var audience_description = "";
	var data_type_path_array = data_type_path.split("-");
	var audience_description = data[data_type_path_array[0]].audience[parseInt(data_type_path_array[1])].description;
	
	return audience_description;
}



/**Get Current Data Type Object**/
function getDataTypeObject(data_type_path){
	var data_type_object = "";
	var data_type_path_array = data_type_path.split("-");
	var data_type_object = data[data_type_path_array[0]].audience[parseInt(data_type_path_array[1])].data_types[parseInt(data_type_path_array[2])];
	
	return data_type_object;
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
	var data_type_recommendations = data[data_type_path_array[0]].audience[parseInt(data_type_path_array[1])].data_types[parseInt(data_type_path_array[2])].recommendations;
	return data_type_recommendations;	
}

/**Get Data Type Resources**/
function getDataTypeResources(data_type_path){
	var data_type_recommendations = [];
	var data_type_path_array = data_type_path.split("-");
	var data_type_recommendations = data[data_type_path_array[0]].audience[parseInt(data_type_path_array[1])].data_types[parseInt(data_type_path_array[2])].resources;
	return data_type_recommendations;	
}

