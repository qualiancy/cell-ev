
TESTS = test/*.js
REPORTER = spec

#
# Tests
# 

test: test-browser 

test-browser: build
	@printf "\n  ==> [Phantom.Js]"
	@./node_modules/.bin/mocha-phantomjs \
		--R ${REPORTER} \
		./test/browser/index.html

#
# Components
# 

build: components index.js
	@./node_modules/.bin/component-build --dev

components: component.json
	@./node_modules/.bin/component-install --dev

#
# Clean up
# 

clean: clean-components 

clean-components:
	@rm -rf build
	@rm -rf components


.PHONY: clean clean-components test test-browser
