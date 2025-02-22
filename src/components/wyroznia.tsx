import { features } from '../const/data.ts'

export const Wyroznia = () => (
  <section id='wyroznia' className='relative h-[60vh] md:h-[60vh]'>
    <img
      src='https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/cukiernia-pavlova/wyroznia'
      alt='Wyroznia'
      className='h-full w-full object-cover opacity-85'
    />
    <div className='absolute inset-0 flex flex-col bg-black/50 p-10'>
      <div className='flex w-full flex-col justify-start md:flex-row md:justify-between'>
        {features.map((item, index) => (
          <div
            key={index}
            className='mt-5 flex h-10 w-full items-center text-white md:mt-10 md:flex-col md:pl-0'
          >
            <img
              src={item.icon}
              alt={item.text}
              className='h-10 object-cover invert'
            />
            <div className='p-6'>
              <h3 className='text-lg font-semibold'>{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
      <p className='flex h-full max-w-[375px] items-end text-white md:items-center'>
        W mojej cukierni znajdą Państwo najwyższej jakości wyroby cukiernicze
        stanowiące ozdobę każdego przyjęcia, dopełniając najważniejsze
        uroczystości w życiu rodziny.
      </p>
    </div>
  </section>
)
