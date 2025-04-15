function formatCurrency(amount: string | number, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(Number(amount))
}

export { formatCurrency }
