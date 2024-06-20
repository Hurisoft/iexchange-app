/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /** 8 bytes signed integer */
  Int8: { input: any; output: any; }
  /** A string representation of microseconds UNIX timestamp (16 digits) */
  Timestamp: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  appeals: Array<Appeal>;
  currenciesAdded: Array<Currency>;
  currenciesRemoved: Array<Currency>;
  id: Scalars['Bytes']['output'];
  isAMLAgent: Scalars['Boolean']['output'];
  isDao: Scalars['Boolean']['output'];
  isKYCAgent: Scalars['Boolean']['output'];
  isMerchant: Scalars['Boolean']['output'];
  isSettler: Scalars['Boolean']['output'];
  isTrader: Scalars['Boolean']['output'];
  offerDeposits: Array<Offer>;
  offers: Array<Offer>;
  orderDeposits: Array<Order>;
  paymentsAdded: Array<PaymentMethod>;
  paymentsRemoved: Array<PaymentMethod>;
  tokensAdded: Array<P2PToken>;
  tokensRemoved: Array<P2PToken>;
  torders: Array<Order>;
};


export type AccountAppealsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Appeal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Appeal_Filter>;
};


export type AccountCurrenciesAddedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Currency_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Currency_Filter>;
};


export type AccountCurrenciesRemovedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Currency_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Currency_Filter>;
};


export type AccountOfferDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Offer_Filter>;
};


export type AccountOffersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Offer_Filter>;
};


export type AccountOrderDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};


export type AccountPaymentsAddedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentMethod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentMethod_Filter>;
};


export type AccountPaymentsRemovedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentMethod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentMethod_Filter>;
};


export type AccountTokensAddedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<P2PToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<P2PToken_Filter>;
};


export type AccountTokensRemovedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<P2PToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<P2PToken_Filter>;
};


export type AccountTordersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  appeals_?: InputMaybe<Appeal_Filter>;
  currenciesAdded_?: InputMaybe<Currency_Filter>;
  currenciesRemoved_?: InputMaybe<Currency_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isAMLAgent?: InputMaybe<Scalars['Boolean']['input']>;
  isAMLAgent_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isAMLAgent_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAMLAgent_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDao?: InputMaybe<Scalars['Boolean']['input']>;
  isDao_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDao_not?: InputMaybe<Scalars['Boolean']['input']>;
  isDao_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKYCAgent?: InputMaybe<Scalars['Boolean']['input']>;
  isKYCAgent_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKYCAgent_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKYCAgent_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isMerchant?: InputMaybe<Scalars['Boolean']['input']>;
  isMerchant_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isMerchant_not?: InputMaybe<Scalars['Boolean']['input']>;
  isMerchant_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSettler?: InputMaybe<Scalars['Boolean']['input']>;
  isSettler_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSettler_not?: InputMaybe<Scalars['Boolean']['input']>;
  isSettler_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isTrader?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isTrader_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  offerDeposits_?: InputMaybe<Offer_Filter>;
  offers_?: InputMaybe<Offer_Filter>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  orderDeposits_?: InputMaybe<Order_Filter>;
  paymentsAdded_?: InputMaybe<PaymentMethod_Filter>;
  paymentsRemoved_?: InputMaybe<PaymentMethod_Filter>;
  tokensAdded_?: InputMaybe<P2PToken_Filter>;
  tokensRemoved_?: InputMaybe<P2PToken_Filter>;
  torders_?: InputMaybe<Order_Filter>;
};

export enum Account_OrderBy {
  Appeals = 'appeals',
  CurrenciesAdded = 'currenciesAdded',
  CurrenciesRemoved = 'currenciesRemoved',
  Id = 'id',
  IsAmlAgent = 'isAMLAgent',
  IsDao = 'isDao',
  IsKycAgent = 'isKYCAgent',
  IsMerchant = 'isMerchant',
  IsSettler = 'isSettler',
  IsTrader = 'isTrader',
  OfferDeposits = 'offerDeposits',
  Offers = 'offers',
  OrderDeposits = 'orderDeposits',
  PaymentsAdded = 'paymentsAdded',
  PaymentsRemoved = 'paymentsRemoved',
  TokensAdded = 'tokensAdded',
  TokensRemoved = 'tokensRemoved',
  Torders = 'torders'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Appeal = {
  __typename?: 'Appeal';
  appealDecision: Scalars['Int']['output'];
  appealer: Account;
  currentSettler?: Maybe<Account>;
  daoVote: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  order: Order;
  reasonHash: Scalars['Bytes']['output'];
  rounds: Array<AppealRound>;
  settlerPickTime?: Maybe<Scalars['BigInt']['output']>;
};


export type AppealRoundsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppealRound_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AppealRound_Filter>;
};

