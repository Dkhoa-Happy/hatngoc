import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import header_tittintop from "./header_tittintop.png";
import header_nia from "./header_nia.png";
import header_mattarice from "./header_mattarice.png";
import macbook_image from "./macbook_image.png";
import bose_headphone_image from "./bose_headphone_image.png";
import apple_earphone_image from "./apple_earphone_image.png";
import samsung_s23phone_image from "./samsung_s23phone_image.png";
import venu_watch_image from "./venu_watch_image.png";
import upload_area from "./upload_area.png";
import cannon_camera_image from "./cannon_camera_image.png";
import sony_airbuds_image from "./sony_airbuds_image.png";
import asus_laptop_image from "./asus_laptop_image.png";
import projector_image from "./projector_image.png";
import playstation_image from "./playstation_image.png";
import man_with_koreanrice from "./man_with_koreanricebag.png";
import girl_with_earphone_image from "./girl_with_earphone_image.png";
import md_riceBag_image from "./md_riceBag_image.png";
import sm_controller_image from "./sm_controller_image.png";
import setra_image from "./setra_image.png";
import man_with_chineserice from "./man_with_chineserice.png";
import checkmark from "./checkmark.png";
import product_details_page_apple_earphone_image1 from "./product_details_page_apple_earphone_image1.png";
import product_details_page_apple_earphone_image2 from "./product_details_page_apple_earphone_image2.png";
import product_details_page_apple_earphone_image3 from "./product_details_page_apple_earphone_image3.png";
import product_details_page_apple_earphone_image4 from "./product_details_page_apple_earphone_image4.png";
import product_details_page_apple_earphone_image5 from "./product_details_page_apple_earphone_image5.png";

export const assets = {
  logo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  header_tittintop,
  header_nia,
  header_mattarice,
  macbook_image,
  bose_headphone_image,
  apple_earphone_image,
  samsung_s23phone_image,
  venu_watch_image,
  upload_area,
  cannon_camera_image,
  sony_airbuds_image,
  asus_laptop_image,
  projector_image,
  playstation_image,
  man_with_koreanrice,
  girl_with_earphone_image,
  md_riceBag_image,
  sm_controller_image,
  setra_image,
  man_with_chineserice,
  product_details_page_apple_earphone_image1,
  product_details_page_apple_earphone_image2,
  product_details_page_apple_earphone_image3,
  product_details_page_apple_earphone_image4,
  product_details_page_apple_earphone_image5,
  checkmark,
};

export const BagIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>
  );
};

export const BoxIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
    />
  </svg>
);

