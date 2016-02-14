.PHONY: dev
dev:
	quickpack build app.js --server

.PHONY: production
production:
	quickpack build app.js --production
