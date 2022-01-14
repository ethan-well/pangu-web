const RequestData = (url, callback) => {
  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/${url}`)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result);
    });
};

const PostData = (url, params, callback) => {
  let body = Object.create({});
  Object.keys(params).map((key) => {
    body[key] = params[key];
  });

  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result);
    });
};

const LoginOAuth = (state, callback) => {
  let body = Object.create({});
  Object.keys(state).map((key) => {
    if (key != `password_show`) {
      body[key] = state[key];
    }
  });

  console.info("body", body);

  fetch(
    `${process.env.REACT_APP_EUROPA_SERVER_HOST}/${process.env.REACT_APP_EUROPA_LOGIN_OAUTH}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result);
    });
};

export { RequestData, LoginOAuth, PostData };
