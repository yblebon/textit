// config.js
// Keep this file private or .gitignore it if using PAT
window.APP_CONFIG = {
  // GitHub repository in owner/repo format
  repo: "yblebon/hooks",

  // Personal Access Token with 'repo' and 'workflow' scopes
  token: "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",

  // Workflow filename (without .yml)
  workflow: "encrypt-text",

  jsonbin_secret: "$2a$10$8qw30gB0SSt5BbqO9BqoL.h0z3ZWiT8f1sBr3VLsqy4ClnjXfyUTG",

  jsonbin_id: "691b06d443b1c97be9b2f2e0",
  jsonbin_list_url: "https://api.jsonbin.io/v3/b/691b06d443b1c97be9b2f2e0/latest",

  crypto: {
name: "AES-GCM",
    saltBytes: 16,        // ← Now used everywhere
    ivBytes: 12,          // ← Now used everywhere
    iterations: 250000,
    hash: "SHA-256",
    keyLength: 256
  }
};