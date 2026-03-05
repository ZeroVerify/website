#!/bin/bash
set -e

echo "Compiling Typst docs to Markdown..."
cd typst-docs && make markdown && cd ..

SRC_DIR="typst-docs/output"
DEST_DIR="src/lib/docs"
mkdir -p "$DEST_DIR"

if [ -d "$SRC_DIR" ]; then
  cp "$SRC_DIR"/*.md "$DEST_DIR"/
  echo "Docs compiled and copied successfully to $DEST_DIR."
else
  echo "Source directory $SRC_DIR does not exist. No files copied."
fi
