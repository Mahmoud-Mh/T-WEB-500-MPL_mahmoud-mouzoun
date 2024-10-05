#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
    echo "Error: No commit message provided."
    echo "Usage: ./push_that.sh \"Your commit message\""
    exit 1
fi

# Add all files in the current directory
git add .

# Commit with the provided message
git commit -m "$1"

# Push changes to the repository
git push origin main
