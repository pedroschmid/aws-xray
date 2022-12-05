AWS_REGION=us-east-1

# AWS X-Ray #
build-aws-xray:
	docker build --tag xray-daemon --file ./aws/Dockerfile.XRay ./aws
run-aws-xray:
	docker run \
		--name xray-daemon \
		--attach STDOUT \
		-p 2000:2000/udp \
		-v ~/.aws/:/root/.aws/:ro \
		--net=host \
		-e AWS_REGION=$(AWS_REGION) \
		xray-daemon -o