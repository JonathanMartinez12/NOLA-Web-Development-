# EmailJS Contact Form Setup Guide

## ✅ Current Configuration

Your EmailJS is now configured with the following credentials:

```
Service ID: service_8air3b7
Template ID: template_7tsv8ma
Public Key: eWcmORAIMeZh2U8bg
```

These are now stored securely in `.env.local` (which is ignored by git).

---

## 🔧 How EmailJS Works

When someone fills out your contact form, EmailJS will:
1. Capture the form data (name, email, phone, service, budget, message)
2. Send it to your EmailJS template
3. EmailJS formats it and sends an email to **nolawebdev@gmail.com**

---

## ✅ Setup Checklist

### 1. Verify EmailJS Account Setup

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) and verify:

#### **Service Setup:**
- [ ] You have a service connected (Gmail, Outlook, etc.)
- [ ] Service ID matches: `service_8air3b7`
- [ ] The service is connected to **nolawebdev@gmail.com**

#### **Template Setup:**
- [ ] Template ID matches: `template_7tsv8ma`
- [ ] Template is active and published
- [ ] Template variables match the ones below

### 2. EmailJS Template Configuration

Your template should include these variables (use double curly braces in EmailJS):

```
{{from_name}}      - Customer's name
{{from_email}}     - Customer's email
{{phone}}          - Customer's phone number
{{service}}        - Service they're interested in
{{budget}}         - Their budget range
{{message}}        - Their project details
{{to_name}}        - "NOLA Web Development" (recipient name)
```

#### **Recommended Email Template:**

**Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

**Email Body:**
```
You have received a new contact form submission from your website.

Contact Information:
--------------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Service Requested: {{service}}
Budget Range: {{budget}}

Project Details:
--------------------
{{message}}

--------------------
This message was sent from the NOLA Web Development contact form.
Reply directly to this email to contact the customer.
```

### 3. Gmail App Password (If Using Gmail)

If you're using Gmail as your EmailJS service, you'll need an App Password:

1. Go to [Google Account](https://myaccount.google.com/)
2. Click **Security** → **2-Step Verification** (enable if not already)
3. Scroll to **App passwords**
4. Generate a new app password for "EmailJS"
5. Use this password in your EmailJS service configuration

### 4. Test the Form

After setup, test the contact form:

1. Go to your contact page: `/contact`
2. Fill out the form with test data
3. Submit
4. Check **nolawebdev@gmail.com** for the email
5. Check browser console for any errors (F12 → Console tab)

---

## 🚨 Troubleshooting

### "Failed to send email" Error

**Check:**
1. **EmailJS Service is Active**
   - Go to EmailJS Dashboard → Services
   - Make sure your email service is connected and green

2. **Template Variables Match**
   - Go to EmailJS Dashboard → Email Templates
   - Click your template
   - Make sure all variables use `{{variable_name}}` format
   - Variables must match exactly (case-sensitive)

3. **Public Key is Correct**
   - Go to EmailJS Dashboard → Account → General
   - Copy your Public Key
   - Verify it matches in `.env.local`

4. **Email Service Limits**
   - Free EmailJS accounts have 200 emails/month
   - Check if you've hit the limit

### Network/CORS Errors

If you see CORS errors in console:
1. EmailJS should handle CORS automatically
2. Make sure you're not blocking third-party cookies
3. Try in incognito mode

### Emails Not Arriving

1. **Check Spam Folder** - EmailJS emails often land in spam initially
2. **Verify Email Address** - Make sure nolawebdev@gmail.com is correct in EmailJS
3. **Check EmailJS Dashboard** - Go to "History" to see if emails were sent
4. **Email Service Connection** - Reconnect your Gmail/email service in EmailJS

---

## 🔐 Security Notes

✅ **Good Security Practices:**
- Keys are in `.env.local` (not committed to git)
- Only `NEXT_PUBLIC_*` variables are exposed to browser
- EmailJS Public Key is safe to expose (it's meant to be public)

⚠️ **Don't Share:**
- Your EmailJS Private Key (if you have one)
- Gmail App Password
- Never commit `.env.local` to git

---

## 📊 Environment Variables

Your `.env.local` file contains:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_8air3b7
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_7tsv8ma
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=eWcmORAIMeZh2U8bg
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** `.env.local` is ignored by git and won't be pushed to GitHub.

---

## 🚀 Deploy to Production

When deploying to Vercel/Netlify/etc:

1. **Add Environment Variables** in your hosting dashboard:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_8air3b7
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_7tsv8ma
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=eWcmORAIMeZh2U8bg
   NEXT_PUBLIC_SITE_URL=https://nolawebdevelopment.com
   ```

2. **Redeploy** your site for changes to take effect

3. **Test** the contact form on the live site

---

## 🎯 Form Fields Being Sent

Your contact form sends:

| Field | Variable Name | Required | Example |
|-------|--------------|----------|---------|
| Full Name | `from_name` | Yes | "John Doe" |
| Email | `from_email` | Yes | "john@example.com" |
| Phone | `phone` | No | "(504) 123-4567" |
| Service | `service` | Yes | "Web Development" |
| Budget | `budget` | No | "$2,500 - $5,000" |
| Message | `message` | Yes | "I need a website..." |

---

## ✉️ Expected Email Format

When someone submits the form, you'll receive:

**From:** noreply@emailjs.com (or your configured email)
**Reply-To:** customer@email.com (their email)
**To:** nolawebdev@gmail.com
**Subject:** New Contact Form Submission from John Doe

**Body:**
```
You have received a new contact form submission from your website.

Contact Information:
--------------------
Name: John Doe
Email: john@example.com
Phone: (504) 123-4567

Service Requested: Web Development
Budget Range: $2,500 - $5,000

Project Details:
--------------------
I need a website for my local business...

--------------------
This message was sent from the NOLA Web Development contact form.
Reply directly to this email to contact the customer.
```

---

## 📞 Next Steps

1. **Verify EmailJS Dashboard** - Make sure service and template are set up
2. **Test the Form** - Submit a test inquiry
3. **Check Email** - Verify you received it at nolawebdev@gmail.com
4. **Add to Safe Senders** - Add EmailJS to your safe senders list
5. **Monitor** - Check EmailJS dashboard regularly for any issues

---

## 🔗 Useful Links

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

---

## ❓ Need Help?

If emails aren't working:
1. Check the browser console for errors (F12 → Console)
2. Verify all IDs match in EmailJS dashboard
3. Check EmailJS "History" tab to see if emails were sent
4. Look in spam folder
5. Try reconnecting your email service in EmailJS

**Your form is now ready to receive inquiries! 🎉**
