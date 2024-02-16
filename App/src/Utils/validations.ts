/*-------------------------------------------------------------------
    THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
*-------------------------------------------------------------------*/

export type validatonType = {
    name: "number" | "email" | "name",
    label: string,
    type: string,
    id: string,
    placeholder: string,
    validation: {
        [key: string]: Record<string, boolean | number | string | RegExp>
    }
}

const name_validation: validatonType = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'write your name ...',
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
}

const email_validation: validatonType = {
    name: 'email',
    label: 'email address',
    type: 'email',
    id: 'email',
    placeholder: 'write a random email address',
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email is not valid',
      },
    },
}

const num_validation: validatonType = {
    name: 'number',
    label: 'phone number',
    type: 'number',
    id: 'num',
    placeholder: 'write a random number',
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
}

export const validations = [ name_validation, email_validation, num_validation ]