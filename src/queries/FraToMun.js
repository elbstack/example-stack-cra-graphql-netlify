import gql from "graphql-tag";

export const FraToMun = () => gql`
  {
    routing(from: 8002549, to: 8000105) {
      parts {
        from {
          name
        }
        to {
          name
        }
        delay
        product {
          name
        }
        direction
        departingTrack {
          platform
          number
          length
          height
          name
        }
        arrivingTrack {
          platform
          number
          length
          height
          name
        }
      }
    }
  }
`;
