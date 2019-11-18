import createMollieClient from '@mollie/api-client';

const mollieClient = createMollieClient({
  apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

  mollieClient.payments.create({
  amount: {
    value:    '10.00',
    currency: 'EUR'
  },
  description: 'My first API payment',
  redirectUrl: 'https://yourwebshop.example.org/order/123456',
  webhookUrl:  'https://yourwebshop.example.org/webhook'
})
  .then(payment => {
    // Forward the customer to the payment.getCheckoutUrl()
  })
  .catch(error => {
    // Handle the error
  });
