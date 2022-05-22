resource "aws_s3_bucket" "customer_api_bucket" {
  bucket = "bolucloud-customer-api-bucket"
  acl    = "public-read"
  tags = {
    gh-project = "customers_api"
  }
}

resource "aws_s3_bucket_object" "customer_api_ebs_deployment" {
  bucket = aws_s3_bucket.customer_api_bucket.id
  key    = "customer-api-key"
  source = "./Archive.zip"
  tags = {
    gh-project = "customers_api"
  }
}
