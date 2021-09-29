/* =====================================
Name - Hay Munn Hnin Wai 
UOW ID - 6573277
(My UOW email - hmhw344@uowmail.edu.au) 
Assignment 3 - Task 1 
=======================================*/

/*Task1 - Create the database called "hmhw344" & Create a Collection with prefix of my email called "hmhw344" */ 
db.hmhw344.insert(
{"COMPANY": {"name": "ABC" , 
		 "City": "Singapore" , 
	 	"Consists-of": [ 
			{"DEPARTMENT" : {
					 "name" : "IT" ,
					 "budget": 10000, 
					 "Is-located-in": {"BUILDING": {       				/* Building-1 */
									   "number": 001,
									   "type" : "Education Buildings"}}, 
					"Includes": [{"EMPLOYEE": { 
								"e#" : "E001",                    /* Employee-1 */
								"first-name":"Hay Munn", 
								"last-name" : "Hnin Wai", 
								"address": "Bukit Panjang 403",
								"skills": ["Java", "HTML", "Python"], 
								"Involves":{"Project": { "code": "P001",                   /* Involves in Project-1 */	
														  "deadlines" : "18-June-2020"}
											  }}}, 
								{"EMPLOYEE" : {
								"e#": "E002",                    /* Employee-2 */
								"first-name": "John",
								"last-name" : "Doe",
								"address": "Bukit Timah", 
								"skills": ["C++","Java", "Python", "HTML"],
								"Involves": { "Project": {  "code": "P001",           /* Involves in Project-1 */
															 "deadlines": "18-June-2020"}
												}
										  }
						      	}
							  ]																		
				 }},
		{"DEPARTMENT" : {
							 "name" : "HR" ,
							"budget": 120000,
							 "Is-located-in": {"BUILDING": {       				/* Building-2 */
											   "number": 002,
											   "type" : "Business Buildings"}}, 
							"Includes": [{"EMPLOYEE": { 
										"e#" : "E003",                    /* Employee-3 */
										"first-name":"Ting", 
									    "last-name" : "Ting", 
										"address": "Climenti",
									    "skills": [ "Microsoft Word" , "Excel", "MS Project"] ,
										"Involves":{"Project": { "code": "P002",                   /* Involves in Project-2 */	
																 "deadlines" : "20-June-2020"}
													  }}}, 
										{"EMPLOYEE" : {
										"e#": "E004",                    /* Employee-4 */
										"first-name": "Feng",
										"last-name" : "Feng",
										"address": "Yishun", 
										"skills": [ "Microsoft Word" , "Excel", "MS Project"] ,
										"Involves": { "Project": {  "code": "P002",           /* Involves in Project-2 */
																	"deadlines": "20-June-2020"}
														}
												  }
										}
									  ]																		
						 }}
]

	
}

}); 
			 
/*====================================================================*/ 			
/*Display the Output in MongoDB */ 
> use hmhw344
switched to db hmhw344
> show collections
> load('/home/csci235/Desktop/hmhw344.js')
true
> show collections
hmhw344

> db.hmhw344.find().pretty()
{
	"_id" : ObjectId("5ec4e55cead20faad11c3875"),
	"COMPANY" : {
		"name" : "ABC",
		"City" : "Singapore",
		"Consists-of" : [
			{
				"DEPARTMENT" : {
					"name" : "IT",
					"budget" : 10000,
					"Is-located-in" : {
						"BUILDING" : {
							"number" : 1,
							"type" : "Education Buildings"
						}
					},
					"Includes" : [
						{
							"EMPLOYEE" : {
								"e#" : "E001",
								"first-name" : "Hay Munn",
								"last-name" : "Hnin Wai",
								"address" : "Bukit Panjang 403",
								"skills" : [
									"Java",
									"HTML",
									"Python"
								],
								"Involves" : {
									"Project" : {
										"code" : "P001",
										"deadlines" : "18-June-2020"
									}
								}
							}
						},
						{
							"EMPLOYEE" : {
								"e#" : "E002",
								"first-name" : "John",
								"last-name" : "Doe",
								"address" : "Bukit Timah",
								"skills" : [
									"C++",
									"Java",
									"Python",
									"HTML"
								],
								"Involves" : {
									"Project" : {
										"code" : "P001",
										"deadlines" : "18-June-2020"
									}
								}
							}
						}
					]
				}
			},
			{
				"DEPARTMENT" : {
					"name" : "HR",
					"budget" : 120000,
					"Is-located-in" : {
						"BUILDING" : {
							"number" : 2,
							"type" : "Business Buildings"
						}
					},
					"Includes" : [
						{
							"EMPLOYEE" : {
								"e#" : "E003",
								"first-name" : "Ting",
								"last-name" : "Ting",
								"address" : "Climenti",
								"skills" : [
									"Microsoft Word",
									"Excel",
									"MS Project"
								],
								"Involves" : {
									"Project" : {
										"code" : "P002",
										"deadlines" : "20-June-2020"
									}
								}
							}
						},
						{
							"EMPLOYEE" : {
								"e#" : "E004",
								"first-name" : "Feng",
								"last-name" : "Feng",
								"address" : "Yishun",
								"skills" : [
									"Microsoft Word",
									"Excel",
									"MS Project"
								],
								"Involves" : {
									"Project" : {
										"code" : "P002",
										"deadlines" : "20-June-2020"
									}
								}
							}
						}
					]
				}
			}
		]
	}
}
> 

