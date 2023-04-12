import axios from "axios";

const SPACEX_API_URL = "https://api.spacexdata.com/v4";

async function httpLoadLaunchesData() {
  try {
    return await axios.post(`${SPACEX_API_URL}/launches/query`, {
      query: {},
      options: {
        pagination: false,
        populate: [
          {
            path: "rocket",
            select: {
              name: 1,
            },
          },
          {
            path: "payloads",
            select: {
              customers: 1,
            },
          },
        ],
      },
    });
  } catch (err) {
    console.error(err);
  }
}

export { httpLoadLaunchesData };
