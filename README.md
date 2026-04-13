🚀 Full DevOps Project – Cloudflare + Google Cloud + CI/CD
📌 Overview

This project demonstrates a complete DevOps pipeline integrating edge computing, containerized backend services, and secure CI/CD deployment.

🏗️ Architecture
Frontend served via Cloudflare Pages (CDN)
Edge layer using Cloudflare Workers (caching + proxy)
Backend API deployed on Google Cloud Run (Dockerized Node.js)
CI/CD pipeline using GitHub Actions with OIDC authentication (no static credentials)

🔁 Request Flow
User accesses frontend via CDN
Frontend calls API endpoint
Cloudflare Worker intercepts request
Worker checks cache:
If HIT → returns cached response
If MISS → forwards request to backend
Cloud Run processes request
Response returns via Worker → cached → sent to frontend

⚙️ CI/CD Pipeline
Trigger: git push
GitHub Actions workflow:
Authenticates with Google Cloud via OIDC
Builds container image
Deploys to Cloud Run
No service account keys used (secure by design)

🔐 Security
Workload Identity Federation (OIDC)
No hardcoded credentials
IAM-based access control

🧰 Tech Stack
Cloudflare Pages & Workers
Google Cloud Run
Docker
GitHub Actions
Node.js (Express)

🌐 Live API
https://bia-backend-385463161787.us-central1.run.app/api/products
📈 Key Learnings
Debugging IAM and permission issues in cloud environments
Implementing secure CI/CD without service account keys
Designing edge-based architectures with caching
Deploying containerized applications in production
