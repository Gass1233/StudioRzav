# RZAV Website Deployment Guide

This is the simple version. Follow the steps slowly, one at a time.

## Your Website Folder

This is the folder that must be connected to GitHub and Netlify:

```text
C:\Users\Aleksa\Documents\Codex\2026-05-18\you-are-an-award-winning-creative\StudioRzav
```

Do not upload only one file. The website is the whole `StudioRzav` folder.

## Before Uploading

These settings are already prepared:

```text
Build command: npm run build
Publish directory: out
```

Netlify will read these from:

```text
netlify.toml
```

Do not manually upload these folders:

```text
node_modules
.next
out
dist
```

They are already hidden from GitHub by `.gitignore`.

## Step 1: Install GitHub Desktop

1. Open Google.
2. Search for `GitHub Desktop`.
3. Download it from GitHub.
4. Install it.
5. Open GitHub Desktop.
6. Sign in with your GitHub account.

## Step 2: Put The Website On GitHub

1. In GitHub Desktop, click `File`.
2. Click `Add local repository`.
3. Choose this folder:

```text
C:\Users\Aleksa\Documents\Codex\2026-05-18\you-are-an-award-winning-creative\StudioRzav
```

4. If GitHub Desktop says this is not a repository, click `create a repository`.
5. Name it:

```text
rzav-portfolio
```

6. Click `Create repository`.
7. On the left, GitHub Desktop will show many website files.
8. In the small box called `Summary`, type:

```text
Initial website
```

9. Click `Commit to main`.
10. Click `Publish repository`.
11. You can leave it private or make it public.
12. Click `Publish repository` again.

Now the website files are on GitHub.

## Step 3: Put The Website On Netlify

1. Go to Netlify.
2. Sign in.
3. Click `Add new site`.
4. Click `Import an existing project`.
5. Choose `GitHub`.
6. Pick your website repository:

```text
rzav-portfolio
```

7. If Netlify asks for settings, use these:

```text
Build command: npm run build
Publish directory: out
```

8. Leave `Base directory` empty.
9. Click `Deploy site`.
10. Wait until Netlify finishes.
11. When it says `Published`, click the website link.

## If Netlify Shows Page Not Found

Check this first:

```text
Publish directory must be: out
```

If it says anything else, change it to `out`, then deploy again.

## If Netlify Asks For Node Version

Use:

```text
22
```

This is already set in `netlify.toml`.

## How To Update The Website Later

1. Make changes to the website.
2. Open GitHub Desktop.
3. Type a short message in `Summary`, for example:

```text
Update website
```

4. Click `Commit to main`.
5. Click `Push origin`.
6. Netlify will automatically update the live website.

You do not need to upload to Netlify again manually.
