# `@semantic-api/server`

## Global API

- [`init`](#init)
- [`initThenStart`]()
- [`initWithDatabase`]()
- [`initWithDatabaseThenStart`]()

## init

Setups a HTTP server that will put the API running. This function receives an [`ApiConfig`](#api-config) as an optional parameter and resolves an [`Hapi.Server`](https://hapi.dev/api/?v=21.3.2#server) object.

```ts
declare const init: async (_apiConfig?: ApiConfig): Promise<Hapi.Server>
```

## initThenStart <Badge type="info" text="shorthand" />

This shorthand function will setup the HTTP server and start it immediately.


## initWithDatabase <Badge type="info" text="shorthand" />

This shorthand function will setup the HTTP server and call [`connectToDatabase`](/api/connect-to-database) immediately.


## initWithDatabaseThenStart <Badge type="info" text="shorthand" />

This shorthand function will setup the HTTP server and connect to the database and start immediately.

