import { gql } from "@apollo/client";

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
