export interface ISignup {
    sections: SectionsEntity[];
    validation: Validation;
  }
  export interface SectionsEntity {
    submitButtonLabel: string;
    fields?: (FieldsEntity)[] | null;
  }
  export interface FieldsEntity {
    name: string;
    label?: string | null;
    component: string | Component | string | Component1;
    type?: string | null;
  }
  export interface Component {
    name: string;
    props: Props;
  }
  export interface Props {
    label: string;
  }
  export interface Component1 {
    name: string;
    props: Props1;
  }
  export interface Props1 {
    label: string;
    options?: (OptionsEntity)[] | null;
  }
  export interface OptionsEntity {
    value: string;
    label: string;
  }
  export interface Validation {
    schema: Schema;
    config: Config;
  }
  export interface Schema {
    title: string;
    type: string;
    properties: Properties;
  }
  export interface Properties {
    firstName: FirstNameOrLastNameOrPassword;
    lastName: FirstNameOrLastNameOrPassword;
    email: Email;
    password: FirstNameOrLastNameOrPassword;
    termsAndCondition: TermsAndCondition;
  }
  export interface FirstNameOrLastNameOrPassword {
    type: string;
    required: boolean;
  }
  export interface Email {
    type: string;
    format: string;
    required: boolean;
  }
  export interface TermsAndCondition {
    type: string;
    required: boolean;
    oneOf?: (boolean)[] | null;
  }
  export interface Config {
    errMessages: ErrMessages;
  }
  export interface ErrMessages {
    firstName: FirstNameOrLastNameOrPassword1;
    lastName: FirstNameOrLastNameOrPassword1;
    email: Email1;
    password: FirstNameOrLastNameOrPassword1;
    termsAndCondition: TermsAndCondition1;
  }
  export interface FirstNameOrLastNameOrPassword1 {
    required: string;
  }
  export interface Email1 {
    required: string;
    format: string;
  }
  export interface TermsAndCondition1 {
    required: string;
    oneOf: string;
  }
  