export type AppealRound = {
  __typename?: 'AppealRound';
  appeal: Appeal;
  id: Scalars['String']['output'];
  merchantVote: Scalars['Int']['output'];
  settled: Scalars['Boolean']['output'];
  settler: Account;
  settlerVote: Scalars['Int']['output'];
  traderVote: Scalars['Int']['output'];
};

export type AppealRound_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AppealRound_Filter>>>;
  appeal?: InputMaybe<Scalars['String']['input']>;
  appeal_?: InputMaybe<Appeal_Filter>;
  appeal_contains?: InputMaybe<Scalars['String']['input']>;
  appeal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_ends_with?: InputMaybe<Scalars['String']['input']>;
  appeal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_gt?: InputMaybe<Scalars['String']['input']>;
  appeal_gte?: InputMaybe<Scalars['String']['input']>;
  appeal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appeal_lt?: InputMaybe<Scalars['String']['input']>;
  appeal_lte?: InputMaybe<Scalars['String']['input']>;
  appeal_not?: InputMaybe<Scalars['String']['input']>;
  appeal_not_contains?: InputMaybe<Scalars['String']['input']>;
  appeal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appeal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appeal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appeal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_starts_with?: InputMaybe<Scalars['String']['input']>;
  appeal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchantVote?: InputMaybe<Scalars['Int']['input']>;
  merchantVote_gt?: InputMaybe<Scalars['Int']['input']>;
  merchantVote_gte?: InputMaybe<Scalars['Int']['input']>;
  merchantVote_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  merchantVote_lt?: InputMaybe<Scalars['Int']['input']>;
  merchantVote_lte?: InputMaybe<Scalars['Int']['input']>;
  merchantVote_not?: InputMaybe<Scalars['Int']['input']>;
  merchantVote_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AppealRound_Filter>>>;
  settled?: InputMaybe<Scalars['Boolean']['input']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  settled_not?: InputMaybe<Scalars['Boolean']['input']>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  settler?: InputMaybe<Scalars['String']['input']>;
  settlerVote?: InputMaybe<Scalars['Int']['input']>;
  settlerVote_gt?: InputMaybe<Scalars['Int']['input']>;
  settlerVote_gte?: InputMaybe<Scalars['Int']['input']>;
  settlerVote_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  settlerVote_lt?: InputMaybe<Scalars['Int']['input']>;
  settlerVote_lte?: InputMaybe<Scalars['Int']['input']>;
  settlerVote_not?: InputMaybe<Scalars['Int']['input']>;
  settlerVote_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  settler_?: InputMaybe<Account_Filter>;
  settler_contains?: InputMaybe<Scalars['String']['input']>;
  settler_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_ends_with?: InputMaybe<Scalars['String']['input']>;
  settler_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_gt?: InputMaybe<Scalars['String']['input']>;
  settler_gte?: InputMaybe<Scalars['String']['input']>;
  settler_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settler_lt?: InputMaybe<Scalars['String']['input']>;
  settler_lte?: InputMaybe<Scalars['String']['input']>;
  settler_not?: InputMaybe<Scalars['String']['input']>;
  settler_not_contains?: InputMaybe<Scalars['String']['input']>;
  settler_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  settler_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settler_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  settler_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_starts_with?: InputMaybe<Scalars['String']['input']>;
  settler_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traderVote?: InputMaybe<Scalars['Int']['input']>;
  traderVote_gt?: InputMaybe<Scalars['Int']['input']>;
  traderVote_gte?: InputMaybe<Scalars['Int']['input']>;
  traderVote_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  traderVote_lt?: InputMaybe<Scalars['Int']['input']>;
  traderVote_lte?: InputMaybe<Scalars['Int']['input']>;
  traderVote_not?: InputMaybe<Scalars['Int']['input']>;
  traderVote_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum AppealRound_OrderBy {
  Appeal = 'appeal',
  AppealAppealDecision = 'appeal__appealDecision',
  AppealDaoVote = 'appeal__daoVote',
  AppealId = 'appeal__id',
  AppealReasonHash = 'appeal__reasonHash',
  AppealSettlerPickTime = 'appeal__settlerPickTime',
  Id = 'id',
  MerchantVote = 'merchantVote',
  Settled = 'settled',
  Settler = 'settler',
  SettlerVote = 'settlerVote',
  SettlerId = 'settler__id',
  SettlerIsAmlAgent = 'settler__isAMLAgent',
  SettlerIsDao = 'settler__isDao',
  SettlerIsKycAgent = 'settler__isKYCAgent',
  SettlerIsMerchant = 'settler__isMerchant',
  SettlerIsSettler = 'settler__isSettler',
  SettlerIsTrader = 'settler__isTrader',
  TraderVote = 'traderVote'
}

