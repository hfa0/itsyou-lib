
function FooterMini() {
  return (
    <div className={'py-2 sm:py-4 w-full border-t'}>
      <div
        className={
          'w-full max-w-7xl mx-auto flex flex-col-reverse items-center gap-y-3 sm:flex-row sm:justify-between'
        }
      >
        <span className={'text-gray-500'}>
          © 2025 itsyou.agency. All rights reserved.
        </span>
        <div className={'flex space-x-5'}></div>
      </div>
    </div>
  );
}

export default FooterMini;
