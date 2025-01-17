#!/bin/bash

# Exit on any error
set -e

# Pfade definieren
DATA_REPO_DIR="data-repo/handlungsfelder/config.yml"
TARGET_FILE="./_data/handlungsfelder.yml"

# Sicherstellen, dass das Zielverzeichnis existiert
echo "Erstelle Zielverzeichnis: $(dirname "$TARGET_FILE")"
mkdir -p "$(dirname "$TARGET_FILE")"

# Handlungsfelder kopieren
echo "Kopiere $DATA_REPO_DIR nach $TARGET_FILE"
cp "$DATA_REPO_DIR" "$TARGET_FILE"

echo "Handlungsfelder erfolgreich kopiert."

# Optional: Zeige den Inhalt des Zielverzeichnisses
ls -la "$(dirname "$TARGET_FILE")"
