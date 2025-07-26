
import {GiMoneyStack, GiPayMoney} from 'react-icons/gi';
import { IoMdClock } from "react-icons/io";

const services = [
  {
    title: 'Trims/Fades',
    price: '$50',
    comment: 'Transition from shorter hair at the back and sides to longer hair on top'
  },
  // {
  //   title: 'Skin/Razor Fades',
  //   price: '$55',
  //   comment: 'A specific variation of the fade haircut that involves a more aggressive tapering of the hair',
  // },
  {
    title: 'Students',
    price: '$45',
    comment: 'University students receive a $5 discount',
  },
  {
    title: 'Under 18',
    price: '$40',
    comment: 'Students under 18 receive a $10 discount',
  },
  {
    title: 'Beard',
    price: '$20',
    comment: 'Define the edges of a beard for a more polished and tidy appearance',
  },
  {
    title: 'Eyebrows',
    price: '$10',
    comment: 'Refine the shape of eyebrows for a polished and well-defined look',
  },
];

const caveats = [
  {
    title: 'After hours',
    price: '﹢$10',
    comment: 'Bookings made after 7pm incurs a $10 additional fee',
  },
  {
    title: 'Cash Discount',
    price: '﹣$5',
    comment: 'Payments by cash receive a five dollar discount',
  },
  {
    title: 'Entrance',
    price: '',
    comment: 'Enter the barbershop through the right side of the house along the fence',
  },
  {
    title: 'Have An Idea',
    price: '',
    comment: 'Having an idea saves time for both customers and barber',
  },
  {
    title: 'Clean Hair',
    price: '',
    comment: 'If possible please come in with clean hair',
  },
];

const rules = [
  {
    title: 'Deposit',
    comment: 'Cash bookings now require a $15 deposit.',
    icon: <GiPayMoney/>,
  },
  {
    title: 'Payments',
    comment: 'Cash and transfers are acceptable methods of payment. Cash payments receive a $5 discount.',
    icon: <GiMoneyStack/>,
  },
  {
    title: 'After Hours',
    comment: 'Bookings made after 7pm incurs a $10 additional fee.',
    icon: <IoMdClock/>,
  },
];

export default { services, rules, caveats };
