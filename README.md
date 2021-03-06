# Customers API

Created a simple customers API for an e-commerce store.

## Status

Resources destroyed in tf. Code 100% functional.

### Stack

- Node.js
- Express
- AWS
  - Dynamodb
  - Elastic Beanstalk
  - IAM
  - S3

Endpoint: http://bolucloudcustomerapi-env.eba-jbpezmim.us-east-1.elasticbeanstalk.com

Create/Post: /customers \
Read/Get: /customer/:customerId \
Read/Get all customers: /customer/all \
Update/Patch: /customer/:customerId \
Delete: /customers

### Sample Customer Data

`{ "customerId": "1725", "first_name": "Jesus", "last_name": "Gamlyn", "email": "jgamlyn9@toplist.cz", "gender": "Male", "ip_address": "78.93.198.83", "city": "Brockton", "state": "Massachusetts", "payment_card": "5108759300101780", "payment_card_type": "mastercard" }`

## Architecture

![customer api cloud architecture diagram](/customers_api.png)

## Status

Resources destroyed in tf. Code 100% functional.
