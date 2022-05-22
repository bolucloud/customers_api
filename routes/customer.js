const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = "customer-list";

router.get("/", async (req, res) => {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      customerId: req.query.customerId,
    },
  };
  await dynamodb
    .get(params)
    .promise()
    .then(
      (response) => {
        res.json(response.Item);
      },
      (error) => {
        console.error(error);
        res.status(500).send(error);
      }
    );
});

router.get("/all", async (req, res) => {
  const params = {
    TableName: dynamodbTableName,
  };
  try {
    const allCustomers = await scanDynamoRecords(params, []);
    const body = {
      customers: allCustomers,
    };
    res.json(body);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const params = {
    TableName: dynamodbTableName,
    Items: req.body,
  };
  await dynamodb
    .put(params)
    .promise()
    .then(
      () => {
        const body = {
          Operation: "SAVE",
          Message: "SUCCESS",
          Item: req.body,
        };
        res.json(body);
      },
      (error) => {
        console.error(error);
        res.status(500).send(error);
      }
    );
});

router.patch("/", async (req, res) => {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      customerId: req.body.productId,
    },
    UpdateExpression: `set ${req.body.updateKey} = :value`,
    ExpressionAttributeValues: {
      ":value": req.body.updateValue,
    },
    ReturnValues: "UPDATED_NEW",
  };
  await dynamodb
    .update(params)
    .promise()
    .then(
      (response) => {
        const body = {
          Operation: "UPDATE",
          Message: "SUCCESS",
          UpdatedAttributes: response,
        };
        res.json(body);
      },
      (error) => {
        console.error(error);
        res.status(500).send(error);
      }
    );
});

router.delete("/", async (req, res) => {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      customerId: req.body.customerId,
    },
    ReturnValues: "ALL_OLD",
  };
  await dynamodb
    .delete(params)
    .promise()
    .then(
      (response) => {
        const body = {
          Operation: "DELETE",
          Message: "SUCCESS",
          Item: response,
        };
        res.json(body);
      },
      (error) => {
        console.error(error);
        res.status(500).send(error);
      }
    );
});

async function scanDynamoRecords(scanParams, itemArray) {
  try {
    const dynamodb = await dynamodb.scan(scanParams).promise();
    itemArray = itemArray.concat(dynamoData.items);
    if (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamodb.LastEvaluatedKey;
      return await scanDynamoRecords(scanParams, itemArray);
    }
    return itemArray;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = router;
