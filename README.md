# auth-service
A very basic auth service with grpc and node

## Structure
- /proto: the protocol buffers configuration
- /service: the authenticate user service
- /dummy: a simple client to test the authentication service

## How to run with docker
1. `docker build -t auth-service .`
2. `docker run -d auth-service`

## Build proto files
The proto files are already generated, if users.proto is modifyed these files need to be re generated using de bash file in /proto or the command npm run build.
If the bash file does not work you can run the command manually 
1. `npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./proto --grpc_out=./proto -I ./proto proto/*.proto`
2. `npx grpc_tools_node_protoc --ts_out=./proto -I ./proto proto/*.proto`