export const productsDummyData = [
  {
    _id: "67a1f4e43f34a77b6dde9144",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo ST25 - Gạo Lúa Tôm",
    description:
      "Gạo ST25 là loại gạo đặc sản của Việt Nam, đạt giải gạo ngon nhất thế giới. Được trồng trên vùng đất lúa tôm, hạt gạo thơm, dẻo, có vị ngọt tự nhiên, thích hợp cho các bữa ăn gia đình.",
    price: 400000,
    offerPrice: 399000,
    image: [
      "https://i.pinimg.com/736x/2b/e1/a0/2be1a0cbe5752a8b11a14e6f5b0e4ae5.jpg",
      "https://i.pinimg.com/736x/09/49/63/09496350dd63964a08d66bfcb2f6f493.jpg",
      "https://i.pinimg.com/736x/87/c4/07/87c40725d1ee3e4adba0e4dd11c6e6e7.jpg",
      "https://i.pinimg.com/736x/79/17/50/791750ae4067533fa7edfbfbd5aa3320.jpg",
    ],
    category: "Gạo Đặc Sản",
    date: 1738667236865,
    __v: 0,
  },
  {
    _id: "67a1f52e3f34a77b6dde914a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Lứt Hữu Cơ",
    description:
      "Gạo lứt hữu cơ được canh tác theo phương pháp tự nhiên, không hóa chất bảo vệ thực vật, giữ nguyên lớp cám dinh dưỡng. Giàu chất xơ và vitamin B, tốt cho sức khỏe và người ăn kiêng.",
    price: 429990,
    offerPrice: 329990,
    image: [
      "https://i.pinimg.com/736x/d1/75/d2/d175d28c457aae4622ac5f9b057f00f2.jpg",
    ],
    category: "Gạo Hữu Cơ",
    date: 1738667310300,
    __v: 0,
  },
  {
    _id: "67a1f5663f34a77b6dde914c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Nếp Cái Hoa Vàng",
    description:
      "Gạo nếp cái hoa vàng nổi tiếng với hạt tròn, trắng ngà, thơm tự nhiên. Khi nấu lên có độ dẻo cao, thích hợp để làm xôi, bánh chưng, bánh dày và nhiều món ăn truyền thống Việt Nam.",
    price: 899990,
    offerPrice: 799990,
    image: [
      "https://i.pinimg.com/736x/6a/2e/66/6a2e665922c00824b0bc191df7f5d3a1.jpg",
    ],
    category: "Gạo Nếp",
    date: 1738667366224,
    __v: 0,
  },
  {
    _id: "67a1f5993f34a77b6dde914e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Japonica Nhật Bản",
    description:
      "Gạo Japonica có hạt tròn, dẻo, thơm nhẹ và vị ngọt thanh. Phù hợp để làm sushi, cơm nắm hoặc ăn hàng ngày với chất lượng cao, cung cấp đầy đủ dưỡng chất.",
    price: 399990,
    offerPrice: 349990,
    image: [
      "https://i.pinimg.com/736x/8f/86/2d/8f862d519364606f1fb5161fddeaaf8b.jpg",
    ],
    category: "Gạo Ngoại Nhập",
    date: 1738667417511,
    __v: 0,
  },
  {
    _id: "67a1f5ef3f34a77b6dde9150",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Tám Điện Biên",
    description:
      "Gạo tám Điện Biên có hạt dài, trắng, thơm tự nhiên. Khi nấu lên cơm mềm, dẻo và có vị đặc trưng của vùng núi Tây Bắc. Phù hợp cho bữa ăn gia đình và nhà hàng.",
    price: 599990,
    offerPrice: 499990,
    image: [
      "https://i.pinimg.com/736x/8f/b2/f8/8fb2f88829a1f1fa4a6f9770c543f16e.jpg",
    ],
    category: "Gạo Đặc Sản",
    date: 1738667503075,
    __v: 0,
  },
  {
    _id: "67a1f70c3f34a77b6dde9156",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Thơm Jasmine",
    description:
      "Gạo Jasmine có hạt dài, thơm nhẹ tự nhiên, mềm và dẻo sau khi nấu. Phù hợp với khẩu vị người Việt, thích hợp để dùng trong bữa cơm hàng ngày.",
    price: 419999,
    offerPrice: 389999,
    image: [
      "https://i.pinimg.com/736x/7e/fa/f6/7efaf62c3e9c73c24c8473011e980ab9.jpg",
    ],
    category: "Gạo Thơm",
    date: 1738667788883,
    __v: 0,
  },
  {
    _id: "67a1f7c93f34a77b6dde915a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Nàng Thơm Chợ Đào",
    description:
      "Gạo Nàng Thơm Chợ Đào là đặc sản miền Tây với hạt gạo thon dài, thơm đặc trưng và độ dẻo cao. Khi nấu lên, cơm mềm, trắng bóng và có hương vị ngọt tự nhiên, rất thích hợp cho các bữa ăn gia đình.",
    price: 279999,
    offerPrice: 249999,
    image: [
      "https://i.pinimg.com/736x/4c/ec/ff/4cecffd74b1fa1d8dcd396f06814734b.jpg",
    ],
    category: "Gạo Đặc Sản",
    date: 1738667977644,
    __v: 0,
  },
  {
    _id: "67a1f8363f34a77b6dde915c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Lứt Đỏ",
    description:
      "Gạo lứt đỏ có hàm lượng chất xơ cao, giàu dinh dưỡng và rất tốt cho sức khỏe. Loại gạo này giúp kiểm soát cân nặng, ổn định đường huyết và hỗ trợ hệ tiêu hóa hiệu quả.",
    price: 349990,
    offerPrice: 299990,
    image: [
      "https://i.pinimg.com/736x/18/19/1e/18191e1ed586621aaca3517dcfbb8e9f.jpg",
    ],
    category: "Gạo Hữu Cơ",
    date: 1738668086331,
    __v: 0,
  },
  {
    _id: "67a1f85e3f34a77b6dde915e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Séng Cù",
    description:
      "Gạo Séng Cù là đặc sản của vùng Tây Bắc, nổi bật với hạt tròn, trắng, dẻo thơm và vị ngọt đậm đà. Khi nấu, cơm mềm, ngon và rất thích hợp cho các bữa ăn truyền thống.",
    price: 169999,
    offerPrice: 149999,
    image: [
      "https://i.pinimg.com/736x/f3/a4/0b/f3a40b13be309e2f8a5dbd2f449863c4.jpg",
    ],
    category: "Gạo Đặc Sản",
    date: 1738668126660,
    __v: 0,
  },
  {
    _id: "67a1fa4b3f34a77b6dde9166",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Gạo Đài Thơm 8",
    description:
      "Gạo Đài Thơm 8 có hạt dài, thơm nhẹ, mềm và dẻo khi nấu. Loại gạo này rất phổ biến trên thị trường và được nhiều gia đình ưa chuộng vì dễ nấu và có giá trị dinh dưỡng cao.",
    price: 219999,
    offerPrice: 199999,
    image: [
      "https://i.pinimg.com/736x/8b/65/3e/8b653e246cf45bf7df17cb084de8c068.jpg",
    ],
    category: "Gạo Thơm",
    date: 1738668619198,
    __v: 0,
  },
];

