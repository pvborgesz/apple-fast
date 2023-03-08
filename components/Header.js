import React from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className='fixed top-0 w-full clearNav z-50'>
      <div className='max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row'>
        <div className='flex flex-row items-center justify-between p-3 md:p-1'>
          <a
            href='/'
            className='flex text-3xl text-white font-medium mb-4 md:mb-0'
          >
            <img
              className='w-50 h-10 object-cover object-center rounded'
              alt='Placeholder Image'
              src='./images/applefastlogo.png'
            ></img>
          </a>
          <button
            className='text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto'
            type='button'
            aria-label='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-menu'
            >
              <line
                x1='3'
                y1='12'
                x2='21'
                y2='12'
              ></line>
              <line
                x1='3'
                y1='6'
                x2='21'
                y2='6'
              ></line>
              <line
                x1='3'
                y1='18'
                x2='21'
                y2='18'
              ></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className='md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start'>
            <a className='mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'>
              Features
            </a>
            <div className='relative'>
              <button
                type='button'
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span className='tr04'>Templates</span>
                <svg
                  className={
                    flyer === true
                      ? 'transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200'
                      : 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  }
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? 'opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
                    : 'hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
                }
              >
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-black px-2 py-6 sm:gap-8 '>
                    <a
                      href='/'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04'
                    >
                      <div className='ml-4'>
                        <p className='text-base font-medium text-white'>
                          NINE4 TEMPLATE #1
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          First Template
                        </p>
                      </div>
                    </a>
                    <a
                      href='/'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04'
                    >
                      <div className='ml-4'>
                        <p className='text-base font-medium text-white'>
                          NINE4 TEMPLATE #2
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Second Template
                        </p>
                      </div>
                    </a>
                    <a
                      href='/'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04'
                    >
                      <div className='ml-4'>
                        <p className='text-base font-medium text-white'>
                          NINE4 TEMPLATE #3
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Third Template
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a className='mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'>
              Pricing
            </a>
            <a className='mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'>
              Careers
            </a>
          </div>
          <a
            href='https://twitter.com/'
            rel='noopener noreferrer'
            target='_blank'
            className='invisible md:visible'
          >
            <svg
              title='Twitter'
              width='30'
              height='17'
              viewBox='0 0 50 40'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
            >
              <path
                data-v-54e46119=''
                d='M15.4528 40C34.0158 40 44.1732 24.6063 44.1732 11.2796C44.1732 10.8465 44.1732 10.4134 44.1536 9.98031C46.122 8.56299 47.8347 6.77166 49.1929 4.74409C47.3819 5.55118 45.4331 6.08268 43.3858 6.33858C45.4724 5.09842 47.0669 3.11023 47.8347 0.74803C45.8858 1.90944 43.7204 2.73622 41.4173 3.18898C39.5669 1.22047 36.9488 0 34.0551 0C28.4842 0 23.9567 4.52756 23.9567 10.0984C23.9567 10.8858 24.0551 11.6536 24.2126 12.4016C15.8268 11.9882 8.38582 7.95276 3.40551 1.85039C2.53937 3.34646 2.04724 5.07874 2.04724 6.92913C2.04724 10.4331 3.83859 13.5237 6.53543 15.3347C4.88189 15.2756 3.32677 14.8228 1.9685 14.0748C1.9685 14.1142 1.9685 14.1536 1.9685 14.2126C1.9685 19.0944 5.45276 23.189 10.0591 24.1142C9.2126 24.3504 8.32677 24.4686 7.40158 24.4686C6.75197 24.4686 6.12204 24.4094 5.51181 24.2913C6.79133 28.3071 10.5315 31.2204 14.9409 31.2992C11.4763 34.0158 7.12599 35.6299 2.40158 35.6299C1.59449 35.6299 0.787401 35.5906 0 35.4921C4.44882 38.3268 9.76378 40 15.4528 40Z'
                fill='white'
              ></path>
            </svg>
          </a>
          <a
            data-v-54e46119=''
            href='https://whatsapp.com/'
            rel='noopener noreferrer'
            target='_blank'
            className='pl-7 invisible md:visible'
          >
            <svg
              data-v-54e46119=''
              width='30'
              height='20'
              viewBox='0 0 30 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              title='GitHub logo'
              className='github-link--logo'
            >
              <path
                d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'
                fill='white'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