export type Appeal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Appeal_Filter>>>;
  appealDecision?: InputMaybe<Scalars['Int']['input']>;
  appealDecision_gt?: InputMaybe<Scalars['Int']['input']>;
  appealDecision_gte?: InputMaybe<Scalars['Int']['input']>;
  appealDecision_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  appealDecision_lt?: InputMaybe<Scalars['Int']['input']>;
  appealDecision_lte?: InputMaybe<Scalars['Int']['input']>;
  appealDecision_not?: InputMaybe<Scalars['Int']['input']>;
  appealDecision_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  appealer?: InputMaybe<Scalars['String']['input']>;
  appealer_?: InputMaybe<Account_Filter>;
  appealer_contains?: InputMaybe<Scalars['String']['input']>;
  appealer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appealer_ends_with?: InputMaybe<Scalars['String']['input']>;
  appealer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appealer_gt?: InputMaybe<Scalars['String']['input']>;
  appealer_gte?: InputMaybe<Scalars['String']['input']>;
  appealer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appealer_lt?: InputMaybe<Scalars['String']['input']>;
  appealer_lte?: InputMaybe<Scalars['String']['input']>;
  appealer_not?: InputMaybe<Scalars['String']['input']>;
  appealer_not_contains?: InputMaybe<Scalars['String']['input']>;
  appealer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appealer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appealer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appealer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appealer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appealer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appealer_starts_with?: InputMaybe<Scalars['String']['input']>;
  appealer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentSettler?: InputMaybe<Scalars['String']['input']>;
  currentSettler_?: InputMaybe<Account_Filter>;
  currentSettler_contains?: InputMaybe<Scalars['String']['input']>;
  currentSettler_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentSettler_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentSettler_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentSettler_gt?: InputMaybe<Scalars['String']['input']>;
  currentSettler_gte?: InputMaybe<Scalars['String']['input']>;
  currentSettler_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentSettler_lt?: InputMaybe<Scalars['String']['input']>;
  currentSettler_lte?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentSettler_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentSettler_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentSettler_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentSettler_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  daoVote?: InputMaybe<Scalars['Int']['input']>;
  daoVote_gt?: InputMaybe<Scalars['Int']['input']>;
  daoVote_gte?: InputMaybe<Scalars['Int']['input']>;
  daoVote_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  daoVote_lt?: InputMaybe<Scalars['Int']['input']>;
  daoVote_lte?: InputMaybe<Scalars['Int']['input']>;
  daoVote_not?: InputMaybe<Scalars['Int']['input']>;
  daoVote_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Appeal_Filter>>>;
  order?: InputMaybe<Scalars['String']['input']>;
  order_?: InputMaybe<Order_Filter>;
  order_contains?: InputMaybe<Scalars['String']['input']>;
  order_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  order_ends_with?: InputMaybe<Scalars['String']['input']>;
  order_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  order_gt?: InputMaybe<Scalars['String']['input']>;
  order_gte?: InputMaybe<Scalars['String']['input']>;
  order_in?: InputMaybe<Array<Scalars['String']['input']>>;
  order_lt?: InputMaybe<Scalars['String']['input']>;
  order_lte?: InputMaybe<Scalars['String']['input']>;
  order_not?: InputMaybe<Scalars['String']['input']>;
  order_not_contains?: InputMaybe<Scalars['String']['input']>;
  order_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  order_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  order_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  order_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  order_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  order_starts_with?: InputMaybe<Scalars['String']['input']>;
  order_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reasonHash?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reasonHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reasonHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rounds_?: InputMaybe<AppealRound_Filter>;
  settlerPickTime?: InputMaybe<Scalars['BigInt']['input']>;
  settlerPickTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlerPickTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlerPickTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlerPickTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlerPickTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlerPickTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlerPickTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Appeal_OrderBy {
  AppealDecision = 'appealDecision',
  Appealer = 'appealer',
  AppealerId = 'appealer__id',
  AppealerIsAmlAgent = 'appealer__isAMLAgent',
  AppealerIsDao = 'appealer__isDao',
  AppealerIsKycAgent = 'appealer__isKYCAgent',
  AppealerIsMerchant = 'appealer__isMerchant',
  AppealerIsSettler = 'appealer__isSettler',
  AppealerIsTrader = 'appealer__isTrader',
  CurrentSettler = 'currentSettler',
  CurrentSettlerId = 'currentSettler__id',
  CurrentSettlerIsAmlAgent = 'currentSettler__isAMLAgent',
  CurrentSettlerIsDao = 'currentSettler__isDao',
  CurrentSettlerIsKycAgent = 'currentSettler__isKYCAgent',
  CurrentSettlerIsMerchant = 'currentSettler__isMerchant',
  CurrentSettlerIsSettler = 'currentSettler__isSettler',
  CurrentSettlerIsTrader = 'currentSettler__isTrader',
  DaoVote = 'daoVote',
  Id = 'id',
  Order = 'order',
  OrderAccountHash = 'order__accountHash',
  OrderId = 'order__id',
  OrderOrderType = 'order__orderType',
  OrderQuantity = 'order__quantity',
  OrderStatus = 'order__status',
  ReasonHash = 'reasonHash',
  Rounds = 'rounds',
  SettlerPickTime = 'settlerPickTime'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Currency = {
  __typename?: 'Currency';
  addedBy: Account;
  currency: Scalars['String']['output'];
  currencyOffers: Array<Offer>;
  id: Scalars['Bytes']['output'];
  isAccepted: Scalars['Boolean']['output'];
  removedBy?: Maybe<Account>;
};


export type CurrencyCurrencyOffersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Offer_Filter>;
};

