
const query = () =>
  `{
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
  }`

export default query;