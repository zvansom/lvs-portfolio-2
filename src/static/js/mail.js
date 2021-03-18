const htmlContentBuilder = function (email, message, name) {
  return `
    <h3 style="font-size: 30px; font-weight: 900" >You have a new message from your portfolio!</h3>
    <h4 style="font-size: 20px;">From: ${name}</h4>
    <h4 style="font-size: 20px;">Email: ${email}</h4>
    <h4 style="font-size: 20px;">Message:</h4>
    <p style="font-size: 16px;">${message}</p>
  `
};

export { htmlContentBuilder };