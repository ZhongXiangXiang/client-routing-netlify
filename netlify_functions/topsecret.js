exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);
  if (body.username === 'zxx' && body.password == '123456') {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'The sky is blue.', status: 'success' }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'You are not authorized to access this data.', status: 'failure' }),
    };
  }
};
