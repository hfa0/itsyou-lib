import { jsx as _jsx } from "react/jsx-runtime";
import ChevronDown from '../../assets/icons/chevron-down.svg';
import Close from '../../assets/icons/x-close.svg';
import Menu from '../../assets/icons/menu-01.svg';
import Bell from '../../assets/icons/bell-01.svg';
import SearchCircle from '../../assets/icons/search-circle.svg';
import Marker from '../../assets/icons/marker-pin-01.svg';
import Play from '../../assets/icons/play.svg';
import Pause from '../../assets/icons/pause.svg';
import Clock from '../../assets/icons/clock.svg';
import Euro from '../../assets/icons/currency-euro-circle.svg';
import Star from '../../assets/icons/star-01.svg';
import Company from '../../assets/icons/building-03.svg';
import PlayCircle from '../../assets/icons/play-circle.svg';
import ArrowRight from '../../assets/icons/arrow-narrow-right.svg';
import QuestionMark from '../../assets/icons/question-mark.svg';
import Product from '../../assets/icons/product.svg';
import HeartHand from '../../assets/icons/heart-hand.svg';
import Section from '../../assets/icons/section.svg';
import ZapFast from '../../assets/icons/zap-fast.svg';
import Free from '../../assets/icons/free.svg';
import Google from '../../assets/icons/google.svg';
import Monitor from '../../assets/icons/monitor-01.svg';
import Chat from '../../assets/icons/message-chat-circle.svg';
import MessageSmile from '../../assets/icons/message-smile-circle.svg';
import Phone from '../../assets/icons/phone.svg';
import Success from '../../assets/icons/success.svg';
import Dot from '../../assets/icons/dot.svg';
import Calendar from '../../assets/icons/calendar.svg';
import FilterLines from '../../assets/icons/filter-lines.svg';
import Users from '../../assets/icons/users-01.svg';
import UsersCheck from '../../assets/icons/users-check.svg';
import ClockRewind from '../../assets/icons/clock-rewind.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import Help from '../../assets/icons/help-circle.svg';
import Home from '../../assets/icons/home.svg';
import Profile from '../../assets/icons/profile.svg';
import Search from '../../assets/icons/search.svg';
import Settings from '../../assets/icons/settings.svg';
import Rows from '../../assets/icons/rows-01.svg';
import Pen from '../../assets/icons/pencil-02.svg';
import Info from '../../assets/icons/info-circle.svg';
import ArrowNarrowDown from '../../assets/icons/arrow-narrow-down.svg';
import ArrowNarrowUp from '../../assets/icons/arrow-narrow-up.svg';
import Switch from '../../assets/icons/switch-horizontal-01.svg';
import FileCheck from '../../assets/icons/file-check-02.svg';
import Dish from '../../assets/icons/dish.svg';
import Minus from '../../assets/icons/minus.svg';
import Plus from '../../assets/icons/plus.svg';
import Pdf from '../../assets/icons/pdf.svg';
import Img from '../../assets/icons/img.svg';
import Maximize from '../../assets/icons/maximize-02.svg';
import Csv from '../../assets/icons/csv.svg';
import Upload from '../../assets/icons/upload-01.svg';
import UserCard from '../../assets/icons/image-user.svg';
import Eye from '../../assets/icons/eye.svg';
const map = {
    Upload,
    Eye,
    ChevronDown,
    Close,
    Menu,
    Bell,
    Search,
    Marker,
    Play,
    PlayCircle,
    Pause,
    Company,
    ArrowRight,
    Star,
    Clock,
    Euro,
    QuestionMark,
    Product,
    HeartHand,
    Section,
    SearchCircle,
    ZapFast,
    Free,
    Google,
    Monitor,
    Chat,
    MessageSmile,
    Phone,
    Success,
    Dot,
    Calendar,
    FilterLines,
    Users,
    UsersCheck,
    ClockRewind,
    Bookmark,
    Help,
    Home,
    Profile,
    Settings,
    Rows,
    Pen,
    Info,
    ArrowNarrowDown,
    ArrowNarrowUp,
    Switch,
    FileCheck,
    Dish,
    Minus,
    Plus,
    Pdf,
    Img,
    Maximize,
    Csv,
    UserCard,
};
const Icon = ({ name, size = 25, ...rest }) => {
    const Comp = map[name];
    return _jsx(Comp, { width: size, height: size, ...rest });
};
export default Icon;
