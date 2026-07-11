# Còsy — stillwater.

> An afternoon that lowers your shoulders.

A concept spa booking flow — part of the
[Nathan AI Solutions](https://github.com/Nayphilim) portfolio.

**Stack:** Angular 22 (standalone, signals) built to a static SPA.

## About

A day-spa booking prototype built around a four-step wizard: choose a treatment and duration,
pick a day and time from a live availability grid, enter details, and confirm. A sticky summary
tracks the running total and flags when thermal-suite access is included. Availability is
deterministic and computed client-side — no backend — so every reload shows the same open and
sold-out slots. Also: a home page with most-booked treatments and reviews, a filterable
treatments list, and day passes.

## Develop

```bash
npm install
make dev      # Angular dev server (http://localhost:4200)
make lint     # prettier
make test     # vitest (availability logic)
make build    # static SPA build → dist/cosy-scaffold/browser/
```

## Notes

- Brand and copy are fictional concept work for portfolio purposes.
- Photography is from Unsplash (optimised into `public/img/`); see `CREDITS.md`.

## License

Code is released under the [MIT License](LICENSE).
