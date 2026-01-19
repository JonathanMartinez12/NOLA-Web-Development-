# Stripe Setup Guide

This guide will help you set up Stripe for recurring payments on your NOLA Web Development website.

## Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Sign Up" and create your account
3. Complete the onboarding process

## Step 2: Get Your API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on **Developers** in the left sidebar
3. Click on **API keys**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode)

## Step 3: Create Your Products and Prices

### Option A: Using Stripe Dashboard (Recommended)

1. Go to **Products** in your Stripe Dashboard
2. Click **+ Add product**
3. Create each pricing tier:

#### Starter Plan
- **Name**: Starter Monthly Plan
- **Description**: Website hosting, maintenance, and basic SEO
- **Pricing**: $99/month (recurring)
- **Billing period**: Monthly
- Copy the **Price ID** (starts with `price_`)

#### Professional Plan
- **Name**: Professional Monthly Plan
- **Description**: Advanced SEO, analytics, and priority support
- **Pricing**: $249/month (recurring)
- **Billing period**: Monthly
- Copy the **Price ID**

#### Enterprise Plan
- **Name**: Enterprise Monthly Plan
- **Description**: Dedicated manager, unlimited updates, 24/7 support
- **Pricing**: $499/month (recurring)
- **Billing period**: Monthly
- Copy the **Price ID**

### Option B: Using Stripe API

You can also create products programmatically. See Stripe's [API documentation](https://stripe.com/docs/api/products).

## Step 4: Configure Your Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Never commit `.env.local` to git!** (It's already in .gitignore)

## Step 5: Update Price IDs in Your Code

Open `/app/pricing/page.tsx` and update the `priceId` for each plan:

```typescript
const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    priceId: 'price_1234567890', // Replace with your actual Price ID
    // ...
  },
  // Update other plans...
];
```

## Step 6: Test Your Integration

### Test Mode (Development)

1. Use test mode keys (starting with `pk_test_` and `sk_test_`)
2. Use [Stripe test cards](https://stripe.com/docs/testing):
   - **Successful payment**: `4242 4242 4242 4242`
   - **Requires authentication**: `4000 0025 0000 3155`
   - **Declined card**: `4000 0000 0000 9995`
3. Use any future expiration date and any 3-digit CVC

### Testing the Flow

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/pricing`

3. Click "Start Free Trial" on any plan

4. You'll be redirected to Stripe Checkout

5. Use a test card to complete the payment

6. You should be redirected to `/pricing/success`

## Step 7: Enable Live Mode (Production)

### Prerequisites
- Business verification completed in Stripe
- Bank account connected for payouts

### Steps

1. In Stripe Dashboard, toggle from **Test mode** to **Live mode** (top right)

2. Get your live API keys from **Developers → API keys**

3. Update your production environment variables:
   - In Vercel: **Settings → Environment Variables**
   - Add:
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (live key)
     - `STRIPE_SECRET_KEY` (live key)
     - `NEXT_PUBLIC_SITE_URL` (your production URL)

4. Update the Price IDs in your code to use live price IDs

5. Redeploy your application

## Step 8: Set Up Webhooks (Optional but Recommended)

Webhooks allow Stripe to notify your app about events (payments, cancellations, etc.)

1. In Stripe Dashboard, go to **Developers → Webhooks**

2. Click **+ Add endpoint**

3. Enter your webhook URL:
   ```
   https://your-domain.com/api/webhooks/stripe
   ```

4. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

5. Copy the **Signing secret** (starts with `whsec_`)

6. Add it to your environment variables:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   ```

Note: You'll need to create the webhook handler at `/app/api/webhooks/stripe/route.ts`

## Troubleshooting

### "No such price" error
- Make sure you copied the correct Price ID from Stripe Dashboard
- Ensure you're using the correct mode (test vs. live)

### Checkout not opening
- Check browser console for errors
- Verify your publishable key is correct
- Make sure Stripe.js loaded successfully

### Redirects not working
- Verify your `NEXT_PUBLIC_SITE_URL` is correct
- Check that success/cancel URLs are properly configured

## Additional Features

### Add Coupons/Discounts

1. In Stripe Dashboard, go to **Products → Coupons**
2. Create discount codes
3. Customers can enter them at checkout

### Customer Portal

Allow customers to manage their subscriptions:

1. Enable Customer Portal in Stripe Dashboard: **Settings → Billing → Customer Portal**
2. Add a link to the portal in your app:
   ```typescript
   const portalUrl = 'https://billing.stripe.com/p/login/...'
   ```

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Next.js + Stripe Example](https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript)

## Support

If you need help with Stripe setup:
- Stripe Support: [https://support.stripe.com](https://support.stripe.com)
- Stripe Community: [https://stripe.com/community](https://stripe.com/community)
