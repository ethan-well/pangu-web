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

export const AttributeList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AttributeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput multiline source="desc" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const AttributeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput multiline source="desc" validate={required()} />
    </SimpleForm>
  </Create>
);
