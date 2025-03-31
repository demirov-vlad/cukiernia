export const Footer = () => {
  return (
    <footer className='bg-[#2C2C2C] py-10 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex w-full items-center justify-center'>
          <a
            href='#start'
            className='inline-block rounded-full bg-[#C4A484] px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-[#A88A6C]'
          >
            Wróć na górę ↑
          </a>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Anastasiia Pavlova. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
