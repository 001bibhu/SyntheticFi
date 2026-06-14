# How it works

This page explains how SyntheticFi converts portfolio value into cash, what happens to your holdings during a financing term, and how the process ends.

---

## The big picture

SyntheticFi uses your investment portfolio as collateral, structures financing through public markets, and delivers cash while your assets stay invested.

```
Portfolio → Collateral → Financing → Cash
     ↓
Active term → Repayment → Release
```

Your portfolio remains invested throughout the term. SyntheticFi pledges eligible holdings as collateral instead of requiring a sale.

---

## Steps

<AccordionGroup>

<AccordionItem title="Step 1: Use your portfolio as collateral" id="step-1-use-your-portfolio-as-collateral">

SyntheticFi evaluates your connected brokerage or custodian account to determine financing capacity.

**Evaluation criteria:**

- **Portfolio value**, total market value of eligible holdings
- **Eligibility**, which securities qualify under program rules
- **Concentration**, limits on single-position weight
- **Liquidity**, ability to value and monitor holdings reliably

Based on this review, SyntheticFi sets the maximum financing amount supported by the portfolio.

### What stays the same

- You remain the beneficial owner of your investments
- Dividends and corporate actions generally flow to you (per program terms)
- Your advisor retains visibility per firm permissions

### What changes

- A defined portion of the portfolio is pledged as collateral
- Pledged holdings are locked for the financing term
- Portfolio value must stay above margin requirements

</AccordionItem>

<AccordionItem title="Step 2: Lock a portion of the portfolio" id="step-2-lock-a-portion-of-the-portfolio">

**Locking** restricts certain actions on pledged holdings while financing is active.

**What you cannot do:**

- Sell pledged securities
- Transfer pledged holdings to another account
- Use pledged holdings as collateral elsewhere without approval

**What you can still do:**

- View positions and performance
- Receive dividends (program-dependent)
- Add collateral or adjust the structure with your advisor

Locks are removed after full repayment and closure.

</AccordionItem>

<AccordionItem title="Step 3: Structure the financing" id="step-3-structure-the-financing">

SyntheticFi creates financing using public market instruments. You specify the cash amount, intended use, and preferred term. SyntheticFi matches the request to portfolio capacity and executes the structure.

One common approach is a **box spread**, an options-based strategy that produces a defined cash amount and a defined repayment at term end.

### Box spread (simplified)

A box spread combines four options positions at set prices with the same expiration.

- Buy call
- Sell call
- Buy put
- Sell put

**Outcome:**

- Cash today
- Fixed repayment later

This structure produces a predictable outcome regardless of market direction.

SyntheticFi and approved counterparties handle execution. You do not place trades yourself.

</AccordionItem>

<AccordionItem title="Step 4: Receive cash" id="step-4-receive-cash">

After the structure is confirmed and placed, cash is delivered to your designated account (brokerage or linked bank, depending on program setup).

**At execution:**

- Cash delivered
- Terms disclosed: amount, total cost, term dates, and margin requirements

You do not execute trades or manage options directly. Disclosures document what you receive and what you owe.

</AccordionItem>

<AccordionItem title="Step 5: Monitor during the term" id="step-5-monitor-during-the-term">

During the active term, SyntheticFi monitors portfolio value and financing status on an ongoing basis.

- Daily or intraday portfolio monitoring
- Email and in-platform alerts as value approaches thresholds
- Statements showing outstanding balance and collateral status
- Advisor dashboard visibility for firm-managed accounts

</AccordionItem>

<AccordionItem title="Step 6: Handle market movements" id="step-6-handle-market-movements">

If portfolio value declines, collateral coverage weakens. SyntheticFi tracks this through a margin framework.

**Margin states:**

- **Healthy**, portfolio comfortably covers the financing
- **Warning**, coverage approaching minimum; action recommended
- **Margin call**, coverage below required level; action required

**User actions:**

- Add collateral
- Partial repayment
- Restructure (where available)

If no action is taken, pledged holdings may be liquidated as a last resort to restore required coverage.

</AccordionItem>

<AccordionItem title="Step 7: Repay and close" id="step-7-repay-and-close">

At term end, you repay the principal plus the agreed fixed cost via ACH, brokerage cash journal, or wire (depending on program terms).

**Upon full repayment:**

- **Repayment**, outstanding financing is settled
- **Structure unwound**, market positions are closed
- **Collateral unlocked**, pledged holdings return to normal account operations

Early repayment may be available with adjusted economics. Review terms before originating.

</AccordionItem>

</AccordionGroup>

---

## Summary

- Portfolio stays invested for the duration of the term
- Cash is received upfront against pledged collateral
- Repayment amount is fixed at origination
- Risk is managed through ongoing monitoring and margin controls

---

## Next steps

- [Overview](./overview.md), product introduction and key concepts
- [Getting started](./getting-started.md), onboarding steps
- [Use cases](./use-cases.md), common financing scenarios
- [FAQ](./faq.md), quick answers
