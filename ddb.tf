resource "aws_dynamodb_table" "customers_table" {
  name         = "customer-list-api"
  hash_key     = "customerId"
  billing_mode = "PAY_PER_REQUEST"
  #   read_capacity  = 5
  #   write_capacity = 5

  attribute {
    name = "customerId"
    type = "S"
  }

  tags = {
    gh-project = "customers_api"

  }
}
