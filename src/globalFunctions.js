// FUNCTION
// import Swal from "sweetalert2";

// FORMAT & GET DATA
export const formatPrice = (price, toFix = 2) => {
  if (isNaN(parseFloat(price))) {
    price = 0;
  }
  return parseFloat(price).toLocaleString("en-US", {
    minimumFractionDigits: toFix,
    maximumFractionDigits: toFix,
  });
};
export const rmHtml = (text) => {
  if ([null, undefined].includes(text)) {
    return "";
  }
  return `${text}`.replace(/<\/?[^>]+(>|$)/g, "");
};
export const fmObj2Qry = (object) => {
  let buffer = "";
  for (const [key, value] of Object.entries(object)) {
    buffer += value === null ? "" : `${key}=${object[key]}&`;
  }
  return buffer;
};
export const getDate = (mode, type = "date") => {
  let dateValue;
  let currentDate = new Date().toISOString();
  let dateArray;
  switch (mode) {
    case "now":
      dateValue = currentDate.split("T")[0];
      break;
    case "first_d_in_m":
      dateArray = currentDate.split("-");
      dateValue = dateArray[0] + "-" + dateArray[1] + "-01";
      break;
    case "first_d_in_nm":
      let newDate = new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      ).toISOString();
      dateArray = newDate.split("-");
      dateValue = dateArray[0] + "-" + dateArray[1] + "-01";
      break;
    default:
      break;
  }
  return dateValue;
};
export const getDateAndTimeTH = (param, date = true, time = true) => {
  if (param === null || param === undefined) {
    return "";
  }
  let results;
  if (!(param === null || param === undefined)) {
    param = `${param}`.replace(/-/g, "/");
  }
  results =
    date == true
      ? new Date(param).toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";
  if (date == true && time == true) results += ", ";

  results += time == true ? new Date(param).toLocaleTimeString("th-TH") : "";

  // console.log(results);
  return results;
};
export const getFilePath = (path) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  if (path) {
    return `${SERVER_URL}/image/${path}`;
  } else {
    return "";
  }
};
export const notNum2Zero = function (value) {
  return isNaN(Number(value)) ? 0 : Number(value);
};
export const notFloat2Zero = function (value) {
  return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
};
export const checkNumberPercent = function (value) {
  if (isNaN(Number(value))) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return Number(value);
};
// CHECK Data
export const type = function (v, type, tagName = "") {
  if (typeof v !== type) {
    throw new Error(`'${v}' argument must be a ${type}. ${tagName}`);
  }
};
// CHECK Input
export const requireRules = (value) => {
  if (!value || value.trim() === "") {
    return "This field is required";
  }
  return true;
};
export const moreThanZeroRules = (value) => {
  if (!/^[0-9]*$/.test(value)) {
    return "Please enter a valid number";
  }
  if (isNaN(parseInt(value)) || value <= 0) {
    return "Please enter a number greater than zero";
  }
  return true;
};
export const emailRules = (value) => {
  if (!value) {
    return "Please enter your email address";
  }
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address";
  }
  return true;
};
export const checkIdCard = (val) => {
  if (!/^[0-9]*$/.test(val)) {
    return "Please enter a valid number";
  }
  if (val) {
    let i;
    let sum;
    if (val.length === 13) {
      if (!IsNumeric(val)) return false;
      if (val.substring(0, 1) == 0) return false;
      if (val.length != 13) return false;
      for (i = 0, sum = 0; i < 12; i++)
        sum += parseFloat(val.charAt(i)) * (13 - i);
      if ((11 - (sum % 11)) % 10 != parseFloat(val.charAt(12))) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  function IsNumeric(input) {
    let RE =
      /^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[\.,]))([\.,][0-9]+)?([eE]-?\d+)?))$/;
    return RE.test(input);
  }
};
// export const deepClone = (value) => {
//   return JSON.parse(JSON.stringify(value));
// };
// export const copyLink = async (link) => {
//   if (!navigator.clipboard) {
//     Swal.fire({
//       title: `Clipboard API not available`,
//       icon: "error",
//       confirmButtonColor: "#FD8000",
//     });
//     return;
//   }
//   try {
//     await navigator.clipboard.writeText(link);
//     Swal.fire({
//       title: `คัดลอกลิงค์ ${link}`,
//       icon: "success",
//       showConfirmButton: false,
//       timer: 1500,
//     }).then(() => {});
//   } catch (error) {
//     Swal.fire({
//       title: `Error copying text to clipboard: ${error}`,
//       icon: "error",
//       confirmButtonColor: "#FD8000",
//     });
//   }
// };
