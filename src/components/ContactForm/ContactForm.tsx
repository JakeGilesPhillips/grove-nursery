import * as React from 'react';
import { useState } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Column, Paragraph_1, Row } from '../../styles/shared';
import { Form, Input, TextArea, Button, Label, Error, LoaderWrapper } from './ContactForm.styles';

type Inputs = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onSubmit = (data) => {
    setError(false);
    setSubmitting(true);
    axios
      .post('/send', data)
      .then((res) => {
        if (res?.status === 200) onSubmitted();
        else onFailed();
      })
      .catch((e) => {
        onFailed();
      });
  };

  const onSubmitted = () => {
    setTimeout(() => {
      reset();
      setSuccess(true);
      setSubmitting(false);
      setTimeout(() => setSuccess(false), 2000);
    }, 1000);
  };

  const onFailed = () => {
    setError(true);
    setSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column columns={3}>
          <Label required>Name</Label>
          <Input type='text' placeholder='Your Name' {...register('name', { required: true, minLength: 1, maxLength: 80 })} padR disabled={submitting} />
          {errors.name && <Error>Please enter a name</Error>}
        </Column>
        <Column columns={3}>
          <Label required padL>
            Email
          </Label>
          <Input type='email' placeholder='Your Email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} padL padR disabled={submitting} />
          {errors.email && <Error>Please enter a contact email</Error>}
        </Column>
        <Column columns={3}>
          <Label padL>Number</Label>
          <Input type='tel' placeholder='Your Number' {...register('number')} padL disabled={submitting} />
        </Column>
      </Row>
      <Label required>Message</Label>
      <TextArea {...register('message', { required: true, minLength: 10, maxLength: 500 })} placeholder='Your Message' disabled={submitting} />
      {errors.message && <Error>Please enter a message</Error>}
      <Row centerH>
        <Column columns={3}>
          <Button disabled={submitting}>
            {submitting ? (
              <LoaderWrapper>
                <BounceLoader color='white' size={15} />
              </LoaderWrapper>
            ) : (
              <Paragraph_1 style={{ position: 'relative' }} color='white'>
                SUBMIT
              </Paragraph_1>
            )}
          </Button>
          <br />
          <Row centerH>
            {error && <Error>There was a problem, please try again</Error>}
            {success && <Paragraph_1>Your message was sent!</Paragraph_1>}
          </Row>
        </Column>
      </Row>
    </Form>
  );
};

export default ContactForm;
