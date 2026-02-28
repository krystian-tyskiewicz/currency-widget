# Currency Widget

Embeddable currency exchange rate widget with real-time data. Built with React, NestJS, and Shadow DOM for complete style isolation.

🚀 **[Live Demo](https://currency-widget.fly.dev)**

## Features

- 🎨 Floating button UI with dialog
- 🔒 Shadow DOM isolation
- ⚡ Real-time rates from Frankfurter API
- 🌍 10 major currencies (USD, EUR, GBP, JPY, CHF, CAD, AUD, CNY, INR, PLN)
- 🔍 Search & filter
- 📱 Responsive design

---

## Quick Start

### Production (Docker)

```bash
docker-compose up --build -d
```

- **Widget**: http://localhost/
- **API**: http://localhost/api/currencies/rates

### Development (Docker)

```bash
docker-compose -f docker-compose.dev.yml up
```

- **Frontend**: http://localhost:3001 (with HMR)
- **Backend**: http://localhost:3000/api/currencies/rates

---

## Embedding

Add to any HTML page:

```html
<script src="http://localhost/currency-widget.js"></script>
<script>
  CurrencyWidget.init({
    baseCurrency: 'EUR'
  });
</script>
```

---

## Configuration

### Environment Variables

**Development** (`.env`):
```bash
VITE_API_URL=http://localhost:3000/api
```

**Production** (`.env.production`):
```bash
VITE_API_URL=http://localhost/api
```
