import Icon from "./Icon";

export default function LinkButton ({
  href = '',
  title = '',
  description = '',
  icon = <></>
}) {
  return (
    <a className='flex items-center w-80 md:w-96 xl:w-96 rounded-lg p-4 m-2 bg-stone-900 hover:bg-blue-800 cursor-pointer' href={href}>
      {icon}
      <div className='ms-2 w-full'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='text-sm text-stone-400'>{description}</p>
      </div>
      <Icon
        className='cursor-pointer ms-2'
        name='arrow_forward_ios'
        from='google'
        animation='none'
        size='2xl'
      />
    </a>
  )
}
