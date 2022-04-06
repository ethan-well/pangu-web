import * as React from "react";
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
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const PostIcon = BookIcon;

export const AttributeMappingList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="attrId" />
      <TextField source="subProductId" />
      <TextField source="attrValue" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AttributeMappingEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput
        disabled
        label="Attribute"
        source="attrId"
        validate={required()}
      />
      <TextInput
        disabled
        label="SubProduct"
        source="subProductId"
        validate={required()}
      />
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
