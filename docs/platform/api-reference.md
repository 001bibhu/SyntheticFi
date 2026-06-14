# API reference

Complete reference for SyntheticFi REST API v1. For concepts and setup, see [API overview](./api-overview.md).

**Base URL:** `https://api.syntheticfi.com/v1`

---

## Authentication

All endpoints require a Bearer token unless marked *Public*.

```
Authorization: Bearer {access_token}
```

See [Authentication](./authentication.md).

---

## Clients

### List clients

```http
GET /clients
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | integer | Max results (default 20, max 100) |
| `cursor` | string | Pagination cursor |
| `advisor_id` | string | Filter by advisor |

**Response `200`:**

```json
{
  "data": [
    {
      "id": "cli_8f3a2b1c",
      "email": "client@example.com",
      "first_name": "Jane",
      "last_name": "Investor",
      "advisor_id": "adv_123",
      "status": "active",
      "created_at": "2026-01-15T10:30:00Z"
    }
  ],
  "has_more": false,
  "next_cursor": null
}
```

---

### Create client

```http
POST /clients
```

**Body:**

```json
{
  "email": "client@example.com",
  "first_name": "Jane",
  "last_name": "Investor",
  "advisor_id": "adv_123",
  "external_id": "crm-998877"
}
```

**Response `201`:** Client object

---

### Get client

```http
GET /clients/{client_id}
```

---

## Accounts

### List linked accounts

```http
GET /clients/{client_id}/accounts
```

**Response `200`:**

```json
{
  "data": [
    {
      "id": "acc_4d5e6f7a",
      "custodian": "interactive_brokers",
      "account_number_last4": "4821",
      "status": "linked",
      "portfolio_value": 2450000.00,
      "currency": "USD",
      "last_synced_at": "2026-06-14T18:00:00Z"
    }
  ]
}
```

---

### Initiate account link

```http
POST /clients/{client_id}/accounts/link
```

**Body:**

```json
{
  "custodian": "schwab",
  "redirect_uri": "https://yourapp.com/oauth/callback"
}
```

**Response `200`:**

```json
{
  "link_url": "https://connect.syntheticfi.com/link/sess_abc123",
  "session_id": "sess_abc123",
  "expires_at": "2026-06-14T19:00:00Z"
}
```

Redirect the user to `link_url` to complete OAuth.

---

## Eligibility

### Check eligibility

```http
POST /eligibility/check
```

**Body:**

```json
{
  "account_id": "acc_4d5e6f7a",
  "requested_amount": 500000.00
}
```

**Response `200`:**

```json
{
  "eligible": true,
  "max_amount": 735000.00,
  "advance_rate": 0.65,
  "portfolio_value": 2450000.00,
  "ineligible_holdings": [],
  "warnings": [
    {
      "code": "concentration",
      "message": "Single position exceeds 25% of portfolio."
    }
  ]
}
```

---

## Term sheets

### Create term sheet

```http
POST /term-sheets
```

**Headers:**

```
Idempotency-Key: unique-key-12345
```

**Body:**

```json
{
  "client_id": "cli_8f3a2b1c",
  "account_id": "acc_4d5e6f7a",
  "amount": 500000.00,
  "term_months": 12
}
```

**Response `201`:**

```json
{
  "id": "ts_9a8b7c6d",
  "status": "pending_acceptance",
  "amount": 500000.00,
  "total_cost": 42500.00,
  "effective_rate_bps": 850,
  "term_months": 12,
  "margin_warning_threshold": 0.75,
  "margin_call_threshold": 0.70,
  "expires_at": "2026-06-17T10:30:00Z",
  "accept_url": "https://app.syntheticfi.com/accept/ts_9a8b7c6d"
}
```

---

### Get term sheet

```http
GET /term-sheets/{term_sheet_id}
```

---

## Financings

### List financings

```http
GET /financings
```

**Query parameters:** `client_id`, `status` (`active`, `closed`, `pending`), `limit`, `cursor`

---

### Get financing

```http
GET /financings/{financing_id}
```

**Response `200`:**

```json
{
  "id": "fin_1a2b3c4d",
  "client_id": "cli_8f3a2b1c",
  "account_id": "acc_4d5e6f7a",
  "status": "active",
  "principal": 500000.00,
  "total_cost": 42500.00,
  "amount_outstanding": 500000.00,
  "term_start": "2026-06-01",
  "term_end": "2027-06-01",
  "collateral_value": 2380000.00,
  "coverage_ratio": 0.82,
  "margin_status": "healthy",
  "funded_at": "2026-06-03T14:22:00Z"
}
```

---

### Execute financing

Submit after term sheet acceptance:

```http
POST /financings
```

**Body:**

```json
{
  "term_sheet_id": "ts_9a8b7c6d"
}
```

**Response `202`:** Financing object with `status: "processing"`

---

### Record repayment

```http
POST /financings/{financing_id}/repayments
```

**Body:**

```json
{
  "amount": 542500.00,
  "method": "ach",
  "reference": "ACH-20260601-001"
}
```

---

## Margin events

### List margin events

```http
GET /margin-events
```

**Query parameters:** `financing_id`, `severity` (`warning`, `call`), `limit`

**Response `200`:**

```json
{
  "data": [
    {
      "id": "mgn_7x8y9z",
      "financing_id": "fin_1a2b3c4d",
      "severity": "warning",
      "coverage_ratio": 0.74,
      "required_action_by": "2026-06-16T17:00:00Z",
      "created_at": "2026-06-14T09:00:00Z"
    }
  ]
}
```

---

## Webhooks

### Create webhook endpoint

```http
POST /webhooks
```

**Body:**

```json
{
  "url": "https://yourapp.com/webhooks/syntheticfi",
  "events": ["margin.warning", "financing.funded", "financing.closed"]
}
```

**Response `201`:**

```json
{
  "id": "wh_5e6f7a8b",
  "url": "https://yourapp.com/webhooks/syntheticfi",
  "events": ["margin.warning", "financing.funded", "financing.closed"],
  "signing_secret": "whsec_xxxxxxxx"
}
```

---

### List webhook deliveries

```http
GET /webhooks/{webhook_id}/deliveries
```

---

## Firm administration

### List firm users

```http
GET /firm/users
```

Requires `admin` scope.

---

### Invite user

```http
POST /firm/users/invite
```

**Body:**

```json
{
  "email": "advisor@firm.com",
  "role": "advisor"
}
```

---

## Sandbox utilities

*Sandbox only*

### Simulate margin drop

```http
POST /sandbox/simulate-margin-drop
```

**Body:**

```json
{
  "financing_id": "fin_sandbox_001",
  "target_coverage_ratio": 0.68
}
```

---

## HTTP status codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 202 | Accepted (async processing) |
| 400 | Validation error |
| 401 | Unauthorized |
| 403 | Forbidden (scope or role) |
| 404 | Not found |
| 409 | Conflict (e.g., duplicate idempotency) |
| 429 | Rate limited |
| 500 | Server error |

---

## Changelog

| Version | Date | Notes |
|---------|------|-------|
| v1.0 | 2026-01 | Initial public API |
| v1.1 | 2026-04 | Webhooks, sandbox margin simulation |

Subscribe to API changelog emails via [contact support](../support/contact-support.md).
