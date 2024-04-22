#!/bin/bash

# Array of common English names
NAMES=("Alice" "Bob" "Charlie" "David" "Emma" "Frank" "Grace" "Henry" "Ivy" "Jack")

# Array of guide options
GUIDES=("dotnet" "cpp" "go" "java" "js" "php" "python" "ruby" "rust")

# Array of status options
STATUSES=("Todo" "In Progress" "Done")

# Loop to generate 20 curl requests
for ((i=0; i<20; i++)); do
    # Randomly select name, guide, and status
    NAME=${NAMES[$(($RANDOM % ${#NAMES[@]}))]}
    GUIDE=${GUIDES[$(($RANDOM % ${#GUIDES[@]}))]}
    STATUS=${STATUSES[$(($RANDOM % ${#STATUSES[@]}))]}

    # Generate curl request
    CURL_CMD="curl -X POST http://localhost:8080/api/items \
    -H \"Content-Type: application/json\" \
    -d '{\"name\":\"$NAME\",\"guide\":\"$GUIDE\",\"description\":\"Show how to add an item\",\"status\":\"$STATUS\",\"archived\":false}'"

    # Print curl command
    echo "Request $((i+1)):"
    echo "$CURL_CMD"
    echo

    # Execute curl command
    # Uncomment below line to actually execute the curl requests
    eval $CURL_CMD

done
