/* eslint-disable react-hooks/exhaustive-deps */
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import play_storeIcon from "../../assets/images/play_store.svg";
import app_storeIcon from "../../assets/images/app_store.svg";

function Footer() {
  return (
    <>
      <section className="bg-[url(/images/footer.svg)] py-10 lg:px-10 px-4">
        <div className="grid lg:grid-cols-4 gap-4">
          <div>
            <h5 className="text-white text-[18px] font-semibold mb-2">HELPFUL LINKS</h5>
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" /> <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" /> <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" /> <span>News</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Disclaimers</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Limitation Of Liability</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Refund & Cancellation Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-[18px] font-semibold mb-2">OTHER LINKS</h5>
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Broker Directory</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Opening Price Clues</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Stock Screener</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Stock Options Chart</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" />{' '}
                  <span>Gift Nifty</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} width={8} className="text-[8px] me-2" /> <span>IPO</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-[18px] font-semibold mb-2">OUR TOP BROKERS</h5>
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <span>Zerodha</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <span>Angel One</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <span>m.Stock</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <span>Fyers</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-[14px] font-medium text-white transition-all duration-200 mb-2 hover:text-primary-text flex items-center"
                >
                  <span>HDFC Sky</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-[18px] font-semibold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p className="text-[#999999] text-[13px] mb-3">Sign up & receive the latest tips via email.</p>
            <div className="flex items-center mb-4">
              <input
                type="email"
                className="bg-white text-[#212529] px-4 lg:py-3 py-2 outline-none rounded-tl-sm rounded-bl-sm mr-2"
                placeholder="Email Address"
              />
              <button
                className="bg-primary-text rounded-tr-sm rounded-br-sm text-white lg:py-3 py-2 px-3 border border-transparent
              font-medium transition-all duration-300 hover:bg-transparent hover:text-primary-text hover:border-primary-text"
              >
                Subscribe
              </button>
            </div>
            <div className="flex items-center">
              <Image src={play_storeIcon} alt="icon" width={145} height={45} className="mr-3 cursor-pointer" />
              <Image src={app_storeIcon} alt="icon" width={145} height={45} className="mr-3 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="text-center"></div>
      </section>
    </>
  );
}

export default Footer;
