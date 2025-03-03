# Cloudflare Pages Build Hook Setup

After deploying to Cloudflare Pages:

1. Go to your Cloudflare Pages project
2. Navigate to Settings > Builds & deployments > Build hooks
3. Create a new build hook named "Ghost Content Update"
4. Copy the generated webhook URL

Then, in your Ghost admin:
1. Go to Settings → Integrations → Add custom integration
2. Name it "Cloudflare Deployment"
3. In the Webhooks section, add a new webhook:
   - Event: "Site" (to trigger on all content updates)
   - Target URL: Paste the Cloudflare webhook URL you copied 