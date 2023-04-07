import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $simplePw: String!
    $name: String!
    $phone: String!
  ) {
    createUser(
      email: $email
      password: $password
      simplePw: $simplePw
      name: $name
      phone: $phone
    ) {
      name
      email
    }
  }
`;

export const SendFirstEmail = gql`
  mutation sendFirstEmail($email: String!) {
    sendFirstEmail(email: $email)
  }
`;

export const CheckEmail = gql`
  query completeEmailCheck($email: String!) {
    completeEmailCheck(email: $email)
  }
`;

export const RESTOREACCESSTOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const SENDSMS = gql`
  mutation sendSMS($phone: String!) {
    sendSMS(phone: $phone)
  }
`;

export const CHECKSMS = gql`
  mutation checkSMS($phone: String!, $token: String!) {
    checkSMS(phone: $phone, token: $token)
  }
`;

export const FETCH_MODEL = gql`
  query ($modelId: String!) {
    fetchModel(modelId: $modelId) {
      id
      name_ko
      name_en
      description
      price
      main_img
      modelCategory {
        id
        name
      }
      highlight {
        id
        summary
      }
      eco {
        id
        summary
        img
      }
      design {
        id
        summary
      }
      vr {
        id
        img
      }
      space {
        id
        summary
      }
      convenience {
        id
        summary
      }
      safety {
        id
        summary
      }
      service {
        id
        summary
        img
      }
      hStation {
        id
        summary
        img
      }
      serviceNetwork {
        id
        summary
        img
      }
      highlightDetails {
        id
        name
        img
        description
      }
      designDetails {
        id
        name
        img
        design {
          id
          summary
        }
      }
      designDetailDetails {
        id
        name
        summary
        img
        designDetail {
          id
          name
          img
        }
      }
      vrDetails {
        id
        color_name
        color_code
      }
      spaceDetails {
        id
        name
        img
      }
      spaceDetailDetails {
        id
        name
        summary
        img
        spaceDetail {
          id
          name
          img
        }
      }
      convenienceDetails {
        id
        name
        summary
        img
      }
      safetyDetails {
        id
        name
        summary
        img
      }
    }
  }
`;
