import { useState } from 'react'
import logo from '../assets/logo.png'; // with import
import tpl from '../assets/tpl.png'; // with import
import tpside from '../assets/tpside.png'; // with import
import group24 from '../assets/group-24.png'
import merica from "../assets/merica.png"

function Page1() {
  const [count, setCount] = useState(0)
  const tableData = [
    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },
    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },
    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },


  ];
  return (
    <>
      <div className='background-image'>
        <div className='w-full nav-banner h-36 flex items-center justify-between'>
          <img src={logo} className='h-28 px-9 object-cover' />
          <div className='flex gap-14'>
            <button className='font-semibold flex items-center gap-2'><span>
              <img src={merica} className='w-7 h-5' /></span> English <span>
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99999 5.9757C5.51542 5.9757 5.03085 5.78879 4.66396 5.4219L0.150563 0.908509C-0.0501876 0.707759 -0.0501876 0.375483 0.150563 0.174733C0.351313 -0.0260177 0.683589 -0.0260177 0.88434 0.174733L5.39774 4.68813C5.73002 5.0204 6.26996 5.0204 6.60224 4.68813L11.1157 0.174733C11.3164 -0.0260177 11.6487 -0.0260177 11.8494 0.174733C12.0502 0.375483 12.0502 0.707759 11.8494 0.908509L7.33602 5.4219C6.96913 5.78879 6.48456 5.9757 5.99999 5.9757Z" fill="#01264A" />
                </svg>
              </span></button>
            <button className='font-semibold outline-btn py-5 px-12'>Live Chat</button>
          </div>
        </div>
        <div className='flex mt-9 pb-20' style={{ gap: 25 }}>
          <div className='flex flex-col w-full mb-20'>
            <p className='hero-header'><span className='primary-txt'>Win the right to live</span> in the USA!</p>
            <div className='flex mt-6 item-center justify-start'>
              <div className='flex gap-4'>
                <div className='bg-white' style={{
                  width: '6px',
                  height: '81px',
                }}></div>
                <p className='text-white side-sm-txt'>The official deadline is running, so hurry up and apply here!</p>
              </div>
              <div className='flex gap-2'>
                <div className='p-4 counter-card'>
                  <p className='counter-card-txt'>27</p>
                  <p className='counter-card-txt-sm'>days</p>
                </div>
                <div className='p-4 counter-card'>
                  <p className='counter-card-txt'>24</p>
                  <p className='counter-card-txt-sm'>hours</p>
                </div>
                <div className='p-4 counter-card'>
                  <p className='counter-card-txt'>60</p>
                  <p className='counter-card-txt-sm'>minutes</p>
                </div>
                <div className='p-4 counter-card'>
                  <p className='counter-card-txt'>60</p>
                  <p className='counter-card-txt-sm'>seconds</p>
                </div>
              </div>
            </div>
            <div className='mt-12 flex flex-col gap-5'>
              <div className='flex items-center gap-4'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.6138 9.89224C24.5705 9.89224 24.5416 9.89224 24.4982 9.89224H24.4259C21.6938 9.80312 19.6556 7.63455 19.6556 4.96098C19.6556 2.22801 21.8239 0.0148926 24.4693 0.0148926C27.1147 0.0148926 29.283 2.24286 29.283 4.96098C29.2685 7.6494 27.2303 9.81796 24.6283 9.90707C24.6283 9.89222 24.6283 9.89224 24.6138 9.89224ZM24.4693 2.22802C23.0093 2.22802 21.8239 3.44598 21.8239 4.94615C21.8239 6.4166 22.937 7.60486 24.3681 7.66427C24.3826 7.64941 24.4982 7.64941 24.6283 7.66427C26.0305 7.59 27.1147 6.40175 27.1291 4.94615C27.1291 3.44598 25.9438 2.22802 24.4693 2.22802Z" fill="white" />
                  <path d="M24.6288 20.8389C24.065 20.8389 23.5012 20.7944 22.9374 20.6904C22.3448 20.5864 21.9545 20.0072 22.0557 19.3982C22.1568 18.7892 22.7206 18.3882 23.3133 18.4921C25.0913 18.8041 26.9706 18.4626 28.2282 17.6011C28.9076 17.1407 29.269 16.5612 29.269 15.982C29.269 15.4027 28.8931 14.8383 28.2282 14.3778C26.9706 13.5163 25.0624 13.1747 23.2699 13.5015C22.6772 13.6203 22.1135 13.2044 22.0123 12.5955C21.9111 11.9866 22.3014 11.4073 22.8941 11.3033C25.2503 10.8726 27.6933 11.333 29.428 12.5212C30.7001 13.3975 31.4373 14.6452 31.4373 15.982C31.4373 17.3039 30.7145 18.5666 29.428 19.4577C28.1125 20.3489 26.4068 20.8389 24.6288 20.8389Z" fill="white" />
                  <path d="M7.22444 9.89218C7.20998 9.89218 7.19553 9.89218 7.19553 9.89218C4.59352 9.80306 2.55529 7.63451 2.54083 4.96094C2.54083 2.22797 4.70917 0 7.35454 0C9.99991 0 12.1682 2.22797 12.1682 4.94609C12.1682 7.63451 10.13 9.80306 7.52801 9.89218L7.22444 8.7782L7.32563 9.89218C7.29672 9.89218 7.25335 9.89218 7.22444 9.89218ZM7.36899 7.66421C7.45573 7.66421 7.52801 7.66421 7.61474 7.67907C8.90128 7.61965 10.0288 6.4314 10.0288 4.96094C10.0288 3.46078 8.84346 2.24281 7.38345 2.24281C5.92344 2.24281 4.73808 3.46078 4.73808 4.96094C4.73808 6.41655 5.8367 7.58995 7.23889 7.67907C7.25335 7.66421 7.31117 7.66421 7.36899 7.66421Z" fill="white" />
                  <path d="M7.20872 20.8389C5.43069 20.8389 3.72493 20.3489 2.40947 19.4577C1.13738 18.5814 0.400146 17.3187 0.400146 15.982C0.400146 14.66 1.13738 13.3975 2.40947 12.5212C4.14414 11.333 6.58713 10.8726 8.94339 11.3033C9.53607 11.4073 9.92637 11.9866 9.82518 12.5955C9.72399 13.2044 9.16023 13.6203 8.56755 13.5015C6.77506 13.1747 4.88137 13.5163 3.60928 14.3778C2.92987 14.8383 2.56848 15.4027 2.56848 15.982C2.56848 16.5612 2.94433 17.1407 3.60928 17.6011C4.86692 18.4626 6.74614 18.8041 8.52418 18.4921C9.11686 18.3882 9.68063 18.8041 9.78181 19.3982C9.883 20.0072 9.4927 20.5864 8.90003 20.6904C8.33626 20.7944 7.77249 20.8389 7.20872 20.8389Z" fill="white" />
                  <path d="M15.9405 20.9875C15.8971 20.9875 15.8682 20.9875 15.8248 20.9875H15.7526C13.0205 20.8983 10.9822 18.7298 10.9822 16.0562C10.9822 13.3233 13.1506 11.1101 15.7959 11.1101C18.4413 11.1101 20.6096 13.3381 20.6096 16.0562C20.5952 18.7446 18.5569 20.9132 15.9549 21.0023C15.9549 20.9875 15.9549 20.9875 15.9405 20.9875ZM15.7959 13.3233C14.3359 13.3233 13.1506 14.5412 13.1506 16.0414C13.1506 17.5118 14.2636 18.7001 15.6947 18.7595C15.7092 18.7446 15.8248 18.7446 15.9549 18.7595C17.3571 18.6852 18.4413 17.497 18.4558 16.0414C18.4558 14.5561 17.2704 13.3233 15.7959 13.3233Z" fill="#4AC97D" />
                  <path d="M15.9392 31.9491C14.2045 31.9491 12.4698 31.4886 11.1255 30.5529C9.85338 29.6765 9.11615 28.4289 9.11615 27.0921C9.11615 25.7702 9.83893 24.4928 11.1255 23.6164C13.8287 21.7747 18.0641 21.7747 20.7529 23.6164C22.025 24.4928 22.7622 25.7404 22.7622 27.0772C22.7622 28.3992 22.0394 29.6765 20.7529 30.5529C19.4085 31.4738 17.6738 31.9491 15.9392 31.9491ZM12.3253 25.4879C11.6459 25.9484 11.2845 26.5277 11.2845 27.1069C11.2845 27.6862 11.6603 28.2506 12.3253 28.7111C14.2768 30.0627 17.5871 30.0627 19.5386 28.7111C20.218 28.2506 20.5794 27.6714 20.5794 27.0921C20.5794 26.5128 20.2036 25.9484 19.5386 25.4879C17.6016 24.1363 14.2912 24.1512 12.3253 25.4879Z" fill="#4AC97D" />
                </svg>
                <p className='text-white'>50,000 people and their families will Live, Work and Study in USA.</p>
              </div>
              <div className='flex items-center gap-4'>
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4931 20.3508C13.0005 20.3508 12.5078 20.3129 12.0398 20.2243C9.42869 19.832 7.05162 18.288 5.54901 15.9975C4.50212 14.3776 3.94788 12.492 3.94788 10.5431C3.94788 5.13934 8.23399 0.735352 13.4931 0.735352C18.7522 0.735352 23.0383 5.13934 23.0383 10.5431C23.0383 12.492 22.4841 14.3776 21.4372 15.9975C19.9223 18.3007 17.5452 19.832 14.9095 20.2369C14.4784 20.3129 13.9858 20.3508 13.4931 20.3508ZM13.4931 2.63362C9.24394 2.63362 5.79534 6.17707 5.79534 10.5431C5.79534 12.125 6.23873 13.6436 7.07625 14.9344C8.29558 16.7821 10.2046 18.0223 12.323 18.3387C13.1113 18.4779 13.8872 18.4779 14.6139 18.3387C16.7693 18.0223 18.6783 16.7694 19.8977 14.9218C20.7352 13.6309 21.1786 12.1123 21.1786 10.5304C21.1909 6.17705 17.7423 2.63362 13.4931 2.63362Z" fill="white" />
                  <path d="M6.68081 27.7415C6.50838 27.7415 6.34827 27.7162 6.17584 27.6782C5.37527 27.4884 4.75945 26.8556 4.5747 26.033L4.14363 24.1727C4.119 24.0588 4.03278 23.9702 3.90962 23.9323L1.87741 23.4387C1.11379 23.2489 0.510283 22.6668 0.300903 21.8948C0.091524 21.1228 0.300903 20.2876 0.855143 19.7181L5.65855 14.7826C5.85561 14.5801 6.12657 14.4789 6.39754 14.5042C6.6685 14.5295 6.91483 14.6814 7.07494 14.9218C8.29427 16.7695 10.2033 18.0223 12.334 18.3387C13.1223 18.4779 13.8982 18.4779 14.6249 18.3387C16.7802 18.0223 18.6893 16.7695 19.9086 14.9218C20.0564 14.6814 20.3151 14.5295 20.586 14.5042C20.857 14.4789 21.1279 14.5801 21.325 14.7826L26.1284 19.7181C26.6827 20.2876 26.892 21.1228 26.6827 21.8948C26.4733 22.6668 25.8575 23.2616 25.1062 23.4387L23.0739 23.9323C22.9631 23.9576 22.8769 24.0462 22.8399 24.1727L22.4089 26.033C22.2241 26.8556 21.6083 27.4884 20.8077 27.6782C20.0072 27.8807 19.182 27.5896 18.6647 26.9442L13.4918 20.8318L8.3189 26.9569C7.90014 27.4631 7.30895 27.7415 6.68081 27.7415ZM6.21279 16.9087L2.16068 21.0722C2.04984 21.1861 2.06215 21.3127 2.08679 21.3886C2.0991 21.4519 2.16068 21.5784 2.30848 21.6037L4.34069 22.0973C5.14126 22.2871 5.75708 22.9199 5.94183 23.7424L6.3729 25.6028C6.40985 25.7673 6.53302 25.8179 6.60691 25.8432C6.68081 25.8559 6.80398 25.8685 6.91483 25.742L11.632 20.161C9.53822 19.7434 7.61686 18.5918 6.21279 16.9087ZM15.3515 20.1484L20.0687 25.7167C20.1796 25.8559 20.3151 25.8559 20.389 25.8305C20.4629 25.8179 20.5737 25.7546 20.623 25.5901L21.054 23.7298C21.2388 22.9072 21.8546 22.2745 22.6552 22.0846L24.6874 21.5911C24.8352 21.5531 24.8968 21.4392 24.9091 21.3759C24.9337 21.3127 24.946 21.1735 24.8352 21.0596L20.7831 16.896C19.3667 18.5791 17.4577 19.7308 15.3515 20.1484Z" fill="white" />
                  <path d="M15.8219 15.4661C15.5017 15.4661 15.1198 15.3775 14.6641 15.0991L13.4941 14.3777L12.324 15.0864C11.2525 15.7445 10.5505 15.3648 10.2918 15.175C10.0332 14.9852 9.47894 14.4157 9.76222 13.1628L10.0578 11.8593L9.0725 10.9228C8.53058 10.366 8.33351 9.69532 8.51826 9.08788C8.70301 8.48043 9.24493 8.05013 10.0085 7.92358L11.3264 7.6958L11.9545 6.27842C12.3117 5.55708 12.8659 5.1521 13.4941 5.1521C14.1222 5.1521 14.6888 5.56974 15.0336 6.29109L15.7603 7.7844L16.9796 7.93625C17.7309 8.0628 18.2728 8.49306 18.4699 9.10051C18.6547 9.70795 18.4576 10.3787 17.9157 10.9355L16.8934 11.9859L17.2136 13.1628C17.4969 14.4157 16.9427 14.9852 16.684 15.175C16.5485 15.2889 16.253 15.4661 15.8219 15.4661ZM10.5505 9.77125L11.4003 10.6444C11.7944 11.0494 11.9915 11.7328 11.8683 12.2896L11.6343 13.302L12.6196 12.7072C13.1492 12.3909 13.8636 12.3909 14.3809 12.7072L15.3662 13.302L15.1445 12.2896C15.0213 11.7201 15.2061 11.0494 15.6002 10.6444L16.45 9.77125L15.3785 9.5814C14.8612 9.49282 14.3439 9.10053 14.1099 8.61964L13.4941 7.37942L12.8783 8.64493C12.6566 9.11317 12.1393 9.51815 11.622 9.60674L10.5505 9.77125Z" fill="#4AC97D" />
                </svg>

                <p className='text-white'>OFFICIAL USA Governmental program.</p>
              </div>
              <div className='flex items-center gap-4'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.15818 27.4436C4.20752 27.4436 2.37437 26.381 1.38729 24.6544C0.858499 23.7851 0.576477 22.7588 0.576477 21.7083C0.576477 18.5449 3.07943 15.9731 6.15818 15.9731C9.23692 15.9731 11.7399 18.5449 11.7399 21.7083C11.7399 22.7588 11.4579 23.7851 10.9291 24.6665C9.94198 26.381 8.10883 27.4436 6.15818 27.4436ZM6.15818 17.7843C4.05476 17.7843 2.33912 19.5471 2.33912 21.7083C2.33912 22.4207 2.52713 23.121 2.89141 23.7247C3.58472 24.9321 4.80682 25.6324 6.15818 25.6324C7.50953 25.6324 8.73163 24.9201 9.42494 23.7368C9.78922 23.121 9.97723 22.4328 9.97723 21.7083C9.97723 19.5471 8.26159 17.7843 6.15818 17.7843Z" fill="white" />
                  <path d="M5.48686 23.8093C5.26359 23.8093 5.04032 23.7248 4.86406 23.5437L3.70071 22.3483C3.35994 21.9982 3.35994 21.4185 3.70071 21.0683C4.04149 20.7182 4.60554 20.7182 4.94631 21.0683L5.51036 21.648L7.39051 19.8609C7.74304 19.5229 8.30708 19.5471 8.63611 19.9094C8.96514 20.2716 8.94163 20.8511 8.58911 21.1892L6.08615 23.5677C5.90988 23.7247 5.69837 23.8093 5.48686 23.8093Z" fill="#4AC97D" />
                  <path d="M7.55664 8.19715C7.27462 8.19715 7.01611 8.06434 6.83985 7.82286C6.64008 7.54515 6.61658 7.18289 6.76934 6.88104C6.96911 6.47052 7.25113 6.07211 7.61541 5.70989L11.4345 1.77371C13.3851 -0.218516 16.5578 -0.218516 18.5085 1.77371L20.5649 3.92294C21.4345 4.80435 21.9633 5.98761 22.022 7.24332C22.0338 7.52103 21.928 7.78663 21.7282 7.96775C21.5285 8.14886 21.2582 8.23336 20.9997 8.18507C20.7647 8.14885 20.5179 8.1368 20.2594 8.1368H8.50848C8.22646 8.1368 7.95618 8.16093 7.68591 8.19715C7.65066 8.19715 7.60364 8.19715 7.55664 8.19715ZM9.51906 6.31359H20.0478C19.8951 5.90307 19.6483 5.52879 19.3193 5.19071L17.2511 3.04148C15.9938 1.76163 13.9374 1.76163 12.6683 3.04148L9.51906 6.31359Z" fill="white" />
                  <path d="M20.2602 26.236H9.24955C8.87352 26.236 8.54449 25.9945 8.41523 25.6444C8.28597 25.2822 8.39173 24.8837 8.67375 24.6422C8.95577 24.4007 9.21429 24.0868 9.40231 23.7487C9.77834 23.133 9.96635 22.4327 9.96635 21.7203C9.96635 19.559 8.25072 17.7962 6.1473 17.7962C5.05446 17.7962 4.00863 18.2792 3.28007 19.1364C3.0333 19.4141 2.64552 19.5228 2.30474 19.39C1.96396 19.2572 1.72894 18.9191 1.72894 18.5448V13.2563C1.72894 9.53751 3.96162 6.84499 7.42815 6.39825C7.74543 6.34996 8.10971 6.31372 8.48574 6.31372H20.2367C20.5187 6.31372 20.883 6.32579 21.259 6.38617C24.7256 6.79669 26.9935 9.50129 26.9935 13.2563V19.2934C27.017 23.4469 24.3025 26.236 20.2602 26.236ZM11.0709 24.4249H20.2602C23.292 24.4249 25.2544 22.4085 25.2544 19.2934V13.2563C25.2544 10.431 23.6445 8.48704 21.0358 8.17311C20.7538 8.12481 20.507 8.12484 20.2602 8.12484H8.50924C8.22722 8.12484 7.95694 8.14897 7.68667 8.1852C5.10146 8.52327 3.51509 10.4551 3.51509 13.2563V16.6612C4.31415 16.2145 5.23072 15.973 6.15905 15.973C9.2378 15.973 11.7407 18.5448 11.7407 21.7082C11.7407 22.6621 11.5057 23.6039 11.0709 24.4249Z" fill="white" />
                  <path d="M26.1354 19.5954H22.6101C20.824 19.5954 19.3786 18.1102 19.3786 16.275C19.3786 14.4397 20.824 12.9546 22.6101 12.9546H26.1354C26.6172 12.9546 27.0167 13.3651 27.0167 13.8601C27.0167 14.3552 26.6172 14.7657 26.1354 14.7657H22.6101C21.7993 14.7657 21.1412 15.4419 21.1412 16.275C21.1412 17.1081 21.7993 17.7842 22.6101 17.7842H26.1354C26.6172 17.7842 27.0167 18.1948 27.0167 18.6898C27.0167 19.1848 26.6172 19.5954 26.1354 19.5954Z" fill="white" />
                </svg>

                <p className='text-white'>Your chance to LIVE, WORK & STUDY in USA.</p>
              </div>
              <div className='flex items-center gap-4'>
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2691 31.9206C6.84626 31.9206 0 24.8861 0 16.2315C0 7.57702 6.84626 0.54248 15.2691 0.54248C23.692 0.54248 30.5383 7.57702 30.5383 16.2315C30.5383 24.8861 23.692 31.9206 15.2691 31.9206ZM15.2691 2.73165C8.02518 2.73165 2.13058 8.78836 2.13058 16.2315C2.13058 23.6747 8.02518 29.7314 15.2691 29.7314C22.5131 29.7314 28.4077 23.6747 28.4077 16.2315C28.4077 8.78836 22.5131 2.73165 15.2691 2.73165Z" fill="white" />
                  <path d="M20.5383 21.9671C20.3537 21.9671 20.169 21.9233 19.9986 21.8066L15.5954 19.1066C14.5017 18.4352 13.6921 16.9612 13.6921 15.6623V9.67857C13.6921 9.0802 14.175 8.58398 14.7574 8.58398C15.3397 8.58398 15.8227 9.0802 15.8227 9.67857V15.6623C15.8227 16.1877 16.2488 16.9612 16.6891 17.2239L21.0923 19.9239C21.6036 20.2304 21.7599 20.9017 21.4616 21.4271C21.2485 21.7774 20.8934 21.9671 20.5383 21.9671Z" fill="#4AC97D" />
                </svg>
                <p className='text-white'>Simple registration within 5 minutes.</p>
              </div>
              <div className='flex items-center gap-4'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.3743 29.8463C14.4473 29.8463 13.5741 29.3632 12.9562 28.5212L10.9412 25.7606C10.9009 25.7054 10.7397 25.6364 10.6725 25.6226H10.0008C4.39898 25.6226 0.933105 24.0628 0.933105 16.3055V9.40399C0.933105 3.30303 4.06314 0.0869141 10.0008 0.0869141H20.7477C26.6854 0.0869141 29.8154 3.30303 29.8154 9.40399V16.3055C29.8154 22.4065 26.6854 25.6226 20.7477 25.6226H20.076C19.9686 25.6226 19.8745 25.6778 19.8074 25.7606L17.7923 28.5212C17.1744 29.3632 16.3012 29.8463 15.3743 29.8463ZM10.0008 2.15737C5.19157 2.15737 2.94815 4.46249 2.94815 9.40399V16.3055C2.94815 22.5445 5.03036 23.5521 10.0008 23.5521H10.6725C11.3576 23.5521 12.1367 23.9524 12.5532 24.5184L14.5682 27.279C15.0384 27.9139 15.7101 27.9139 16.1803 27.279L18.1953 24.5184C18.6386 23.911 19.3372 23.5521 20.076 23.5521H20.7477C25.5569 23.5521 27.8004 21.247 27.8004 16.3055V9.40399C27.8004 4.46249 25.5569 2.15737 20.7477 2.15737H10.0008Z" fill="white" />
                  <path d="M15.3742 14.9252C14.6219 14.9252 14.0308 14.304 14.0308 13.5449C14.0308 12.7857 14.6353 12.1646 15.3742 12.1646C16.113 12.1646 16.7175 12.7857 16.7175 13.5449C16.7175 14.304 16.1265 14.9252 15.3742 14.9252Z" fill="#4AC97D" />
                  <path d="M20.747 14.9252C19.9948 14.9252 19.4037 14.304 19.4037 13.5449C19.4037 12.7857 20.0082 12.1646 20.747 12.1646C21.4859 12.1646 22.0904 12.7857 22.0904 13.5449C22.0904 14.304 21.4993 14.9252 20.747 14.9252Z" fill="#4AC97D" />
                  <path d="M10.0008 14.9252C9.24849 14.9252 8.65741 14.304 8.65741 13.5449C8.65741 12.7857 9.26192 12.1646 10.0008 12.1646C10.7396 12.1646 11.3441 12.7857 11.3441 13.5449C11.3441 14.304 10.7531 14.9252 10.0008 14.9252Z" fill="#4AC97D" />
                </svg>
                <p className='text-white'>Personal support in every step.</p>
              </div>
              <div className='flex items-center gap-4'>
                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2562 23.4403C12.8759 23.4403 12.5088 23.3864 12.2072 23.2651C7.72282 21.6888 0.57666 16.0572 0.57666 7.73094C0.57666 3.46006 3.93337 -0.00244141 8.06372 -0.00244141C10.0437 -0.00244141 11.8925 0.778955 13.2693 2.16666C14.6592 0.778955 16.4949 -0.00244141 18.4748 -0.00244141C22.6052 -0.00244141 25.9619 3.46006 25.9619 7.73094C25.9619 8.31028 25.9226 8.90309 25.8439 9.50937C25.8046 9.81924 25.621 10.1022 25.3587 10.2638C25.0965 10.4255 24.7687 10.439 24.4802 10.3177C22.8674 9.60368 20.8613 10.1426 19.8123 11.5842C19.6287 11.8402 19.2747 11.9749 19.0255 11.9884C18.7108 11.9884 18.4224 11.8402 18.2388 11.5842C17.4914 10.5603 16.3507 9.98092 15.1181 9.98092C12.9808 9.98092 11.2369 11.7863 11.2369 14.0093C11.2369 17.5122 13.1906 20.0047 14.8427 21.5002C15.0788 21.7157 15.1968 22.0256 15.1706 22.349C15.1443 22.6723 14.9739 22.9552 14.6985 23.1304C14.5543 23.2112 14.4363 23.2651 14.3707 23.2786C14.0298 23.3864 13.6495 23.4403 13.2562 23.4403ZM8.06372 2.01848C5.02169 2.01848 2.54349 4.5783 2.54349 7.73094C2.54349 14.7772 8.24732 19.1155 11.5254 20.7861C10.2797 19.0751 9.25694 16.8116 9.25694 13.9958C9.25694 10.6546 11.8794 7.94651 15.105 7.94651C16.5736 7.94651 17.9503 8.49892 19.0124 9.48244C20.3368 8.26988 22.2249 7.71746 23.982 8.05428C23.982 7.9465 23.982 7.83874 23.982 7.74443C23.982 4.59179 21.5037 2.03193 18.4617 2.03193C16.7178 2.03193 15.105 2.86724 14.0429 4.30883C13.8593 4.56482 13.5709 4.71305 13.2562 4.71305C12.9415 4.71305 12.653 4.56482 12.4694 4.30883C11.4336 2.85377 9.82076 2.01848 8.06372 2.01848Z" fill="white" />
                  <path d="M19.0263 25.9999C18.7248 25.9999 18.4101 25.9594 18.1609 25.8651C17.0333 25.4744 15.2107 24.5179 13.5454 22.9954C11.6049 21.2305 9.284 18.2395 9.284 13.9956C9.284 10.6543 11.9064 7.94629 15.132 7.94629C16.6006 7.94629 17.9774 8.49869 19.0395 9.4822C20.6916 7.95978 23.2091 7.52863 25.2809 8.45826C27.405 9.4283 28.7818 11.6109 28.7818 14.0091C28.7818 20.3952 23.3272 24.6795 19.8918 25.8786C19.6295 25.9594 19.3279 25.9999 19.0263 25.9999ZM15.1189 9.96721C12.9816 9.96721 11.2377 11.7726 11.2377 13.9956C11.2377 17.4985 13.1914 19.991 14.8435 21.4865C16.299 22.8068 17.8331 23.6286 18.7903 23.952C18.8952 23.9924 19.1444 23.9924 19.2361 23.952C21.203 23.2649 26.8019 19.964 26.8019 13.9956C26.8019 12.3923 25.884 10.9373 24.481 10.304C22.8944 9.58997 20.8621 10.1289 19.8131 11.5705C19.6295 11.8265 19.2755 11.9612 19.0263 11.9747C18.7116 11.9747 18.4232 11.8265 18.2396 11.5705C17.4922 10.5465 16.3515 9.96721 15.1189 9.96721Z" fill="#4AC97D" />
                </svg>
                <p className='text-white'>Double chance for married people to win the Green Card.</p>
              </div>

            </div>

          </div>
          <div className='w-full'>
            <div className='bg-white pt-5 rounded-3xl mb-10 px-10'>
              <button className='flex gap-2 w-full small-cta'>
                <svg className='w-8 h-6' viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0622 24.5939C20.7196 24.5939 20.3769 24.4676 20.1064 24.1971C19.5834 23.6741 19.5834 22.8085 20.1064 22.2855L30.0973 12.2947L20.1064 2.30385C19.5834 1.78086 19.5834 0.915227 20.1064 0.39224C20.6294 -0.130747 21.495 -0.130747 22.018 0.39224L32.9647 11.3389C33.4876 11.8619 33.4876 12.7275 32.9647 13.2505L22.018 24.1971C21.7475 24.4676 21.4048 24.5939 21.0622 24.5939Z" fill="#4AC97D" />
                  <path d="M31.7039 13.6471H1.35258C0.613188 13.6471 3.05176e-05 13.034 3.05176e-05 12.2946C3.05176e-05 11.5552 0.613188 10.942 1.35258 10.942H31.7039C32.4433 10.942 33.0564 11.5552 33.0564 12.2946C33.0564 13.034 32.4433 13.6471 31.7039 13.6471Z" fill="#4AC97D" />
                </svg>

                <p> Check now for free!</p>
              </button>
              <p className='card-header-lg w-full'>Green card eligibility</p>
              <form className='pt-5 flex flex-col' style={{ gap: '23px' }}>
                <div className='flex' style={{ gap: '11px' }}>
                  <input placeholder='First name' className='input-primary' />
                  <input placeholder='Last name' className='input-primary' />
                </div>
                <div className='flex' style={{ gap: '11px' }}>
                  <input className='input-primary' placeholder='Email address' />
                  <input className='input-primary' placeholder='Your email again' />
                </div>
                <div className="relative flex items-center">
                  <input className="input-primary pr-10" placeholder="Your country of birth" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <input className="input-primary pr-10" placeholder="Marital status" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  <label htmlFor="myCheckbox" className="ml-2 text-gray-700">Yes, I finished high school OR I have qualifying training.</label>
                </div>
                <button className='primary-btn py-3 mb-5 text-white font-bold'>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div >
      </div >
      <section style={{ background: "#F7F8F9" }}>
        <div className='p-20' style={{ paddingTop: 87 }}>
          <div className='flex'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3751 13.5123H13.5125" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.68756 13.5123H9.47436" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.68756 18.0622H11.2374" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 8.9623C1 3.27494 3.27494 1 8.9623 1H14.6497" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23.7495 10.0997V15.7871C23.7495 21.4744 21.4746 23.7494 15.7872 23.7494H8.96242C3.27506 23.7494 1.00012 21.4744 1.00012 15.7871V13.4894" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.1993 10.0999C15.7869 10.0999 14.6494 8.96242 14.6494 5.55001V1.00012L23.7492 10.0999" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='font-bold pl-2'>Find the right visa for you!</p>
          </div>
          <p style={{ paddingTop: 70 }} className='cta-txt-md-thin'>Diversity Visa Cost</p>
          <div className='bg-white rounded-3xl w-full mt-10'>
            <div className="overflow-x-auto">
              <div className='flex items-center justify-between  pb-10 pt-7  px-6 '>
                <div className='flex items-center gap-4'>
                  <div style={{
                    width: '6px',
                    height: '37px',
                    backgroundColor: '#00579B'
                  }}></div>
                  <p>Mandatory Government Fees for Green Cards</p>
                </div>
                <button className='font-bold text-white px-10 py-3 primary-orange'>Apply Now</button>
              </div>
              <table className="min-w-full divide-y divide-gray-200" style={{ borderRadius: 100, borderCollapse: 'separate' }}>
                <thead style={{ borderRadius: 100, borderCollapse: 'separate' }}>
                  <tr>
                    <th style={{ borderRadius: 100 }} className="px-6 py-3 bg-white text-left text-xs leading-4 text-black font-bold uppercase tracking-wider">
                      Fee Type
                    </th>
                    <th style={{ borderRadius: 100 }} className="px-6 py-3 bg-white text-left text-xs leading-4 text-black font-bold uppercase tracking-wider">
                      Cost (to Applicat Living in the U.S.)
                    </th>
                    <th style={{ borderRadius: 100 }} className="px-6 py-3 bg-white text-left text-xs leading-4 text-black font-bold uppercase tracking-wider">
                      Cost (to Applicant Living Abroad)                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200" style={{ borderRadius: 100, borderCollapse: 'separate' }}>
                  {tableData.map((rowData, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-no-wrap">{rowData.feeType}</td>
                      <td className="px-6 py-4 whitespace-no-wrap">{rowData.costUS}</td>
                      <td className="px-6 py-4 whitespace-no-wrap">{rowData.costAbroad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className='text-right' style={{ fontSize: 16, paddingTop: 2 }}>Fees are subject to change, please use this <span className='underline'>calculator</span></p>
          <div className='flex items-center justify-between pt-16'>
            <p className='cta-txt-md-thin'>Diversity Visa Timeline</p>
            <svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L16.5 16L32 1" stroke="#170A61" stroke-width="2" />
            </svg>
          </div>
          <div className='mt-10 w-full' style={{
            flexShrink: 0,
            height: '1px',
            backgroundColor: '#170A61'
          }}></div>
          <div className='flex items-center justify-between pt-16'>
            <p className='cta-txt-md-thin'>Diversity Visa FAQs</p>
            <svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L16.5 16L32 1" stroke="#170A61" stroke-width="2" />
            </svg>
          </div>
          <div className='mt-10 w-full' style={{
            flexShrink: 0,
            height: '1px',
            backgroundColor: '#170A61'
          }}></div>

        </div>
      </section >
      <section className='bg-white p-20'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5555 1.90532L25.9044 6.60323C26.221 7.25294 27.0706 7.86933 27.7869 8.00261L32.0351 8.7023C34.7505 9.1521 35.3836 11.118 33.4344 13.0838L30.1192 16.399C29.5695 16.9487 29.253 18.0316 29.4362 18.8146L30.3858 22.9127C31.1355 26.1446 29.4029 27.4107 26.5542 25.7115L22.5726 23.3459C21.8562 22.9127 20.6568 22.9127 19.9404 23.3459L15.9589 25.7115C13.1101 27.3941 11.3775 26.1446 12.1272 22.9127L13.0767 18.8146C13.2267 18.0149 12.9101 16.9321 12.3604 16.3823L9.04519 13.0671C7.09605 11.118 7.72911 9.1521 10.4446 8.68564L14.6928 7.98595C15.4091 7.86933 16.2587 7.23628 16.5753 6.58657L18.9242 1.88866C20.207 -0.643552 22.2727 -0.643552 23.5555 1.90532Z" fill="#01264A" />
              <path d="M11.2452 2.80272H1.24963C0.566598 2.80272 0.000183105 2.23631 0.000183105 1.55328C0.000183105 0.870248 0.566598 0.303833 1.24963 0.303833H11.2452C11.9282 0.303833 12.4946 0.870248 12.4946 1.55328C12.4946 2.23631 11.9282 2.80272 11.2452 2.80272Z" fill="#01264A" />
              <path d="M6.24741 26.1258H1.24963C0.566598 26.1258 0.000183105 25.5593 0.000183105 24.8763C0.000183105 24.1933 0.566598 23.6269 1.24963 23.6269H6.24741C6.93044 23.6269 7.49685 24.1933 7.49685 24.8763C7.49685 25.5593 6.93044 26.1258 6.24741 26.1258Z" fill="#01264A" />
              <path d="M2.91555 14.4642H1.24963C0.566598 14.4642 0.000183105 13.8978 0.000183105 13.2148C0.000183105 12.5317 0.566598 11.9653 1.24963 11.9653H2.91555C3.59858 11.9653 4.165 12.5317 4.165 13.2148C4.165 13.8978 3.59858 14.4642 2.91555 14.4642Z" fill="#01264A" />
            </svg>
            <p className='font-bold'>Our jobs speaks for Ourselves</p>
          </div>
          <img src={tpl} style={{ height: 83 }} />
        </div>
        <div className='flex'>

          <div className='w-full'>
            <div className='flex items-center gap-8'>
              <img src="https://s3-alpha-sig.figma.com/img/b74a/db6a/59f792ce3e3c2ed25272868b81184047?Expires=1698019200&Signature=kwvaXDdfooF1wmnJlTfVXeaWTX8SfkA5YrWQHHKSx9AS41MleB~MXNDNssER8TVQQg~oQfvglcHBJNXSNZCevKrQslc1WU9R66T2COcEFWLqxvBC2WNly3I8ih~rKPfBNBk-3iSj5WU1WBnXUml3vbfRiPU9aWuYL5o8XBClL8R0ViqnulEmYStpZs9T-huuD037R3uGrY3NdTSUTgzQ7TCCo5txyOmqE~AzavwIXV4g6yd24UtINfM5AAjvo9-iSgUjVGEhY-yn14jJOy7eUVG2r6LTpDnU1ElB7l9xcWZFDRI9cMFnsEKXueOAXiERozYPscXKzQlD43jNw6eoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""
                className='rounded-full object-cover' style={{ height: 72, width: 72 }} />
              <div>
                <p className='underline font-semibold' style={{ color: "#535353" }}>Yeonseo Choi</p>
                <div className='flex items-center pt-4 gap-5'>
                  <a href="">1 Review</a>
                  <p className='flex items-center'>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z" fill="#535353" />
                      </svg>
                    </span>
                    KR
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-200 mt-10 w-full' style={{
              flexShrink: 0,
              height: '1px',
            }}></div>
            <div className='mt-10'>
              <p className='text-right'>Mar 20, 2023</p>
              <img src={group24} style={{ width: 205 }} />
              <p className='pt-5 font-bold text-base' style={{ color: '#535353' }}>Highly Recommend</p>
              <p className='pt-6'>Nikka was a very professional consultant, always ready to assist us each step of the way. I was reminded of everthing and I had to take with to the interview and also later to pick my passport and my son`s. Thanks once more, I certainly recommend the service.</p>
              <p style={{ color: '#535353' }} className='font-bold pt-14'>Date of experience: February 28, 2023</p>
            </div>
            <div className='flex gap-16 justify-center' style={{ paddingTop: 74 }}>
              <button><svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5228 24.2528L3.77484 15.5048C2.74172 14.4717 2.74172 12.7811 3.77484 11.748L12.5228 3" stroke="#D2D2D2" stroke-width="4.98658" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
              <button>
                <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.52295 24.1265L10.7906 15.4825C11.7671 14.4617 11.7671 12.7913 10.7906 11.7704L2.52295 3.12646" stroke="#4AC97D" stroke-width="4.98662" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className='pt-16 w-full'>
            <img src={tpside} />
          </div>
        </div>
        <div className='bg-gray-200 mt-20 w-full' style={{
          flexShrink: 0,
          height: '1px',
        }}></div>
        <p className='cta-txt-md-thin'>Let's keep in touch for news</p>
        <div style={{
          borderRadius: 14,
          backgroundColor: "#F5F5F5"
        }}>
          <div className='flex items-center mt-9 p-5 border-l-4  border-[#00579B]  rounded-tl-xl rounded-bl-xl'>
            <div>
              <p className='pl-1 font-semibold text-black' style={{ fontSize: 24 }}>Subscribe to be the first do receive updates and be in advantage on your application proccess</p>
            </div>
            <div className="relative flex items-center w-full">
              <input className="input-primary bg-white w-full" placeholder="your email here" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <button style={{
                  borderRadius: 14,
                  background: "#FD816B"
                }} className='flex items-center gap-2 text-white py-2 px-4'>
                  subscribe <svg width="7" height="12" className='pt-1' viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L5.59317 6.88384C6.13561 6.39773 6.13561 5.60228 5.59317 5.11617L1 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section >
      <footer style={{
        background: "#002A54"
      }} className='px-20'>
        <div className='flex items-center justify-between'>
          <img src={logo} className='h-28 object-cover' />
          <div className='flex gap-5 text-white items-center'>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Legal Disclaimer</a>
            <a href="">Refund Policy</a>
            <a href="">Terms of Use</a>
          </div>
        </div>
        <div className='bg-white w-full' style={{
          flexShrink: 0,
          height: '.5x',
        }}></div>
        <div>
          <p className='text-white pt-4 pb-10' style={{ fontSize: 16 }}>Disclaimer: GovAssist is not affiliated with any United States government agency or department. Costs for consulting services do NOT include any government application, medical examination, filing, or biometric fees. This website does not provide legal advice and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. You may apply by yourself directly at travel.state.gov or at uscis.gov. GovAssist is affiliated with the UT law firm GovAssist Legal which provides legal services on immigration matters. Only licensed immigration professionals can provide advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms or strategies.</p>
        </div>
      </footer >
      <div className='py-5 text-center text-white' style={{ backgroundColor: "#011527" }}>
        Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
      </div>
    </>
  )
}

export default Page1
