/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Offers($where: Offer_filter, $first: Int, $skip: Int) {\n  offers(where: $where, first: $first, skip: $skip) {\n    id\n    token {\n      id\n      name\n      symbol\n    }\n    currency {\n      id\n      currency\n    }\n    paymentMethod {\n      id\n      method\n    }\n    rate\n    minOrder\n    maxOrder\n    active\n    merchant {\n      id\n      isMerchant\n    }\n  }\n}": types.OffersDocument,
    "query SupportedCurrencies($where: Currency_filter) {\n  currencies(where: $where) {\n    id\n    currency\n    isAccepted\n  }\n}": types.SupportedCurrenciesDocument,
    "query SupportedP2PTokens {\n  p2Ptokens {\n    id\n    name\n    symbol\n  }\n}": types.SupportedP2PTokensDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Offers($where: Offer_filter, $first: Int, $skip: Int) {\n  offers(where: $where, first: $first, skip: $skip) {\n    id\n    token {\n      id\n      name\n      symbol\n    }\n    currency {\n      id\n      currency\n    }\n    paymentMethod {\n      id\n      method\n    }\n    rate\n    minOrder\n    maxOrder\n    active\n    merchant {\n      id\n      isMerchant\n    }\n  }\n}"): (typeof documents)["query Offers($where: Offer_filter, $first: Int, $skip: Int) {\n  offers(where: $where, first: $first, skip: $skip) {\n    id\n    token {\n      id\n      name\n      symbol\n    }\n    currency {\n      id\n      currency\n    }\n    paymentMethod {\n      id\n      method\n    }\n    rate\n    minOrder\n    maxOrder\n    active\n    merchant {\n      id\n      isMerchant\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SupportedCurrencies($where: Currency_filter) {\n  currencies(where: $where) {\n    id\n    currency\n    isAccepted\n  }\n}"): (typeof documents)["query SupportedCurrencies($where: Currency_filter) {\n  currencies(where: $where) {\n    id\n    currency\n    isAccepted\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SupportedP2PTokens {\n  p2Ptokens {\n    id\n    name\n    symbol\n  }\n}"): (typeof documents)["query SupportedP2PTokens {\n  p2Ptokens {\n    id\n    name\n    symbol\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;