import { DateTime } from "luxon";

export default class StringUtil {
  static displayTime = (date: string) => {
    return DateTime.fromISO(date).setLocale("ko").toFormat("HH:MM");
  };
}