export type Currency_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedBy?: InputMaybe<Scalars['String']['input']>;
  addedBy_?: InputMaybe<Account_Filter>;
  addedBy_contains?: InputMaybe<Scalars['String']['input']>;
  addedBy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_gt?: InputMaybe<Scalars['String']['input']>;
  addedBy_gte?: InputMaybe<Scalars['String']['input']>;
  addedBy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addedBy_lt?: InputMaybe<Scalars['String']['input']>;
  addedBy_lte?: InputMaybe<Scalars['String']['input']>;
  addedBy_not?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addedBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Currency_Filter>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currencyOffers_?: InputMaybe<Offer_Filter>;
  currency_contains?: InputMaybe<Scalars['String']['input']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_gt?: InputMaybe<Scalars['String']['input']>;
  currency_gte?: InputMaybe<Scalars['String']['input']>;
  currency_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency_lt?: InputMaybe<Scalars['String']['input']>;
  currency_lte?: InputMaybe<Scalars['String']['input']>;
  currency_not?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  isAccepted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isAccepted_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAccepted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Currency_Filter>>>;
  removedBy?: InputMaybe<Scalars['String']['input']>;
  removedBy_?: InputMaybe<Account_Filter>;
  removedBy_contains?: InputMaybe<Scalars['String']['input']>;
  removedBy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_gt?: InputMaybe<Scalars['String']['input']>;
  removedBy_gte?: InputMaybe<Scalars['String']['input']>;
  removedBy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  removedBy_lt?: InputMaybe<Scalars['String']['input']>;
  removedBy_lte?: InputMaybe<Scalars['String']['input']>;
  removedBy_not?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  removedBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Currency_OrderBy {
  AddedBy = 'addedBy',
  AddedById = 'addedBy__id',
  AddedByIsAmlAgent = 'addedBy__isAMLAgent',
  AddedByIsDao = 'addedBy__isDao',
  AddedByIsKycAgent = 'addedBy__isKYCAgent',
  AddedByIsMerchant = 'addedBy__isMerchant',
  AddedByIsSettler = 'addedBy__isSettler',
  AddedByIsTrader = 'addedBy__isTrader',
  Currency = 'currency',
  CurrencyOffers = 'currencyOffers',
  Id = 'id',
  IsAccepted = 'isAccepted',
  RemovedBy = 'removedBy',
  RemovedById = 'removedBy__id',
  RemovedByIsAmlAgent = 'removedBy__isAMLAgent',
  RemovedByIsDao = 'removedBy__isDao',
  RemovedByIsKycAgent = 'removedBy__isKYCAgent',
  RemovedByIsMerchant = 'removedBy__isMerchant',
  RemovedByIsSettler = 'removedBy__isSettler',
  RemovedByIsTrader = 'removedBy__isTrader'
}

export type Offer = {
  __typename?: 'Offer';
  accountHash: Scalars['Bytes']['output'];
  active: Scalars['Boolean']['output'];
  currency: Currency;
  depositAddress: Account;
  id: Scalars['String']['output'];
  maxOrder: Scalars['BigInt']['output'];
  merchant: Account;
  minOrder: Scalars['BigInt']['output'];
  orders: Array<Order>;
  paymentMethod: PaymentMethod;
  rate: Scalars['BigInt']['output'];
  token: P2PToken;
};


export type OfferOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};

