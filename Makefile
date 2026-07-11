.PHONY: lint format test check dev build

check: lint test build

lint:
	npm run lint

format:
	npm run format

test:
	npm run test

dev:
	npm run dev

build:
	npm run build
