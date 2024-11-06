#!/bin/bash

rm -rf playwright-report test-results test-report results
find . -type d -name ".auth" -exec rm -rf {} \; 2>/dev/null
