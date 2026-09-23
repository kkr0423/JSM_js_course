const myObj = {
  myMethod: function (params) {
    // ...do something
    return params;
  },

  // OR using shorthand syntax
  myOthermethod(params) {
    // ...do something else
  },
};

const params = "Hi";
myObj.myMethod(params);