export type Offer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountHash?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accountHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Offer_Filter>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currency_?: InputMaybe<Currency_Filter>;
  currency_contains?: InputMaybe<Scalars['String']['input']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_gt?: InputMaybe<Scalars['String']['input']>;
  currency_gte?: InputMaybe<Scalars['String']['input']>;
  currency_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency_lt?: InputMaybe<Scalars['String']['input']>;
  currency_lte?: InputMaybe<Scalars['String']['input']>;
  currency_not?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress?: InputMaybe<Scalars['String']['input']>;
  depositAddress_?: InputMaybe<Account_Filter>;
  depositAddress_contains?: InputMaybe<Scalars['String']['input']>;
  depositAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_gt?: InputMaybe<Scalars['String']['input']>;
  depositAddress_gte?: InputMaybe<Scalars['String']['input']>;
  depositAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  depositAddress_lt?: InputMaybe<Scalars['String']['input']>;
  depositAddress_lte?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  depositAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxOrder?: InputMaybe<Scalars['BigInt']['input']>;
  maxOrder_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxOrder_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxOrder_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxOrder_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxOrder_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxOrder_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxOrder_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  merchant?: InputMaybe<Scalars['String']['input']>;
  merchant_?: InputMaybe<Account_Filter>;
  merchant_contains?: InputMaybe<Scalars['String']['input']>;
  merchant_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_ends_with?: InputMaybe<Scalars['String']['input']>;
  merchant_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_gt?: InputMaybe<Scalars['String']['input']>;
  merchant_gte?: InputMaybe<Scalars['String']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['String']['input']>>;
  merchant_lt?: InputMaybe<Scalars['String']['input']>;
  merchant_lte?: InputMaybe<Scalars['String']['input']>;
  merchant_not?: InputMaybe<Scalars['String']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['String']['input']>;
  merchant_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  merchant_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  merchant_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  merchant_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_starts_with?: InputMaybe<Scalars['String']['input']>;
  merchant_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minOrder?: InputMaybe<Scalars['BigInt']['input']>;
  minOrder_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minOrder_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minOrder_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minOrder_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minOrder_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minOrder_not?: InputMaybe<Scalars['BigInt']['input']>;
  minOrder_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Offer_Filter>>>;
  orders_?: InputMaybe<Order_Filter>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_?: InputMaybe<PaymentMethod_Filter>;
  paymentMethod_contains?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_gt?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_gte?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentMethod_lt?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_lte?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not_contains?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentMethod_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentMethod_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['BigInt']['input']>;
  rate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rate_not?: InputMaybe<Scalars['BigInt']['input']>;
  rate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<P2PToken_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Offer_OrderBy {
  AccountHash = 'accountHash',
  Active = 'active',
  Currency = 'currency',
  CurrencyCurrency = 'currency__currency',
  CurrencyId = 'currency__id',
  CurrencyIsAccepted = 'currency__isAccepted',
  DepositAddress = 'depositAddress',
  DepositAddressId = 'depositAddress__id',
  DepositAddressIsAmlAgent = 'depositAddress__isAMLAgent',
  DepositAddressIsDao = 'depositAddress__isDao',
  DepositAddressIsKycAgent = 'depositAddress__isKYCAgent',
  DepositAddressIsMerchant = 'depositAddress__isMerchant',
  DepositAddressIsSettler = 'depositAddress__isSettler',
  DepositAddressIsTrader = 'depositAddress__isTrader',
  Id = 'id',
  MaxOrder = 'maxOrder',
  Merchant = 'merchant',
  MerchantId = 'merchant__id',
  MerchantIsAmlAgent = 'merchant__isAMLAgent',
  MerchantIsDao = 'merchant__isDao',
  MerchantIsKycAgent = 'merchant__isKYCAgent',
  MerchantIsMerchant = 'merchant__isMerchant',
  MerchantIsSettler = 'merchant__isSettler',
  MerchantIsTrader = 'merchant__isTrader',
  MinOrder = 'minOrder',
  Orders = 'orders',
  PaymentMethod = 'paymentMethod',
  PaymentMethodId = 'paymentMethod__id',
  PaymentMethodIsAccepted = 'paymentMethod__isAccepted',
  PaymentMethodMethod = 'paymentMethod__method',
  Rate = 'rate',
  Token = 'token',
  TokenId = 'token__id',
  TokenIsTraded = 'token__isTraded',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol'
}

