import React, { useState, useCallback } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const SubmitJoinForm = (params, callback) => {
  let body = Object.create({});
  Object.keys(params).map(key => {
    if (key != 'password_show') {
      body[key] = params[key]
    }
  })

  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/v1/europa/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(err => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result)
    });
}

const SubmitLoginForm = (state, callback) => {
  let body = Object.create({});
  let paramsKey = ["phone", "area_code", "password", "type", "verification_code"]

  for (const key of paramsKey) {
    body[key] = state[key]
  }

  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/v1/europa/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(err => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result)
    });
}

const SubmitResetpasswordForm = (state, callback) => {
  let body = Object.create({});
  Object.keys(state).map(key => {
    if (key != `password_show`) {
      body[key] = state[key]
    }
  })

  console.info("body", body)

  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/v1/europa/reset_password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(err => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result)
    });
}

const RequestData = (url, callback) => {
  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/${url}`)
    .then(resp => resp.json())
    .then(data => {
      callback(data)
    }).catch(err => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result)
    });
}

const LoginOAuth = (state, callback) => {
  let body = Object.create({});
  Object.keys(state).map(key => {
    if (key != `password_show`) {
      body[key] = state[key]
    }
  })

  console.info("body", body)

  fetch(`${process.env.REACT_APP_EUROPA_SERVER_HOST}/${process.env.REACT_APP_EUROPA_LOGIN_OAUTH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(err => {
      let result = {
        succeed: false,
        err_info: {
          code: "C0001",
          message: err,
        },
      };
      callback(result)
    });
}

export { SubmitJoinForm, SubmitLoginForm, SubmitResetpasswordForm, RequestData, LoginOAuth }
