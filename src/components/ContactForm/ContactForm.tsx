import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Column, Paragraph_1, Row } from '../../styles/shared';
import { Form, Input, TextArea, Button, Label } from './ContactForm.styles';

type Inputs = {
  name: string;
  exampleRequired: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  return (
    <Form onSubmit={handleSubmit(console.log)}>
      <Row>
        <Column columns={3}>
          <Label>Name</Label>
          <Input {...(register('name'), { required: true })} placeholder='Your Name' padR />
        </Column>
        <Column columns={3}>
          <Label padL>Email</Label>
          <Input {...register('email')} placeholder='Your Email' padL padR />
        </Column>
        <Column columns={3}>
          <Label padL>Number</Label>
          <Input {...register('number')} placeholder='Your Number' padL />
        </Column>
      </Row>
      <Label>Message</Label>
      <TextArea {...register('message')} placeholder='Your Message' />
      <Row centerH>
        <Column columns={3}>
          <Button>
            <Paragraph_1 style={{ position: 'relative' }} color='white'>
              SUBMIT
            </Paragraph_1>
          </Button>
        </Column>
      </Row>
    </Form>
  );
};

export default ContactForm;
