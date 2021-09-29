/*==============================
Name - Hay Munn Hnin Wai
UOW Id - 6573277
Assignment 3 - Task 3
================================*/

/* Q(3a) - List the first name and last name of customer who made the order ord001.*/ 
> db.customerOrder.aggregate([{ "$match": {"orders.orderNumber": "ord001"} }, 
							{"$project": {"firstName": 1, "lastName":1 , "_id":0 }}]).pretty()  
{ "firstName" : "Andrew", "lastName" : "Smith" }
{ "firstName" : "Brandon", "lastName" : "Xing" }


/* Q(3b) - Find the order number (orderNumber) of the order that was attended by a staff
whose staff number = stf890.*/ 
>db.customerOrder.aggregate([  {"$unwind": "$orders"}, 
					{"$match": {"orders.staffNumber": "stf890"} }, 
					{ "$project" : {"orders.orderNumber" :1 , "_id":0 }}]).pretty() 

{ "orders" : { "orderNumber" : "ord005" } }
{ "orders" : { "orderNumber" : "ord005" } }
{ "orders" : { "orderNumber" : "ord004" } }


/*Q(3c) - Find the first and last name of customer who have made orders on 15-MAY-2020. */ 
> db.customerOrder.aggregate( [{"$unwind": "$orders"},
					 {"$match":  {"orders.orderDate": {"$eq": ISODate("2020-05-15T00:00:00Z")}}}, 
					 {"$project": {"firstName" :1, "lastName":1, "_id":0 }}]).pretty()

{ "firstName" : "Jennifer", "lastName" : "Brown" }
 
 
/* Q(3d) - Find the total number of orders made by each customer. For each customer, list
his/her email address and the total number of orders performed.*/ 
> db.customerOrder.aggregate([ {"$project": { "email":1, "_id":0, "Total number of Orders": {"$size":"$orders" }}} ]).pretty()  
{ "email" : "mark@gmail.com", "Total number of Orders" : 3 }
{ "email" : "aSmith@gmail.com", "Total number of Orders" : 2 }
{ "email" : "brandon@gmail.com", "Total number of Orders" : 2 }
{ "email" : "jBrown@gmail.com", "Total number of Orders" : 2 }

/* Q(3e) - Change the staff number of order number ord005 to stf789*/ 

/*Update Multiple Array Elements In Multiple Documents that Match the given ArrayFilters */  
> db.customerOrder.updateMany({} ,{"$set": {"orders.$[elem].staffNumber":"stf789"}}, {arrayFilters:[{"elem.orderNumber":"ord005"}]} )

