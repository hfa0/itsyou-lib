"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const chevron_down_svg_1 = __importDefault(require("../../assets/icons/chevron-down.svg"));
const x_close_svg_1 = __importDefault(require("../../assets/icons/x-close.svg"));
const menu_01_svg_1 = __importDefault(require("../../assets/icons/menu-01.svg"));
const bell_01_svg_1 = __importDefault(require("../../assets/icons/bell-01.svg"));
const search_circle_svg_1 = __importDefault(require("../../assets/icons/search-circle.svg"));
const marker_pin_01_svg_1 = __importDefault(require("../../assets/icons/marker-pin-01.svg"));
const play_svg_1 = __importDefault(require("../../assets/icons/play.svg"));
const pause_svg_1 = __importDefault(require("../../assets/icons/pause.svg"));
const clock_svg_1 = __importDefault(require("../../assets/icons/clock.svg"));
const currency_euro_circle_svg_1 = __importDefault(require("../../assets/icons/currency-euro-circle.svg"));
const star_01_svg_1 = __importDefault(require("../../assets/icons/star-01.svg"));
const building_03_svg_1 = __importDefault(require("../../assets/icons/building-03.svg"));
const play_circle_svg_1 = __importDefault(require("../../assets/icons/play-circle.svg"));
const arrow_narrow_right_svg_1 = __importDefault(require("../../assets/icons/arrow-narrow-right.svg"));
const question_mark_svg_1 = __importDefault(require("../../assets/icons/question-mark.svg"));
const product_svg_1 = __importDefault(require("../../assets/icons/product.svg"));
const heart_hand_svg_1 = __importDefault(require("../../assets/icons/heart-hand.svg"));
const section_svg_1 = __importDefault(require("../../assets/icons/section.svg"));
const zap_fast_svg_1 = __importDefault(require("../../assets/icons/zap-fast.svg"));
const free_svg_1 = __importDefault(require("../../assets/icons/free.svg"));
const google_svg_1 = __importDefault(require("../../assets/icons/google.svg"));
const monitor_01_svg_1 = __importDefault(require("../../assets/icons/monitor-01.svg"));
const message_chat_circle_svg_1 = __importDefault(require("../../assets/icons/message-chat-circle.svg"));
const message_smile_circle_svg_1 = __importDefault(require("../../assets/icons/message-smile-circle.svg"));
const phone_svg_1 = __importDefault(require("../../assets/icons/phone.svg"));
const success_svg_1 = __importDefault(require("../../assets/icons/success.svg"));
const dot_svg_1 = __importDefault(require("../../assets/icons/dot.svg"));
const calendar_svg_1 = __importDefault(require("../../assets/icons/calendar.svg"));
const filter_lines_svg_1 = __importDefault(require("../../assets/icons/filter-lines.svg"));
const users_01_svg_1 = __importDefault(require("../../assets/icons/users-01.svg"));
const users_check_svg_1 = __importDefault(require("../../assets/icons/users-check.svg"));
const clock_rewind_svg_1 = __importDefault(require("../../assets/icons/clock-rewind.svg"));
const bookmark_svg_1 = __importDefault(require("../../assets/icons/bookmark.svg"));
const help_circle_svg_1 = __importDefault(require("../../assets/icons/help-circle.svg"));
const home_svg_1 = __importDefault(require("../../assets/icons/home.svg"));
const profile_svg_1 = __importDefault(require("../../assets/icons/profile.svg"));
const search_svg_1 = __importDefault(require("../../assets/icons/search.svg"));
const settings_svg_1 = __importDefault(require("../../assets/icons/settings.svg"));
const rows_01_svg_1 = __importDefault(require("../../assets/icons/rows-01.svg"));
const pencil_02_svg_1 = __importDefault(require("../../assets/icons/pencil-02.svg"));
const info_circle_svg_1 = __importDefault(require("../../assets/icons/info-circle.svg"));
const arrow_narrow_down_svg_1 = __importDefault(require("../../assets/icons/arrow-narrow-down.svg"));
const arrow_narrow_up_svg_1 = __importDefault(require("../../assets/icons/arrow-narrow-up.svg"));
const switch_horizontal_01_svg_1 = __importDefault(require("../../assets/icons/switch-horizontal-01.svg"));
const file_check_02_svg_1 = __importDefault(require("../../assets/icons/file-check-02.svg"));
const dish_svg_1 = __importDefault(require("../../assets/icons/dish.svg"));
const minus_svg_1 = __importDefault(require("../../assets/icons/minus.svg"));
const plus_svg_1 = __importDefault(require("../../assets/icons/plus.svg"));
const pdf_svg_1 = __importDefault(require("../../assets/icons/pdf.svg"));
const img_svg_1 = __importDefault(require("../../assets/icons/img.svg"));
const maximize_02_svg_1 = __importDefault(require("../../assets/icons/maximize-02.svg"));
const csv_svg_1 = __importDefault(require("../../assets/icons/csv.svg"));
const upload_01_svg_1 = __importDefault(require("../../assets/icons/upload-01.svg"));
const image_user_svg_1 = __importDefault(require("../../assets/icons/image-user.svg"));
const eye_svg_1 = __importDefault(require("../../assets/icons/eye.svg"));
const map = {
    Upload: upload_01_svg_1.default,
    Eye: eye_svg_1.default,
    ChevronDown: chevron_down_svg_1.default,
    Close: x_close_svg_1.default,
    Menu: menu_01_svg_1.default,
    Bell: bell_01_svg_1.default,
    Search: search_svg_1.default,
    Marker: marker_pin_01_svg_1.default,
    Play: play_svg_1.default,
    PlayCircle: play_circle_svg_1.default,
    Pause: pause_svg_1.default,
    Company: building_03_svg_1.default,
    ArrowRight: arrow_narrow_right_svg_1.default,
    Star: star_01_svg_1.default,
    Clock: clock_svg_1.default,
    Euro: currency_euro_circle_svg_1.default,
    QuestionMark: question_mark_svg_1.default,
    Product: product_svg_1.default,
    HeartHand: heart_hand_svg_1.default,
    Section: section_svg_1.default,
    SearchCircle: search_circle_svg_1.default,
    ZapFast: zap_fast_svg_1.default,
    Free: free_svg_1.default,
    Google: google_svg_1.default,
    Monitor: monitor_01_svg_1.default,
    Chat: message_chat_circle_svg_1.default,
    MessageSmile: message_smile_circle_svg_1.default,
    Phone: phone_svg_1.default,
    Success: success_svg_1.default,
    Dot: dot_svg_1.default,
    Calendar: calendar_svg_1.default,
    FilterLines: filter_lines_svg_1.default,
    Users: users_01_svg_1.default,
    UsersCheck: users_check_svg_1.default,
    ClockRewind: clock_rewind_svg_1.default,
    Bookmark: bookmark_svg_1.default,
    Help: help_circle_svg_1.default,
    Home: home_svg_1.default,
    Profile: profile_svg_1.default,
    Settings: settings_svg_1.default,
    Rows: rows_01_svg_1.default,
    Pen: pencil_02_svg_1.default,
    Info: info_circle_svg_1.default,
    ArrowNarrowDown: arrow_narrow_down_svg_1.default,
    ArrowNarrowUp: arrow_narrow_up_svg_1.default,
    Switch: switch_horizontal_01_svg_1.default,
    FileCheck: file_check_02_svg_1.default,
    Dish: dish_svg_1.default,
    Minus: minus_svg_1.default,
    Plus: plus_svg_1.default,
    Pdf: pdf_svg_1.default,
    Img: img_svg_1.default,
    Maximize: maximize_02_svg_1.default,
    Csv: csv_svg_1.default,
    UserCard: image_user_svg_1.default,
};
const Icon = ({ name, size = 25, ...rest }) => {
    const Comp = map[name];
    return (0, jsx_runtime_1.jsx)(Comp, { width: size, height: size, ...rest });
};
exports.default = Icon;
