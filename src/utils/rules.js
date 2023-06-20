const rules = {
  required: (v) => !!v || "This field is required",
  number: (v) => !isNaN(v) || "Input must be a number",
  min: (v) =>
    (!!v && v.length >= 6) || "Must be at least 6 characters in length",
  password: (v) =>
    (!!v && v.length >= 8) ||
    "Password must be at least 8 characters in length",
  phone: (v) => {
    if (!v) return true;
    else if (v.length == 12) return true;
    else return "Invalid phone number";
  },
  email: (v) => {
    if (!v) return true;
    else
      return (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Must be a valid email address"
      );
  },
  url: (v) => {
    if (!v) return true;
    else
      return (
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(
          v
        ) || "Must be a valid URL"
      );
  },
  shortDesc: (v) => v?.length <= 100 || "Max 100 characters",
};

export default rules;
