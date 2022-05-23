# Customers API

Status: **in-progress**

Created a simple customers API for an ecommerce store.

Technology Stack

- Node.js
- Express
- AWS
  - Dynamodb
  - Elastic Beanstalk
  - IAM
  - S3

Endpoint: http://bolucloudcustomerapi-env.eba-jbpezmim.us-east-1.elasticbeanstalk.com

Create/Post: /customers
Get: /customer/:customerId
Get all customers: /customer/all
Update/Patch - /customer/:customerId
Delete - /customers

_Sample customer data_
`{ "customerId": "1725", "first_name": "Jesus", "last_name": "Gamlyn", "email": "jgamlyn9@toplist.cz", "gender": "Male", "ip_address": "78.93.198.83", "city": "Brockton", "state": "Massachusetts", "payment_card": "5108759300101780", "payment_card_type": "mastercard" }`
