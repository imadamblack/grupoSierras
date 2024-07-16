import Image from 'next/image';

export default function Blockbuster({overhead, title, image}) {
  return (
    <section className="relative flex flex-col w-screen md:mb-0 mx-auto relative py-[16rem]">
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"/>
      {/*<div className="absolute inset-0 bg-gradient-to-br from-brand-1 via-transparent to-[#49ea60] opacity-50 z-10"/>*/}
      {/*<div className="absolute inset-0 bg-black opacity-30 z-10"/>*/}

      <Image src={image} layout="fill" className="object-cover object-bottom"/>

      <div className="container mx-auto z-10 md:px-20">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch">
          <div className="w-full md:w-1/2 p-8 md:p-14">
            <p className="overhead">{overhead}</p>
            <h2
              dangerouslySetInnerHTML={{__html: title}}
              className="my-auto text-white [text-shadow:_2px_2px_4px_rgb(10_70_50_/_80%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}