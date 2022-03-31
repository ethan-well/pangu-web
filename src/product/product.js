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
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const PostIcon = BookIcon;

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField
        label="category"
        source="category_id"
        reference="categories"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="desc" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <ReferenceInput
        label="category"
        source="category_id"
        reference="categories"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput multiline source="desc" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <ReferenceInput
        label="Category"
        source="category_id"
        reference="categories"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput multiline source="desc" validate={required()} />
    </SimpleForm>
  </Create>
);
