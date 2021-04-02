// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticate: IUsersService_IAuthenticate;
}

interface IUsersService_IAuthenticate extends grpc.MethodDefinition<users_pb.LoginRequest, google_protobuf_empty_pb.Empty> {
    path: "/users.Users/Authenticate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<users_pb.LoginRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    authenticate: grpc.handleUnaryCall<users_pb.LoginRequest, google_protobuf_empty_pb.Empty>;
}

export interface IUsersClient {
    authenticate(request: users_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    authenticate(request: users_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    authenticate(request: users_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authenticate(request: users_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public authenticate(request: users_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public authenticate(request: users_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
