# GitHub Pages Deployment Guide

This guide will help you deploy your resume website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer (or use Replit's Git integration)

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `my-resume` or `portfolio`
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README (we already have code)

### 2. Push Your Code to GitHub

#### Option A: Using Git Command Line

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Resume website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using Replit Git Integration

1. Click the "Version Control" button in Replit sidebar
2. Connect to GitHub when prompted
3. Create new repository or connect to existing one
4. Commit and push your changes

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **GitHub Actions**
5. Click **Save**

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your static site
- Copy all assets (images, PDFs)
- Deploy to GitHub Pages

Every time you push to the `main` branch, your site will automatically redeploy!

## Your Site URL

After deployment (takes 2-3 minutes), your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
- Repository: `john-doe/my-resume`
- URL: `https://john-doe.github.io/my-resume/`

### Using a Custom Domain (Optional)

If you own a domain name:

1. Go to Settings > Pages in your GitHub repository
2. Add your custom domain (e.g., `www.yourname.com`)
3. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. Wait for DNS propagation (up to 24 hours)

## Manual Build (Optional)

If you want to build and test locally before deploying:

```bash
# For repository deployment (username.github.io/repo-name)
REPO_NAME=your-repo-name ./build-github-pages.sh

# For root domain deployment (username.github.io)
./build-github-pages.sh

# The built files will be in dist/public/
# You can test them with any static file server
```

## Troubleshooting

### Site shows 404 error
- Make sure GitHub Pages is enabled in Settings > Pages
- Check that the workflow completed successfully in the Actions tab
- Verify the base path matches your repository name

### Images/PDFs not loading
- Check browser console for errors
- Verify `attached_assets` folder was included in the build
- Ensure paths in code use relative paths (starting with `/`)

### Build fails in GitHub Actions
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (workflow uses Node 20)

## Making Updates

To update your site:

1. Make changes to your code in Replit
2. Commit changes: `git add . && git commit -m "Update resume"`
3. Push to GitHub: `git push`
4. GitHub Actions will automatically rebuild and deploy

## Cost

**100% FREE!** 
- GitHub Pages is free for public repositories
- No server costs
- PDFs are cached efficiently (1 year cache)
- No email API costs (contact info display only)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
