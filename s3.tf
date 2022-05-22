resource "aws_s3_bucket" "customer_api_bucket" {
  bucket = "bolucloud-customer-api-bucket"
  tags = {
    gh-project = "customers_api"
  }
}

resource "aws_s3_bucket_acl" "customer_api_bucket_acl" {
  bucket = aws_s3_bucket.customer_api_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_object" "customer_api_ebs_deployment" {
  bucket = aws_s3_bucket.customer_api_bucket.id
  key    = "customer-api-key"
  acl    = "public-read"
  source = "./Archive.zip"
  tags = {
    gh-project = "customers_api"
  }
}
