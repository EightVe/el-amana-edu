import { useTranslation } from 'react-i18next';
import bg1 from '../../components/imgs/gelunipich.jpg'
import bg2 from '../../components/imgs/geledubg.jpg'
import bg3 from '../../components/imgs/gelunipich.jpg'
import bg4 from '../../components/imgs/gelisim-universitesi-logo89.png'
export default function GelisimUni() {
    const [ t, i18n ] = useTranslation();
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={bg1}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={bg2}

                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={bg3}

                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={bg4}

              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{t('gelunititlep')}</h1>
          </div>


          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{t('geluniarticlepara1')}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">{t('geluniarticleadvantagestitle')}</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('geluniarticleadv1')}</span>
                    </li>

                </ul>
              </div>
              
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">{t('nisunidocforregist')}</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                    <li  className="text-indigo-400">
                      <span className="text-indigo-600">{t('nisunidocforregist1')} :</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist2')}</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist3')}</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist4')}</span>
                    </li>
                    <li  className="text-indigo-400">
                      <span className="text-indigo-600">{t('nisunidocforregist5')} :</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist6')}</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist7')}</span>
                    </li>                    <li  className="text-indigo-400">
                      <span className="text-indigo-600">{t('nisunidocforregist8')} :</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist9')}</span>
                    </li> 
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist10')}</span>
                    </li> 
                </ul>
              </div>
              
            </div>
            <div className='my-8'>
<a
                href="https://firebasestorage.googleapis.com/v0/b/amana1912system.appspot.com/o/Gelisim-University.pdf?alt=media&token=63389282-0a41-42f8-8342-a2c3566eb25a&_gl=1*1n6nfq3*_ga*MzcwNTQ3MTQyLjE2OTY3MzE3OTA.*_ga_CW55HF8NVT*MTY5NzE3MzA2OC4xMy4xLjE2OTcxNzQzNDAuNjAuMC4w"
                target="_blank"
                className="my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            {t('departmentsdownload')}
              </a>
</div>
<div className='my-8'>
<a
                href="/apply"
                className="my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            {t('heroapplybtn')}
              </a>
</div>
            </div>
          </div>
        </div>
      </div>

  )
}