export type Order = {
  __typename?: 'Order';
  accountHash: Scalars['Bytes']['output'];
  appeal?: Maybe<Appeal>;
  depositAddress: Account;
  id: Scalars['String']['output'];
  offer: Offer;
  orderType: Scalars['Int']['output'];
  quantity: Scalars['BigInt']['output'];
  status: Scalars['Int']['output'];
  trader: Account;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Order_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountHash?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accountHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accountHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  appeal?: InputMaybe<Scalars['String']['input']>;
  appeal_?: InputMaybe<Appeal_Filter>;
  appeal_contains?: InputMaybe<Scalars['String']['input']>;
  appeal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_ends_with?: InputMaybe<Scalars['String']['input']>;
  appeal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_gt?: InputMaybe<Scalars['String']['input']>;
  appeal_gte?: InputMaybe<Scalars['String']['input']>;
  appeal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appeal_lt?: InputMaybe<Scalars['String']['input']>;
  appeal_lte?: InputMaybe<Scalars['String']['input']>;
  appeal_not?: InputMaybe<Scalars['String']['input']>;
  appeal_not_contains?: InputMaybe<Scalars['String']['input']>;
  appeal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appeal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appeal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appeal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appeal_starts_with?: InputMaybe<Scalars['String']['input']>;
  appeal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress?: InputMaybe<Scalars['String']['input']>;
  depositAddress_?: InputMaybe<Account_Filter>;
  depositAddress_contains?: InputMaybe<Scalars['String']['input']>;
  depositAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_gt?: InputMaybe<Scalars['String']['input']>;
  depositAddress_gte?: InputMaybe<Scalars['String']['input']>;
  depositAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  depositAddress_lt?: InputMaybe<Scalars['String']['input']>;
  depositAddress_lte?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  depositAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  depositAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  offer?: InputMaybe<Scalars['String']['input']>;
  offer_?: InputMaybe<Offer_Filter>;
  offer_contains?: InputMaybe<Scalars['String']['input']>;
  offer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  offer_ends_with?: InputMaybe<Scalars['String']['input']>;
  offer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  offer_gt?: InputMaybe<Scalars['String']['input']>;
  offer_gte?: InputMaybe<Scalars['String']['input']>;
  offer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  offer_lt?: InputMaybe<Scalars['String']['input']>;
  offer_lte?: InputMaybe<Scalars['String']['input']>;
  offer_not?: InputMaybe<Scalars['String']['input']>;
  offer_not_contains?: InputMaybe<Scalars['String']['input']>;
  offer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  offer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  offer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  offer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  offer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  offer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  offer_starts_with?: InputMaybe<Scalars['String']['input']>;
  offer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  orderType?: InputMaybe<Scalars['Int']['input']>;
  orderType_gt?: InputMaybe<Scalars['Int']['input']>;
  orderType_gte?: InputMaybe<Scalars['Int']['input']>;
  orderType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderType_lt?: InputMaybe<Scalars['Int']['input']>;
  orderType_lte?: InputMaybe<Scalars['Int']['input']>;
  orderType_not?: InputMaybe<Scalars['Int']['input']>;
  orderType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<Scalars['Int']['input']>;
  status_gt?: InputMaybe<Scalars['Int']['input']>;
  status_gte?: InputMaybe<Scalars['Int']['input']>;
  status_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  status_lt?: InputMaybe<Scalars['Int']['input']>;
  status_lte?: InputMaybe<Scalars['Int']['input']>;
  status_not?: InputMaybe<Scalars['Int']['input']>;
  status_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Account_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Order_OrderBy {
  AccountHash = 'accountHash',
  Appeal = 'appeal',
  AppealAppealDecision = 'appeal__appealDecision',
  AppealDaoVote = 'appeal__daoVote',
  AppealId = 'appeal__id',
  AppealReasonHash = 'appeal__reasonHash',
  AppealSettlerPickTime = 'appeal__settlerPickTime',
  DepositAddress = 'depositAddress',
  DepositAddressId = 'depositAddress__id',
  DepositAddressIsAmlAgent = 'depositAddress__isAMLAgent',
  DepositAddressIsDao = 'depositAddress__isDao',
  DepositAddressIsKycAgent = 'depositAddress__isKYCAgent',
  DepositAddressIsMerchant = 'depositAddress__isMerchant',
  DepositAddressIsSettler = 'depositAddress__isSettler',
  DepositAddressIsTrader = 'depositAddress__isTrader',
  Id = 'id',
  Offer = 'offer',
  OfferAccountHash = 'offer__accountHash',
  OfferActive = 'offer__active',
  OfferId = 'offer__id',
  OfferMaxOrder = 'offer__maxOrder',
  OfferMinOrder = 'offer__minOrder',
  OfferRate = 'offer__rate',
  OrderType = 'orderType',
  Quantity = 'quantity',
  Status = 'status',
  Trader = 'trader',
  TraderId = 'trader__id',
  TraderIsAmlAgent = 'trader__isAMLAgent',
  TraderIsDao = 'trader__isDao',
  TraderIsKycAgent = 'trader__isKYCAgent',
  TraderIsMerchant = 'trader__isMerchant',
  TraderIsSettler = 'trader__isSettler',
  TraderIsTrader = 'trader__isTrader'
}

export type P2PToken = {
  __typename?: 'P2PToken';
  addedBy: Account;
  id: Scalars['Bytes']['output'];
  isTraded: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  removedBy?: Maybe<Account>;
  symbol: Scalars['String']['output'];
  tokenOffers: Array<Offer>;
};


export type P2PTokenTokenOffersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Offer_Filter>;
};

