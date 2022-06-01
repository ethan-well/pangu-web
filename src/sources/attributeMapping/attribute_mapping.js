import * as React from "react";
import { ReferenceInput, AutocompleteInput } from "react-admin";
import {
  List,
  Datagrid,
  Edit,
  SimpleForm,
  Create,
  TextField,
  TextInput,
  EditButton,
  required,
  ReferenceField,
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const PostIcon = BookIcon;

export const AttributeMappingList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="attribute" source="attrId" reference="attributes">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        label="subProduct"
        source="subProductId"
        reference="sub_products"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="attrValue" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AttributeMappingEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <ReferenceInput
        disabled
        label="SubProduct"
        source="subProductId"
        reference="sub_products"
        validate={required()}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        disabled
        label="Attribute"
        source="attrId"
        reference="attributes"
        validate={required()}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput multiline source="attrValue" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const AttributeMappingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput multiline source="attrId" validate={required()} />
      <TextInput multiline source="subProductId" validate={required()} />
      <TextInput multiline source="attrValue" validate={required()} />
    </SimpleForm>
  </Create>
);
