// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="w-[300px] sm:w-[730px] h-fit flex justify-center flex-col items-center gap-4">
        {/* TITLE */}
        <div className='tracking-[-.35em] text-center sm:tracking-[-.35em] sm:text-left'>
          <span className="text-req-black text-8xl sm:text-9xl font-poppins font-bold">H</span>
          <span className="text-req-black text-8xl sm:text-9xl font-bebas font-normal">o</span>
          <span className="text-req-black text-8xl sm:text-9xl font-ibm font-light">L</span>
          <span className="text-req-black text-8xl sm:text-9xl font-poppins font-semibold italic">L</span>
          <span className="text-req-black text-8xl sm:text-9xl font-poppins font-light">a </span>
          <div className="bg-req-pink-50 sm:inline-block px-2">
            <span className="text-req-black text-8xl sm:text-9xl font-poppins font-bold">W</span>
            <span className="text-req-black text-8xl sm:text-9xl font-lexend font-light">E</span>
            <span className="text-req-black text-8xl sm:text-9xl font-inter font-normal italic tracking-thight">I</span>
            <span className="text-req-black text-8xl sm:text-9xl font-bebas font-normal"> r</span>
            <span className="text-req-black text-8xl sm:text-9xl font-ibm font-medium">D</span>
            <span className="text-req-black text-8xl sm:text-9xl font-bebas font-medium">o</span>
            <span className="text-req-black text-8xl sm:text-9xl font-bebas font-medium">.</span>
          </div>
        </div>

        {/* LONG DESCRIPTION */}
        <p className="font-archivo hidden sm:block sm:text-xl text-justify sm:text-left">
          My name is <span className="italic">Muhammad Tharreq</span>, and I am a Computer Engineering student with a keen interest in the field of graphic design. I am highly enthusiastic about staying up to date with the latest trends in design and technology. I have prior experience as a committee member and have been actively involved in various organizations before.
        </p>

        {/* SHORT DESCRIPTION */}
        <p className="font-archivo block sm:hidden sm:text-xl text-justify sm:text-left">
          My name is <span className="italic">Muhammad Tharreq</span>, a computer engineering student with a passion for graphic design and a track record in committee work and organizations.
        </p>

        {/* LOGO */}
        <div className="flex justify-between w-full">
          {/* LINKEDIN */}
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-tharreq-a10388182/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M29.3332 26.6677C29.3332 28.1408 28.1296 29.3333 26.6453 29.3333H5.35442C3.87009 29.3333 2.6665 28.1392 2.6665 26.6677V5.33222C2.6665 3.8607 3.87009 2.66663 5.35442 2.66663H26.6453C28.1311 2.66663 29.3332 3.8607 29.3332 5.33222V26.6677ZM11.3413 9.18727C11.3413 10.1667 10.6092 10.9608 9.40563 10.9608C8.27338 10.9608 7.5413 10.1667 7.5413 9.18727C7.5413 8.1848 8.29665 7.41378 9.45371 7.41378C10.6092 7.41378 11.318 8.18327 11.3413 9.18727ZM7.63592 23.766V12.3587H11.2234V23.766H7.63592ZM13.2756 12.3587C13.3237 13.3857 13.3702 14.5752 13.3702 15.9977V23.766H16.9593V17.1871C16.9593 16.8606 16.9825 16.5341 17.0772 16.3012C17.3377 15.6482 17.9271 14.9722 18.9182 14.9722C20.2164 14.9722 20.736 15.9747 20.736 17.4446V23.766H24.3235V17.0247C24.3235 13.6662 22.5538 12.1027 20.1931 12.1027C18.2575 12.1027 17.1004 13.1987 16.6289 13.9452H16.5576L16.3916 12.3587H13.2756Z" fill="#5B6DFF"/>
            </svg>
          </a>
          {/* BEHANCE */}
          <a target="_blank" rel="noreferrer" href="https://www.behance.net/mtharreq">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M23.5484 24.4414C22.6837 24.4529 21.8246 24.2908 21.0163 23.9637C20.2921 23.6641 19.6378 23.2006 19.0986 22.6054C18.5674 21.9972 18.1571 21.2811 17.8925 20.5001C17.6018 19.6361 17.4579 18.724 17.4674 17.8063C17.4612 16.9045 17.6093 16.009 17.9045 15.1637C18.1797 14.3753 18.6032 13.6551 19.1492 13.0469C19.6967 12.4464 20.3508 11.9674 21.0736 11.6377C21.8565 11.2854 22.6998 11.1101 23.5497 11.123C24.4632 11.1023 25.368 11.3163 26.1871 11.7469C26.9183 12.1458 27.5525 12.72 28.0396 13.4241C28.531 14.1432 28.8854 14.9576 29.0831 15.8215C29.2987 16.7398 29.3757 17.6888 29.311 18.6329H20.7404C20.7063 19.5296 20.9952 20.4063 21.548 21.0842C22.1288 21.6262 22.8881 21.9005 23.659 21.8469C24.2645 21.862 24.8594 21.6773 25.3622 21.3181C25.7614 21.0589 26.0677 20.6652 26.2325 20.1995H29.1044C28.7789 21.5162 28.0301 22.67 26.9881 23.4604C25.9567 24.139 24.7606 24.4801 23.5484 24.4414ZM23.4565 13.7459C23.0086 13.728 22.5634 13.8253 22.1584 14.0294C21.8418 14.1993 21.5607 14.4356 21.3322 14.7241C21.1311 14.9863 20.9824 15.2892 20.895 15.6145C20.8181 15.8855 20.7685 16.1645 20.7471 16.4467H26.0539C26.0156 15.7115 25.7521 15.0099 25.3036 14.4491C24.8072 13.9506 24.1375 13.6956 23.4565 13.7459ZM10.6227 24.1125H2.6665V6.66704H10.3961C11.1122 6.66037 11.8269 6.73403 12.5284 6.88679C13.1226 7.0102 13.6887 7.25477 14.1956 7.60701C14.6534 7.94505 15.0207 8.40379 15.2618 8.93829C15.5278 9.58214 15.6553 10.2811 15.6349 10.9841C15.6638 11.7619 15.47 12.5307 15.0792 13.1887C14.6515 13.8169 14.0735 14.3118 13.4053 14.6221C14.3133 14.8635 15.1114 15.4397 15.6576 16.2482C16.1649 17.0802 16.4215 18.0571 16.3932 19.0483C16.4125 19.8411 16.2487 20.6268 15.9161 21.3366C15.6092 21.9661 15.1639 22.5074 14.6181 22.9145C14.0522 23.3334 13.4203 23.6407 12.7523 23.8219C12.055 24.0167 11.3369 24.1149 10.616 24.1139L10.6227 24.1125ZM6.27809 16.339V21.1452H10.1296C10.47 21.1491 10.8097 21.1124 11.1424 21.036C11.447 20.9734 11.7369 20.8472 11.9953 20.6645C12.2442 20.4905 12.4462 20.2506 12.5817 19.9684C12.7388 19.6145 12.8129 19.2253 12.7976 18.8342C12.8622 18.1085 12.5979 17.3934 12.086 16.9089C11.5336 16.5044 10.8712 16.3051 10.2015 16.3418L6.27809 16.339ZM6.27809 9.64007V13.7161H9.93233C10.4976 13.7398 11.0549 13.5682 11.5209 13.227C11.9602 12.8389 12.1915 12.2454 12.1393 11.6405C12.1505 11.2933 12.0809 10.9485 11.9367 10.6368C11.8064 10.3848 11.6144 10.1751 11.381 10.03C11.1352 9.87491 10.8638 9.77143 10.5813 9.72514C10.2738 9.6638 9.96134 9.63484 9.64846 9.63866L6.27809 9.64007ZM26.7229 9.56068H20.0728V7.83811H26.7229V9.55926V9.56068Z" fill="#5B6DFF"/>
            </svg>
          </a>
          {/* GITHUB */}
          <a target="_blank" rel="noreferrer" href="https://github.com/MTharreq">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.9601 2.66663C8.60909 2.66663 2.6665 8.77774 2.6665 16.338C2.6665 22.3813 6.47412 27.4969 11.7563 29.3075C12.4167 29.4436 12.6586 29.0133 12.6586 28.6513C12.6586 28.3344 12.6368 27.248 12.6368 26.1161C8.93888 26.9311 8.16882 24.4863 8.16882 24.4863C7.57453 22.9019 6.69399 22.4947 6.69399 22.4947C5.48365 21.6572 6.78215 21.6572 6.78215 21.6572C8.12474 21.7477 8.82923 23.0605 8.82923 23.0605C10.0175 25.1427 11.9324 24.5544 12.7027 24.1922C12.8126 23.3094 13.165 22.6983 13.5392 22.3588C10.5898 22.0419 7.48664 20.865 7.48664 15.6136C7.48664 14.1197 8.01453 12.8975 8.85099 11.9469C8.71902 11.6075 8.25671 10.2038 8.98324 8.32524C8.98324 8.32524 10.1057 7.96302 12.6366 9.72857C13.7201 9.42931 14.8376 9.27707 15.9601 9.27579C17.0826 9.27579 18.2268 9.4344 19.2834 9.72857C21.8145 7.96302 22.937 8.32524 22.937 8.32524C23.6635 10.2038 23.2009 11.6075 23.069 11.9469C23.9275 12.8975 24.4336 14.1197 24.4336 15.6136C24.4336 20.865 21.3305 22.0191 18.359 22.3588C18.8434 22.7888 19.2613 23.6036 19.2613 24.8938C19.2613 26.7272 19.2396 28.1986 19.2396 28.6511C19.2396 29.0133 19.4817 29.4436 20.1419 29.3077C25.4241 27.4966 29.2317 22.3813 29.2317 16.338C29.2534 8.77774 23.2891 2.66663 15.9601 2.66663Z" fill="#5B6DFF"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App