export type P2PToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedBy?: InputMaybe<Scalars['String']['input']>;
  addedBy_?: InputMaybe<Account_Filter>;
  addedBy_contains?: InputMaybe<Scalars['String']['input']>;
  addedBy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_gt?: InputMaybe<Scalars['String']['input']>;
  addedBy_gte?: InputMaybe<Scalars['String']['input']>;
  addedBy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addedBy_lt?: InputMaybe<Scalars['String']['input']>;
  addedBy_lte?: InputMaybe<Scalars['String']['input']>;
  addedBy_not?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addedBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<P2PToken_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isTraded?: InputMaybe<Scalars['Boolean']['input']>;
  isTraded_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isTraded_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTraded_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<P2PToken_Filter>>>;
  removedBy?: InputMaybe<Scalars['String']['input']>;
  removedBy_?: InputMaybe<Account_Filter>;
  removedBy_contains?: InputMaybe<Scalars['String']['input']>;
  removedBy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_gt?: InputMaybe<Scalars['String']['input']>;
  removedBy_gte?: InputMaybe<Scalars['String']['input']>;
  removedBy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  removedBy_lt?: InputMaybe<Scalars['String']['input']>;
  removedBy_lte?: InputMaybe<Scalars['String']['input']>;
  removedBy_not?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  removedBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOffers_?: InputMaybe<Offer_Filter>;
};

export enum P2PToken_OrderBy {
  AddedBy = 'addedBy',
  AddedById = 'addedBy__id',
  AddedByIsAmlAgent = 'addedBy__isAMLAgent',
  AddedByIsDao = 'addedBy__isDao',
  AddedByIsKycAgent = 'addedBy__isKYCAgent',
  AddedByIsMerchant = 'addedBy__isMerchant',
  AddedByIsSettler = 'addedBy__isSettler',
  AddedByIsTrader = 'addedBy__isTrader',
  Id = 'id',
  IsTraded = 'isTraded',
  Name = 'name',
  RemovedBy = 'removedBy',
  RemovedById = 'removedBy__id',
  RemovedByIsAmlAgent = 'removedBy__isAMLAgent',
  RemovedByIsDao = 'removedBy__isDao',
  RemovedByIsKycAgent = 'removedBy__isKYCAgent',
  RemovedByIsMerchant = 'removedBy__isMerchant',
  RemovedByIsSettler = 'removedBy__isSettler',
  RemovedByIsTrader = 'removedBy__isTrader',
  Symbol = 'symbol',
  TokenOffers = 'tokenOffers'
}

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  addedBy: Account;
  id: Scalars['Bytes']['output'];
  isAccepted: Scalars['Boolean']['output'];
  method: Scalars['String']['output'];
  offers: Array<Offer>;
  removedBy?: Maybe<Account>;
};


export type PaymentMethodOffersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Offer_Filter>;
};

export type PaymentMethod_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedBy?: InputMaybe<Scalars['String']['input']>;
  addedBy_?: InputMaybe<Account_Filter>;
  addedBy_contains?: InputMaybe<Scalars['String']['input']>;
  addedBy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_gt?: InputMaybe<Scalars['String']['input']>;
  addedBy_gte?: InputMaybe<Scalars['String']['input']>;
  addedBy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addedBy_lt?: InputMaybe<Scalars['String']['input']>;
  addedBy_lte?: InputMaybe<Scalars['String']['input']>;
  addedBy_not?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addedBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addedBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  addedBy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<PaymentMethod_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  isAccepted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isAccepted_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAccepted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  method?: InputMaybe<Scalars['String']['input']>;
  method_contains?: InputMaybe<Scalars['String']['input']>;
  method_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  method_ends_with?: InputMaybe<Scalars['String']['input']>;
  method_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  method_gt?: InputMaybe<Scalars['String']['input']>;
  method_gte?: InputMaybe<Scalars['String']['input']>;
  method_in?: InputMaybe<Array<Scalars['String']['input']>>;
  method_lt?: InputMaybe<Scalars['String']['input']>;
  method_lte?: InputMaybe<Scalars['String']['input']>;
  method_not?: InputMaybe<Scalars['String']['input']>;
  method_not_contains?: InputMaybe<Scalars['String']['input']>;
  method_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  method_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  method_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  method_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  method_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  method_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  method_starts_with?: InputMaybe<Scalars['String']['input']>;
  method_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  offers_?: InputMaybe<Offer_Filter>;
  or?: InputMaybe<Array<InputMaybe<PaymentMethod_Filter>>>;
  removedBy?: InputMaybe<Scalars['String']['input']>;
  removedBy_?: InputMaybe<Account_Filter>;
  removedBy_contains?: InputMaybe<Scalars['String']['input']>;
  removedBy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_gt?: InputMaybe<Scalars['String']['input']>;
  removedBy_gte?: InputMaybe<Scalars['String']['input']>;
  removedBy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  removedBy_lt?: InputMaybe<Scalars['String']['input']>;
  removedBy_lte?: InputMaybe<Scalars['String']['input']>;
  removedBy_not?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  removedBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  removedBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  removedBy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PaymentMethod_OrderBy {
  AddedBy = 'addedBy',
  AddedById = 'addedBy__id',
  AddedByIsAmlAgent = 'addedBy__isAMLAgent',
  AddedByIsDao = 'addedBy__isDao',
  AddedByIsKycAgent = 'addedBy__isKYCAgent',
  AddedByIsMerchant = 'addedBy__isMerchant',
  AddedByIsSettler = 'addedBy__isSettler',
  AddedByIsTrader = 'addedBy__isTrader',
  Id = 'id',
  IsAccepted = 'isAccepted',
  Method = 'method',
  Offers = 'offers',
  RemovedBy = 'removedBy',
  RemovedById = 'removedBy__id',
  RemovedByIsAmlAgent = 'removedBy__isAMLAgent',
  RemovedByIsDao = 'removedBy__isDao',
  RemovedByIsKycAgent = 'removedBy__isKYCAgent',
  RemovedByIsMerchant = 'removedBy__isMerchant',
  RemovedByIsSettler = 'removedBy__isSettler',
  RemovedByIsTrader = 'removedBy__isTrader'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  appeal?: Maybe<Appeal>;
  appealRound?: Maybe<AppealRound>;
  appealRounds: Array<AppealRound>;
  appeals: Array<Appeal>;
  currencies: Array<Currency>;
  currency?: Maybe<Currency>;
  offer?: Maybe<Offer>;
  offers: Array<Offer>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  p2Ptoken?: Maybe<P2PToken>;
  p2Ptokens: Array<P2PToken>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethods: Array<PaymentMethod>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAppealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppealRoundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppealRoundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppealRound_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppealRound_Filter>;
};


