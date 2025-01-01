export async function handleSubscribe(request, env) {
  const { name, email } = await request.json();
  
  const formData = new FormData();
  formData.append('from', `${name} <${env.MAILGUN_EMAIL}>`);
  formData.append('to', env.MAILGUN_EMAIL);
  formData.append('subject', 'New Subscription');
  formData.append('text', `New subscriber: ${name} (${email})`);
  
  const response = await fetch(
    `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`
    },
    body: formData
  });
  
  return response.ok 
    ? new Response('Subscribed', { status: 200 })
    : new Response('Failed to subscribe', { status: 500 });
}