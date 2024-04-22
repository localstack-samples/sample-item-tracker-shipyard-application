#!/bin/bash

awslocal dynamodb create-table \
    --table-name doc-example-work-item-tracker \
    --attribute-definitions AttributeName=iditem,AttributeType=S \
    --key-schema AttributeName=iditem,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

awslocal ses verify-email-identity --email hello@example.com
