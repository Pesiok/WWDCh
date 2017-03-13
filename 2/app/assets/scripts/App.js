import "babel-polyfill";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
import ScrollToButtons from "./modules/ScrollToButtons";
import FetchData from "./modules/FetchData";
import Validation from "./modules/Validation";

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
const scrollToButtons = new ScrollToButtons();
const fetchData = new FetchData();
const validation = new Validation();