{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 3 }
> db.customerOrder.find().pretty()
{
	"_id" : ObjectId("5ecb0fddcfd6327d537e4590"),
	"firstName" : "Andrew",
	"lastName" : "Lee",
	"DOB" : ISODate("1974-10-28T00:00:00Z"),
	"phone" : "+1 (959) 567-3312",
	"email" : "mark@gmail.com",
	"address" : {
		"street" : "Cornish Street, Victoria",
		"houseNumber" : "68",
		"postalCode" : "3024",
		"country" : "Australia"
	},
	"language" : [
		"English",
		"Mandarin"
	],
	"balance" : 0,
	"orders" : [
		{
			"orderNumber" : "ord003",
			"orderDate" : ISODate("2020-01-10T00:00:00Z"),
			"staffNumber" : "stf789",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "256GB MicroSD",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 90
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord003",
			"orderDate" : ISODate("2020-03-17T00:00:00Z"),
			"staffNumber" : "stf444",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "4TB Hard-disk",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 350
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord005",
			"orderDate" : ISODate("2020-02-22T00:00:00Z"),
			"staffNumber" : "stf789",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p002",
					"productDesc" : "Personal Computer",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 1400
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "a005",
					"productDesc" : "Laser Printer",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 250
					}
				}
			]
		}
	]
}
{
	"_id" : ObjectId("5ecb0fddcfd6327d537e4591"),
	"firstName" : "Andrew",
	"lastName" : "Smith",
	"DOB" : ISODate("1970-05-10T00:00:00Z"),
	"email" : "aSmith@gmail.com",
	"address" : {
		"street" : "Lafayette Lane West Lafayette",
		"houseNumber" : "734",
		"postalCode" : "47906",
		"country" : "USA"
	},
	"language" : [
		"English"
	],
	"balance" : 2600,
	"orders" : [
		{
			"orderNumber" : "ord001",
			"orderDate" : ISODate("2020-04-23T00:00:00Z"),
			"staffNumber" : "stf123",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "2TB Hard-disk",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 150
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord005",
			"orderDate" : ISODate("2020-04-16T00:00:00Z"),
			"staffNumber" : "stf789",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p002",
					"productDesc" : "Personal Computer",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 1400
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "a005",
					"productDesc" : "Laser Printer",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 250
					}
				}
			]
		}
	]
}
{
	"_id" : ObjectId("5ecb0fddcfd6327d537e4592"),
	"firstName" : "Brandon",
	"lastName" : "Xing",
	"DOB" : ISODate("1984-02-09T00:00:00Z"),
	"phone" : "+65 (65) 697288",
	"email" : "brandon@gmail.com",
	"address" : {
		"street" : "Boon Keng Road",
		"houseNumber" : "103",
		"postalCode" : "339774",
		"country" : "Singapore"
	},
	"language" : [
		"English",
		"Mandarin",
		"Japanese"
	],
	"balance" : 300,
	"orders" : [
		{
			"orderNumber" : "ord001",
			"orderDate" : ISODate("2020-02-10T00:00:00Z"),
			"staffNumber" : "stf123",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "512GB MicroSD",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 90
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord005",
			"orderDate" : ISODate("2020-04-10T00:00:00Z"),
			"staffNumber" : "stf789",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p002",
					"productDesc" : "Mobile phone",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 1400
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "a005",
					"productDesc" : "Laser Printer",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 250
					}
				}
			]
		}
	]
}
{
	"_id" : ObjectId("5ecb0fddcfd6327d537e4593"),
	"firstName" : "Jennifer",
	"lastName" : "Brown",
	"DOB" : ISODate("1963-03-06T00:00:00Z"),
	"email" : "jBrown@gmail.com",
	"address" : {
		"street" : "Steven Road",
		"houseNumber" : "321",
		"postalCode" : "847392",
		"country" : "Singapore"
	},
	"language" : [
		"English",
		"German"
	],
	"balance" : 1200,
	"orders" : [
		{
			"orderNumber" : "ord003",
			"orderDate" : ISODate("2020-05-15T00:00:00Z"),
			"staffNumber" : "stf123",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "4TB Hard-disk",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 350
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord004",
			"orderDate" : ISODate("2020-02-25T00:00:00Z"),
			"staffNumber" : "stf890",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p002",
					"productDesc" : "Personal Computer",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 1400
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "a005",
					"productDesc" : "Laser Printer",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 250
					}
				}
			]
		}
	]
}

/* Q(3f) -Delete from a collection the documents that contain information about the customers
whose first name is Andrew and the last name is Smith or customers who live in
Singapore. */ 
> db.customerOrder.deleteMany( {"$or": [{"$and":[{"firstName":"Andrew", "lastName":"Smith"}]}, {"address.country":"Singapore"}]})
{ "acknowledged" : true, "deletedCount" : 3 }

> db.customerOrder.find().pretty()
{
	"_id" : ObjectId("5ecb1325cfd6327d537e45a0"),
	"firstName" : "Andrew",
	"lastName" : "Lee",
	"DOB" : ISODate("1974-10-28T00:00:00Z"),
	"phone" : "+1 (959) 567-3312",
	"email" : "mark@gmail.com",
	"address" : {
		"street" : "Cornish Street, Victoria",
		"houseNumber" : "68",
		"postalCode" : "3024",
		"country" : "Australia"
	},
	"language" : [
		"English",
		"Mandarin"
	],
	"balance" : 0,
	"orders" : [
		{
			"orderNumber" : "ord003",
			"orderDate" : ISODate("2020-01-10T00:00:00Z"),
			"staffNumber" : "stf789",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "256GB MicroSD",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 90
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord003",
			"orderDate" : ISODate("2020-03-17T00:00:00Z"),
			"staffNumber" : "stf444",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p001",
					"productDesc" : "Note-book",
					"orderQty" : 2,
					"price" : {
						"currency" : "SGD",
						"value" : 4800
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "s005",
					"productDesc" : "4TB Hard-disk",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 350
					}
				},
				{
					"lineNum" : 3,
					"productCode" : "a001",
					"productDesc" : "ear-piece",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 10
					}
				}
			]
		},
		{
			"orderNumber" : "ord005",
			"orderDate" : ISODate("2020-02-22T00:00:00Z"),
			"staffNumber" : "stf789",
			"lineItem" : [
				{
					"lineNum" : 1,
					"productCode" : "p002",
					"productDesc" : "Personal Computer",
					"orderQty" : 1,
					"price" : {
						"currency" : "SGD",
						"value" : 1400
					}
				},
				{
					"lineNum" : 2,
					"productCode" : "a005",
					"productDesc" : "Laser Printer",
					"orderQty" : 1,
					"price" : {
						"currency" : "USD",
						"value" : 250
					}
				}
			]
		}
	]
}
> 


