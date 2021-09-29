db.customerOrder.insert (
{
  "firstName": "Andrew",
  "lastName": "Smith",
  "email": "aSmith@gmail.com",
  "address": {
    "street": "Clementi Road",
    "houseNumber": "123",
    "postalCode": "599491",
    "country": "Singapore"
  },
  "orders": [
    {
      "orderNumber": "ord001",
      "orderDate": "10-MAY-2019",
      "staffNumber": "stf123",
      "lineItem": [
        {
          "lineNum": 1,
          "productCode": "p001",
          "productDesc": "Note-book",
          "orderQty": 2,
          "price": {
            "currency": "SGD",
            "value": 4800
          }
        },
        {
          "lineNum": 2,
          "productCode": "s005",
          "productDesc": "4TB Hard-disk",
          "orderQty": 1,
          "price": {
            "currency": "USD",
            "value": 350
          }
        },
        {
          "lineNum": 3,
          "productCode": "a001",
          "productDesc": "ear-piece",
          "orderQty": 1,
          "price": {
            "currency": "SGD",
            "value": 10
          }
        }
      ]
    },
    {
      "orderNumber": "ord005",
      "orderDate": "15-MAY-2019",
      "staffNumber": "stf890",
      "lineItem": [
        {
          "lineNum": 1,
          "productCode": "p002",
          "productDesc": "Personal Computer",
          "orderQty": 1,
          "price": {
            "currency": "SGD",
            "value": 1400
          }
        },
        {
          "lineNum": 2,
          "productCode": "a005",
          "productDesc": "Laser Printer",
          "orderQty": 1,
          "price": {
            "currency": "USD",
            "value": 250
          }
        }
      ]
    }
  ]
}
);

db.customerOrder.insert (
{
  "firstName": "Jennifer",
  "lastName": "Brown",
  "email": "jBrown@gmail.com",
  "address": {
    "street": "Steven Road",
    "houseNumber": "321",
    "postalCode": "847392",
    "country": "Singapore"
  },
  "orders": [
    {
      "orderNumber": "ord003",
      "orderDate": "15-MAY-2019",
      "staffNumber": "stf123",
      "lineItem": [
        {
          "lineNum": 1,
          "productCode": "p001",
          "productDesc": "Note-book",
          "orderQty": 2,
          "price": {
            "currency": "SGD",
            "value": 4800
          }
        },
        {
          "lineNum": 2,
          "productCode": "s005",
          "productDesc": "4TB Hard-disk",
          "orderQty": 1,
          "price": {
            "currency": "USD",
            "value": 350
          }
        },
        {
          "lineNum": 3,
          "productCode": "a001",
          "productDesc": "ear-piece",
          "orderQty": 1,
          "price": {
            "currency": "SGD",
            "value": 10
          }
        }
      ]
    },
    {
      "orderNumber": "ord004",
      "orderDate": "25-MAY-2019",
      "staffNumber": "stf890",
      "lineItem": [
        {
          "lineNum": 1,
          "productCode": "p002",
          "productDesc": "Personal Computer",
          "orderQty": 1,
          "price": {
            "currency": "SGD",
            "value": 1400
          }
        },
        {
          "lineNum": 2,
          "productCode": "a005",
          "productDesc": "Laser Printer",
          "orderQty": 1,
          "price": {
            "currency": "USD",
            "value": 250
          }
        }
      ]
    }
  ]
}
);