import UserNavigation from './UserNavigation'
import { ThemeToggle } from './ThemeToggle'
import SearchBar from './SearchBar'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='antialiased'>
      <nav className='bg-gray-200 border-gray-200 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='md:container flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <button className='p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <svg
                className='w-[18px] h-[18px]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
              <span className='sr-only'>Toggle sidebar</span>
            </button>
            <Logo />
            <SearchBar />
          </div>
          <div className='flex gap-x-3'>
            <ThemeToggle />
            <UserNavigation />
          </div>
        </div>
      </nav>
    </header>
  )
}
