function buildWhatsAppLink(phone, message) {
  const sanitizedPhone = String(phone || "").replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message || "");
  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}

module.exports = {
  buildWhatsAppLink,
};
