start-server:
	cd backend && node src/index.js

start-front-public:
	cd frontend-public && npm run dev

start-front-admin:
	cd frontend-admin && npm run dev

lint:
	npm run lint
	npm run lint:css

lint-fix:
	npx eslint . --fix
	npx stylelint "frontend-admin/globals.css" "frontend-admin/src/**/*.css" --fix
	npx stylelint "frontend-public/globals.css" "frontend-public/src/**/*.css" --fix

pre-push: lint-fix
	@echo "✅ lint checks passed"
