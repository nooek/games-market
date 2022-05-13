const moment = require("moment");

module.exports = class FormatDate {
  constructor(date) {
    this.date = moment(date).utc().format('YYYY-MM-DD HH:mm:ss');
    this.dateNow = moment().format("YYYY-MM-DD HH:mm:ss");
  }

  makeDateObject(date) {
    const dateObject = {
      year: date.split(" ")[0].split("-")[0],
      month: date.split(" ")[0].split("-")[1],
      day: date.split(" ")[0].split("-")[2],
      hour: date.split(" ")[1].split(":")[0],
      minute: date.split(" ")[1].split(":")[1],
      second: date.split(" ")[1].split(":")[2],
    };
    return dateObject;
  }

  compare(date, now) {
    if (now.year > date.year) {
      const rest = now.year - date.year;
      return `${rest} ${rest > 1 ? "years" : "year"} ago`;
    }
    if (now.month > date.month) {
      const rest = now.month - date.month;
      return `${rest} ${rest > 1 ? "months" : "month"} ago`;
    }
    if (now.day > date.day) {
      const rest = now.day - date.day;
      return `${rest} ${rest > 1 ? "days" : "day"} ago`;
    }
    if (now.hour > date.hour) {
      const rest = now.hour - date.hour;
      return `${rest} ${rest > 1 ? "hours" : "hour"} ago`;
    }
    if (now.minute > date.minute) {
      const rest = now.minute - date.minute;
      return `${rest} ${rest > 1 ? "minutes" : "minute"} ago`;
    }
    if (now.second > date.second) {
      const rest = now.second - date.second;
      return `${rest} ${rest > 1 ? "seconds" : "second"} ago`;
    }
    return `Just Now`
  }

  format() {
    const dateParts = this.makeDateObject(this.date);
    const dateNowParts = this.makeDateObject(this.dateNow);
    const results = this.compare(dateParts, dateNowParts);
    return results
  }
};
