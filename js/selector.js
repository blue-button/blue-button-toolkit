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
                        "description": "Retail pharmacies will provide customers with their pharmacy records (list of medications) through a secure portal that includes the ability to view, download and electronically share their data their pharmacy records securely with others and third party apps/services.",
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
                                    },{
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
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
                                        "link": "http://www.hl7.org/implement/standards/fhir/clinical.html#diagnostics",
                                        "description": "FHIR Resources - Diagnostics"
                                    },
                                    {
                                        "name": "SITE CCDA",
                                        "link": "http://ccda.sitenv.org/Result+Observation",
                                        "description": "CCDA on SITE Knowledge Base, Result Observation Section Template"
                                    },
                                    {
                                    	"name":"HL7 CCDA",
                                    	"link":"https://www.hl7.org/implement/standards/product_brief.cfm?product_id=258",
                                    	"description":"HL7 Specification"
                                    }
                                ],
                                "vocabulary_code_sets": [
                                    {
                                        "name": "LOINC",
                                        "link": "https://loinc.org/",
                                        "description": "Official LOINC Vocabulary"
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
                                    },{
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
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
            	"display_name": "Hospital / Provider",
            	"data_types": [
  					{
                        "name": "Clinical Summary - CCDA",
                        "description": "Eligible providers should provide a way for patients to view, download and share their health records with other providers, care givers and/or third party applications/services.",
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
                                        "link": "http://www.hl7.org/implement/standards/fhir/clinical.html",
                                        "description": "FHIR Resources - Clinical"
                                    },
                                    {
                                    	"name":"HL7 CCDA",
                                    	"link":"https://www.hl7.org/implement/standards/product_brief.cfm?product_id=258",
                                    	"description":"HL7 Specification"
                                    }
                                ],
                                "vocabulary_code_sets": [
                                    {
                                        "name": "CPT",
                                        "link": "http://www.ama-assn.org/ama/pub/physician-resources/solutions-managing-your-practice/coding-billing-insurance/cpt.page",
                                        "description": "AMA CPT Reference"
                                    },
                                    {
                                    	"name": "ICD",
                                    	"link":"http://www.who.int/classifications/icd/en/",
                                    	"description": "World Health Organization ICD 9/10 Reference"
                                    },
                                    {
                                    	"name":"SNOMED",
                                    	"link":"https://www.nlm.nih.gov/research/umls/Snomed/snomed_main.html",
                                    	"description": "US National Library of Medicine SNOMED Reference"
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
                                    },{
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },{
                        "name": "Transitions of Care",
                        "description": "Healthcare providers should enable a way for patients to view, download and securely send their health records to a destination of their choice.",
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
                                        "link": "http://www.hl7.org/implement/standards/fhir/clinical.html",
                                        "description": "FHIR Resources - Clinical"
                                    },
                                    {
                                    	"name":"HL7 CCDA",
                                    	"link":"https://www.hl7.org/implement/standards/product_brief.cfm?product_id=258",
                                    	"description":"HL7 Specification"
                                    }
                                ],
                                "vocabulary_code_sets": [
                                    {
                                        "name": "CPT",
                                        "link": "http://www.ama-assn.org/ama/pub/physician-resources/solutions-managing-your-practice/coding-billing-insurance/cpt.page",
                                        "description": "AMA CPT Reference"
                                    },
                                    {
                                    	"name": "ICD",
                                    	"link":"http://www.who.int/classifications/icd/en/",
                                    	"description": "World Health Organization ICD 9/10 Reference"
                                    },
                                    {
                                    	"name":"SNOMED",
                                    	"link":"https://www.nlm.nih.gov/research/umls/Snomed/snomed_main.html",
                                    	"description": "US National Library of Medicine SNOMED Reference"
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
                                        "name": "Direct (Required)",
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
                                    },{
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },{
                        "name": "Imaging",
                        "description": "Medical and diagnostic images for a patient to view, download, and share with care providers and third party applications.",
                        "link": "",
                        "recommendations": {
                            "view": {
                                "file_type": [
                                    {
                                        "name": "JPG / PNG",
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
                                        "link": "http://www.hl7.org/implement/standards/fhir/clinical.html",
                                        "description": "FHIR Resources - Clinical"
                                    },
                                    {
                                    	"name":"HL7 CCDA",
                                    	"link":"https://www.hl7.org/implement/standards/product_brief.cfm?product_id=258",
                                    	"description":"HL7 Specification"
                                    }
                                ],
                                "vocabulary_code_sets": [
                             		{
                             			"name":"",
                             			"link":"",
                             			"description":""
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
                                            },{
                                                "name": "DICOM",
                                                "link": "",
                                                "description": "This is a description of DICOM"
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
                                    },{
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
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
                        "name": "Explanation of Benefits",
                        "description": "Provide medical insurance claims data to patients in a format that allows them to view, download and share their data with third party apps/services that can make this data more actionable and user friendly. ",
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
                                        "name": "CSV",
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
                                        "name": "Draft Specification",
                                        "link": "http://bit.ly/bbcharter",
                                        "description": "Electronic EOB, Draft Specification"
                                    }
                                ],
                                "vocabulary_code_sets": [
                                    {
                                        "name": "Various Code Sets",
                                        "link": "http://www.cms.gov/Regulations-and-Guidance/HIPAA-Administrative-Simplification/TransactionCodeSetsStands/CodeSets.html",
                                        "description": "CMS - Various Code Sets"
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
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "name": "Estimated Cost",
                        "description": "Provide near actual (close to the negotiated amount) or cost estimates of health care services, allowing patients to make better financial decisions. This data should be available electronically before care is delivered. The insights are additionally valuable when coupled with quality metrics to surface true value.",
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
                                        "name": "CSV",
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
                                        "name": "Various EDI Transactions",
                                        "link": "http://www.x12.org/x12org/docs/EDITransactions.pdf",
                                        "description": "Various EDI, Listed Under X12N Insurance Transactions"
                                    }
                                ],
                                "vocabulary_code_sets": [
                                    {
                                        "name": "Various Code Sets",
                                        "link": "http://www.cms.gov/Regulations-and-Guidance/HIPAA-Administrative-Simplification/TransactionCodeSetsStands/CodeSets.html",
                                        "description": "CMS - Various Code Sets"
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
                                        "name": "Webservices",
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
                                    },{
                                        "name": "Secure Attachments",
                                        "link": "",
                                        "description": "This is a description of Direct",
                                        "example": {
                                                    "name": "",
                                                    "link": "",
                                                    "description": ""
                                                },
                                        "content_type": [
                                            {
                                                "name": "Encrypted Files",
                                                "link": "",
                                                "description": "This is a description of encrypted files"
                                            }
                                        ],
                                        "security": [
                                            {
                                                "name": "Various File Encryption",
                                                "link": "",
                                                "description": "This is a description of file encryption"
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
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
                "display_name": "Marketing",
                "description":"Access to everything your organization will need to help spread the word about Blue Button.  http://www.healthit.gov/patients-families/get-involved",
                "data_types": [
                    {
                        "name": "The Blue Button PSAs",
                        "description": "30-60 sec Blue Button PSAs",
                        "link": "",
                        "resources": [
                            {
                                "name": ":60 sec Blue Button PSA for Cancer Patients and Survivors",
                                "description": "60 sec Latina woman in her forties who is living with cancer",
                                "link": "http://www.healthit.gov/patients-families/video/60-sec-latina-woman-her-forties-who-living-cancer"
                            },
                            {
                                "name": ":60 sec Blue Button PSA for Seniors 65+ with chronic conditions",
                                "description": "60 seconds Blue Button PSA for senior 65+ with chronic conditions",
                                "link": "http://www.healthit.gov/patients-families/video/60-seconds-blue-button-psa-senior-65-chronic-condition"
                            },
                            {
                                "name": ":60 sec Blue Button PSA for Caregivers",
                                "description": "60 sec Blue Button PSA for Caregivers",
                                "link": "http://www.healthit.gov/patients-families/video/60-sec-blue-button-psa-caregivers"
                            },
                            {
                                "name": ":30 sec Blue Button PSA for Cancer Patients and Survivors",
                                "description": "30 sec Latina woman in her forties who is living with cancer",
                                "link": "http://www.healthit.gov/patients-families/video/30-sec-latina-woman-her-forties-who-living-cancer"
                            },
                            {
                                "name": ":30 sec Blue Button PSA for Seniors 65+ with chronic conditions",
                                "description": "30 sec 65+ African American man living with diabetes",
                                "link": "http://www.healthit.gov/patients-families/video/30-sec-65-african-american-man-living-diabetes"
                            },
                            {
                                "name": ":30 sec Blue Button PSA video for caregivers",
                                "description": "30 sec Blue Button PSA for Caregivers",
                                "link": "http://www.healthit.gov/patients-families/video/30-sec-blue-button-psa-video-caregivers"
                            }

                        ]
                    },{
                        "name": "The Blue Button Print Ads",
                        "description": "Print PSAs feature various images of the Blue Button that can be used in electronic or hard copy magazines, newsletters, and newspapers. Downloadable photos and graphics, including the print PSAs, are available in the Image Library.",
                        "link": "",
                        "resources": [
                            {
                                "name": "The Blue Button Print Ads",
                                "description": "Print PSAs feature various images of the Blue Button that can be used in electronic or hard copy magazines, newsletters, and newspapers. Downloadable photos and graphics, including the print PSAs, are available in the Image Library.",
                                "link": "http://www.healthit.gov/sites/default/files/document_fonts.zip"
                            }
                        ]
                    },{
                        "name": "The Blue Button Web Banner Ads",
                        "description": "Web banner advertising for Blue Button",
                        "link": "",
                        "resources": [
                            {
                                "name": "The Blue Button Web Banner Ads",
                                "description": "Web banner advertising for Blue Button",
                                "link": "http://www.healthit.gov/sites/default/files/psa_web_banner_ads.zip"
                            }
                        ]
                    },{
                        "name": "Fact Sheets",
                        "description": "These easy-to-read fact sheets provide essential information for people to find out about the importance of having online access to their medical records and what they can do with their information once they have it.",
                        "link": "",
                        "resources": [
                            {
                                "name": "Consumer Fact Sheet",
                                "description": "These easy-to-read fact sheets provide essential information for people to find out about the importance of having online access to their medical records and what they can do with their information once they have it.",
                                "link": "http://www.healthit.gov/sites/default/files/2013_0809_consumer_fact_sheet_final.pdf"
                            },
                            {
                            	"name": "Blue Button Milestones To Date",
                                "description": "These easy-to-read fact sheets provide essential information for people to find out about the importance of having online access to their medical records and what they can do with their information once they have it.",
                                "link": "http://www.healthit.gov/sites/default/files/blue-button-fact-sheet-2014-feb_0.pdf"
                            }
                        ]
                    },{
                    	"name": "Patient Stories",
                        "description": "These messages are underscored by the moving stories of people who have benefited from Blue Button.",
                        "link": "",
                        "resources": [
                            {
                            	"name": "Patient Stories",
                                "description": "Use the VA Blue Button to Access Your Personal Health Information",
                                "link": "https://www.youtube.com/watch?v=lGGnda44Yik&list=UUqynwrKIXFPyUCxqkAZ001w"
                            }
                        ]
                    },{
                    	"name": "Blue Button Logo",
                        "description": "The words 'Blue Button,' the Blue Button logo, the Blue Button Combined Logo and the slogan 'Download My Data' are what consumers look for when they want electronic access to their health data.",
                        "link": "",
                        "resources": [
                            {
                            	"name": "Blue Button Logo",
                                "description": "The words 'Blue Button,' the Blue Button logo, the Blue Button Combined Logo and the slogan 'Download My Data' are what consumers look for when they want electronic access to their health data.",
                                "link": "http://www.healthit.gov/patients-families/blue-button/blue-button-image"
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
                "display_name": "Developer",
                "description":"",
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
                    },{
                    	"name":"Connector API",
                    	"description":"The Blue Button Connector provides a free, public, read-only API to access the directory of healthcare organizations that are making health records available to patients and apps that ingest structured health information.",
                    	"link":"http://bluebuttonconnector.healthit.gov/developers.html",
                    	"resources":[]
                    },{
                    	"name":"S&I Framework",
                    	"description":"The Standards & Interoperability Framework creates a forum – enabled by integrated functions, processes, and tools – where healthcare stakeholders can focus on solving real-world interoperability challenges.",
                    	"link":"http://www.siframework.org/",
                    	"resources":[]
                    },{
                    	"name":"Blue Button Logo",
                    	"description":"The words 'Blue Button,' the Blue Button logo, the Blue Button Combined Logo and the slogan 'Download My Data' are what consumers look for when they want electronic access to their health data.",
                    	"link":"http://www.healthit.gov/patients-families/blue-button/blue-button-image",
                    	"resources":[]
                    },{
                    	"name":"PHR Model Privacy Notice",
                    	"description":"PHR Model Privacy Notice - The personal health record model privacy notice is designed to be a standardized template that a PHR company can use to succinctly inform customers about its privacy and security policies.",
                    	"link":"http://www.healthit.gov/policy-researchers-implementers/personal-health-record-phr-model-priva",
                    	"resources":[]
                    },{
                    	"name":"Health Record Design Challenge",
                    	"description":"Examples of redesigned health records submitted in 2013 in response to an open source challenge sponsored by HHS.",
                    	"link":"http://www.healthdesignchallenge.com",
                    	"resources":[]
                    }
                ]
            }
        ]
    }
};

var market_descriptions = {
	"Retail Pharmacy":"Pharmacies should use the Blue Button marketing materials to help communiate the Blue Button vision to their customers, and to help educate their customers on importance of using their pharmacy data with a growing ecoystem of products and services designed to help people better manage their medications and overall health goals.", 
	"Diagnostic Lab":"Labs should use the Blue Button marketing materials to help communicate the Blue Button vision to their patients and educate them on the importance of having access to their records in a format that allows them to check and share their records electronically.", 
	"Hospital / Provider":"Health care providers are in a great position to use the marketing material to communicate the Blue Button vision to their patients, and educate their patients on on the importance of having access to their records, checking them for accuracy and using them with a growing number of apps and tools designed to help them manage their health and coordinate their healthcare.", 
	"Health Insurance Company":"Health insurance companies should use these marketing materials to help communiate the Blue Button vision and let their members know that their health insurance company empowers them with access to their own health records so that they can not only get their records, but also check their records and use them with a growing ecoystem of apps and tools designed to help people better manage their healthcare expenses.", 
	"State Health Information Exchange":"State health information exchanges are in a great position to use the marketing material to communicate the Blue Button vision to state residents and educate them on the importance of having access to their records, checking them for accuracy and using them with a growing number of apps and tools designed to help them manage their health and coordinate their healthcare.", 
	"State Immunization Registry":"State immunization registries are in a great position to use the marketing material to communicate the Blue Button vision to state residents and educate them on the importance of having access to their records, checking them for accuracy and using them with a growing number of apps and tools designed to help them manage their health and coordinate their healthcare.", 
	"Developer":"App developers should use the Blue Button marketing material to increase patient awareness, education and demand for access to their own health records in a format that patients to send their records to any destination of their choice."
}

var general_descriptions = {
	"Retail Pharmacy":"Retail pharmacies should be able to provide customers with their pharmacy records (current and past prescriptions) through a secure portal, ability to download a CCDA (medication section) and abilitty for customers to securely send their records to a destination of their choice.", 
	"Diagnostic Lab":"As of Oct 2014, HIPAA covered medical labs will be responsible for delivering lab results directly to patients. Labs should be able to provide patients with the ability to view, download and securely send their lab results to a destination of their choice.", 
	"Hospital / Provider":"Health care providers are in a great position to use the marketing material to communicate the Blue Button vision to their patients, and educate their patients on on the importance of having access to their records, checking them for accuracy and using them with a growing number of apps and tools designed to help them manage their health and coordinate their healthcare.", 
	"Health Insurance Company":"Health insurance providers should provide their members with medical insurance claims records in an electronic format that allows patients to view, download and securely send their data to a destination of their choice.", 
	"State Health Information Exchange":"State health information exchanges should be able to ingest and aggregate structured health data from various providers within the state, in addition to making their aggregated health data portable so that consumers may securely send their data to a destination of their choice.", 
	"State Immunization Registry":"State immunization registries should be able patients the ability to view, download and securely send their vacciantion records to a desitnation of their choice.", 
	"Developer":"Third party applications should be able to ingest structured health data from an external source and also make any health data within the application/tool portable so that consumers may securely send their data to a destination of their choice."
}
	
var firstSelectBoxId = "what";
var secondSelectBoxId = "who";
var thirdSelectBoxId = "how";
var recommendationsId = "recommendations";

$(document).ready(function(){

    $("#"+recommendationsId).hide();
    $("#"+thirdSelectBoxId).hide();

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
				var options = getStaticAudienceNames("developer");
				populateOptions(firstSelectBoxId, secondSelectBoxId, options);
				$("#"+secondSelectBoxId).trigger("change");
				break;
			case 'market':
				data = market_data;
				var options = getStaticAudienceNames("market");
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
				$("#"+thirdSelectBoxId+"-description").html(getDataTypeDescription($("#"+thirdSelectBoxId).val())+"<br>");
				$("#"+thirdSelectBoxId+"-action").html("3. Select the type of data you want to share.");
				break;
			case 'build':	
				var data_types = getDataTypeObject($("#"+thirdSelectBoxId).val());		
				populateDeveloperResources(recommendationsId, data_types);		
				$("#"+thirdSelectBoxId+"-description").html(getDescription($("#"+thirdSelectBoxId).val())+"<br>");
				$("#"+thirdSelectBoxId+"-action").html("3. Select the resource that you want to use.");
				break;
			case 'market':	
				var resources = getDataTypeResources($("#"+thirdSelectBoxId).val()); 
				var description = getDataTypeDescription($("#"+thirdSelectBoxId).val());
				resources.description = description;
				populateMarketingResources(recommendationsId, resources);
				$("#"+thirdSelectBoxId+"-description").html(getDescription($("#"+thirdSelectBoxId).val())+"<br>");
				$("#"+thirdSelectBoxId+"-action").html("3. Select the resource that you want to use.");
				break;
			default:
				break;		
		}

		$("#"+thirdSelectBoxId).show();

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

function populateRecommendations(id, recommendations){

	var guidePanelHtml = "<h3> Standards for a "+ $("#"+secondSelectBoxId+ " :selected").text().toLowerCase() 
	+ " sharing "+ $("#"+thirdSelectBoxId+ " :selected").text() +"</h3>";

	/**VIEW**/
	guidePanelHtml += "<h3>View</h3>";
	guidePanelHtml += "<p>Enabling a patient the ability to view their electronic health records within a secure patient portal interface. As the adoption of smart phones continues to increase, there is a growing expectation that patients be able to view their records on the go.</p>"
	guidePanelHtml += "<table><tr><th>File Type </th>";
	$(recommendations.view.file_type).each(function(k){		
		guidePanelHtml += "<td>" + recommendations.view.file_type[k].name + "</td>";
	}); 
	guidePanelHtml += "</tr><tr><th>Security </th>"
	
	guidePanelHtml += "<td>" + recommendations.view.security.name + "</td>"
	
	guidePanelHtml += "</tr></table>";
	
	/**DOWNLOAD**/
	guidePanelHtml += "<h3>Download</h3>";
	guidePanelHtml += "<p>Enabling a patient the ability to download a machine readable copy of their health records so that a patient may securely store it or electronically send it to a destination of their choice.</p>"

	guidePanelHtml += "<table><tr><th>File Type </th>";
	$(recommendations.download.file_type).each(function(i){		
		guidePanelHtml += "<td>" + recommendations.download.file_type[i].name + "</td>";
	}); 
	guidePanelHtml += "</tr><tr><th>Security </th>"
	
	guidePanelHtml += "<td>" + recommendations.download.security.name + "</td>"
	
	guidePanelHtml += "</tr></table>";
	
	/**TRANSMIT**/
	guidePanelHtml += "<h3>Transmit</h3>";
	guidePanelHtml += "<p>Patients should have the ability to securely send their health data to a destination of their choice. This includes patients sharing their health records with a broader care team, informal caregivers and even sending their data to third party apps and tools designed to help them better manage their health and coordinate their healthcare.</p>"	
	guidePanelHtml += "<table><tr><th> Structure </th>";
	$(recommendations.transmit.content_structure).each(function(j){		
		guidePanelHtml += "<td><a href='" + recommendations.transmit.content_structure[j].link + "'>" + recommendations.transmit.content_structure[j].name + "</a></td>";
	}); 
	guidePanelHtml += "</tr><tr><th>Vocabulary Code Sets</th>"
	$(recommendations.transmit.vocabulary_code_sets).each(function(f){
		guidePanelHtml += "<td>" + recommendations.transmit.vocabulary_code_sets[f].name + "</td>"
	});
	
	guidePanelHtml += "</tr></table>";

	/**TRANSPORT**/
	$(recommendations.transmit.transport).each(function(g){		
		guidePanelHtml += "<table><tr><th> "+ recommendations.transmit.transport[g].name + "<br />" + 
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
		
		guidePanelHtml += "<h3>" + $("#"+thirdSelectBoxId+ " :selected").text() +" designed for developers.</h3>";
		guidePanelHtml += "<div>" + resources.description + "</div>";
		guidePanelHtml += "<a target='_blank' href='" + resources.link + "'>View</a>";
		
	}else{		
		guidePanelHtml += "<h3>" + $("#"+thirdSelectBoxId+ " :selected").text() +" resources for a " + $("#"+secondSelectBoxId+ " :selected").text()  + "</h3>";
		guidePanelHtml += "<div>" + resources.description + " </div><br>";
		$(resources).each(function(a){	
			guidePanelHtml += "<div>" + resources[a].name + " - ";
			guidePanelHtml += "<a target='_blank' href='" + resources[a].link + "'>View</a></div> <br>";
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

/*Get Static Audience Names*/
function getStaticAudienceNames(value){
	var audience_names = [{"display_name":"Retail Pharmacy", "value":value+"-0"}, {"display_name":"Diagnostic Lab", "value":value+"-0"}, {"display_name":"Hospital / Provider", "value":value+"-0"}, {"display_name":"Health Insurance Company", "value":value+"-0"}, {"display_name":"State Health Information Exchange", "value":value+"-0"}, {"display_name":"State Immunization Registry", "value":value+"-0"}, {"display_name":"Developer", "value":value+"-0"}];
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

/**Get Description**/
function getDescription(data_type_path){
	var description = "";
	var data_type_path_array = data_type_path.split("-");
	
	if(data_type_path_array[0] == "market"){
		description = market_descriptions[$("#"+secondSelectBoxId+" option:selected").text()];
	}else{
		description = general_descriptions[$("#"+secondSelectBoxId+" option:selected").text()];
	}

	return description;
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

