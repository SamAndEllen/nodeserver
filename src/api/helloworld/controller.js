exports.userList = async (ctx) => {
  try {
    ctx.body = {
      users: [
        { name: 'John Smith', age: 30, gender: 'Male' },
        { name: 'Justin Haley', age: 27, gender: 'Male' },
      ]
    };
  } catch (e) {
    ctx.throw(e, 500);
  }
};