export type QueryAppealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Appeal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Appeal_Filter>;
};


export type QueryCurrenciesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Currency_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Currency_Filter>;
};


export type QueryCurrencyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Offer_Filter>;
};


export type QueryOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type QueryP2PtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryP2PtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<P2PToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<P2PToken_Filter>;
};


export type QueryPaymentMethodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPaymentMethodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentMethod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PaymentMethod_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  appeal?: Maybe<Appeal>;
  appealRound?: Maybe<AppealRound>;
  appealRounds: Array<AppealRound>;
  appeals: Array<Appeal>;
  currencies: Array<Currency>;
  currency?: Maybe<Currency>;
  offer?: Maybe<Offer>;
  offers: Array<Offer>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  p2Ptoken?: Maybe<P2PToken>;
  p2Ptokens: Array<P2PToken>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethods: Array<PaymentMethod>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAppealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppealRoundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppealRoundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppealRound_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppealRound_Filter>;
};


export type SubscriptionAppealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Appeal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Appeal_Filter>;
};


export type SubscriptionCurrenciesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Currency_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Currency_Filter>;
};


export type SubscriptionCurrencyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Offer_Filter>;
};


export type SubscriptionOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type SubscriptionP2PtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionP2PtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<P2PToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<P2PToken_Filter>;
};


export type SubscriptionPaymentMethodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPaymentMethodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentMethod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PaymentMethod_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type OffersQueryVariables = Exact<{
  where?: InputMaybe<Offer_Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OffersQuery = { __typename?: 'Query', offers: Array<{ __typename?: 'Offer', id: string, rate: any, minOrder: any, maxOrder: any, active: boolean, token: { __typename?: 'P2PToken', id: any, name: string, symbol: string }, currency: { __typename?: 'Currency', id: any, currency: string }, paymentMethod: { __typename?: 'PaymentMethod', id: any, method: string }, merchant: { __typename?: 'Account', id: any, isMerchant: boolean } }> };

export type SupportedCurrenciesQueryVariables = Exact<{
  where?: InputMaybe<Currency_Filter>;
}>;


export type SupportedCurrenciesQuery = { __typename?: 'Query', currencies: Array<{ __typename?: 'Currency', id: any, currency: string, isAccepted: boolean }> };

export type SupportedP2PTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type SupportedP2PTokensQuery = { __typename?: 'Query', p2Ptokens: Array<{ __typename?: 'P2PToken', id: any, name: string, symbol: string }> };


export const OffersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Offers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Offer_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"minOrder"}},{"kind":"Field","name":{"kind":"Name","value":"maxOrder"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isMerchant"}}]}}]}}]}}]} as unknown as DocumentNode<OffersQuery, OffersQueryVariables>;
export const SupportedCurrenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SupportedCurrencies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Currency_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"isAccepted"}}]}}]}}]} as unknown as DocumentNode<SupportedCurrenciesQuery, SupportedCurrenciesQueryVariables>;
export const SupportedP2PTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SupportedP2PTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p2Ptokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]} as unknown as DocumentNode<SupportedP2PTokensQuery, SupportedP2PTokensQueryVariables>;