export const userDummyData = {
  _id: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  name: "GreatStack",
  email: "admin@example.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
  cartItems: {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  __v: 0,
};

export const orderDummyData = [
  {
    _id: "67a20934b3db72db5cc77b2b",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f4e43f34a77b6dde9144",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Gạo ST25 - Gạo Lúa Tôm",
          description:
            "Gạo ST25 là loại gạo đặc sản của Việt Nam, đạt giải gạo ngon nhất thế giới. Được trồng trên vùng đất lúa tôm, hạt gạo thơm, dẻo, có vị ngọt tự nhiên, thích hợp cho các bữa ăn gia đình.",
          price: 400000,
          offerPrice: 399000,
          image: [
            "https://i.pinimg.com/736x/2b/e1/a0/2be1a0cbe5752a8b11a14e6f5b0e4ae5.jpg",
            "https://i.pinimg.com/736x/09/49/63/09496350dd63964a08d66bfcb2f6f493.jpg",
            "https://i.pinimg.com/736x/87/c4/07/87c40725d1ee3e4adba0e4dd11c6e6e7.jpg",
            "https://i.pinimg.com/736x/79/17/50/791750ae4067533fa7edfbfbd5aa3320.jpg",
          ],
          category: "Gạo Đặc Sản",
          date: 1738667236865,
          __v: 0,
        },
        quantity: 1,
        _id: "67a20934b3db72db5cc77b2c",
      },
    ],
    amount: 406099,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0,
    },
    status: "Order Placed",
    date: 1738672426822,
    __v: 0,
  },
  {
    _id: "67a20949b3db72db5cc77b2e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f52e3f34a77b6dde914a",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Gạo Lứt Hữu Cơ",
          description:
            "Gạo lứt hữu cơ được canh tác theo phương pháp tự nhiên, không hóa chất bảo vệ thực vật, giữ nguyên lớp cám dinh dưỡng. Giàu chất xơ và vitamin B, tốt cho sức khỏe và người ăn kiêng.",
          price: 429990,
          offerPrice: 329990,
          image: [
            "https://i.pinimg.com/736x/d1/75/d2/d175d28c457aae4622ac5f9b057f00f2.jpg",
          ],
          category: "Gạo Hữu Cơ",
          date: 1738667310300,
          __v: 0,
        },
        quantity: 1,
        _id: "67a20949b3db72db5cc77b2f",
      },
    ],
    amount: 335990,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0,
    },
    status: "Order Placed",
    date: 1738672448031,
    __v: 0,
  },
  {
    _id: "67a209bab3db72db5cc77b34",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f4e43f34a77b6dde9144",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Gạo ST25 - Gạo Lúa Tôm",
          description:
            "Gạo ST25 là loại gạo đặc sản của Việt Nam, đạt giải gạo ngon nhất thế giới. Được trồng trên vùng đất lúa tôm, hạt gạo thơm, dẻo, có vị ngọt tự nhiên, thích hợp cho các bữa ăn gia đình.",
          price: 400000,
          offerPrice: 399000,
          image: [
            "https://i.pinimg.com/736x/2b/e1/a0/2be1a0cbe5752a8b11a14e6f5b0e4ae5.jpg",
            "https://i.pinimg.com/736x/09/49/63/09496350dd63964a08d66bfcb2f6f493.jpg",
            "https://i.pinimg.com/736x/87/c4/07/87c40725d1ee3e4adba0e4dd11c6e6e7.jpg",
            "https://i.pinimg.com/736x/79/17/50/791750ae4067533fa7edfbfbd5aa3320.jpg",
          ],
          category: "Gạo Đặc Sản",
          date: 1738667236865,
          __v: 0,
        },
        quantity: 1,
        _id: "67a209bab3db72db5cc77b35",
      },
    ],
    amount: 406909,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0,
    },
    status: "Order Placed",
    date: 1738672560698,
    __v: 0,
  },
];

export const addressDummyData = [
  {
    _id: "67a1e4233f34a77b6dde9055",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    fullName: "Marc Spector",
    phoneNumber: "0785436798",
    pincode: 654321,
    area: "Main Road , 123 Street, G Block",
    city: "City",
    state: "State",
    __v: 0,
  },
];
