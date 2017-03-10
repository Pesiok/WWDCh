import "babel-polyfill";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
import ScrollTo from "./modules/ScrollTo";
import FetchData from "./modules/FetchData";
import Validation from "./modules/Validation";

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
const scrollTo = new ScrollTo();
const fetchData = new FetchData();
const validation = new Validation();