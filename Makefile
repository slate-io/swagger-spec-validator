NAMESPACE = slate-io
REPOSITORY = swagger-schema-validator
NAME = schema-validator
VERSION ?= latest

.PHONY: build shell

build:
	docker build -t $(NAMESPACE)/$(REPOSITORY):$(VERSION) .

shell:
	docker run -it --rm --name $(NAME) -v $(SPEC_PATH):/data $(NAMESPACE)/$(REPOSITORY):$(VERSION) /bin/bash

test:
	docker run -it --rm -e "SPEC_PATH=$(SPEC_PATH)" -v $(SPEC_PATH):/data --name $(NAME) $(NAMESPACE)/$(REPOSITORY):$(VERSION)

default: build
