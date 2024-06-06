export async function send(
  to_name: string,
  from_name: string,
  email: string,
  phoneNumber: string,
  coupon: string,
  hasPartitaIVA: string
) {
  const data = {
    service_id: "service_5x2w2kk",
    template_id: "template_9rtwyme",
    user_id: "vo2wh3GkdHPpGlvf0",
    template_params: {
      from_name,
      to_name,
      phoneNumber,
      email,
      coupon,
      hasPartitaIVA
    }
  };

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  if (await res.text() === 'OK') {
    return res;
  } else {
    throw new Error("Error sending email");
  }
}
