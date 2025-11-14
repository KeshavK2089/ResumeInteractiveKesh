#!/bin/bash

# GitHub Pages Static Build Script
# This script builds the frontend for GitHub Pages deployment

set -e

echo "🏗️  Building static site for GitHub Pages..."

# Set repository name (update this to match your GitHub repo name)
# For root domain (username.github.io), leave REPO_NAME empty
REPO_NAME="${REPO_NAME:-}"

# Set base path
if [ -z "$REPO_NAME" ]; then
  BASE_PATH="/"
  echo "📦 Building for root domain (username.github.io)"
else
  BASE_PATH="/$REPO_NAME/"
  echo "📦 Building for repository: $REPO_NAME"
fi

# Build output directory (vite config default)
BUILD_DIR="dist/public"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf "$BUILD_DIR"

# Build frontend with correct base path
echo "⚙️  Building frontend..."
npx vite build --base="$BASE_PATH"

# Copy assets to build output
echo "📂 Copying assets..."
cp -r attached_assets "$BUILD_DIR/"

# Create 404.html for SPA routing (GitHub Pages requirement)
echo "📄 Creating 404.html..."
cp "$BUILD_DIR/index.html" "$BUILD_DIR/404.html"

# Create .nojekyll file to prevent GitHub from processing with Jekyll
echo "🚫 Creating .nojekyll..."
touch "$BUILD_DIR/.nojekyll"

echo "✅ Build complete! Static files are in $BUILD_DIR/"
echo ""
echo "To deploy manually:"
echo "1. Push this code to GitHub"
echo "2. Go to Settings > Pages"
echo "3. Select 'GitHub Actions' as source"
echo "4. The workflow will deploy automatically on push to main"
