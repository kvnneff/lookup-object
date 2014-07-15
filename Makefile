build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test:
	@./node_modules/mocha/bin/mocha --reporter spec

dist-build:
	@component build -s lookupObject -o dist -n lookup-object

dist-minify: dist/lookup-object.js
	@curl -s \
		-d compilation_level=SIMPLE_OPTIMIZATIONS \
		-d output_format=text \
		-d output_info=compiled_code \
		--data-urlencode "js_code@$<" \
		http://closure-compiler.appspot.com/compile \
		> $<.tmp
	@mv $<.tmp dist/lookup-object.min.js

clean:
	rm -fr build components

.PHONY: clean test build dist