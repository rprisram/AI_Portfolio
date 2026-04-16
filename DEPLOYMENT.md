# GCP Cloud Run Deployment Guide

Follow these steps to deploy or update your AI Portfolio on Google Cloud.

## 1. Project Initialization
```bash
# Set your production Project ID
PROJECT_ID="priyaraman-ai-portfolio"
gcloud config set project $PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com artifactregistry.googleapis.com secretmanager.googleapis.com
```

## 2. Secure Secret Management (One-time Setup)
The AI Assistant uses `GOOGLE_API_KEY` for Gemini SDK authentication.
1. Create a secret named `GOOGLE_API_KEY` in the [Secret Manager console](https://console.cloud.google.com/security/secret-manager).
2. Map the "Secret Manager Secret Accessor" role to the Compute Engine default service account:
   ```bash
   gcloud secrets add-iam-policy-binding GOOGLE_API_KEY \
     --member="serviceAccount:$(gcloud projects describe $PROJECT_ID --format='get(projectNumber)')-compute@developer.gserviceaccount.com" \
     --role="roles/secretmanager.secretAccessor"
   ```

## 3. Build & Push (Cross-Compilation)
**Important**: Cloud Run requires `linux/amd64`. If you are building from a Mac (ARM64), use the `--platform` flag.

```bash
REGION="us-central1"
REPO_NAME="portfolio-repo"

# Authenticate Docker
gcloud auth configure-docker $REGION-docker.pkg.dev

# Build for x86 architecture
docker build --platform linux/amd64 -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/ai-portfolio:latest .

# Push to Artifact Registry
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/ai-portfolio:latest
```

## 4. Deploy to Cloud Run
Deploy the service and mount the Secret Manager version.

```bash
gcloud run deploy priyaraman-ai-portfolio \
    --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/ai-portfolio:latest \
    --platform managed \
    --region $REGION \
    --set-secrets="GOOGLE_API_KEY=GOOGLE_API_KEY:latest" \
    --allow-unauthenticated
```

---

## 🛠 Maintenance
- **Updating Features**: Commit your code, re-run Build & Push, then re-deploy.
- **Updating AI Memory**: Modify `src/data/digital_twin_context.json`, rebuild, and push.
