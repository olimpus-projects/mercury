#!/bin/sh
set -e

# Optional runtime env injection. Safe no-op if prerequisites are missing.
if [ -f /usr/share/nginx/html/env.template.js ] && command -v envsubst >/dev/null 2>&1; then
  echo "Generating /usr/share/nginx/html/env.js from env.template.js"
  envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js
else
  echo "No env.template.js or envsubst not found; skipping env injection"
fi

