/*==============================
Name - Hay Munn Hnin Wai
UOW Id - 6573277
Assignment 3 - Task 2
================================*/

/* Q.2a - Find all customer orders' detail by customer from Singapore who have ever made
order after 1 April 2020.  */ 
> db.customerOrder.find({"$and":[{"orders.orderDate":{"$gt":new ISODate("2020-04-01T00:00:00Z")}},{"address.country":"Singapore"}]}).pretty()
{
	"_id" : ObjectId("5ec4e98dead20faad11c3878"),
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
			"staffNumber" : "stf890",
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
	"_id" : ObjectId("5ec4e98dead20faad11c3879"),
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

/* Q.2b- Find the first name, last name, emails, and address of customers from Singapore
who have ever bought a personal computer.*/ 
> db.customerOrder.find({"$and":[{"address.country":"Singapore"}, {"orders.lineItem.productDesc":"Personal Computer"}]},  {"firstName":1, "lastName":1,"email":1,"address":1}).pretty()
{
	"_id" : ObjectId("5ec4e98dead20faad11c3879"),
	"firstName" : "Jennifer",
	"lastName" : "Brown",
	"email" : "jBrown@gmail.com",
	"address" : {
		"street" : "Steven Road",
		"houseNumber" : "321",
		"postalCode" : "847392",
		"country" : "Singapore"
	}
}

/* Q.2c- Find the first name, last name and email of customer who have no telephone. */ 
> db.customerOrder.find({"phone": {"$exists": false}},{"firstName":1,"lastName":1, "email":1 }).pretty() 
{
	"_id" : ObjectId("5ec4e98dead20faad11c3877"),
	"firstName" : "Andrew",
	"lastName" : "Smith",
	"email" : "aSmith@gmail.com"
}
{
	"_id" : ObjectId("5ec4e98dead20faad11c3879"),
	"firstName" : "Jennifer",
	"lastName" : "Brown",
	"email" : "jBrown@gmail.com"
} 

/* Q.2d- Find the first name, last name, date of birth (DOB), and the language of customers
who speak both English and Mandarin.*/ 
> db.customerOrder.find({"language":{"$all":["English","Mandarin"]}}, {"firstName":1 ,"lastName":1, "DOB":1, "language":1 }).pretty()
{
	"_id" : ObjectId("5ec4e98dead20faad11c3876"),
	"firstName" : "Andrew",
	"lastName" : "Lee",
	"DOB" : ISODate("1974-10-28T00:00:00Z"),
	"language" : [
		"English",
		"Mandarin"
	]
}
{
	"_id" : ObjectId("5ec4e98dead20faad11c3878"),
	"firstName" : "Brandon",
	"lastName" : "Xing",
	"DOB" : ISODate("1984-02-09T00:00:00Z"),
	"language" : [
		"English",
		"Mandarin",
		"Japanese"
	]
}

/* Q.2e- Find the first name, last name, address, and balance of customer whose balance is
in a range between 1000 and 2500.*/
> db.customerOrder.find({"balance" : {"$gt":1000 , "$lt":2500 }}, {"firstName":1, "lastName":1 , "address":1 , "balance": 1}).pretty() 
{
	"_id" : ObjectId("5ec4e98dead20faad11c3879"),
	"firstName" : "Jennifer",
	"lastName" : "Brown",
	"address" : {
		"street" : "Steven Road",
		"houseNumber" : "321",
		"postalCode" : "847392",
		"country" : "Singapore"
	},
	"balance" : 1200
}

/* Q.2f- Find the first name, last name, and email of customer who bought MicroSD. Do not
list the object id of the customer.*/
> db.customerOrder.find({"orders.lineItem.productDesc": {"$regex" : /MicroSD$/ }}, {"firstName":1, "lastName":1, "email":1 , "_id":0 }).pretty() 
{ "firstName" : "Andrew", "lastName" : "Lee", "email" : "mark@gmail.com" }
{
	"firstName" : "Brandon",
	"lastName" : "Xing",
	"email" : "brandon@gmail.com"
}




