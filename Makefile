.PHONY: install
install:
	npm install
	npm run build

.PHONY: run
run: install
	node dist/index.js

