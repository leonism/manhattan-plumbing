# DNS for AI Discovery (DNS-AID) & DNSSEC Guide

This guide describes how to publish standard DNS for AI Discovery (DNS-AID) records for your domain under the `_agents` namespace (RFC 9460 / RFC 8288 / DNS-AID Draft). It also explains how to configure and validate **DNSSEC** (Domain Name System Security Extensions) so validating agent resolvers return authenticated data.

---

## 1. Why DNSSEC is Mandatory
To prevent DNS spoofing, cache poisoning, and man-in-the-middle attacks, AI discovery agents validate signatures via DNSSEC.
- Without DNSSEC, resolvers cannot verify the authenticity of the records.
- Agent scanners (like `isitagentready.com`) will report the DNS-AID records as **invalid/unverified** if DNSSEC signatures (`RRSIG`) are missing or fail validation.

### How to Enable DNSSEC (Cloudflare)
If your domain is managed by Cloudflare:
1. Log in to your Cloudflare Dashboard.
2. Select your domain (e.g. `manhattan-plumbing.com`).
3. Navigate to **DNS** > **Settings**.
4. Scroll down to **DNSSEC** and click **Enable DNSSEC**.
5. Cloudflare will generate a **DS record**.
6. Copy the DS record details (Key Tag, Algorithm, Digest Type, Digest) and add them to your domain registrar's settings (e.g. Namecheap, GoDaddy, Hover) to establish the Chain of Trust.

---

## 2. DNS-AID Record Requirements
You should publish two types of records under your domain's `_agents` namespace:
- **`_index._agents`**: Points to the main human-readable discovery page/file (such as `llms.txt` or a home page).
- **`_a2a._agents`**: Points to the machine-readable API catalog (`/.well-known/api-catalog`).

Both records use **ServiceMode** `HTTPS` or `SVCB` format to pass connection parameters like `alpn` (Application-Layer Protocol Negotiation) and endpoint targets.

---

## 3. Copy-Pasteable DNS Records

### BIND / Zone File Format
Add the following lines to your DNS zone file (replace `manhattan-plumbing.pages.dev.` with your custom domain if applicable):

```dns
; DNS-AID Records for Agent Discovery (RFC 9460)
_index._agents.manhattan-plumbing.pages.dev. 3600 IN HTTPS 1 manhattan-plumbing.pages.dev. alpn="h2,h3" port=443 mandatory=alpn,port
_a2a._agents.manhattan-plumbing.pages.dev.   3600 IN SVCB  1 manhattan-plumbing.pages.dev. alpn="a2a"   port=443 mandatory=alpn,port
```

### Cloudflare / Dashboard Format
If adding manually through your DNS UI:

| Type | Name | Content / Value | TTL |
| :--- | :--- | :--- | :--- |
| **HTTPS** | `_index._agents` | `1 manhattan-plumbing.pages.dev. alpn="h2,h3" port=443 mandatory=alpn,port` | Auto (3600) |
| **SVCB** | `_a2a._agents` | `1 manhattan-plumbing.pages.dev. alpn="a2a" port=443 mandatory=alpn,port` | Auto (3600) |

---

## 4. Verification

After saving the records and completing DNSSEC activation, verify the resolution using the standard command-line tools:

### Verify DNSSEC Status (Chain of Trust)
```bash
dig +dnssec manhattan-plumbing.pages.dev DS
```
Check that a valid DS record returns.

### Verify DNS-AID Records and DNSSEC Authentication
Query the `_index._agents` record and check for the `ad` (Authentic Data) flag in the header:
```bash
dig +dnssec _index._agents.manhattan-plumbing.pages.dev HTTPS
```

In the response header, look for `flags: qr rd ra ad` — the presence of **`ad`** confirms that your DNS provider signed the zone, and the validating resolver successfully verified the signatures!
