import Chat from "@assets/svg/Chat.svg?react";
import Feed from "@assets/svg/Feed.svg?react";
import Friends from "@assets/svg/Friends.svg?react";
import Profile from "@assets/svg/Profile.svg?react";
import Search from "@assets/svg/Search.svg?react";
import Setting from "@assets/svg/Setting.svg?react";
import Twinkle from "@assets/svg/Twinkle.svg?react";
import FillTwinkle from "@assets/svg/FillTwinkle.svg?react";
import UserAdd from "@assets/svg/User_Add.svg?react";
import Dogface from "@assets/svg/Dogface.svg?react";
import Face from "@assets/svg/Face.svg?react";
import ExpandLeft from "@assets/svg/Expand_left.svg?react";
import ExpandUp from "@assets/svg/Expand_up.svg?react";
import ExpandDown from "@assets/svg/Expand_down.svg?react";
import Close from "@assets/svg/Close.svg?react";
import Payment from "@assets/svg/Payment.svg?react";
import PaymentHistory from "@assets/svg/PaymentHistory.svg?react";
import FilledPin from "@assets/svg/Pin_fill.svg?react";
import Pin from "@assets/svg/Pin.svg?react";
import Female from "@assets/svg/Female.svg?react";
import Exit from "@assets/svg/Exit.svg?react";
import FilledAddRound from "@assets/svg/Add_round_fill.svg?react";
import FilledCloseRound from "@assets/svg/Close_round_fill.svg?react";
import ChatPlus from "@assets/svg/Chat_plus.svg?react";
import UserClose from "@assets/svg/User_Close.svg?react";
import UserRemove from "@assets/svg/User_Remove.svg?react";
import Sort from "@assets/svg/Sort.svg?react";
import FilledStar from "@assets/svg/Star_fill.svg?react";
import Star from "@assets/svg/Star.svg?react";
import Menu from "@assets/svg/Menu.svg?react";
import SendButton from "@assets/svg/Send_button.svg?react";
import { SvgIcon } from "@models/index";

type Props = {
  svg: SvgIcon;
  width: number;
  height: number;
  stroke: string;
};

export default function SvgSelector({ svg, width, height, stroke }: Props) {
  switch (svg) {
    case "chat":
      return <Chat width={width} height={height} stroke={stroke} />;
    case "feed":
      return <Feed width={width} height={height} stroke={stroke} />;
    case "expandLeft":
      return <ExpandLeft width={width} height={height} stroke={stroke} />;
    case "expandUp":
      return (
        <ExpandUp width={width} height={height} fill={"none"} stroke={stroke} />
      );
    case "expandDown":
      return (
        <ExpandDown
          width={width}
          height={height}
          fill={"none"}
          stroke={stroke}
        />
      );
    case "friends":
      return <Friends width={width} height={height} stroke={stroke} />;
    case "profile":
      return <Profile width={width} height={height} stroke={stroke} />;
    case "search":
      return <Search width={width} height={height} stroke={stroke} />;
    case "setting":
      return <Setting width={width} height={height} stroke={stroke} />;
    case "twinkle":
      return <Twinkle width={width} height={height} stroke={stroke} />;
    case "userAdd":
      return <UserAdd width={width} height={height} stroke={stroke} />;
    case "fillTwinkle":
      return <FillTwinkle width={width} height={height} stroke={stroke} />;
    case "payment":
      return (
        <Payment width={width} height={height} stroke={stroke} fill={stroke} />
      );
    case "paymentHistory":
      return <PaymentHistory width={width} height={height} stroke={stroke} />;
    case "dogFace":
      return (
        <Dogface width={width} height={height} stroke={stroke} fill={stroke} />
      );
    case "face":
      return (
        <Face width={width} height={height} stroke={stroke} fill={stroke} />
      );
    case "close":
      return <Close width={width} height={height} stroke={stroke} />;
    case "femail":
      return <Female width={width} height={height} />;
    case "filledPin":
      return (
        <FilledPin
          width={width}
          height={height}
          stroke={stroke}
          fill={stroke}
        />
      );
    case "pin":
      return <Pin width={width} height={height} stroke={stroke} />;
    case "exit":
      return <Exit width={width} height={height} />;
    case "filledAddRound":
      return <FilledAddRound width={width} height={height} fill={stroke} />;
    case "filledCloseRound":
      return <FilledCloseRound width={width} height={height} fill={stroke} />;
    case "chatPlus":
      return <ChatPlus width={width} height={height} stroke={stroke} />;
    case "userRemove":
      return <UserRemove width={width} height={height} stroke={stroke} />;
    case "userClose":
      return <UserClose width={width} height={height} stroke={stroke} />;
    case "sort":
      return <Sort width={width} height={height} stroke={stroke} />;
    case "star":
      return <Star width={width} height={height} stroke={stroke} />;
    case "menu":
      return <Menu width={width} height={height} stroke={stroke} />;
    case "filledStar":
      return (
        <FilledStar
          width={width}
          height={height}
          stroke={stroke}
          fill={stroke}
        />
      );
    case "sendButton":
      return <SendButton width={width} height={height} />;
    default:
      return <div />;
  }
}
