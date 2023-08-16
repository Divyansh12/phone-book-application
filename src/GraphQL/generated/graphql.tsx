import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory = {
  __typename?: '_fuzzysearch_directory';
  company: Scalars['String']['output'];
  department: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate = {
  __typename?: '_fuzzysearch_directory_aggregate';
  aggregate?: Maybe<_Fuzzysearch_Directory_Aggregate_Fields>;
  nodes: Array<_Fuzzysearch_Directory>;
};

/** aggregate fields of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate_Fields = {
  __typename?: '_fuzzysearch_directory_aggregate_fields';
  avg?: Maybe<_Fuzzysearch_Directory_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<_Fuzzysearch_Directory_Max_Fields>;
  min?: Maybe<_Fuzzysearch_Directory_Min_Fields>;
  stddev?: Maybe<_Fuzzysearch_Directory_Stddev_Fields>;
  stddev_pop?: Maybe<_Fuzzysearch_Directory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Fuzzysearch_Directory_Stddev_Samp_Fields>;
  sum?: Maybe<_Fuzzysearch_Directory_Sum_Fields>;
  var_pop?: Maybe<_Fuzzysearch_Directory_Var_Pop_Fields>;
  var_samp?: Maybe<_Fuzzysearch_Directory_Var_Samp_Fields>;
  variance?: Maybe<_Fuzzysearch_Directory_Variance_Fields>;
};


/** aggregate fields of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type _Fuzzysearch_Directory_Avg_Fields = {
  __typename?: '_fuzzysearch_directory_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "_fuzzysearch.directory". All fields are combined with a logical 'AND'. */
export type _Fuzzysearch_Directory_Bool_Exp = {
  _and?: InputMaybe<Array<_Fuzzysearch_Directory_Bool_Exp>>;
  _not?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
  _or?: InputMaybe<Array<_Fuzzysearch_Directory_Bool_Exp>>;
  company?: InputMaybe<String_Comparison_Exp>;
  department?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Constraint {
  /** unique or primary key constraint */
  DirectoryPkey = 'directory_pkey'
}

/** input type for incrementing numeric columns in table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Insert_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Fuzzysearch_Directory_Max_Fields = {
  __typename?: '_fuzzysearch_directory_max_fields';
  company?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Fuzzysearch_Directory_Min_Fields = {
  __typename?: '_fuzzysearch_directory_min_fields';
  company?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Mutation_Response = {
  __typename?: '_fuzzysearch_directory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Fuzzysearch_Directory>;
};

/** on_conflict condition type for table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_On_Conflict = {
  constraint: _Fuzzysearch_Directory_Constraint;
  update_columns?: Array<_Fuzzysearch_Directory_Update_Column>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};

/** Ordering options when selecting data from "_fuzzysearch.directory". */
export type _Fuzzysearch_Directory_Order_By = {
  company?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _fuzzysearch_directory */
export type _Fuzzysearch_Directory_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Select_Column {
  /** column name */
  Company = 'company',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Set_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type _Fuzzysearch_Directory_Stddev_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type _Fuzzysearch_Directory_Stddev_Pop_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type _Fuzzysearch_Directory_Stddev_Samp_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type _Fuzzysearch_Directory_Sum_Fields = {
  __typename?: '_fuzzysearch_directory_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Update_Column {
  /** column name */
  Company = 'company',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type _Fuzzysearch_Directory_Var_Pop_Fields = {
  __typename?: '_fuzzysearch_directory_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type _Fuzzysearch_Directory_Var_Samp_Fields = {
  __typename?: '_fuzzysearch_directory_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type _Fuzzysearch_Directory_Variance_Fields = {
  __typename?: '_fuzzysearch_directory_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type _Fuzzysearch_Search_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Table Contact  */
export type Contact = {
  __typename?: 'contact';
  created_at: Scalars['timestamptz']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  /** An array relationship */
  phones: Array<Phone>;
  /** An aggregate relationship */
  phones_aggregate: Phone_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Table Contact  */
export type ContactPhonesArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


/** Table Contact  */
export type ContactPhones_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  avg?: Maybe<Contact_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
  stddev?: Maybe<Contact_Stddev_Fields>;
  stddev_pop?: Maybe<Contact_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contact_Stddev_Samp_Fields>;
  sum?: Maybe<Contact_Sum_Fields>;
  var_pop?: Maybe<Contact_Var_Pop_Fields>;
  var_samp?: Maybe<Contact_Var_Samp_Fields>;
  variance?: Maybe<Contact_Variance_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contact_Avg_Fields = {
  __typename?: 'contact_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phones?: InputMaybe<Phone_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint */
  ContactPkey = 'contact_pkey'
}

/** input type for incrementing numeric columns in table "contact" */
export type Contact_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Phone_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phones_aggregate?: InputMaybe<Phone_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Contact_Stddev_Fields = {
  __typename?: 'contact_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contact_Stddev_Pop_Fields = {
  __typename?: 'contact_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contact_Stddev_Samp_Fields = {
  __typename?: 'contact_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Contact_Sum_Fields = {
  __typename?: 'contact_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Contact_Var_Pop_Fields = {
  __typename?: 'contact_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contact_Var_Samp_Fields = {
  __typename?: 'contact_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contact_Variance_Fields = {
  __typename?: 'contact_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "_fuzzysearch.directory" */
  delete__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** delete single row from the table: "_fuzzysearch.directory" */
  delete__fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "phone" */
  delete_phone?: Maybe<Phone_Mutation_Response>;
  /** delete single row from the table: "phone" */
  delete_phone_by_pk?: Maybe<Phone>;
  /** insert data into the table: "_fuzzysearch.directory" */
  insert__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** insert a single row into the table: "_fuzzysearch.directory" */
  insert__fuzzysearch_directory_one?: Maybe<_Fuzzysearch_Directory>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "phone" */
  insert_phone?: Maybe<Phone_Mutation_Response>;
  /** insert a single row into the table: "phone" */
  insert_phone_one?: Maybe<Phone>;
  /** update data of the table: "_fuzzysearch.directory" */
  update__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** update single row of the table: "_fuzzysearch.directory" */
  update__fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update data of the table: "phone" */
  update_phone?: Maybe<Phone_Mutation_Response>;
  /** update single row of the table: "phone" */
  update_phone_by_pk?: Maybe<Phone>;
};


/** mutation root */
export type Mutation_RootDelete__Fuzzysearch_DirectoryArgs = {
  where: _Fuzzysearch_Directory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PhoneArgs = {
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Phone_By_PkArgs = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert__Fuzzysearch_DirectoryArgs = {
  objects: Array<_Fuzzysearch_Directory_Insert_Input>;
  on_conflict?: InputMaybe<_Fuzzysearch_Directory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Fuzzysearch_Directory_OneArgs = {
  object: _Fuzzysearch_Directory_Insert_Input;
  on_conflict?: InputMaybe<_Fuzzysearch_Directory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhoneArgs = {
  objects: Array<Phone_Insert_Input>;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Phone_OneArgs = {
  object: Phone_Insert_Input;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate__Fuzzysearch_DirectoryArgs = {
  _inc?: InputMaybe<_Fuzzysearch_Directory_Inc_Input>;
  _set?: InputMaybe<_Fuzzysearch_Directory_Set_Input>;
  where: _Fuzzysearch_Directory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Fuzzysearch_Directory_By_PkArgs = {
  _inc?: InputMaybe<_Fuzzysearch_Directory_Inc_Input>;
  _set?: InputMaybe<_Fuzzysearch_Directory_Set_Input>;
  pk_columns: _Fuzzysearch_Directory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PhoneArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Phone_By_PkArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  pk_columns: Phone_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Table Phone Numbers  */
export type Phone = {
  __typename?: 'phone';
  /** An object relationship */
  contact?: Maybe<Contact>;
  contact_id: Scalars['Int']['output'];
  created_ad?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  number: Scalars['String']['output'];
};

/** aggregated selection of "phone" */
export type Phone_Aggregate = {
  __typename?: 'phone_aggregate';
  aggregate?: Maybe<Phone_Aggregate_Fields>;
  nodes: Array<Phone>;
};

/** aggregate fields of "phone" */
export type Phone_Aggregate_Fields = {
  __typename?: 'phone_aggregate_fields';
  avg?: Maybe<Phone_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Phone_Max_Fields>;
  min?: Maybe<Phone_Min_Fields>;
  stddev?: Maybe<Phone_Stddev_Fields>;
  stddev_pop?: Maybe<Phone_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Phone_Stddev_Samp_Fields>;
  sum?: Maybe<Phone_Sum_Fields>;
  var_pop?: Maybe<Phone_Var_Pop_Fields>;
  var_samp?: Maybe<Phone_Var_Samp_Fields>;
  variance?: Maybe<Phone_Variance_Fields>;
};


/** aggregate fields of "phone" */
export type Phone_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Phone_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "phone" */
export type Phone_Aggregate_Order_By = {
  avg?: InputMaybe<Phone_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Phone_Max_Order_By>;
  min?: InputMaybe<Phone_Min_Order_By>;
  stddev?: InputMaybe<Phone_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Phone_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Phone_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Phone_Sum_Order_By>;
  var_pop?: InputMaybe<Phone_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Phone_Var_Samp_Order_By>;
  variance?: InputMaybe<Phone_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "phone" */
export type Phone_Arr_Rel_Insert_Input = {
  data: Array<Phone_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};

/** aggregate avg on columns */
export type Phone_Avg_Fields = {
  __typename?: 'phone_avg_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "phone" */
export type Phone_Avg_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "phone". All fields are combined with a logical 'AND'. */
export type Phone_Bool_Exp = {
  _and?: InputMaybe<Array<Phone_Bool_Exp>>;
  _not?: InputMaybe<Phone_Bool_Exp>;
  _or?: InputMaybe<Array<Phone_Bool_Exp>>;
  contact?: InputMaybe<Contact_Bool_Exp>;
  contact_id?: InputMaybe<Int_Comparison_Exp>;
  created_ad?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "phone" */
export enum Phone_Constraint {
  /** unique or primary key constraint */
  PhoneIdKey = 'phone_id_key',
  /** unique or primary key constraint */
  PhoneNumberKey = 'phone_number_key',
  /** unique or primary key constraint */
  PhonePkey = 'phone_pkey'
}

/** input type for incrementing numeric columns in table "phone" */
export type Phone_Inc_Input = {
  contact_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "phone" */
export type Phone_Insert_Input = {
  contact?: InputMaybe<Contact_Obj_Rel_Insert_Input>;
  contact_id?: InputMaybe<Scalars['Int']['input']>;
  created_ad?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Phone_Max_Fields = {
  __typename?: 'phone_max_fields';
  contact_id?: Maybe<Scalars['Int']['output']>;
  created_ad?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "phone" */
export type Phone_Max_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Phone_Min_Fields = {
  __typename?: 'phone_min_fields';
  contact_id?: Maybe<Scalars['Int']['output']>;
  created_ad?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "phone" */
export type Phone_Min_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "phone" */
export type Phone_Mutation_Response = {
  __typename?: 'phone_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Phone>;
};

/** on_conflict condition type for table "phone" */
export type Phone_On_Conflict = {
  constraint: Phone_Constraint;
  update_columns?: Array<Phone_Update_Column>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** Ordering options when selecting data from "phone". */
export type Phone_Order_By = {
  contact?: InputMaybe<Contact_Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: phone */
export type Phone_Pk_Columns_Input = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};

/** select columns of table "phone" */
export enum Phone_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** input type for updating data in table "phone" */
export type Phone_Set_Input = {
  contact_id?: InputMaybe<Scalars['Int']['input']>;
  created_ad?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Phone_Stddev_Fields = {
  __typename?: 'phone_stddev_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "phone" */
export type Phone_Stddev_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Phone_Stddev_Pop_Fields = {
  __typename?: 'phone_stddev_pop_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "phone" */
export type Phone_Stddev_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Phone_Stddev_Samp_Fields = {
  __typename?: 'phone_stddev_samp_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "phone" */
export type Phone_Stddev_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Phone_Sum_Fields = {
  __typename?: 'phone_sum_fields';
  contact_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "phone" */
export type Phone_Sum_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "phone" */
export enum Phone_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** aggregate var_pop on columns */
export type Phone_Var_Pop_Fields = {
  __typename?: 'phone_var_pop_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "phone" */
export type Phone_Var_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Phone_Var_Samp_Fields = {
  __typename?: 'phone_var_samp_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "phone" */
export type Phone_Var_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Phone_Variance_Fields = {
  __typename?: 'phone_variance_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "phone" */
export type Phone_Variance_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory: Array<_Fuzzysearch_Directory>;
  /** fetch aggregated fields from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "_fuzzysearch.directory" using primary key columns */
  _fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" which returns "_fuzzysearch.directory" */
  _fuzzysearch_search: Array<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" and query aggregates on result of table type "_fuzzysearch.directory" */
  _fuzzysearch_search_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
};


export type Query_Root_Fuzzysearch_DirectoryArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Directory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_Root_Fuzzysearch_SearchArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Search_AggregateArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory: Array<_Fuzzysearch_Directory>;
  /** fetch aggregated fields from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "_fuzzysearch.directory" using primary key columns */
  _fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" which returns "_fuzzysearch.directory" */
  _fuzzysearch_search: Array<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" and query aggregates on result of table type "_fuzzysearch.directory" */
  _fuzzysearch_search_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
};


export type Subscription_Root_Fuzzysearch_DirectoryArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Directory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_Root_Fuzzysearch_SearchArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Search_AggregateArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type AddNumberToContactMutationVariables = Exact<{
  contact_id: Scalars['Int']['input'];
  phone_number: Scalars['String']['input'];
}>;


export type AddNumberToContactMutation = { __typename?: 'mutation_root', insert_phone?: { __typename?: 'phone_mutation_response', returning: Array<{ __typename?: 'phone', contact?: { __typename?: 'contact', id: number, last_name: string, first_name: string, phones: Array<{ __typename?: 'phone', number: string }> } | null }> } | null };

export type AddContactWithPhonesMutationVariables = Exact<{
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  phones: Array<Phone_Insert_Input> | Phone_Insert_Input;
}>;


export type AddContactWithPhonesMutation = { __typename?: 'mutation_root', insert_contact?: { __typename?: 'contact_mutation_response', returning: Array<{ __typename?: 'contact', first_name: string, last_name: string, id: number, phones: Array<{ __typename?: 'phone', number: string }> }> } | null };

export type DeleteContactMutationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteContactMutationMutation = { __typename?: 'mutation_root', delete_contact_by_pk?: { __typename?: 'contact', first_name: string, last_name: string, id: number } | null };

export type EditContactByIdMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  _set?: InputMaybe<Contact_Set_Input>;
}>;


export type EditContactByIdMutation = { __typename?: 'mutation_root', update_contact_by_pk?: { __typename?: 'contact', id: number, first_name: string, last_name: string, phones: Array<{ __typename?: 'phone', number: string }> } | null };

export type EditPhoneNumberMutationVariables = Exact<{
  pk_columns: Phone_Pk_Columns_Input;
  new_phone_number: Scalars['String']['input'];
}>;


export type EditPhoneNumberMutation = { __typename?: 'mutation_root', update_phone_by_pk?: { __typename?: 'phone', contact?: { __typename?: 'contact', id: number, last_name: string, first_name: string, created_at: any, phones: Array<{ __typename?: 'phone', number: string }> } | null } | null };

export type GetContactListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactListQuery = { __typename?: 'query_root', contact: Array<{ __typename?: 'contact', created_at: any, first_name: string, id: number, last_name: string, phones: Array<{ __typename?: 'phone', number: string }> }> };

export type GetContactDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetContactDetailQuery = { __typename?: 'query_root', contact_by_pk?: { __typename?: 'contact', last_name: string, id: number, first_name: string, created_at: any, phones: Array<{ __typename?: 'phone', number: string }> } | null };

export type GetPhoneListQueryVariables = Exact<{
  where?: InputMaybe<Phone_Bool_Exp>;
  distinct_on?: InputMaybe<Array<Phone_Select_Column> | Phone_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By> | Phone_Order_By>;
}>;


export type GetPhoneListQuery = { __typename?: 'query_root', phone: Array<{ __typename?: 'phone', number: string, contact?: { __typename?: 'contact', last_name: string, first_name: string, id: number } | null }> };


export const AddNumberToContactDocument = gql`
    mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {
  insert_phone(objects: {contact_id: $contact_id, number: $phone_number}) {
    returning {
      contact {
        id
        last_name
        first_name
        phones {
          number
        }
      }
    }
  }
}
    `;
export type AddNumberToContactMutationFn = Apollo.MutationFunction<AddNumberToContactMutation, AddNumberToContactMutationVariables>;

/**
 * __useAddNumberToContactMutation__
 *
 * To run a mutation, you first call `useAddNumberToContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNumberToContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNumberToContactMutation, { data, loading, error }] = useAddNumberToContactMutation({
 *   variables: {
 *      contact_id: // value for 'contact_id'
 *      phone_number: // value for 'phone_number'
 *   },
 * });
 */
export function useAddNumberToContactMutation(baseOptions?: Apollo.MutationHookOptions<AddNumberToContactMutation, AddNumberToContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNumberToContactMutation, AddNumberToContactMutationVariables>(AddNumberToContactDocument, options);
      }
export type AddNumberToContactMutationHookResult = ReturnType<typeof useAddNumberToContactMutation>;
export type AddNumberToContactMutationResult = Apollo.MutationResult<AddNumberToContactMutation>;
export type AddNumberToContactMutationOptions = Apollo.BaseMutationOptions<AddNumberToContactMutation, AddNumberToContactMutationVariables>;
export const AddContactWithPhonesDocument = gql`
    mutation AddContactWithPhones($first_name: String!, $last_name: String!, $phones: [phone_insert_input!]!) {
  insert_contact(
    objects: {first_name: $first_name, last_name: $last_name, phones: {data: $phones}}
  ) {
    returning {
      first_name
      last_name
      id
      phones {
        number
      }
    }
  }
}
    `;
export type AddContactWithPhonesMutationFn = Apollo.MutationFunction<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>;

/**
 * __useAddContactWithPhonesMutation__
 *
 * To run a mutation, you first call `useAddContactWithPhonesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactWithPhonesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactWithPhonesMutation, { data, loading, error }] = useAddContactWithPhonesMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      phones: // value for 'phones'
 *   },
 * });
 */
export function useAddContactWithPhonesMutation(baseOptions?: Apollo.MutationHookOptions<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>(AddContactWithPhonesDocument, options);
      }
export type AddContactWithPhonesMutationHookResult = ReturnType<typeof useAddContactWithPhonesMutation>;
export type AddContactWithPhonesMutationResult = Apollo.MutationResult<AddContactWithPhonesMutation>;
export type AddContactWithPhonesMutationOptions = Apollo.BaseMutationOptions<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>;
export const DeleteContactMutationDocument = gql`
    mutation DeleteContactMutation($id: Int!) {
  delete_contact_by_pk(id: $id) {
    first_name
    last_name
    id
  }
}
    `;
export type DeleteContactMutationMutationFn = Apollo.MutationFunction<DeleteContactMutationMutation, DeleteContactMutationMutationVariables>;

/**
 * __useDeleteContactMutationMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutationMutation, { data, loading, error }] = useDeleteContactMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContactMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactMutationMutation, DeleteContactMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactMutationMutation, DeleteContactMutationMutationVariables>(DeleteContactMutationDocument, options);
      }
export type DeleteContactMutationMutationHookResult = ReturnType<typeof useDeleteContactMutationMutation>;
export type DeleteContactMutationMutationResult = Apollo.MutationResult<DeleteContactMutationMutation>;
export type DeleteContactMutationMutationOptions = Apollo.BaseMutationOptions<DeleteContactMutationMutation, DeleteContactMutationMutationVariables>;
export const EditContactByIdDocument = gql`
    mutation EditContactById($id: Int!, $_set: contact_set_input) {
  update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    first_name
    last_name
    phones {
      number
    }
  }
}
    `;
export type EditContactByIdMutationFn = Apollo.MutationFunction<EditContactByIdMutation, EditContactByIdMutationVariables>;

/**
 * __useEditContactByIdMutation__
 *
 * To run a mutation, you first call `useEditContactByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditContactByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editContactByIdMutation, { data, loading, error }] = useEditContactByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useEditContactByIdMutation(baseOptions?: Apollo.MutationHookOptions<EditContactByIdMutation, EditContactByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditContactByIdMutation, EditContactByIdMutationVariables>(EditContactByIdDocument, options);
      }
export type EditContactByIdMutationHookResult = ReturnType<typeof useEditContactByIdMutation>;
export type EditContactByIdMutationResult = Apollo.MutationResult<EditContactByIdMutation>;
export type EditContactByIdMutationOptions = Apollo.BaseMutationOptions<EditContactByIdMutation, EditContactByIdMutationVariables>;
export const EditPhoneNumberDocument = gql`
    mutation EditPhoneNumber($pk_columns: phone_pk_columns_input!, $new_phone_number: String!) {
  update_phone_by_pk(pk_columns: $pk_columns, _set: {number: $new_phone_number}) {
    contact {
      id
      last_name
      first_name
      created_at
      phones {
        number
      }
    }
  }
}
    `;
export type EditPhoneNumberMutationFn = Apollo.MutationFunction<EditPhoneNumberMutation, EditPhoneNumberMutationVariables>;

/**
 * __useEditPhoneNumberMutation__
 *
 * To run a mutation, you first call `useEditPhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPhoneNumberMutation, { data, loading, error }] = useEditPhoneNumberMutation({
 *   variables: {
 *      pk_columns: // value for 'pk_columns'
 *      new_phone_number: // value for 'new_phone_number'
 *   },
 * });
 */
export function useEditPhoneNumberMutation(baseOptions?: Apollo.MutationHookOptions<EditPhoneNumberMutation, EditPhoneNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPhoneNumberMutation, EditPhoneNumberMutationVariables>(EditPhoneNumberDocument, options);
      }
export type EditPhoneNumberMutationHookResult = ReturnType<typeof useEditPhoneNumberMutation>;
export type EditPhoneNumberMutationResult = Apollo.MutationResult<EditPhoneNumberMutation>;
export type EditPhoneNumberMutationOptions = Apollo.BaseMutationOptions<EditPhoneNumberMutation, EditPhoneNumberMutationVariables>;
export const GetContactListDocument = gql`
    query GetContactList {
  contact(order_by: {created_at: asc}) {
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
    `;

/**
 * __useGetContactListQuery__
 *
 * To run a query within a React component, call `useGetContactListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactListQuery(baseOptions?: Apollo.QueryHookOptions<GetContactListQuery, GetContactListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactListQuery, GetContactListQueryVariables>(GetContactListDocument, options);
      }
export function useGetContactListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactListQuery, GetContactListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactListQuery, GetContactListQueryVariables>(GetContactListDocument, options);
        }
export type GetContactListQueryHookResult = ReturnType<typeof useGetContactListQuery>;
export type GetContactListLazyQueryHookResult = ReturnType<typeof useGetContactListLazyQuery>;
export type GetContactListQueryResult = Apollo.QueryResult<GetContactListQuery, GetContactListQueryVariables>;
export const GetContactDetailDocument = gql`
    query GetContactDetail($id: Int!) {
  contact_by_pk(id: $id) {
    last_name
    id
    first_name
    created_at
    phones {
      number
    }
  }
}
    `;

/**
 * __useGetContactDetailQuery__
 *
 * To run a query within a React component, call `useGetContactDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContactDetailQuery(baseOptions: Apollo.QueryHookOptions<GetContactDetailQuery, GetContactDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactDetailQuery, GetContactDetailQueryVariables>(GetContactDetailDocument, options);
      }
export function useGetContactDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactDetailQuery, GetContactDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactDetailQuery, GetContactDetailQueryVariables>(GetContactDetailDocument, options);
        }
export type GetContactDetailQueryHookResult = ReturnType<typeof useGetContactDetailQuery>;
export type GetContactDetailLazyQueryHookResult = ReturnType<typeof useGetContactDetailLazyQuery>;
export type GetContactDetailQueryResult = Apollo.QueryResult<GetContactDetailQuery, GetContactDetailQueryVariables>;
export const GetPhoneListDocument = gql`
    query GetPhoneList($where: phone_bool_exp, $distinct_on: [phone_select_column!], $limit: Int = 10, $offset: Int = 0, $order_by: [phone_order_by!]) {
  phone(
    where: $where
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
  ) {
    contact {
      last_name
      first_name
      id
    }
    number
  }
}
    `;

/**
 * __useGetPhoneListQuery__
 *
 * To run a query within a React component, call `useGetPhoneListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhoneListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhoneListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      distinct_on: // value for 'distinct_on'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useGetPhoneListQuery(baseOptions?: Apollo.QueryHookOptions<GetPhoneListQuery, GetPhoneListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhoneListQuery, GetPhoneListQueryVariables>(GetPhoneListDocument, options);
      }
export function useGetPhoneListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhoneListQuery, GetPhoneListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhoneListQuery, GetPhoneListQueryVariables>(GetPhoneListDocument, options);
        }
export type GetPhoneListQueryHookResult = ReturnType<typeof useGetPhoneListQuery>;
export type GetPhoneListLazyQueryHookResult = ReturnType<typeof useGetPhoneListLazyQuery>;
export type GetPhoneListQueryResult = Apollo.QueryResult<GetPhoneListQuery, GetPhoneListQueryVariables>;